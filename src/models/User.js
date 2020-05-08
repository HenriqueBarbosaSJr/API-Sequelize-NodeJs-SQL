const { Model, DataTypes } = require('sequelize');

class User extends Model{

    // A variável sequelize recebe a conexão com o banco
    static init (sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        },
        {   // conexão com o banco
            sequelize,
        
        })
    }

    static associate(models){
        // hasMany informa que o uses tem muitos endereços 
        this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' });
        //
        this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs'});
     }
}

module.exports = User;