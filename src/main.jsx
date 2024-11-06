import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import CardDetails from './Components/CategoriesContainer/CardDetails/CardDetails.jsx';
import Categories from './Components/CategoriesContainer/Categories/Categories.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WishlistContainer from './Components/WishlistContainer/WishlistContainer.jsx';
import Wishlist from './Components/Wishlist/Wishlist.jsx';
import Contact from './Components/Contact/Contact.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch('products.json')
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product/:productID",
        element: <CardDetails />,
        loader: () => fetch('products.json')
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
