const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    }
});

const LoginModel = mongoose.model('loginadms', loginSchema);

class LoginSchema {
    constructor(data) {
        this.senha = data.senha;
        this.email = data.email;
    }

    async mongoLogin() {
        try {
            const user = await LoginModel.findOne({ email: this.email });

            if (!user) {
                return {
                    status: 'NOk',
                    message: 'Usuário não encontrado.'
                };
            }

            const passwordMatch = await bcrypt.compare(this.senha, user.senha);

            if (passwordMatch) {
                return {
                    status: 'Ok',
                    message: 'Usuário autenticado com sucesso.',
                    userData: user // Retorna todos os dados do usuário
                };
            } else {
                return {
                    status: 'NotOk',
                    message: 'Senha incorreta.'
                };
            }
        } catch (error) {
            console.log('Erro: ' + error);
            return {
                status: 'Error',
                message: 'Erro ao fazer login.'
            };
        }
    }
}

module.exports = LoginSchema;
