import { NavLink, Outlet } from "react-router-dom";
import { GiShoppingCart, GiWallet } from "react-icons/gi";
import { FaCalendarAlt, FaHome, FaSearch } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="flex">
            {/* Dashboard side bar  */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    <li> <NavLink to="/dashboard/userHome"> <FaHome /> USER HOME</NavLink></li>
                    <li> <NavLink to="/dashboard/reservation"> <FaCalendarAlt /> RESERVATION</NavLink></li>
                    <li> <NavLink to="/dashboard/paymentHistory"> <GiWallet /> PAYMENT HISTORY</NavLink></li>
                    <li> <NavLink to="/dashboard/cart"> <GiShoppingCart /> MY CART ({cart.length})</NavLink></li>
                    <li> <NavLink to="/dashboard/addReview"> <MdOutlineRateReview /> ADD REVIEW</NavLink></li>
                    <li> <NavLink to="/dashboard/myBookings"> <FaListUl /> MY BOOKINGS</NavLink></li>

                    <div className="divider"></div>
                    <li> <NavLink to="/"> <FaHome /> HOME</NavLink></li>
                    <li> <NavLink to="/order/salad"> <FaSearch /> MENU</NavLink></li>
                </ul>
            </div>
            {/* Dashboard Content */}
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;