import { create } from "zustand";

interface ErrorActionState {
  error: string;
  setError: (message: string) => void;
}

const useErrorState = create<ErrorActionState>(set => ({
  error: '',
  setError: (message) => set(() => ({error: message}))
}));

export default useErrorState;