const express = require('express');
const router = express.Router();
const Produtos = require('../controllers/Produtos');
const login = require('../controllers/Adm'); 


router.use(express.json()); 
router.use(express.urlencoded({ extended: true }));

//Rota para Produtos
router.post('/produtos/create/produto/', Produtos.Create);
router.get('/produtos/res/produtos/', Produtos.listProdutos);
router.delete('/produtos/delete/produtos/:id', Produtos.deleteProduto);
router.put('/produtos/atualiza/produtos/:id', Produtos.atualizarProdutos);

//Rota para login e cadastro Adm
router.post('/adm/cadastro', login.CadastroAdm);
router.post('/adm/login', login.LoginAdm);

//Rota para login e cadastro user


module.exports = router