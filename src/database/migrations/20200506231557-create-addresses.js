'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('addresses', {
        
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      //Chave estrangeira da tabela users
      user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{ model: 'users', key: 'id' },
        // SE o id do usuário for alterado, será alterado nesta tabela também
        onUpdate: 'CASCADE',
        /* SE o id do usuário for alterado, será alterado nesta tabela também
           É possível utilizar também o SET NULL para deixar nulo ou RESTRICT 
           para não deixar excluir */
        onDelete: 'CASCADE',
        },
      zipcode:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      street:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      number:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:{
        type: Sequelize.DATE, 
        allowNull: false,
      }
    
    });
    
  },


  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('users');

}
};
