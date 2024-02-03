import { useMutation } from "@tanstack/react-query";
import LoginDto from "../entitites/login.entity";
import APIClient, { AxiosError } from "../services/api-client";
import { useNavigate } from "react-router-dom";
import useUserState from "../states/useUserState";
import useErrorState from "../states/useErrorState";
import useIsAuthState from "../states/useIsAuth";
import UserEntity from "../entitites/user.entity";

const apiClient = new APIClient<LoginDto>("/login");

const useLogin = () => {
  const navigate = useNavigate();
  const setUser = useUserState((s) => s.setUser);
  const setError = useErrorState((s) => s.setError);
  const setIsAuth = useIsAuthState((s) => s.setIsAuth);

  return useMutation({
    mutationFn: apiClient.post,

    onSuccess: (savedLogin, newLogin) => {
      setUser(savedLogin as UserEntity);
      setIsAuth(true);
      navigate("/profile");
    },

    onError: (err) => {
      if (err instanceof AxiosError) {
        setError(err.response?.data);
      }
    },
  });
};

export default useLogin;
