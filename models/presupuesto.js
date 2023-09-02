const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('presupuesto', {
    idpresupuesto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    goal: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fin: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    gastado: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ahorrado: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'idUsuario'
      }
    }
  }, {
    sequelize,
    tableName: 'presupuesto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idpresupuesto" },
        ]
      },
      {
        name: "fk_presupuesto_usuario1_idx",
        using: "BTREE",
        fields: [
          { name: "idUsuario" },
        ]
      },
    ]
  });
};
