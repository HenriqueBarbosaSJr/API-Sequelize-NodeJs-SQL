const User = require('../models/User');
const Address = require('../models/Address');

module.exports = {
    async index(req, res){
        const { user_id } = res.params;
        const { zipcode, street, number } = req.body;
       
        const uses = await User.findByPk(user_id);

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