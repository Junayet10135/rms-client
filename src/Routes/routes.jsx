import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Fullmenu from "../Pages/FullMenu/Fullmenu";
import FoodOrder from "../Pages/FoodOrder/FoodOrder";
import LogIn from "../Pages/LOGIN/LogIn";
import SignUp from "../Pages/LOGIN/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem";
import Payment from "../Pages/Dashboard/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import AdminHome from "../Pages/Dashboard/AdminHome";
import UserHome from "../Pages/Dashboard/UserHome";
import ContactUs from "../Pages/Contact/ContactUs";
import AddReview from "../Pages/Dashboard/AddReview";
import Reservation from "../Pages/Dashboard/Reservation";
import MyBookings from "../Pages/Dashboard/MyBookings";
import ManageBooking from "../Pages/Dashboard/ManageBooking";
import StockItem from "../Pages/Dashboard/StockItem";
import StockList from "../Pages/Dashboard/StockList";
import WasteItem from "../Pages/Dashboard/WasteItem";
import WasteList from "../Pages/Dashboard/WasteList";


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
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'contact',
                element: <ContactUs></ContactUs>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'addReview',
                element: <AddReview></AddReview>
            },
            {
                path: 'reservation',
                element: <Reservation></Reservation>
            },
            {
                path: 'myBookings',
                element: <MyBookings></MyBookings>
            },

            // for admin

            {
                path: 'allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'adminHome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'addItem',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: 'manageItem',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: 'stockItem',
                element: <AdminRoute><StockItem></StockItem></AdminRoute>
            },
            {
                path: 'stockList',
                element: <AdminRoute><StockList></StockList></AdminRoute>
            },
            {
                path: 'wasteItem',
                element: <AdminRoute><WasteItem></WasteItem></AdminRoute>
            },
            {
                path: 'wasteList',
                element: <AdminRoute><WasteList></WasteList></AdminRoute>
            },

            {
                path: 'manageBooking',
                element: <AdminRoute><ManageBooking></ManageBooking></AdminRoute>
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            }
        ]
    }
]);