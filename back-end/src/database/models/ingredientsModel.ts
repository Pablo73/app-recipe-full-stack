import { Model, DataTypes } from 'sequelize';
import db from '.';

export interface IngredientsAttributes {
  id: number;
  nameIngredient: string;
}

export type IngredientsCreationAttributes = Omit<IngredientsAttributes, 'id'>;

export default class IngredientsModel extends Model {
  declare id: number;
  declare nameIngredient: string;
}

IngredientsModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nameIngredient: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },  
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  modelName: 'ingredients',
});