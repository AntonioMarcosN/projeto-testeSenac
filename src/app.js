const express = require('express');
const app = express();

const index = require('./routes/index');
const automoveis = require('./require/automoveisRoute');

app.use((req, res, next) => {
    console.log('Nova requisição realizada');

    next()
});

app.use('/', index);
app.use('/automoveis', automoveis);

module.exports = app;
