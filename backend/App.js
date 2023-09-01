const express = require('express');
const app = express();
const porta = 3002;
const Mongo = require('./dababase/mongodb/SchemmaConnectMongo');
const mongoConnect = new Mongo();

//app.use(express.json()); // para receber json no body da requisição

app.listen(porta, () => {
    mongoConnect._connect(process.env.URLCONNECTIONMONGO);
    console.log(`Servidor rodando na porta ${porta}`);
    console.log('-----------------------------------');
    console.log(`Endereço: http://localhost:${porta}`)
})