import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { RegisterPage } from "./pages/RegisterPage";

const router = createBrowserRouter([
  {path: '/', element: <Layout />, children: [
    {path: 'register', element: <RegisterPage />}
  ]}
]);

export default router;