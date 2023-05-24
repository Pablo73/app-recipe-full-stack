import { Model, DataTypes } from 'sequelize';
import sequelize from '.';
import ingredients from './ingredientsModel';
import measures from './measuresModel'
import meals from './mealsModel';

export interface MealsIngredientsMeasuresModelAttributes {
  idIngredients: number;
  idMeals: number;
}

export default class MealsIngredientsMeasuresModel extends Model {
  declare idIngredients: number;
  declare idMeals: number;
}

MealsIngredientsMeasuresModel.init({
  idMeals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: meals,
      key: 'id',
    },
    onDelete: 'CASCADE',
    primaryKey: true,
  },
  idIngredients: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: ingredients,
      key: 'id',
    },
    onDelete: 'CASCADE',
    primaryKey: true,
  },
  idMeasure: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
  modelName: 'mealsIngredientsMeasures',
});