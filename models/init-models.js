var DataTypes = require("sequelize").DataTypes;
var _categoria_gasto = require("./categoria_gasto");
var _categoria_gasto_has_gasto = require("./categoria_gasto_has_gasto");
var _gasto = require("./gasto");
var _ingreso = require("./ingreso");
var _presupuesto = require("./presupuesto");
var _usuario = require("./usuario");

function initModels(sequelize) {
  var categoria_gasto = _categoria_gasto(sequelize, DataTypes);
  var categoria_gasto_has_gasto = _categoria_gasto_has_gasto(sequelize, DataTypes);
  var gasto = _gasto(sequelize, DataTypes);
  var ingreso = _ingreso(sequelize, DataTypes);
  var presupuesto = _presupuesto(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);

  categoria_gasto_has_gasto.belongsTo(categoria_gasto, { as: "idCategoria_gasto_categoria_gasto", foreignKey: "idCategoria_gasto"});
  categoria_gasto.hasMany(categoria_gasto_has_gasto, { as: "categoria_gasto_has_gastos", foreignKey: "idCategoria_gasto"});
  categoria_gasto_has_gasto.belongsTo(gasto, { as: "idGasto_gasto", foreignKey: "idGasto"});
  gasto.hasMany(categoria_gasto_has_gasto, { as: "categoria_gasto_has_gastos", foreignKey: "idGasto"});
  gasto.belongsTo(usuario, { as: "idUsuario_usuario", foreignKey: "idUsuario"});
  usuario.hasMany(gasto, { as: "gastos", foreignKey: "idUsuario"});
  ingreso.belongsTo(usuario, { as: "idUsuario_usuario", foreignKey: "idUsuario"});
  usuario.hasMany(ingreso, { as: "ingresos", foreignKey: "idUsuario"});
  presupuesto.belongsTo(usuario, { as: "idUsuario_usuario", foreignKey: "idUsuario"});
  usuario.hasMany(presupuesto, { as: "presupuestos", foreignKey: "idUsuario"});

  return {
    categoria_gasto,
    categoria_gasto_has_gasto,
    gasto,
    ingreso,
    presupuesto,
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
