import { useMutation } from "@tanstack/react-query";
import UserEntity from "../entitites/user.entity";
import APIClient, { AxiosError } from "../services/api-client";
import { useNavigate } from "react-router-dom";
import useErrorState from "../states/useErrorState";

const apiClient = new APIClient<UserEntity>("/users");

const useAddUser = () => {
  const navigate = useNavigate();

  const setError = useErrorState(s => s.setError);

  return useMutation({
    mutationFn: apiClient.post,

    onSuccess: (savedUser: UserEntity) => {
      navigate('/profile');
      console.log(savedUser);
    },

    onError: (err) => {
      if (err instanceof AxiosError) setError(err.response?.data);
    }
  });
};

export default useAddUser;