'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('produtos', 'categoria_id', {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      references: {
        model: 'categorias',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
  });
},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('produtos', 'categoria_id');
  }
};
