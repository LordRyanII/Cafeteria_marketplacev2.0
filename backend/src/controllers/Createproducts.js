
exports.Create = (req, res) => {
    try{
        
    } catch(err){
        res.status(400).json({
            "Status": "Erro",
            "mensage": "Houve algum erro na hora da criação dos produtos"
        })
    }
}