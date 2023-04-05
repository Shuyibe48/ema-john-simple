import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import ManageInventory from './components/ManageInventory/ManageInventory';
import Login from './components/Login/Login';
import Order from './components/Order/Order';
import cardProductsLoader from './Loader/loader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Shop />
      },
      {
        path: 'order',
        element: <Order/>,
        loader: cardProductsLoader
      },
      {
        path: 'orderReview',
        element: <OrderReview/>
      },
      {
        path: 'manageInventory',
        element: <ManageInventory/>
      },
      {
        path: 'login',
        element: <Login/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
