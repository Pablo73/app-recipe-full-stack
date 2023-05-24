import MealsModel from '../database/models/mealsModel';
import Category from '../database/models/categoryModel';

class CategoryService {
  constructor(public model = Category, public meals = MealsModel) {}

  public async getCategory() {
    const category = await this.model.findAll({
      attributes: { exclude: ['id'] },
    });
    return category;
  }

  public async getMealsByCategory(option: string) {
    const meals = await this.meals.findAll();

    const mapMeals = meals.map((a) => {
      return {
        idMeal: a.id,
        strMeal: a.strMeal,
        strMealThumb: a.strMealThumb,
      }
    })

    if(option === 'Side') {
      return mapMeals.filter((a) => a.idMeal === 1)
    }

    if(option === 'Seafood') {
      return mapMeals.filter((a) => a.idMeal === 2)
    }

    if(option === 'Beef') {
      return mapMeals.filter((a) => a.idMeal === 3)
    }

    if(option === 'Vegetarian') {
      return mapMeals.filter((a) => a.idMeal === 4)
    }

    return mapMeals;
  }
}

export default CategoryService;