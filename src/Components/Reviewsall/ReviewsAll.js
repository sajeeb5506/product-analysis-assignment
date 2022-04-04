import React from 'react';
import './ReviewsAll.css'
const ReviewsAll = ({review}) => {
    const {name,picture,discription,reating}=review;
    return (
        <div>
              <div className="cart">
                <img className='img' src={picture} alt="" />
                <h1>{name}</h1>
                <p className='discription'>{discription}</p>
                <p className='discription'>{reating}</p>
            </div>
        </div>
    );
};

export default ReviewsAll;