import { Router } from 'express';
import CategoryController from '../controllers';
import MealController from '../controllers/MealController';

const mealsRouter = Router();
const categoryController = new CategoryController();
const mealController = new MealController();

mealsRouter.get('/categories', categoryController.getCategory);
mealsRouter.get('/search', mealController.searchMeals);
mealsRouter.get('/filter', mealController.filterMeals);

export default mealsRouter;
