# 📚 Desafio 05: Biblioteca Full-Stack

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18%2B-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Express](https://img.shields.io/badge/Express-5.x-black?style=for-the-badge&logo=express)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

Sistema completo de gerenciamento de biblioteca com API RESTful em Node.js/Express e interface moderna em React/Vite. Implementa operações CRUD (Create, Read, Update, Delete) com comunicação em tempo real entre frontend e backend.

## 🎯 Objetivo

Desenvolver uma aplicação full-stack profissional que demonstre boas práticas de desenvolvimento web, incluindo arquitetura de API RESTful, gerenciamento de estado no frontend e comunicação cliente-servidor.

## ✨ Funcionalidades

- 📖 **Listar Livros**: Visualizar todos os livros cadastrados com informações completas
- ➕ **Cadastrar Livro**: Adicionar novos livros ao acervo com validação de dados
- ✏️ **Editar Livro**: Atualizar informações de livros existentes
- 🗑️ **Excluir Livro**: Remover livros do sistema com confirmação
- 🔄 **Sincronização em Tempo Real**: Interface atualiza automaticamente após operações
- 📱 **Design Responsivo**: Funciona perfeitamente em desktop e mobile

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** - Ambiente de execução JavaScript no servidor
- **Express.js** - Framework web para construção da API
- **CORS** - Gerenciamento de requisições cross-origin
- **Nodemon** - Reinicialização automática durante desenvolvimento

### Frontend
- **React 18+** - Biblioteca para construção da interface
- **Vite** - Build tool e servidor de desenvolvimento ultra-rápido
- **Axios** - Cliente HTTP para requisições à API
- **CSS3** - Estilização moderna e responsiva

## 📋 Pré-requisitos

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** 9+ (incluído com Node.js)
- **Git** para versionamento
- Editor de código (VS Code recomendado)

## 🚀 Instalação e Setup

### 1. Clonar o Repositório

```bash
git clone https://github.com/FHPBeto/Rid-164504-Desafio05.git
cd Rid-164504-Desafio05
```

### 2. Configurar Backend

```bash
cd backend

# Instalar dependências
npm install

# Iniciar servidor (com hot-reload via nodemon)
npm start
```

O backend estará disponível em `http://localhost:3000`

### 3. Configurar Frontend (em outro terminal)

```bash
cd frontend

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O frontend estará disponível em `http://localhost:5173`

## 📁 Estrutura do Projeto

```
Rid-164504-Desafio05/
├── backend/
│   ├── src/
│   │   ├── servidor.js          # Configuração do Express
│   │   ├── rotas.js             # Definição de rotas da API
│   │   └── dados.js             # Dados em memória (mock)
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── src/
│   │   ├── App.jsx              # Componente principal
│   │   ├── components/          # Componentes reutilizáveis
│   │   ├── pages/               # Páginas da aplicação
│   │   ├── services/            # Serviços (API calls)
│   │   └── styles/              # Estilos CSS
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── README.md
├── .gitignore
└── .editorconfig
```

## 🔌 API Endpoints

### Livros

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/api/livros` | Listar todos os livros |
| `GET` | `/api/livros/:id` | Obter detalhes de um livro |
| `POST` | `/api/livros` | Criar novo livro |
| `PUT` | `/api/livros/:id` | Atualizar livro |
| `DELETE` | `/api/livros/:id` | Deletar livro |

### Exemplo de Requisição

```bash
# Listar todos os livros
curl http://localhost:3000/api/livros

# Criar novo livro
curl -X POST http://localhost:3000/api/livros \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Clean Code",
    "autor": "Robert C. Martin",
    "ano": 2008,
    "genero": "Programação"
  }'
```

## 💻 Desenvolvimento

### Scripts Disponíveis

**Backend:**
```bash
npm start       # Inicia servidor com hot-reload
```

**Frontend:**
```bash
npm run dev     # Inicia servidor de desenvolvimento
npm run build   # Build para produção
npm run preview # Preview do build
```

### Padrões de Código

- **Indentação**: 2 espaços
- **Nomes**: camelCase para variáveis e funções, PascalCase para componentes
- **Commits**: Seguir Conventional Commits
  - `feat:` nova funcionalidade
  - `fix:` correção de bug
  - `docs:` documentação
  - `style:` formatação
  - `refactor:` refatoração

### Exemplo de Commit

```bash
git commit -m "feat: adicionar validação de formulário"
git commit -m "fix: corrigir erro ao deletar livro"
git commit -m "docs: atualizar README com instruções"
```

## 🧪 Testando a Aplicação

1. **Inicie o backend**: `npm start` (pasta backend)
2. **Inicie o frontend**: `npm run dev` (pasta frontend)
3. **Abra o navegador**: `http://localhost:5173`
4. **Teste as funcionalidades**:
   - Adicionar novo livro
   - Editar livro existente
   - Deletar livro
   - Verificar sincronização em tempo real

## 🐛 Troubleshooting

### Erro: "Cannot find module 'express'"
```bash
cd backend
npm install
```

### Erro: "Port 3000 already in use"
```bash
# Mudar porta no servidor.js ou encerrar processo
lsof -i :3000
kill -9 <PID>
```

### Erro: "CORS error"
Verifique se o backend está rodando em `http://localhost:3000`

## 📚 Recursos Úteis

- [Documentação Express.js](https://expressjs.com/)
- [Documentação React](https://react.dev/)
- [Documentação Vite](https://vitejs.dev/)
- [REST API Best Practices](https://restfulapi.net/)
- [JavaScript Async/Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: descrição da mudança'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👤 Autor

**FHPBeto**
- GitHub: [@FHPBeto](https://github.com/FHPBeto)
- Email: [seu-email@example.com]

## 📞 Suporte

Encontrou um problema? Abra uma [issue](https://github.com/FHPBeto/Rid-164504-Desafio05/issues) no repositório.

---

**Desenvolvido com ❤️ como parte do Desafio 05**
