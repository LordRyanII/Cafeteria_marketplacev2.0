const express = require('express');
const app = express();
const porta = 3002;
const Mongo = require('./dababase/mongodb/SchemmaConnectMongo');
const mongoConnect = new Mongo();
const routes = require('./src/routes/Rotaprincipal');

//app.use(express.json()); // para receber json no body da requisição
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(porta, () => {
    mongoConnect._connect(process.env.URLCONNECTIONMONGO);
    console.log(`Servidor rodando na porta ${porta}`);
    console.log('------------------------------------------');
    console.log(`Endereço: http://localhost:${porta}`)
})