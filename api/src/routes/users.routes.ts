import { Router } from 'express';
import { getUser, getUsers, postUser } from '../controllers/users.controller';
import validate from '../middleware/validate';
import validateUser from '../schemas/user.schema';

const usersRouter = Router();

usersRouter.get('', getUsers);

usersRouter.get('/:id', getUser);

usersRouter.post('', validate(validateUser), postUser);

export default usersRouter;