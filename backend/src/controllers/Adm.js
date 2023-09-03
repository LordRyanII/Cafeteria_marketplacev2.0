const CadastroSchemma = require('../../Models/Logins/LoginAdm/CadastroAdm');
const LoginSchema = require('../../Models/Logins/LoginAdm/LoginAdm');

//Controller para cadastroAdm

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

//Controller para login Adm
exports.LoginAdm = async (req, res) => {
    console.log(req.body);
    try {
        const body = req.body;
        const login = new LoginSchema(body);

        const resultadoAutenticacao = await login.mongoLogin();

        if (resultadoAutenticacao.status === 'Ok') {
            res.status(200).json({
                status: 'Ok',
                mensagem: 'Usuário autenticado com sucesso.',
                usuario: [resultadoAutenticacao.userData]
            });
        } else {
            res.status(401).json({
                status: 'Nok',
                mensagem: resultadoAutenticacao.message
            });
        }
    } catch (error) {
        res.status(500).send("Ocorreu um erro no servidor: " + error.message);
    }
};