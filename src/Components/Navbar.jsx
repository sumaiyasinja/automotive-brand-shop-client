import { NavLink } from "react-router-dom";

const navbar = () => {

    const NavLinks= <>
        <li><NavLink  activeClassName="active" className="py-1 hover:text-red-500" to="/">Home</NavLink></li>
        <li><NavLink  activeClassName="active" className="py-1 hover:text-red-500" to="/addProduct">Add Product</NavLink></li>
        <li><NavLink  activeClassName="active" className="py-1 hover:text-red-500" to="/about">About US</NavLink></li>
        <li><NavLink  activeClassName="active" className="py-1 hover:text-red-500" to="/about">About US</NavLink></li>
         </>
        //  https://quattro.true-emotions.studio/cart/
        // https://quattro.true-emotions.studio/

    return (
    <div className="navbar bg-[#000000AA] fixed z-10">
        
    <div className="navbar-start">
        <div className="dropdown">
        <label tabIndex={0} className="lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className=" text-white font-bold text-base menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
        
            {NavLinks}

        </ul>
        </div>
        <div className="flex items-center justify-center">
        <img className="max-h-14" src="https://i.ibb.co/8gqXQY9/wepik-modern-carepair-car-service-logo-20231018123809j-Tq-J.png" alt="" />

        </div>
    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4 px-1 text-white font-bold text-base ">

        {NavLinks}

        </ul>
    </div>
    <div className="navbar-end">
        <a className="btn">Button</a>
    </div>
    </div>
    );
};

export default navbar;