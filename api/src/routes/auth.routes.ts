import { Router } from 'express';
import { login, logout, verify } from '../controllers/auth.controller';
import validate from '../middleware/validate';
import { validateLogin } from '../schemas/login.schema';
import auth from '../middleware/auth';

const authRouter = Router();

authRouter.post('/login', validate(validateLogin), login);

authRouter.post('/logout', logout);

authRouter.get('/verify', auth, verify);

export default authRouter;