"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Productos extends Model {
    static associate(models) {
      Productos.belongsTo(models.Categorias, {
        as: "categoria",
        foreignKey: "CategoriasId",
      }),
        Productos.belongsTo(models.subCategorias, {
          as: "subcategoria",
          foreignKey: "subCategoriasId",
        }),
        Productos.hasMany(models.Imagenes, {
          as: "imagen",
          foreignKey: "productosId",
          onDelete: "cascade",//elimina en cascada
        });
    }
  }
  Productos.init(
    {
      titulo: DataTypes.STRING,
      stock: DataTypes.INTEGER,
      precio: DataTypes.INTEGER,
      descuento: DataTypes.INTEGER,
      descripcion: DataTypes.STRING,
      categoriasId: DataTypes.INTEGER,
      subCategoriasId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Productos",
    }
  );
  return Productos;
};
