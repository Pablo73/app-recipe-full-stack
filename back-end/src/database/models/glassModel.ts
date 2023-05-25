import { Model, DataTypes } from 'sequelize';
import db from '.';

export interface GlassAttributes {
  id: number;
  strCategory: string;
}

export type GlassCreationAttributes = Omit<GlassAttributes, 'id'>;

export default class GlassModel extends Model {
  declare id: number;
  declare strCategory: string;
}

GlassModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nameGlass: {
    type: DataTypes.STRING,
    allowNull: false,
  },  
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  modelName: 'glass',
});
