const User = require('../models/User');
const Address = require('../models/Address');

module.exports = {
    async index(req, res){
        const { user_id } = req.params;
        /* Quando é feito uma busca utilizando o findByPk ele 
           a busca recebe um segundo valor que pode ser a associação
           con outra tabela.
         */
        const user = await User.findByPk(user_id, {
            include: { association: 'addresses' }
        });

        /* Retorna o dados do usuário e todos os seus endereços
           para retornar somente os endereços utilizo
           return res.json(user.addresses);
           */
        return res.json(user);
    },

    async store(req, res){
        const { user_id } = req.params;
        const { zipcode, street, number } = req.body;
       
        const user = await User.findByPk(user_id);

        if (!user){
            return res.status(400).json({ error: 'User not found'});
        }

        const address = await Address.create({
            zipcode,
            street,
            number,
            user_id,
        });

        return res.json(address);
    },
}; 