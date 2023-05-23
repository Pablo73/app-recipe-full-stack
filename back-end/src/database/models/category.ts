import { Model, DataTypes } from 'sequelize';
import db from '.';

export interface CategoryAttributes {
  id: number;
  nameCategory: string;
}

export type CategoryCreationAttributes = Omit<CategoryAttributes, 'id'>;

export default class Category extends Model {
  declare id: number;
  declare nameCategory: string;
}

Category.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nameCategory: {
    type: DataTypes.STRING,
    allowNull: false,
  },  
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  modelName: 'category',
});