const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

module.exports = class LoginSchema {
    constructor(data) {
        const { nome, email, genero, senha, profileFoto } = data;
        this.nome = nome;
        this.email = email;
        this.genero = genero;
        this.senha = senha;
        this.profileFoto = profileFoto;
    }

    async criptografia() {
        try {
            const salt = await bcrypt.genSalt(10);
            this.senha = await bcrypt.hash(this.senha, salt);
            return this.salvaMongo();
        } catch (error) {
            throw new Error('Erro na criptografia da senha');
        }
    }

    defineSchemaMongo() {
        const cadastroSchema = new mongoose.Schema({
            nome: String,
            email: String,
            senha: String,
            genero: String,
            profileFoto: String
        });

        console.log(cadastroSchema);
        return mongoose.model('LoginAdm', cadastroSchema);
    }

    async salvaMongo() {
        try {
            const Cadastro = this.defineSchemaMongo();
            const novoCadastro = new Cadastro(this);
            await novoCadastro.save();
            console.log(novoCadastro);
            console.log('Usuário cadastrado com sucesso.');
        } catch (error) {
            throw new Error('Erro ao salvar no MongoDB: ' + error.message);
        }
    }
}