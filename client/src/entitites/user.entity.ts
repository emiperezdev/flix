export default interface UserEntity {
  id: number;
  name: string;
  last_name: string;
  email: string;
  password: string;
  isAdmin?: boolean;
}