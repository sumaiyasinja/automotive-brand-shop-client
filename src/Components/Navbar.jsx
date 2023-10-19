import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {

    const {user,logOut} = useContext(AuthContext)    

    const NavLinks= <>
        <li><NavLink  activeClassName="active" className="py-1 hover:text-red-500" to="/">Home</NavLink></li>
        <li><NavLink  activeClassName="active" className="py-1 hover:text-red-500" to="/addProduct">Add Product</NavLink></li>
        <li><NavLink  activeClassName="active" className="py-1 hover:text-red-500" to="/updateProduct/65302aee267fe6e8769bead1">Up Product</NavLink></li>
        <li><NavLink  activeClassName="active" className="py-1 hover:text-red-500" to="/about">About US</NavLink></li>
        <li><NavLink  activeClassName="active" className="py-1 hover:text-red-500" to="/about">About US</NavLink></li>
         </>
        //  https://quattro.true-emotions.studio/cart/
        // https://quattro.true-emotions.studio/

        const handleLogOut =()=>{        
            logOut()
            .then (()=> {
                toast.success("logged out successfully.")
            })
            .catch(error => {
                console.log('failed logging out')
    
                toast.error("error occured while doing logout", error.message)})
        }
    

    return (
    <div className="navbar bg-[#000000AA] fixed z-10">
    <Toaster position="bottom"></Toaster>
        
    <div className="navbar-start">
        <div className="dropdown">
        <label tabIndex={0} className="lg:hidden px-5 mx-20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="bg-[#000000AA] text-white font-bold text-base menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
        
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
    <div className="navbar-end text-sm gap-3">
            {user ?             
                <div className='flex flex-row-reverse gap-3 items-center'>
                    <div className="avatar">
                    <div className="w-12 rounded-full border border-white">
                    <img src={user?.photoURL} alt="Profile" />
                    </div>
                    </div>
                    <div className="text-white">{user?.displayName}</div>
                </div>
                :
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src="https://i.ibb.co/XFJxrG4/pngegg.png" />
                        {/* <img src="https://i.ibb.co/ZJ9wjPx/signup.png" /> */}
                        {/* <img src="https://i.ibb.co/nPgr5XN/signin.png" /> */}
                    </div>
                </div>
            }
            {user ?
                <Link onClick={handleLogOut} className="px-2 md:px-5 py-2 text-base cursor-pointer rounded-lg 
                text-white font-semibold text-center text-18 bg-transparent hover:bg-[#FFFFFF30] hover:scale-105  rounded-25 shadow-md transition-transform duration-300
                ">Sign Out</Link>
                :
                <Link to="/signin" className="px-5 py-2 text-base cursor-pointer rounded-lg  
                text-white font-semibold text-center text-18 bg-transparent hover:bg-[#FFFFFF30] hover:scale-105  rounded-25 shadow-md transition-transform duration-300
                ">Sign in</Link>
            }
        </div>
    </div>
    );
};

export default Navbar;