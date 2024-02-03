import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface ErrorActionState {
  error: string;
  setError: (message: string) => void;
}

const useErrorState = create<ErrorActionState>(set => ({
  error: '',
  setError: (message) => set(() => ({error: message}))
}));

if (process.env.NODE_ENV === 'development')
  mountStoreDevtool('Response Error', useErrorState);

export default useErrorState;