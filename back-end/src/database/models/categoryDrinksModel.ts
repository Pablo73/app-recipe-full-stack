import { Model, DataTypes } from 'sequelize';
import db from '.';

export interface CategoryDrinksAttributes {
  id: number;
  strCategory: string;
}

export type CategoryDrinksCreationAttributes = Omit<CategoryDrinksAttributes, 'id'>;

export default class CategoryDrinksModel extends Model {
  declare id: number;
  declare strCategory: string;
}

CategoryDrinksModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nameCategoryDrinks: {
    type: DataTypes.STRING,
    allowNull: false,
  },  
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  modelName: 'categoryDrinks',
});