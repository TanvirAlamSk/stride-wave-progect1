import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import About from "../pages/About";
import DashboardLayouts from "../layouts/DashboardLayouts";
import Dashboard from "../pages/Dashboard";
import ProductPage from "../pages/Product";
import PrivateRouter from "./PrivateRouter";
import AllProducts from "../pages/AllProducts/AllProducts";
import CreateProduct from "../pages/CreateProduct";
import UpdateProduct from "../pages/UpdateProduct";

export const router = createBrowserRouter([
    {
        path: "/login", element: <Login></Login>
    },
    {
        path: "/signup", element: <Signup></Signup>
    },
    {
        path: "/", element: <Main></Main>, children: ([
            {
                path: "/", element: <Home></Home>,
                loader: () => fetch("http://localhost:3000/shoes")
            },
            {
                path: "/about", element: <About></About>
            },
            {
                path: "/product/:id", element: <ProductPage></ProductPage>,
                loader: ({ params }) => fetch(`http://localhost:3000/shoes/${params.id}`)
            },
            {
                path: "/all-products",
                element: <AllProducts></AllProducts>,
                loader: () => fetch('http://localhost:3000/shoes')
            }
        ])
    },
    {
        path: "dashboard",
        element: <PrivateRouter><DashboardLayouts></DashboardLayouts></PrivateRouter>,
        children: ([
            {
                path: "", element: <Dashboard></Dashboard>,
                loader: () => fetch('http://localhost:3000/shoes')
            },
            {
                path: "add-product",
                element: <CreateProduct></CreateProduct>,
                loader: () => fetch('http://localhost:3000/shoes')
            },
            {
                path: "update/:id",
                element: <UpdateProduct></UpdateProduct>,
                loader: ({ params }) => fetch(`http://localhost:3000/shoes/${params.id}`)
            }
        ])
    }
])
