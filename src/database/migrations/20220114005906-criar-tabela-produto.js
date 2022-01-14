'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('produtos', {
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
      descricao: {
        type: Sequelize.STRING(1024), 
        allowNull: true
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
    queryInterface.dropTable('produtos');
  }
};
