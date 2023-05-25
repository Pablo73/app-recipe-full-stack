import { Model, DataTypes } from 'sequelize';
import db from '.';

export interface MeasureAttributes {
    id: number;
    nameMeasure: string;
}

export type MeasureCreationAttributes = Omit<MeasureAttributes, 'id'>;

export default class MeasureModel extends Model {
    declare id: number;
    declare nameMeasure: string;
}

MeasureModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nameMeasure: {
        type: DataTypes.STRING,
        unique: true,
    },
}, {
    sequelize: db,
    timestamps: false,
    underscored: true,
    modelName: 'measure',
});
