const express = require('express');
const router = express.Router();
const CreateProdutos = require('../controllers/Createproducts');

router.use(express.json()); 
router.use(express.urlencoded({ extended: true }));

router.post('/create/produto/', CreateProdutos.Create);

module.exports = router