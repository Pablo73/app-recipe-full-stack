import { Request, Response } from 'express';
import MealService from '../services/MealService';
import MealsModel from '../database/models/mealsModel';

class MealController {
  constructor(public service = new MealService()) {
    this.searchMeals = this.searchMeals.bind(this);
  }

  public async searchMeals(req: Request, res: Response) {
    const { s, f } = req.query;

    let meals: MealsModel[] | null = await this.service.searchMeals(s as string, f as string);

    if (meals.length === 0) meals = null;
    res.status(200).json({ meals });
  }
}

export default MealController;
