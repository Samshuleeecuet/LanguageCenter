import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaCartPlus, FaPlusCircle, FaUser, FaWallet } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';
const DashBoardLayout = () => {
    const {user,logOut} = useContext(AuthContext);
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet/>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        </div>
        <div className="drawer-side bg-green-300">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <div className="avatar z-20 ml-20 mt-5">
                <div className="w-14 rounded-full">
                    <img src={user?.photoURL} />
                </div>
            </div>
            <p className='font-medium text-center'>{user?.displayName}</p>
            <ul className="menu p-4 w-60 h-full  text-base-content">
                
                <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to='/dashboard/mycart'><FaCartPlus/> Manage Classes</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to='/dashboard/addclass'><FaPlusCircle/>Add A Class</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to='/dashboard/wallet'><FaWallet/> Payment History </NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to='/dashboard/users'><FaUser/> Manage Users </NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to='/dashboard/manageclasses'><FaUser/> Manage Classes</NavLink></li>
                <div className='divider'></div>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/instructors'>Instructors</Link></li>
                <li><Link to='/classes'>Classes</Link></li>
                <li><Link onClick={logOut} className='font-medium tracking-wide text-gray-700 transition-colors duration-200 mr-4'>Log Out</Link></li>
            </ul>
            
        
        </div>
        </div>
    );
};

export default DashBoardLayout;