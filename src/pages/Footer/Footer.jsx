import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark mt-5 text-light p-3'>
            <div className='d-flex justify-content-around mt-3'>
                <div>
                    <h4>Explore More...</h4>
                    <p>About Us...</p>
                    <p>Client Reviews...</p>
                    <p>Food Blogs...</p>
                </div>
                <div>
                    <h5>Contact us:</h5>
                    <h6>Radhunir Ghar</h6>

                    <p>Address: 20, Bangshal, Dhaka 1210</p>
                    <p>Mob: 019348235</p>

                </div>
            </div>
            <p className='text-center mt-3 '> Copyright © 2020. Radhunir Ghar</p>
        </div>
    );
};

export default Footer;