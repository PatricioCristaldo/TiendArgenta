'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subCategorias extends Model {
   
     static associate(models) {
      subCategorias.hasMany(models.Productos,{
        as: 'productos',
        foreignKey: 'subCategoriasId'
      })
      subCategorias.hasMany(models.Historiales,{
        as: 'historiales',
        foreignKey: 'subCategoriasId'
      })
    }
  }
  subCategorias.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'subCategorias',
  });
  return subCategorias;
};