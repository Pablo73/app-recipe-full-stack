import { Model, DataTypes } from 'sequelize';
import sequelize from '.';
import AreaModel from './areaModel';
import CategoryModel from './categoryModel';

export interface MealsAttributes {
  id: number;
  strArea: number;
  strCategory: number;
  strImageSource: string;
  strInstructions: string;
  strMealThumb: string;
  strMeal: string;
  strTags: string;
  strYoutube: string;
}

export type MealsCreationAttributes = Omit<MealsAttributes, 'id'>;

export default class MealsModel extends Model {
  declare id: number;
  declare strArea: number;
  declare strCategory: number;
  declare strImageSource: string;
  declare strInstructions: string;
  declare strMealThumb: string;
  declare strMeal: string;
  declare strTags: string;
  declare strYoutube: string;
}

MealsModel.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  strArea: {
    type: DataTypes.INTEGER,
    references: {
      model: AreaModel,
      key: 'id',
    },
    onDelete: 'CASCADE',
    primaryKey: true,
  },
  strCategory: {
    type: DataTypes.INTEGER,
    references: {
      model: CategoryModel,
      key: 'id',
    },
    onDelete: 'CASCADE',
    primaryKey: true,
  },
  strImageSource: {
    type: DataTypes.STRING
  },
  strInstructions: {
    type: DataTypes.TEXT
  },
  strMealThumb: {
    type: DataTypes.STRING
  },
  strMeal: {
    type: DataTypes.STRING
  },
  strTags: {
    type: DataTypes.STRING
  },
  strYoutube: {
    type: DataTypes.STRING
  },  
}, {
  sequelize,
  timestamps: false,
  underscored: true,
  modelName: 'categories',
});

AreaModel.hasMany(MealsModel, {
  foreignKey: 'strArea', as: 'areaMeals',
});

MealsModel.belongsTo(AreaModel, {
  foreignKey: 'strArea', as: 'areaMeals',
});

CategoryModel.hasMany(MealsModel, {
  foreignKey: 'strCategory', as: 'categoryMeals',
});

MealsModel.belongsTo(CategoryModel, {
  foreignKey: 'strCategory', as: 'categoryMeals',
});