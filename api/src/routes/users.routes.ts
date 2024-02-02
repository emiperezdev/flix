import { Router } from 'express';
import { getUser, getUsers } from '../controllers/users.controller';

const usersRouter = Router();

usersRouter.get('', getUsers);

usersRouter.get('/:id', getUser);



export default usersRouter;