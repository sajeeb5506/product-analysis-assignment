import React from 'react';
import './Home.css'
import img from "../img/clp-h10b-module1-1920-2x.webp"
import { Link } from 'react-router-dom';
import userReview from '../../Hook/userReview';

import ShortReview from '../ShortReview/ShortReview';


const Home = () => {
   const [productReviews, setProductReview]= userReview();
   let shortREview=productReviews.slice(0, 3);

    return (
        <div>
            <div className="home-container">
                <div className=" left">
                    <h1 className='heading'>Hollywood in your hand.</h1>
                    <p className='discription'>Introducing HERO10 Black Creator Edition. 5K image quality and Emmy® award-winning stabilization. Integrated battery grip, tripod, remote, audio mic, and LED light put ultimate creative power in the palm of your hand.</p>
                    <button className='shop-btn'>Shop Now</button>
                </div>
                <div className="">
              
                   <img className='img-banner' src={img} alt="" />

                </div>
            </div>
            <div className="">
                <h1 className='review-heading'>Customer revew (3)...</h1>
                <div className="shortReview-container">
                {
                    shortREview.map(review=><ShortReview  key={review.id}
                        review={review} >
                        
                    </ShortReview>
                     
                    )
                }
            </div>
               
                <h1 className='btn'><Link to={'reviews'} className='shop-btn'> More Reviews</Link></h1>
              
            </div>
         
        </div>
    );
};

export default Home;