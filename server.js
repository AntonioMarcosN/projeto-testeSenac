const app = require('./src/app')
const port = 2727;

app.listen(port, () => {
    console.log(`App esta rodando na porta ${port}`)
});
