import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import OrderReview from "./components/OrderReview/OrderReview";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import Login from "./components/Login/Login";
import Order from "./components/Order/Order";
import cardProductsLoader from "./Loader/loader";
import OrderProducts from "./components/OrderProducts/OrderProducts";
import ProceedOrder from "./components/ProceedOrder/ProceedOrder";
import SignUp from "./components/SignUp/SignUp";
import AuthProviders from "./providers/AuthProviders";
import PrivateRoute from "./route/PrivateRoute";
import Success from "./components/Success/Success";
import Cancel from "./components/Cancel/Cancel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Shop />,
        loader: () => fetch("http://localhost:5000/totalProducts"),
      },
      {
        path: "order",
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
        loader: cardProductsLoader,
      },
      {
        path: "orderReview",
        element: (
          <PrivateRoute>
            <OrderReview />
          </PrivateRoute>
        ),
      },
      {
        path: "orderProceed",
        element: (
          <PrivateRoute>
            <ProceedOrder />
          </PrivateRoute>
        ),
      },
      {
        path: "manageInventory",
        element: (
          <PrivateRoute>
            <ManageInventory />
          </PrivateRoute>
        ),
      },
      {
        path: "success",
        element: <Success />,
      },
      {
        path: "cancel",
        element: <Cancel />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProviders>
    <RouterProvider router={router} />
  </AuthProviders>
);
