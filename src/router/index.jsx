import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Contact from "../pages/contact/Contact";
import Products from "../pages/products/Products";
import CreateProduct from "../pages/createProduct/CreateProduct";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Products/>
            },
            {
                path:"/create-product",
                element: <CreateProduct/>
            },
            {
                path: "/contact",
                element: <Contact/>
            }
        ]
    }
])