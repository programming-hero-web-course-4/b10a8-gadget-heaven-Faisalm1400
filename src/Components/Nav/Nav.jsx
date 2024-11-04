import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    const links = <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    </div>
    return (
        <div className="navbar bg-purple-500 rounded-t-2xl p-3 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <button className="btn btn-square btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-5 w-5 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-300 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Button</a>
            </div> */}
            <div className="navbar-end flex gap-2">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-white">
                        <MdOutlineShoppingCart className="text-black" />
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <Link to="/dashboard">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end items-center">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar bg-white">
                        <FaRegHeart className="text-black" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;