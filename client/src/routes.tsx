import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { RegisterPage } from "./pages/RegisterPage";
import { ProfilePage } from "./pages/ProfilePage";
import { LoginPage } from "./pages/LoginPage";

const router = createBrowserRouter([
  {path: '/', element: <Layout />, children: [
    {path: 'register', element: <RegisterPage />},
    {path: 'profile', element: <ProfilePage />},
    {path: 'login', element: <LoginPage />},
  ]}
]);

export default router;