const express = require('express');
const app = express();
const porta = 3002;
const Mongo = require('./dababase/mongodb/SchemmaConnectMongo');
const mongoConnect = new Mongo();
const routes = require('./src/routes/Rotaprincipal');
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000', // Substitua isso pelo endereço do seu aplicativo React
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
}));
app.use(express.urlencoded({
    extended: true
}));
app.use(routes);

app.listen(porta, () => {
    mongoConnect._connect(process.env.URLCONNECTIONMONGO);
    console.log(`Servidor rodando na porta ${porta}`);
    console.log('------------------------------------------');
    console.log(`Endereço: http://localhost:${porta}`)
})