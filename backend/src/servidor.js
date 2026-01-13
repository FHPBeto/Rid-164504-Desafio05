// Arquivo: backend/src/servidor.js

const express = require('express');
const cors = require('cors');
const rotas = require('./rotas');

const app = express();

// Permite que o front-end (rodando em outra porta) acesse a API
app.use(cors());

// Permite que a API entenda requisições com corpo em formato JSON
app.use(express.json());

// Usa as rotas definidas no arquivo rotas.js
app.use(rotas);
 app.use(express.json()); 
// Inicia o servidor na porta 3001
const porta = 3001;
app.listen(porta, () => {
    console.log(`🚀 Servidor da API rodando na porta ${porta}!`);
});
