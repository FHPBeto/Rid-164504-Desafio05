// Arquivo: backend/src/bancoDeDados.js
const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis",
        paginas: 1200,
        isbn: "978-0-618-64015-7",
        editora: "HarperCollins"
    },
    {
        id: 2,
        titulo: "O Hobbit",
        paginas: 310,
        isbn: "978-0-618-00221-4",
        editora: "Allen & Unwin"
    },
    // src/bancoDeDados.js

    { 
      id: 3,
      titulo: "A Odisséia",
      paginas: 350,
      isbn: "978-8535914045",
      editora: "Companhia das Letras" },
    {
        
      id: 4,
      titulo: "Dom Quixote",
      paginas: 1056,
      isbn: "978-8535909836",
      editora: "Penguin-Companhia" },
];
const proximoId = 5;



module.exports = livros;
