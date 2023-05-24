'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  meals.init({
    strArea: DataTypes.NUMBER,
    strCategory: DataTypes.NUMBER,
    strImageSource: DataTypes.STRING,
    strInstructions: DataTypes.STRING,
    strMealThumb: DataTypes.STRING,
    strMeal: DataTypes.STRING,
    strTags: DataTypes.STRING,
    strYoutube: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'meals',
  });
  return meals;
};