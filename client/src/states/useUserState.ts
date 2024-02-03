import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserActionState {
  user: User;
  setUser: (user: User) => void;
}

const useUserState = create<UserActionState>(set => ({
  user: {} as User,
  setUser: (newUser) => set(() => ({user: newUser}))
}));

if (process.env.NODE_ENV === 'development') 
  mountStoreDevtool('User', useUserState);

export default useUserState;