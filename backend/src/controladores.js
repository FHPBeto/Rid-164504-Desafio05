// Arquivo: backend/src/controladores.js
let livros = require('./bancoDeDados');
let proximoId = 5;

const listarLivros = (req, res) => {
    return res.status(200).json(livros);
};

const obterLivro = (req, res) => {
    const livroEncontrado = livros.find(livro => livro.id === Number(req.params.id));
    if (!livroEncontrado) {
        return res.status(404).json({ mensagem: "Livro não encontrado." });
    }
    return res.status(200).json(livroEncontrado);
};

const cadastrarLivro = (req, res) => {
    const { titulo, paginas, isbn, editora } = req.body;
    const novoLivro = {
        id:
        proximoId++,
        titulo,
        paginas,
        isbn,
        editora
    };
    livros.push(novoLivro);
    return res.status(201).json(novoLivro);
};

const atualizarLivro = (req, res) => {
    const { titulo, paginas, isbn, editora } = req.body;
    let livro = livros.find(l => l.id === Number(req.params.id));
    if (!livro) {
        return res.status(404).json({ mensagem: "Livro não encontrado." });
    }
    livro.titulo = titulo;
    livro.paginas = paginas;
    livro.isbn = isbn;
    livro.editora = editora;
    return res.status(200).json(livro);
};

let deletarLivro = (req, res) => {
    livros = livros.filter(l => l.id !== Number(req.params.id));
    return res.status(200).json({ mensagem: "Livro deletado com sucesso." });
};

module.exports = {
    listarLivros,
    obterLivro,
    cadastrarLivro,
    atualizarLivro,
    deletarLivro
};
