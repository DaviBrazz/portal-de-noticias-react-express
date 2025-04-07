const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db.sqlite');

// Criar tabela de notícias (caso não exista)
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS noticias (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            conteudo TEXT,
            imagem TEXT,         -- Novo campo para URL da imagem
            data_criacao TEXT
        )
    `);
});


function criarNoticia(titulo, conteudo, imagem, dataCriacao) {
    return new Promise((resolve, reject) => {
        db.run(
            'INSERT INTO noticias (titulo, conteudo, imagem, data_criacao) VALUES (?, ?, ?, ?)',
            [titulo, conteudo, imagem, dataCriacao],
            function (err) {
                if (err) reject(err);
                resolve({ id: this.lastID });
            }
        );
    });
}


// Função para listar todas as notícias
function listarNoticias() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM noticias ORDER BY data_criacao DESC', [], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}

async function editarNoticia(id, titulo, conteudo, imagem) {
    const result = await db.run(
        'UPDATE noticias SET titulo = ?, conteudo = ?, imagem = ? WHERE id = ?',
        [titulo, conteudo, imagem, id]
    );
    return result.affectedRows > 0;
}



module.exports = { criarNoticia, listarNoticias, editarNoticia };
