import React from 'react';
import { Link } from 'react-router-dom';


import './Header.css'
const Heder = () => {
    return (
        <div>
        <nav>
           <Link to='/'>Home</Link>
           <Link to="reviews">Reviews</Link>
           <Link to="dashboard">Dashboard</Link>
           <Link to="blogs">Blogs</Link>
           <Link to="about">About</Link>
        </nav>
        </div>
    );
};

export default Heder;