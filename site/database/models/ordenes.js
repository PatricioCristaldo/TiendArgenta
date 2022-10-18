'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ordenes extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  Ordenes.init({
    usuariosId: DataTypes.INTEGER,
    carritosId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ordenes',
  });
  return Ordenes;
};