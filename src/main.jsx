import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home.jsx";
import Shop from "./Components/Shop/Shop.jsx";
import Banner from "./Components/Banner/Banner.jsx";
import ShopByCategory from "./Components/ShopBy Category/ShopByCategory.jsx";
import Orders from "./Components/Orders/Orders.jsx";
import Inventory from "./Components/Inventory/Inventory.jsx";
import Login from "./Components/Login/Login.jsx";
import cartProductLoader from "./Loader/cartProductLoader.js";
import CheckOut from "./Components/CheckOut/CheckOut.jsx";
import SkinCare from "./Components/SkinCare/SkinCare.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "banner",
        element: <Banner />,
      },
      {
        path: "orders",
        element: <Orders />,
        loader: cartProductLoader,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
      {
        path: "skincare",
        element: <SkinCare />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "ShopByCategory",
        element: <ShopByCategory />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
