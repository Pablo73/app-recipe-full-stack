import { Model, DataTypes } from 'sequelize';
import db from '.';

export interface MeasureAttributes {
    id: number;
    nameMeasure: string;
}

export type MeasureCreationAttributes = Omit<MeasureAttributes, 'id'>;

export default class Measure extends Model {
    declare id: number;
    declare nameMeasure: string;
}

Measure.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nameMeasure: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    sequelize: db,
    timestamps: false,
    underscored: true,
    modelName: 'measure',
});
