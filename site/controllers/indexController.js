/* let productos = require("../data/productos.json"); */
 
let db = require('../database/models')
const {Op} = require("sequelize");

//HOME NEW PRODUCTS
/* let nuevosProductos = productos.slice(productos.length - 4); */

module.exports = {
  home: (req, res) => {
    /* agrego letproductos  */
    /* let id= +req.params.id
    let updatedAt */
    db.Productos.findAll({
      limit:4,
      order:[
        ['id','DESC']
      ],
      include:[{
        all:true
      }]   
    })
    .then(productos=>
      res.render("home", {productos}))
        /* return res.send(productos) */
      .catch(error => res.send(error)); 
  },
  search: (req, res) => {
    let elemento = req.query.search;
    //SE IMPLEMENTA BASE DE DATOS
    db.Productos.findAll({
            where : {
                [Op.or] : [
                    {nombre : {[Op.substring] : elemento}},
                    {descripcion : {[Op.substring] : elemento}}
                ]
            }
        })
    
    return res.render("busqueda",
    {
      busqueda: elemento,
      resultados,
    });
  },
  contacto: (req, res) => {
    return res.render("contacto");
  },
  pregFrecuentes: (req, res) => {
    return res.render("pregFrecuentes");
  },
  novedades: (req, res) => {
    db.Productos.findAll({             
      limit: 8,
      order: [
        ['id', 'DESC']
      ],
      include:[
        {all:true}
      ]
      
    })

    .then(productos=>
      res.render("novedades", {productos}))
        /* return res.send(productos) */
    .catch(error => res.send(error)); 

   
  },
  indumentaria: (req, res) => {
    return res.render("indumentaria");
  },
};
