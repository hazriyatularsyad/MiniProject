import { AuthController } from '@/controllers/auth.controller';
import { EoController,  } from '@/controllers/eo.controller';
import { Router } from 'express';

export class EoRouter {
  private router: Router;
  private eoController: EoController;

  constructor() {
    this.router = Router();
    this.eoController = new EoController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/register', this.eoController.createEoData);
    this.router.post('/login', this.eoController.loginEo)
    // this.router.post('/login', this.authController.loginUserData);
  }
  getRouter(): Router {
    return this.router;
  }
}
