import express from 'express'
import db from './db.js'
import jwt from 'jsonwebtoken'

const roteador = express.Router()

let usuarioId

function verificarToken(req, res, next) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ mensagem: "Token não enviado" })
    }

    const token = authHeader.split(" ")[1]

    try {
        const decoded = jwt.verify(token, "segredo")
        usuarioId = decoded.id
        next()
    } catch (err) {
        return res.status(401).json({ mensagem: "Token inválido" })
    }
}

async function Emensagem(req, res) {
    const { mensagem } = req.body

    await db.query(
        "INSERT INTO mensagens (mensagem, id_usuario) VALUES (?, ?)",
        [mensagem, usuarioId]
    )

    res.status(201).json({ mensagem: "Tudo certo" })
}

roteador.post('/mensagem', verificarToken, Emensagem)

export default roteador 