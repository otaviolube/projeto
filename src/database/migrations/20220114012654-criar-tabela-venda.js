'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('vendas', {
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
      valor: {
        type: Sequelize.STRING(128),
        allowNull: false
      },
      data_venda: {
        type: Sequelize.DATE,
        allowNull: false
      },
      cliente_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'clientes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    queryInterface.dropTable('vendas');
  }
};
