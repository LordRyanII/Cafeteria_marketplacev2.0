const mongoose = require('mongoose');

module.exports = class Create {
    constructor(data) {
        this.produto = data.produto
        this.descricao = data.descricao
        this._Create(this.produto, this.descricao)
    }
    Create(produto, descricao) {
        try{
            new mongoose.Schema({
                produto: produto,
                descricao: descricao
            });

            return {
                'produto': produto,
                'descricao': descricao
            };
        }catch(error){
            console.log(`Ocorreu um erro na hora da criação, ${error}`);

        }
        
    }
}