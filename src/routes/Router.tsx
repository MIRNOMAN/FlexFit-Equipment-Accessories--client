import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/layouts/MainLayouts";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AboutUs from "../pages/AboutUs";
import Products from "../pages/Products";
import Register from "../pages/Register";
import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/productdetails/:_id",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
