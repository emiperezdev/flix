import Joi from 'joi';

interface LoginDto {
  email: string;
  password: string;
}

const validateLogin = (login: LoginDto) => {
  const schema = Joi.object({
    email: Joi.string().email().min(13).max(50).required(),
    password: Joi.string().min(4).max(50).required(),
  });

  return schema.validate(login);
}

export { LoginDto, validateLogin };