const { Model, DataTypes } = require('sequelize');

class Tech extends Model{

    // A variável sequelize recebe a conexão com o banco
    static init (sequelize){
        super.init({
            name: DataTypes.STRING,
            },
            {   // conexão com o banco
                sequelize,
                tableName : 'techs',
            })
        }

        static associate(models){
            /* Tech possui muitos usuários "belongsToMany(models.User ..." Qual a chave estrangeira  { foreignKey: 'tech_id'
                qual o nome da tabela que vai relacionar usuários com tecnonologia "through: 'user_tech'" e nome para a 
                associação.
            */ 
            this.belongsToMany(models.User, { foreignKey: 'tech_id', through: 'user_tech', as: 'users'});
        
         }
}

module.exports = Tech;