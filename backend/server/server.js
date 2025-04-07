const express = require('express');
const path = require('path');
const database = require('./database');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.post('/api/noticias/cadastrar', async (req, res) => {
    const { titulo, conteudo, imagem } = req.body;
    const dataCriacao = new Date().toISOString();

    const result = await database.criarNoticia(titulo, conteudo, imagem, dataCriacao);
    res.json(result);
});

app.get('/api/noticias/listar', async (req, res) => {
    const noticias = await database.listarNoticias();
    res.json(noticias);
});

app.put('/api/noticia/editar/:id', async (req, res) => {
    const { id } = req.params;  
    const { titulo, conteudo, imagem } = req.body; 

   
    const result = await database.editarNoticia(id, titulo, conteudo, imagem);

    if (result) {
        res.json({ message: 'Notícia atualizada com sucesso!' });
    } else {
        res.status(404).json({ message: 'Notícia não encontrada!' });
    }
});



app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
