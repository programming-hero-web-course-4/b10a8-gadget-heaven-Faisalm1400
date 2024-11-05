import { useContext, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AssetContext } from "../Root/Root";

const Nav = () => {
    const { getStoredCart } = useContext(AssetContext);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const [cartLength, setCartLength] = useState(0);

    useEffect(()=>{
        const storedCart= getStoredCart();
        setCartLength(storedCart.length);
    },[]);

    const links = <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    </div>
    return (
        <div className={`navbar ${isHomePage ? 'bg-purple-500 text-white' : 'bg-white'} rounded-t-2xl p-3 `}>
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
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-white border-black">
                        <div className="indicator">
                            <Link to="/dashboard">
                                <div>
                                    <MdOutlineShoppingCart className="text-black text-xl" />
                                </div>
                                <span className="badge badge-xs indicator-item">{cartLength}</span>
                            </Link>
                        </div>

                    </div>
                </div>
                <div className="dropdown dropdown-end items-center">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar bg-white border-black">
                        <FaRegHeart className="text-black text-xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;