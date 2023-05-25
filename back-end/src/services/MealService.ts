import { Op } from 'sequelize';
import MealsModel from '../database/models/mealsModel';

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
}

export default MealService;
