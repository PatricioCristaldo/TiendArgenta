'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Historiales extends Model {
   
    static associate(models) {
      Historiales.belongsTo(models.Categorias,{
        as: 'categoria',
        foreignKey: 'categoriasId'
      }),
      Historiales.belongsTo(models.subCategorias,{
        as: 'subcategoria',
        foreignKey: 'subCategoriasId'
      }),
      Historiales.hasMany(models.HistorialesImagenes,{
        as: 'imagenes',
        foreignKey: 'historialesId',
        onDelete:'cascade'
      })
    }
  }
  Historiales.init({
    titulo: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    precio: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    categoriasId: DataTypes.INTEGER,
    subCategoriasId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Historiales',
  });
  return Historiales;
};