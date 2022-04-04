import React from 'react';
import './ShortReview.css'
const ShortReview = ({review}) => {
    const {name,picture,discription,reating}=review;
    return (
        <div>
                <div className="cart">
                <img className='img-short' src={picture} alt="" />
                <h1 >{name}</h1>
                <p className='discription'> {discription}</p>
                <p className='discription'>{reating}</p>
            </div>
        </div>
    );
};

export default ShortReview;