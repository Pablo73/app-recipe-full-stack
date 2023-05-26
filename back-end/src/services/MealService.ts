import { Op, QueryTypes } from 'sequelize';
import MealsModel from '../database/models/mealsModel';
import sequelize from '../database/models';
import filterByIngredientQuery from '../utils/queries';

class MealService {
  constructor(public model = MealsModel) {}

  public async searchMeals(s: string | undefined, f: string | undefined) {
    let condition = '%';
    if (f) condition = `${f}%`;
    if (s) condition = `%${s}%`;

    const meals = await this.model.findAll({
      where: { strMeal: { [Op.like]: condition }},
      attributes: [
        ['id', 'idMeal'],
        'strMeal',
        'strMealThumb',
      ],
    });
    return meals;
  }

  public async filterMeals(ingredientName: string) {
    const meals = await sequelize.query(filterByIngredientQuery, { 
      type: QueryTypes.SELECT,
      replacements: { ingredientName } 
    });

    console.log(meals);

    return meals;
  }
}

export default MealService;
