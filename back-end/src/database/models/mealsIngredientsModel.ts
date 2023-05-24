'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meals_ingredients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  meals_ingredients.init({
    idIngredients: DataTypes.INTEGER,
    idMeals: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'meals_ingredients',
  });
  return meals_ingredients;
};