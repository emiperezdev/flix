import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
// import { useEffect } from "react";
// import Cookies from 'js-cookie';
// import { axiosInstance } from "../services/api-client";

export const Layout = () => {
//   useEffect(() => {
//     const verifyToken = async () => {
//       await axiosInstance.get('/verify');
//     }

//     verifyToken();
//   }, []);

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
