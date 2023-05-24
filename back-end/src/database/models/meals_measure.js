'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meals_measure extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  meals_measure.init({
    idMeasure: DataTypes.INTEGER,
    idMeals: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'meals_measure',
  });
  return meals_measure;
};