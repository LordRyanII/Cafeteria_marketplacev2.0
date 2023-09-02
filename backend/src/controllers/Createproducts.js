const SchemmaCreate = require('../../Models/SchemmaCreateProdutos');


//Controller para criação de produtos no mongoDb
exports.Create = (req, res) => {
    console.log(req.body);
    const novoProduto = new SchemmaCreate({
        produto: req.body.produto,
        descricao: req.body.descricao,
        preco_compra: req.body.preco_compra,
        quantidade: req.body.quantidade,
        image: req.body.image
    });

    novoProduto.save()
        .then(result => {
            res.status(200).json({
                'Status': 'Ok',
                'data': result
            });
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({
                'status': 'Nok',
                'message': 'Houve um erro na hora da criação'
            });
        });
}

//Controller para listagem de produtos no mongoDb

exports.listProdutos = (req, res) => {
    console.log('Listando todos os Produtos');
}