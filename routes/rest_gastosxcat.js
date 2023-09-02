var express = require('express');
const { Sequelize } = require('../models');
var router = express.Router();

/* IMPORTE El ARCHIVO CON EL NOMBRE_CLASE */
const Categorias = require('../models').categoria_gasto;
const Gastos = require('../models').gasto;
const CatGas = require('../models').categoria_gasto_has_gasto;

const Op = Sequelize.Op


/* GET endpoint para tener gasto por categoria*/
router.get('/categoria/:id/json', function(req, res, next) {
    let id = parseInt(req.params.id)
    CatGas.findAll({
    attributes: { exclude: ["id","updatedAt","createdAt"]},
    where: {
        idCategoria_gasto: id
    }
  })
  .then(resultado => {

    let keys = resultado.map(element => element.idGasto)

    Gastos.findAll({
        attributes: { exclude: ["updateAt", "createdAt"]},
        where: {
            idGasto:{
                [Op.or]: keys
            }
        }
    })
    .then(resultado=>{
        res.json(resultado);
    })
    .catch(error => res.status(400).send(error))
  })
  .catch(error => res.status(400).send(error))
});

module.exports = router;