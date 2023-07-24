import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import MyAccount from "../pages/MyAccount/MyAccount";
import MyOrder from "../pages/MyOrder/MyOrder";
import MyOrders from "../pages/MyOrders/MyOrders";
import SingIn from "../pages/SignIn/SingIn";

export const routes = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    errorElement: <NotFound/>,
    children: [
        {
            index:true,
            element: <Home/>
        },
        {
            path: "/my-account",
            element: <MyAccount/>
        },
        {
            path: "/my-order",
            element: <MyOrder/>
        },
        {
            path: "/my-orders",
            element: <MyOrders/>
        }
        ,
        {
            path: "/sign-in",
            element: <SingIn/>
        }
    ]

}]);
