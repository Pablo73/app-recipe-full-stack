import { Model, DataTypes } from 'sequelize';
import sequelize from '.';
import ingredients from './ingredientsModel';
import measures from './measuresModel'
import drinks from './drinksModel';

export interface DrinksIngredientsMeasuresModelAttributes {
  idIngredients: number;
  idMeals: number;
}

export default class DrinksIngredientsMeasuresModel extends Model {
  declare idIngredients: number;
  declare idMeals: number;
}

DrinksIngredientsMeasuresModel.init({
  idDrinks: {
    type: DataTypes.INTEGER,
    references: {
      model: drinks,
      key: 'id',
    },
    onDelete: 'CASCADE',
    primaryKey: true,
  },
  idIngredients: {
    type: DataTypes.INTEGER,
    references: {
      model: ingredients,
      key: 'id',
    },
    onDelete: 'CASCADE',
    primaryKey: true,
  },
  idMeasure: {
    type: DataTypes.INTEGER,
    references: {
      model: measures,
      key: 'id',
    },
    onDelete: 'CASCADE',
    primaryKey: true,
  }
}, {
  sequelize,
  timestamps: false,
  underscored: true,
  modelName: 'drinksIngredientsMeasures',
});