// Arquivo: frontend/frontend/src/views/LivrosCadastro/LivrosCadastro.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SubmenuLivros from '../../components/SubmenuLivros/SubmenuLivros';
import { LivrosService } from '../../api/LivrosService';
import './index.scss';

const LivrosCadastro = () => {
    // Hook para gerenciar os dados do formulário
    const [livro, setLivro] = useState({});
    
    // Hook para navegar entre as páginas
    const navigate = useNavigate();

    // Função assíncrona para lidar com o envio do formulário
    async function handleCadastroSubmit(event) {
        // 1. Impede o comportamento padrão do formulário (recarregar a página)
        event.preventDefault();

        // 2. Cria o objeto 'body' com os dados do estado 'livro'
        const body = {
            id: Number(livro.id),
            titulo: livro.titulo,
            num_paginas: Number(livro.num_paginas),
            isbn: livro.isbn,
            editora: livro.editora,
        };

        // 3. Validação simples para garantir que os campos principais foram preenchidos
        if (!body.id || !body.titulo) {
            alert("Os campos 'Id' e 'Título' são obrigatórios.");
            return; // Interrompe a execução se a validação falhar
        }

        // 4. Bloco try/catch para lidar com a chamada da API
        try {
            // Tenta criar o livro no back-end
            await LivrosService.createLivro(body);
            
            // Se a criação for bem-sucedida:
            alert('Livro cadastrado com sucesso!');
            navigate('/livros'); // Redireciona para a página da lista de livros

        } catch (error) {
            // Se ocorrer um erro na chamada da API:
            console.error('Ocorreu um erro ao cadastrar o livro:', error);
            alert('Não foi possível cadastrar o livro. Verifique os dados e tente novamente.');
        }
    }

    // 5. Renderização do componente (o que aparece na tela)
    return (
        <>
            <Header />
            <SubmenuLivros />
            <div className='livrosCadastro'>
                <h1>Cadastro de Livros</h1>
                <div>
                    {/* O formulário agora chama handleCadastroSubmit ao ser enviado */}
                    <form id="formulario" onSubmit={handleCadastroSubmit}>
                        
                        <div className='form-group'>
                            <label>Id</label>
                            {/* O onChange atualiza a propriedade 'id' no estado 'livro' */}
                            <input type="number" required onChange={(event) => setLivro({ ...livro, id: event.target.value })} />
                        </div>

                        <div className='form-group'>
                            <label>Título</label>
                            {/* O onChange atualiza a propriedade 'titulo' no estado 'livro' */}
                            <input type="text" required onChange={(event) => setLivro({ ...livro, titulo: event.target.value })} />
                        </div>

                        <div className='form-group'>
                            <label>Número de Páginas</label>
                            {/* O onChange atualiza a propriedade 'num_paginas' no estado 'livro' */}
                            <input type="number" required onChange={(event) => setLivro({ ...livro, num_paginas: event.target.value })} />
                        </div>

                        <div className='form-group'>
                            <label>ISBN</label>
                            {/* O onChange atualiza a propriedade 'isbn' no estado 'livro' */}
                            <input type="text" required onChange={(event) => setLivro({ ...livro, isbn: event.target.value })} />
                        </div>

                        <div className='form-group'>
                            <label>Editora</label>
                            {/* O onChange atualiza a propriedade 'editora' no estado 'livro' */}
                            <input type="text" required onChange={(event) => setLivro({ ...livro, editora: event.target.value })} />
                        </div>
                        
                        <div className='form-group'>
                            {/* O botão do tipo 'submit' aciona o onSubmit do formulário */}
                            <button type="submit">Cadastrar Livro</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};

export default LivrosCadastro;