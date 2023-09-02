const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    produto: String,
    descricao: String,
    preco_compra: Number,
    quantidade: String,
    image: String
});

module.exports = mongoose.model('Produtos', produtoSchema);
