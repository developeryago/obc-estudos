import { createBrowserRouter } from "react-router-dom";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import AdminHome from "./pages/Admin";
import RootLayout from "./RootLayout";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element:<RootLayout/>,
        children: [{
                path:"/home",
                element: <Home></Home>,
            },
            {
                path: "/products",
                element: <Products/>,
            }, 
            {
                path: "/cart",
                element: <Cart/>,
            },
        ]
    },
    {
        path: "/admin",
        element: <AdminHome/>
    }
])

export default router