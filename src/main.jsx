import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Root from './Root';
import Home from './Pages/Home';
import ErrorPage  from './Pages/ErrorPage';
import AddProduct from './Pages/AddProduct';
import UpdateProduct from './Pages/UpdateProduct';
import SignIn from './Pages/SignIn';
import Regsiter from './Pages/Regsiter';
import AuthProvider from './provider/AuthProvider';
import PrivateRoutes from './routes/PrivateRoutes';
import DisplayProducts from './Pages/DisplayProducts';
import BrandPage from './Components/BrandPage';
import MyCart from './Pages/MyCart';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage> ,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addProduct",
        element: <PrivateRoutes><AddProduct /></PrivateRoutes>
      },
      // {
      //   path: "/products",
      //   element: <PrivateRoutes><DisplayProducts /></PrivateRoutes>,
      //   loader: () => fetch("http://localhost:5000/products"),
      // },
      {
        path: "/products/:id",
        element: <PrivateRoutes><DisplayProducts /></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/update/:id",
        element: <PrivateRoutes><UpdateProduct /></PrivateRoutes> ,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      // {
      //   path: "/updateProduct/:id",
      //   element: <UpdateProduct />,
      //   loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`),
      // },
      {
        path: "/brands/:brands",
        element: <PrivateRoutes><BrandPage /></PrivateRoutes> ,
        loader: () => fetch("http://localhost:5000/products"),

      },
      {
        path: "/cart",
        element: <PrivateRoutes><MyCart /></PrivateRoutes> ,

      },
      

      


      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <Regsiter />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    {/* <AuthProvider> */}
      <AuthProvider>
           <RouterProvider router={router}></RouterProvider>
      </AuthProvider>

  </React.StrictMode>,
)
