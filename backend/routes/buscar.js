import express from 'express'
import jwt from 'jsonwebtoken'
import db from './db.js'

const roteador = express.Router()

async function buscar(req, res) {

    const ra = decodeURIComponent(req.query.nome)

    try {

        const [busca] = await db.query(
            "SELECT * FROM alunos WHERE ra = ?",
            [ra]
        )
        if (busca.length > 0) {
            res.status(201).json({ mensagem: "Encontrado", aluno: busca[0] })
        } else {
            res.status(401).json({ message: "Não encontrado" })
        }
    }
    catch(error) {
        res.status(500).json({ message: "Erro interno"})
        console.error(error)
    }

}

roteador.get("/buscar", buscar)

export default roteador