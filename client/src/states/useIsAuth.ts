import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface IsAuthActionState {
  isAuth: boolean;
  setIsAuth: (info: boolean) => void;
}

const useIsAuthState = create<IsAuthActionState>((set) => ({
  isAuth: false,
  setIsAuth: (info) => set(() => ({ isAuth: info })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Is Auth", useIsAuthState);

export default useIsAuthState;
