const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categoria_gasto_has_gasto', {
    idGasto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gasto',
        key: 'idGasto'
      }
    },
    idCategoria_gasto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categoria_gasto',
        key: 'idcategoria_gasto'
      }
    }
  }, {
    sequelize,
    tableName: 'categoria_gasto_has_gasto',
    timestamps: false,
    indexes: [
      {
        name: "fk_categoria_gasto_has_gasto_gasto2_idx",
        using: "BTREE",
        fields: [
          { name: "idGasto" },
        ]
      },
      {
        name: "fk_categoria_gasto_has_gasto_categoria_gasto2_idx",
        using: "BTREE",
        fields: [
          { name: "idCategoria_gasto" },
        ]
      },
    ]
  });
};
