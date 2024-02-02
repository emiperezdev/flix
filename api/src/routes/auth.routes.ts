import { Router } from 'express';
import { login, logout } from '../controllers/auth.controller';
import validate from '../middleware/validate';
import { validateLogin } from '../schemas/login.schema';

const authRouter = Router();

authRouter.post('/login', validate(validateLogin), login);

authRouter.post('/logout', logout);

export default authRouter;