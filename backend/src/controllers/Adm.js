const CadastroSchemma = require('../../Models/Logins/LoginAdm/CadastroAdm');

exports.CadastroAdm = async (req, res) => {
    const data = req.body;
    console.log(data);
    try {
        const verificaDados = (obj) => Object.values(obj).some(value => !value || value.trim() === "");
        if (verificaDados(data)) {
            return res.status(400).json({
                status: 'Nok',
                mensage: 'Há dados não preenchidos'
            });
        } else {
            const cadastro = new CadastroSchemma(data);
            await cadastro.criptografia(); // Chama a função de criptografia

            res.status(200).json({
                status: 'Ok!',
                message: "Gestor cadastrado com sucesso",
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 'Nok',
            message: "Erro ao realizar o cadastro: " + error.message,
        });
    }
};