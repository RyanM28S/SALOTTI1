import express from "express"
import db from "./db.js"

const router = express.Router()


async function contagem(req,res) {
    try {
        const resultado = await db.query(
            "SELECT * FROM usuarios WHERE cargo = ?",["professor"]
        )
        const inter = await resultado[0]
        const quant = inter.length
        res.status(200).json({quantidade: quant})
    } catch(erro) {
        console.log(erro)
    }
}

router.get("/professores", contagem)

export default router