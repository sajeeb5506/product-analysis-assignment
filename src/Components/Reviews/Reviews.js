import React from 'react';
import useReview from '../../Hook/userReview';
import ReviewsAll from '../Reviewsall/ReviewsAll';

import './Reviews.css'

const Reviews = () => {
    const [productReviews, setProductReview]=useReview();
    
    return (
        <div>
         <h1  className='reviewheading'>Our Customers Review...</h1>
             <div className="review-comntainer">

                 {
                    productReviews.map(review=><ReviewsAll  key={review.id}
                        review={review} >
                        
                    </ReviewsAll>
                     
                    )
                 }
             </div>
        </div>
    );
};

export default Reviews;