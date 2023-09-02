const express = require('express');
const router = express.Router();
const Produtos = require('../controllers/Produtos');

router.use(express.json()); 
router.use(express.urlencoded({ extended: true }));

//Rota para Produtos
router.post('/create/produto/', Produtos.Create);
router.get('/res/produtos/', Produtos.listProdutos);
router.delete('/delete/produtos/:id', Produtos.deleteProduto);
router.put('/atualiza/produtos/:id', Produtos.atualizarProdutos);

//Rota para login

module.exports = router