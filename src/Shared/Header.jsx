import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const navLink = <>
    <li><NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink></li>
    <li><NavLink to='/instructors' className={({ isActive }) => (isActive ? 'active' : 'default')}>Instructors</NavLink></li>
    <li><NavLink to='/classes' className={({ isActive }) => (isActive ? 'active' : 'default')}>Classes</NavLink></li>
    <li><NavLink to='/dashboard' className={({ isActive }) => (isActive ? 'active' : 'default')}>Dashboard</NavLink></li>
    <li><NavLink to='/login' className={({ isActive }) => (isActive ? 'active' : 'default')}>Login</NavLink></li>
    
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {navLink}
            </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">LanguageCenter</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            {navLink}
            </ul>
        </div>
        <div className="navbar-end mr-10">
                <div className='hidden lg:block'>
                <Link className='btn btn-primary mr-4'>Log Out</Link>
                </div>
                <div className="avatar tooltip tooltip-bottom" data-tip='shakil'>
                    <div className="w-14 rounded-full">
                        <img src='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;