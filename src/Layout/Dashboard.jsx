import { NavLink, Outlet } from "react-router-dom";
import { GiShoppingCart, GiWallet } from "react-icons/gi";
import { FaBook, FaCalendarAlt, FaEnvelope, FaHome, FaList, FaPlus, FaSearch, FaUsers, FaUtensils } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();

    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            {/* Dashboard side bar  */}
            <div className="w-64 min-h-screen bg-orange-400">
                <h2 className="text-white uppercase text-center p-4">Minimalist Cafe</h2>
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li> <NavLink to="/dashboard/adminHome"> <FaHome /> ADMIN HOME</NavLink></li>
                            <li> <NavLink to="/dashboard/addItem"> <FaUtensils /> ADD ITEMS</NavLink></li>
                            <li> <NavLink to="/dashboard/manageItem"> <FaList /> MANAGE ITEMS</NavLink></li>
                            <li> <NavLink to="/dashboard/manageBooking"> <FaBook /> MANAGE BOOKINGS</NavLink></li>
                            <li> <NavLink to="/dashboard/allUsers"> < FaUsers /> ALL USERS</NavLink></li>
                            <li> <NavLink to="/dashboard/stockItem"> < FaPlus /> STOCK ITEM</NavLink></li>
                            <li> <NavLink to="/dashboard/stockList"> < FaList /> STOCK LIST</NavLink></li>
                            <li> <NavLink to="/dashboard/wasteItem"> < FaPlus /> WASTE ITEM</NavLink></li>
                            <li> <NavLink to="/dashboard/wasteList"> < FaList /> WASTE LIST</NavLink></li>

                        </>
                            :
                            <>
                                <li> <NavLink to="/dashboard/userHome"> <FaHome /> USER HOME</NavLink></li>
                                <li> <NavLink to="/dashboard/reservation"> <FaCalendarAlt /> RESERVATION</NavLink></li>
                                <li> <NavLink to="/dashboard/paymentHistory"> <GiWallet /> PAYMENT HISTORY</NavLink></li>
                                <li> <NavLink to="/dashboard/cart"> <GiShoppingCart /> MY CART ({cart.length})</NavLink></li>
                                <li> <NavLink to="/dashboard/addReview"> <MdOutlineRateReview /> ADD REVIEW</NavLink></li>
                                <li> <NavLink to="/dashboard/myBookings"> <FaListUl /> MY BOOKINGS</NavLink></li>

                            </>
                    }
                    {/* shared nav links */}

                    <div className="divider"></div>
                    <li> <NavLink to="/"> <FaHome /> HOME</NavLink></li>
                    <li> <NavLink to="/order/salad"> <FaSearch /> MENU</NavLink></li>
                    <li> <NavLink to="/contact"> <FaEnvelope /> CONTACT</NavLink></li>
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