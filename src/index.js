const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const porta = 3000;
let contador = 3; // logo após as instruções require
const livros = [
    {
        id: 1,
        titulo: 'Harry Potter e Pedra Filosofal',
        descricao: 'Harry Potter e a Pedra Filosofal é o primeiro dos sete livros da série de fantasia Harry Potter, escrita por J. K. Rowling. O livro conta a história de Harry Potter, um órfão criado pelos tios que descobre, em seu décimo primeiro aniversário, que é um bruxo.',
        edicao: '1',
        autor: 'J. K. Rowling',
        isbn: '8532530788'
    },
    {
        id: 2,
        titulo: 'Harry Potter e a Câmara Secreta',
        descricao: 'Depois de férias aborrecidas na casa dos tios trouxas, está na hora de Harry Potter voltar a estudar. Coisas acontecem, no entanto, para dificultar o regresso de Harry. Persistente e astuto, o herói não se deixa intimidar pelos obstáculos e, com a ajuda dos fiéis amigos Weasley, começa o ano letivo na Escola de Magia e Bruxaria de Hogwarts. As novidades não são poucas. Novos colegas, novos professores, muitas e boas descobertas e um grande e perigosos desafio. Alguém ou alguma coisa ameaça a segurança e a tranquilidade dos membros de Hogwarts.',
        edicao: '1',
        autor: 'J. K. Rowling',
        isbn: '8532530796'
    },
    {
        id: 3,
        titulo: 'Harry Potter e o prisioneiro de Azkaban',
        descricao: 'As aulas estão de volta à Hogwarts e Harry Potter não vê a hora de embarcar no expresso a vapor que o levará de volta à escola de bruxaria. Mais uma vez suas férias na rua dos Alfeneiros foi triste e solitária. Com muita ação, humor e magia, Harry Potter e o prisioneiro de Azkaban traz de volta o gigante atrapalhado Rúbeo Hagrid, o sábio diretor Alvo Dumbledore, a exigente professora de transformação Minerva MacGonagall e o novo mestre Lupin, que guarda grandes surpresas para Harry.',
        edicao: '1',
        autor: 'J. K. Rowling',
        isbn: '853253080X'
    }
    
];
app.set('port', porta);
app.get('/livros', (req, res, next) => {
    res.json(livros);
});
app.post('/livros', (req, res, next) => {
    const livro = req.body;
    livros.push({
        id: contador += 1,
        titulo: livro.titulo,
        descricao: livro.descricao,
        edicao: livro.edicao,
        autor: livro.autor,
        isbn: livro.isbn
    }); console.log(livros);
    res.status(201).json(livros);
});

app.put('/livros', (req, res, next) => {
    livros.forEach((livro) => {
        if (livro.id === req.body.id) {
            livro.titulo = req.body.titulo;
            livro.descricao = req.body.descricao;
            livro.edicao = req.body.edicao;
            livro.autor = req.body.autor;
            livro.isbn = req.body.isbn
        }
    })
    console.log(livros);
    res.status(201).json(livros);
});

app.delete('/livros', (req, res, next) => {

    livros.forEach(livro => {
        if (livro.id === req.body.id) {
            var index = livros.indexOf(livro, 0);
            livros.splice(index, 1)
        }
    })
    res.status(200).json(livros);
    console.log(livros);
});

const server = http.createServer(app);
server.listen(3000);