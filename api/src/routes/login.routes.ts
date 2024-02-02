import { Router } from 'express';
import { login } from '../controllers/login.controller';
import validate from '../middleware/validate';
import { validateLogin } from '../schemas/login.schema';

const loginRouter = Router();

loginRouter.post('', validate(validateLogin), login);

export default loginRouter;