import { DataTypes, Model } from 'sequelize';
import db from '.';

class Area extends Model {
  declare id: number;
  declare nameArea: string;
}

Area.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nameArea: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'areas',
  timestamps: false,
});

export default Area;
