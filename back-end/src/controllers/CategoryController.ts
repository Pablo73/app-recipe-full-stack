import { Request, Response } from 'express';
import CategoryService from '../services';

class CategoryController {
  constructor(public service = new CategoryService()) {
    this.getCategory = this.getCategory.bind(this);
  }

  public async getCategory(_req: Request, res: Response) {
    const category = await this.service.getCategory();
    return res.status(200).json({meals: category});
  }
}

export default CategoryController;