import Category from '../database/models/category';

class CategoryService {
  constructor(public model = Category) {}

  public async getCategory() {
    const category = await this.model.findAll({
      attributes: { exclude: ['id'] },
    });
    return category;
  }
}

export default CategoryService;