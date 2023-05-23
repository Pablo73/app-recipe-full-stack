import { Model, DataTypes } from 'sequelize';
import db from '.';

export interface CategoryAttributes {
  id: number;
  strCategory: string;
}

export type CategoryCreationAttributes = Omit<CategoryAttributes, 'id'>;

export default class Category extends Model {
  declare id: number;
  declare strCategory: string;
}

Category.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  strCategory: {
    type: DataTypes.STRING,
    allowNull: false,
  },  
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  modelName: 'categories',
});
