import express from 'express'
import cors from 'cors'
import rotaLogin from "./routes/acesso.js"
import rotaMensagem from "./routes/mensagem.js"
import rotaProfessores from "./routes/professores.js"
import rotaAlunos from "./routes/alunos.js"
import rotaBuscar from "./routes/buscar.js"

const app = express();

app.use(cors());
app.use(express.json());
app.use(rotaLogin);
app.use(rotaMensagem);
app.use(rotaProfessores);
app.use(rotaAlunos);
app.use(rotaBuscar);


app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
});