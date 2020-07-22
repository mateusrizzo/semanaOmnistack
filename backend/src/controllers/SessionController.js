//index, show, store, update, destroy - metodos disponiveis para o controlador
const User = require('../models/User');

//função assincrona que salva usuário dentro do banco de dados a partir do email
module.exports = {
    async store(req, res){
        const {email} = req.body;
        let user = await User.findOne({ email });

        if (!user){
            user = await User.create({email});
        }


        return res.json(user);
    }    
};