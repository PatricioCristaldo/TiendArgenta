"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Imagenes extends Model {
    static associate(models) {
      Imagenes.belongsTo(models.Productos, {
        as: "imagenes",/* o imagen */
        foreignKey: "productosId",
      });
    }
  }
  Imagenes.init(
    {
      nombre: DataTypes.STRING,
      productosId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Imagenes",
    }
  );
  return Imagenes;
};
