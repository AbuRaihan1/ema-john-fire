import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Inventory from "../components/Inventory/Inventory";
import Login from "../components/Login_SignUp/Login.jsx";
import SignUp from "../components/Login_SignUp/SignUp";
import Orders from "../components/Orders/Orders";
import Shipping from "../components/Shipping/Shipping";
import Shop from "../components/Shop/Shop";
import Main from "../layouts/Main";
import { productsAndCartLoader } from "../loaders/productsAndCartLoader";
import PrivateRoutes from "./PrivateRoutes";

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
      {
        path: "shipping",
        element: (
          <PrivateRoutes>
            <Shipping></Shipping>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
export default router;
