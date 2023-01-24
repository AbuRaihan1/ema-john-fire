import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Inventory from "../components/Inventory/Inventory";
import Orders from "../components/Orders/Orders";
import Shop from "../components/Shop/Shop";
import Main from "../layouts/Main";
import Login from "../components/Login_SignUp/Login.jsx";
import SignUp from "../components/Login_SignUp/SignUp";
import { productsAndCartLoader } from "../loaders/productsAndCartLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => fetch("products.json"),
        element: <Shop></Shop>,
      },
      {
        path: "orders",
        loader: productsAndCartLoader,
        element: <Orders></Orders>,
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
export default router;
