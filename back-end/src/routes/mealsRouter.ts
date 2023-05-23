import { Router } from 'express';
import CategoryController from '../controllers';

const mealsRouter = Router();
const categoryController = new CategoryController();

mealsRouter.get('/categories', categoryController.getCategory);

export default mealsRouter;