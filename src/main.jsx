import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home.jsx";
import Shop from "./Components/Shop/Shop.jsx";
import Banner from "./Components/Banner/Banner.jsx";
import ShopByCategory from "./Components/ShopBy Category/ShopByCategory.jsx";

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
