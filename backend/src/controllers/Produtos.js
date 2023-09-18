const SchemmaCreate = require('../../Models/CreateProdutos/SchemmaCreateProdutos');


//Controller para criação de produtos no mongoDb
exports.Create = (req, res) => {
    console.log(req.body);
    if(req.body.descricao.length <= 150){
        const novoProduto = new SchemmaCreate({
            produto: req.body.produto,
            descricao: req.body.descricao,
            preco_compra: req.body.preco_compra,
            quantidade: req.body.quantidade,
            image: req.body.image
        })
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
    
    }else {
        return res.status(400).json({
            'Status': 'Nok',
            'message':'O campo descrição deve conter até 150 caracteres'
        })
    }    

}

//Controller para listagem de produtos no mongoDb

exports.listProdutos = (req, res) => {
    console.log('Listando todos os Produtos');

    SchemmaCreate.find({})
        .then(documentos => {
            if (documentos.length === 0) {
                return res.status(404).json({
                    'status': 'Nok',
                    'mensagem': 'Nenhum produto encontrado'
                });
            }

            console.log('Documentos encontrados:', documentos);

            res.status(200).json({
                "status": "OK",
                "mensagem": "Lista de produtos retornada com sucesso!",
                "produtos": documentos
            });
        })
        .catch(err => {
            console.error('Erro ao listar documentos:', err);
            res.status(500).json({
                'status': 'Nok',
                'mensagem': 'Erro ao listar produtos'
            });
        });
}

//Controller para deletar um produto

exports.deleteProduto = (req, res) => {
    const produtoId = req.params.id; // Supondo que você passa o ID do produto como um parâmetro na URL

    SchemmaCreate.findByIdAndDelete(produtoId)
        .then(produtoDeletado => {
            if (!produtoDeletado) {
                return res.status(404).json({
                    'status': 'Nok',
                    'mensagem': 'Produto não encontrado para exclusão'
                });
            }

            console.log('Produto deletado:', produtoDeletado);

            res.status(200).json({
                "status": "OK",
                "mensagem": "Produto excluído com sucesso!",
                "produto_deletado": produtoDeletado
            });
        })
        .catch(err => {
            console.error('Erro ao excluir produto:', err);
            res.status(500).json({
                'status': 'Nok',
                'mensagem': 'Erro ao excluir o produto'
            });
        });
}

//Controller para atualizar produtos

exports.atualizarProdutos = (req, res) => {
    const produtoId = req.params.id;

    const {
        produto,
        descricao,
        preco_compra,
        quantidade,
        image
    } = req.body;

    // Crie um objeto com os campos a serem atualizados
    const updateFields = {};
    if (produto) updateFields.produto = produto;
    if (descricao) updateFields.descricao = descricao;
    if (preco_compra) updateFields.preco_compra = preco_compra;
    if (quantidade) updateFields.quantidade = quantidade;
    if (image) updateFields.image = image;

    SchemmaCreate.findByIdAndUpdate(produtoId, updateFields, {
            new: true
        })
        .then(produtoAtualizado => {
            if (!produtoAtualizado) {
                return res.status(404).json({
                    'status': 'Nok',
                    'mensagem': 'Produto não encontrado para atualização'
                });
            } else {

                res.status(200).json({
                    "status": "OK",
                    "mensagem": "Produto atualizado com sucesso!",
                    "produto": produtoAtualizado
                });
            }
            console.log('Produto atualizado:', produtoAtualizado);
        })
        .catch(err => {
            console.error('Erro ao atualizar produto:', err);
            res.status(500).json({
                'status': 'Nok',
                'mensagem': 'Erro ao atualizar o produto'
            });
        });
}