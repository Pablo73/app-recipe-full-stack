import { Request, Response } from 'express';
import CategoryService from '../services';

class CategoryController {
  constructor(public service = new CategoryService()) {
    this.getCategory = this.getCategory.bind(this);
  }

  public async getCategory(req: Request, res: Response) {
    const option = req.query.c as string;

    if(option) {
      const meal = await this.service.getMealsByCategory(option);
      return res.status(200).json({meals: meal});
    }

    const category = await this.service.getCategory();
    return res.status(200).json({meals: category});
    
  }
}

export default CategoryController;
