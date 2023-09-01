const SchemmaCreate = require('../../Models/SchemmaCreateUser');

exports.Create = (req, res) => {
    const Create = SchemmaCreate(req.body);
    try{
        return res.status(200).json({
            Status: Ok,
            data: Create            
        })        


    } catch(err){
        res.status(400).json({
            "Status": "Erro",
            "mensage": "Houve algum erro na hora da criação dos produtos"
        })
    }
}