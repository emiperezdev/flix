import { useMutation } from "@tanstack/react-query";
import UserEntity from "../entitites/user.entity";
import APIClient, { AxiosError } from "../services/api-client";
import { useNavigate } from "react-router-dom";
import useErrorState from "../states/useErrorState";
import useIsAuthState from "../states/useIsAuth";
import useUserState from "../states/useUserState";

const apiClient = new APIClient<UserEntity>("/users");

const useAddUser = () => {
  const navigate = useNavigate();

  const setError = useErrorState((s) => s.setError);
  const setIsAuth = useIsAuthState((s) => s.setIsAuth);
  const setUser = useUserState((s) => s.setUser);

  return useMutation({
    mutationFn: apiClient.post,

    onSuccess: (savedUser: UserEntity) => {
      navigate("/profile");
      setIsAuth(true);
      setUser({
        id: savedUser.id,
        name: savedUser.name,
        email: savedUser.email,
      });
      console.log(savedUser);
    },

    onError: (err) => {
      if (err instanceof AxiosError) {
        setError(err.response?.data);
      }
    },
  });
};

export default useAddUser;
