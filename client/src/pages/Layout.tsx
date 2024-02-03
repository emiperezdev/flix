import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { useEffect } from "react";
import Cookies from "js-cookie";
import APIClient from "../services/api-client";
import UserEntity from "../entitites/user.entity";
import useIsAuthState from "../states/useIsAuth";
import useUserState from "../states/useUserState";

export const Layout = () => {
  const cookies = Cookies.get();
  const apiClient = new APIClient<UserEntity>("/verify");

  const setIsAuth = useIsAuthState((s) => s.setIsAuth);
  const setUser = useUserState((s) => s.setUser);

  useEffect(() => {
    const verifyToken = async () => {
      if (cookies.token) {
        try {
          const data = await apiClient.get();
          if (!data) return setIsAuth(false);

          setIsAuth(true);
          setUser(data);
        } catch (e) {
          setIsAuth(false);
          setUser(null);
        }
      }
    };

    verifyToken();
  }, []);

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
