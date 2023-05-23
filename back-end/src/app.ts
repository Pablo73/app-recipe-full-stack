import * as express from 'express';
import errorMiddleware from './middlewares/errorMiddleware';
import mealsRouter from './routes';
import * as cors from 'cors';


class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.app.use(express.json());
    this.app.use(cors());

    this.app.get('/', (req, res) => res.json({ ok: true }));
    this.app.use(errorMiddleware);
    this.app.use('/meals', mealsRouter)
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

export const { app } = new App();