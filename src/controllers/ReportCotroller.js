const User = require('../models/User');


module.exports = {
    async show(req, res){

        return res.json( { report: true });
    }

};