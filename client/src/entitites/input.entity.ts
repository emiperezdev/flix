export default interface InputDto {
  name: string;
  placeholder: string;
  type: string;
}

export const NameInput: InputDto = {
  name: 'name',
  placeholder: 'Name',
  type: 'text',
}

export const EmailInput: InputDto = {
  name: 'email',
  placeholder: 'Email',
  type: 'email',
}

export const PasswordInput: InputDto = {
  name: 'password',
  placeholder: 'Password',
  type: 'password',
}