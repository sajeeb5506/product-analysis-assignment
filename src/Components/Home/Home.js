import React from 'react';
import './Home.css'
import img from "../img/clp-h10b-module1-1920-2x.webp"
import { Link } from 'react-router-dom';

const Home = () => {
  
    return (
        <div>
            <div className="home-container">
                <div className=" left">
                    <h1 className='heading'>Hollywood in your hand.</h1>
                    <p className='discription'>Introducing HERO10 Black Creator Edition. 5K image quality and Emmy® award-winning stabilization. Integrated battery grip, tripod, remote, audio mic, and LED light put ultimate creative power in the palm of your hand.</p>
                    <button className='shop-btn'>Shop Now</button>
                </div>
                <div className="">
              
                   <img className='img' src={img} alt="" />

                </div>
            </div>
            <div className="">
                <h1 className='review-heading'>Customer revew</h1>
           
                
              <div className="">
              <Link to={'reviews'} className='shop-btn'> More Reviews</Link>
              </div>
            </div>
        </div>
    );
};

export default Home;