'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, {foreignKey: "CategoryId"})
      Product.hasMany(models.Cart, {foreignKey:"ProductId"})
    }
  }
  Product.init({
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    photo: DataTypes.TEXT,
    stock: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};