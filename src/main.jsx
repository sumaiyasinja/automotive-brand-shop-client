import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Root from './Root';
import Home from './Pages/Home';
import ErrorPage  from './Pages/ErrorPage';
import AddProduct from './Pages/AddProduct';
import UpdateProduct from './Pages/UpdateProduct';
import DeleteProduct from './Pages/DeleteProduct';


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
        element: <AddProduct />,
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct />,
        loader: ({ params }) => fetch(`https://automotive-brand-shop-server.vercel.app/products/${params.id}`),
      },
      
      {
        path: "/deleteProduct",
        element: <DeleteProduct />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
