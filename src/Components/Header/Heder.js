import React from 'react';

import { NavLink } from 'react-router-dom';

import './Header.css'
const Heder = () => {
    return (
        <div>
        <nav>
           <NavLink className={({ isActive }) =>
              isActive ? 'active' : 'a'} to='/'>Home</NavLink>
           <NavLink className={({ isActive }) =>
              isActive ? 'active' : 'a'} to="reviews">Reviews</NavLink>
           <NavLink className={({ isActive }) =>
              isActive ? 'active' : 'a'} to="dashboard">Dashboard</NavLink>
           <NavLink className={({ isActive }) =>
              isActive ? 'active' : 'a'} to="blogs">Blogs</NavLink>
           <NavLink className={({ isActive }) =>
              isActive ? 'active' : 'a'} to="about">About</NavLink>
        </nav>
        </div>
    );
};

export default Heder;