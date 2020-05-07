const { Model, DataTypes } = require('sequelize');

class Address extends Model{

    // A variável sequelize recebe a conexão com o banco
    static init (sequelize){
        super.init({
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
            },
            {   // conexão com o banco
                sequelize
            })
        }

        static associate(models){
            this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
        
         }
}

module.exports = Address;