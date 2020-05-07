'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('user_techs', {
        
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
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
        tech_id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references:{ model: 'techs', key: 'id' },
          // SE o id do usuário for alterado, será alterado nesta tabela também
          onUpdate: 'CASCADE',
          /* SE o id do usuário for alterado, será alterado nesta tabela também
             É possível utilizar também o SET NULL para deixar nulo ou RESTRICT 
             para não deixar excluir */
          onDelete: 'CASCADE',
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

    return queryInterface.dropTable('user_techs');

}
};