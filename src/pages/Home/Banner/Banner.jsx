import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className="card text-dark  " >
            <img src="https://thesimpletravel.com/wp-content/uploads/2022/02/Foods-in-Bangladesh.jpg?ezimgfmt=ng%3Awebp%2Fngcb4%2Frs%3Adevice%2Frscb4-1" className="card-img" alt="..." style={{ height: '450px', opacity: '0.5' }} />
            <div className='text-center text-dark' >
                <div className="card-img-overlay ">
                    <h5 className="card-title p-5 text-title" style={{ color: "darkgreen", fontWeight: '600px', fontSize: '60px' }}>Welcome to Radhunir Ghar</h5>
                    <p className="card-text pt-5 banner-text" style={{ fontWeight: '500px', fontSize: '20px', color: "darkgreen" }}>Bangladesh is a country of great cuisine. Its food has been shaped by its diverse history and its particular geography. Bangladeshi cuisine is influenced by Mughlai cuisine and many Persian, Turkish, Arabic, and Indian dishes are popular here. So you can guess how many different tastes you will find on any menu.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;