const CadastroSchemma = require('../../Models/Logins/LoginAdm/CadastroAdm');

exports.CadastroAdm = async (req, res) => {
    const data = req.body;
    console.log(data)
    // Criptografa a senha
    try {
        const cadastro = new CadastroSchemma(data);
        await cadastro.criptografia(); // Chama a função de criptografia

        res.status(200).json({
            status: 'Ok!',
            message: "Gestor cadastrado com sucesso",
        });
    } catch (error) {
        res.status(401).json({
            status: 'Nok',
            message: "Erro ao realizar o cadastro: " + error.message,
        });
    }
};