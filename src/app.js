const express = require('express');
const app = express();

app.use(express.json());

const index = require('./routes/index');
const automoveis = require('./routes/automoveisRoutes');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); //informo que minha api poderá ser chamada de qualquer lugar. por um browser por exemplo.
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requestend-with, Content-Type, Accept"
    )
    next();
    //como criei uma função dentro do app.use, preciso dar um "next()" para mandar ele seguir para proxima middlew
    // se eu não faço isso, a requisição não vai ficar travada ai.
})

app.use('/', index);
app.use('/automoveis', automoveis);

module.exports = app;
