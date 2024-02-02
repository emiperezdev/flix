import { Router } from 'express';
import { deleteUser, getUser, getUsers, postUser, updatedUser } from '../controllers/users.controller';
import validate from '../middleware/validate';
import validateUser from '../schemas/user.schema';

const usersRouter = Router();

usersRouter.get('', getUsers);

usersRouter.get('/:id', getUser);

usersRouter.post('', validate(validateUser), postUser);

usersRouter.put('/:id', validate(validateUser), updatedUser);

usersRouter.delete('/:id', deleteUser);

export default usersRouter;