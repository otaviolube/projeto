'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('clientes', {
      id: {
        type: Sequelize.INTEGER(11), 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      codigo: {
        type: Sequelize.INTEGER(11), 
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING(128), 
        allowNull: false
      },
      data_nascimento: {
        type: Sequelize.DATE, 
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(128), 
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE, 
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE, 
        allowNull: true
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('clientes');
  }
};
