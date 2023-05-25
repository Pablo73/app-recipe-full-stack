import { Model, DataTypes } from 'sequelize';
import sequelize from '.';
import CategoryDrinksModel from './categoryDrinksModel';
import GlassesModel from './glassModel';

export interface DrinksAttributes {
  id: number;
  strAlcoholic: string;
  strCategory: number;
  strDrink: string;
  strDrinkThumb: string;
  strGlass: number;
  strInstructions: string;
  strInstructionsDE: string;
  strInstructionsES: string;
  strInstructionsFR: string;
  strInstructionsIT: string;
  strTags: string;
  strVideo: string;
}

export type DrinksCreationAttributes = Omit<DrinksAttributes, 'id'>;

export default class DrinksModel extends Model {
  declare id: number;
  declare strAlcoholic: string;
  declare strCategory: number;
  declare strDrink: string;
  declare strDrinkThumb: string;
  declare strGlass: number;
  declare strInstructions: string;
  declare strInstructionsDE: string;
  declare strInstructionsES: string;
  declare strInstructionsFR: string;
  declare strInstructionsIT: string;
  declare strTags: string;
  declare strVideo: string;
}

DrinksModel.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  strAlcoholic: {
    type: DataTypes.STRING
  },
  strCategory: {
    type: DataTypes.INTEGER,
    references: {
      model: CategoryDrinksModel,
      key: 'id',
    },
    onDelete: 'CASCADE',
    primaryKey: true,
  },
  strDrink: {
    type: DataTypes.STRING
  },
  strDrinkThumb: {
    type: DataTypes.STRING
  },
  strGlass: {
    type: DataTypes.INTEGER,
    references: {
      model: GlassesModel,
      key: 'id',
    },
    onDelete: 'CASCADE',
    primaryKey: true
  },
  strInstructions: {
    type: DataTypes.TEXT
  },
  strInstructionsDE: {
    type: DataTypes.TEXT
  },
  strInstructionsES: {
    type: DataTypes.TEXT
  },
  strInstructionsFR: {
    type: DataTypes.TEXT
  },
  strInstructionsIT: {
    type: DataTypes.TEXT
  },
  strTags: {
    type: DataTypes.STRING
  },
  strVideo: {
    type: DataTypes.STRING
  },  
}, {
  sequelize,
  timestamps: false,
  underscored: true,
  modelName: 'drinks',
});

CategoryDrinksModel.hasMany(DrinksModel, {
  foreignKey: 'strCategory', as: 'categoryDrinks',
});

DrinksModel.belongsTo(CategoryDrinksModel, {
  foreignKey: 'strCategory', as: 'categoryDrinks',
});

GlassesModel.hasMany(DrinksModel, {
  foreignKey: 'strGlass', as: 'glass',
});

DrinksModel.belongsTo(GlassesModel, {
  foreignKey: 'strGlass', as: 'glass',
});