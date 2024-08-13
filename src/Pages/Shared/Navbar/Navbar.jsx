import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { BsCart2 } from "react-icons/bs";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navList = <>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/menu">OUR MENU</Link></li>
        <li><Link to="/order/salad">FOOD ORDER</Link></li>
        <li><Link to="/secret">SECRET</Link></li>


    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navList}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">MINIMALIST CAFE</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navList}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <span>{user?.displayName}</span>
                        <button onClick={handleLogOut} className="btn btn-ghost">LOG OUT</button>
                    </> : <>
                        <li><Link to="/login">LOG IN</Link></li>
                    </>
                }
                <li>
                    <Link to="/">
                        <button className="btn btn-ghost">
                            <BsCart2 className="mr-2" />
                            <div className="badge badge-secondary">+{cart.length}</div>
                        </button>
                    </Link>
                </li>
            </div>
        </div>
    );
};

export default Navbar;