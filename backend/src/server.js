const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://curso:omnistack@cursooministack.ivwzk.mongodb.net/dbcurso?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
});

//metodos: GET - Busca uma informação no Backend. POST - Salva uma informação no backend. PUT - Edita uma informação no backend. DELETE - apaga informação do backend
//req.query = acessa os parametros da query (query params) para filtros
//req.params = acessa parametros de rota (route params) para edição e delete
//req.body = acessa o corpo da requisição (para criação ou edição de informações)
//recebe a requisição (pode ser qualquer informação referente a interação do usuário com o servidor) do usuário e envia uma resposta
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);