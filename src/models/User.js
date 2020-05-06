const { Model, DataTypes } = require('sequelize');

class User extends Model{

    // A variável sequelize recebe a conexão com o banco
    static init (sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        },
        {   // conexão com o banco
            sequelize
        })
    }
}

module.exports = User;