import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Fullmenu from "../Pages/FullMenu/Fullmenu";
import FoodOrder from "../Pages/FoodOrder/FoodOrder";
import LogIn from "../Pages/LOGIN/LogIn";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Fullmenu></Fullmenu>
            },
            {
                path: 'order/:category',
                element: <FoodOrder></FoodOrder>
            },
            {
                path: 'login',
                element: <LogIn></LogIn>
            },
        ]
    },
]);