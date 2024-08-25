import { AuthController } from '@/controllers/auth.controller';
// import { AuthMiddleware } from '@/middleware/auth.middleware';
import { Router } from 'express';

export class AuthRouter {
  private router: Router;
  private authController: AuthController;
//   private verifyMiddleware: AuthMiddleware;

  constructor() {
    this.router = Router();
    this.authController = new AuthController();
    // this.verifyMiddleware = new AuthMiddleware();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/register', this.authController.createUserData);

      this.router.post('/login', this.authController.loginUserData);
    //   this.router.patch(
    //     '/verify',
    //     this.verifyMiddleware.verifyTokenUser,
    //     this.authController.verifyUser,
    //   );
    //   this.router.get(
    //     '/',
    //     this.verifyMiddleware.verifyTokenUser,
    //   );
  }
  getRouter(): Router {
    return this.router;
  }
}
