const User = require('../models/User');
const Tech = require('../models/Tech');


module.exports = {
    async index(req, res){
        const { user_id } = req.params;

        /* Exemplo que inclui a listagem de todos os campos da tabela tecnologia
           mais a tabela de relacionamento.

            const user = await User.findByPk(user_id, {
            include: { association: 'techs'}
            });
        */
        const user = await User.findByPk(user_id, {
            include: { association: 'techs',
                       attributes:['name'],  // filtra somente o name
                       through:{             // Associa a tabela de relacionamento
                          attributes:[]      // Quando é passado o o couchetes vazio exclui todos os atributos
                       }    
                    }
            });

        return res.json(user.techs);
    },

    async store(req, res){
        const { user_id } = req.params;
        const { name } = req = req.body;


        const user = await User.findByPk(user_id);

        if (!user){
            return res.status(400).json({ error: 'User not found'});
        }

        const [ tech ] = await Tech.findOrCreate({
          where: { name }
        });

        await user.addTech(tech);

        return res.json(tech);
    },
    // Método que deleta o relacionamento Tech e não a tecnologia.
    async delete(req, res){
        const { user_id } = req.params;
        const { name } = req = req.body;

        const user = await User.findByPk(user_id);

        if (!user){
            return res.status(400).json({ error: 'User not found'});
        }
        const  tech  = await Tech.findOne({
            where: { name }
          });
        
        /* O Sequelize cria métodos como removeTech "onde o remove é criado pelo Sequelize e Tech é o nome da classe"
           ele cria outros vários também como o addTech.
        */
        await user.removeTech(tech);
        // retorna nada porque o item foi removido
        return res.json();
    }
}; 