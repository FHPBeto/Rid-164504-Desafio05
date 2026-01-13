const express = require('express');
const {
    listarLivros,
    obterLivro,
    cadastrarLivro,
    atualizarLivro,
    deletarLivro
} = require('./controladores');

// 1. Crie um objeto Router em vez de uma nova aplicação Express
const rotas = express.Router();

// O resto do seu código permanece exatamente o mesmo
rotas.get('/livros', listarLivros);
rotas.get('/livros/:id', obterLivro);
rotas.post('/livros', cadastrarLivro);
rotas.put('/livros/:id', atualizarLivro);
rotas.delete('/livros/:id', deletarLivro);

module.exports = rotas;