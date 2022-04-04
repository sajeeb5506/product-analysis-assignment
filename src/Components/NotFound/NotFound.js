import React from 'react';
import './NotFound.css'
import img from '../img/404-tutorlms.png'
const NotFound = () => {
    return (
        <div>
            <img className='not-found' src={img} alt="" />
        </div>
    );
};

export default NotFound;