// operadores de busca do SQL-Postgres que serão utilizados 
const { Op } = require('sequelize');
const User = require('../models/User');


module.exports = {
    async show(req, res){
        // Encontar todos os usuários que possui um e-mail de um domínio específico
        // Desses usuários quero buscar todos que moram em uma rua específica
        // Desses usuários quero buscar todos que conhece a tech React

        const users  = await User.findAll({
            attributes: [ 'name', 'email'],
            where: {
                email: {
                    /* O operador iLike não faz diferença entre letras maiúsculas
                       e muniscula
                    */
                    [Op.iLike]: '%@gmail.com%'
                }
            },
            include:[
                { 
                    association: 'addresses', 
                    where: { street:'Vila' } 
                },
                {
                    association: 'techs',
                    where:{
                        name:{
                            [Op.iLike]:'react%'
                        }
                    }
                },
            
        ]
        });

        return res.json(users);
    }

};