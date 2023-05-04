import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Chef from '../Chefs/Chef';
import { Row } from 'react-bootstrap';
import Popular from './Popular/Popular';

const Home = () => {

    const chefs = useLoaderData();
    console.log(chefs)
    return (
        <div>
            <Banner></Banner>
            <div className='mt-3 px-5'>
                <h3 className='text-success my-5 text-center'>Top Chefs of Bangla Cuisine</h3>
                <Row xs={1} md={3} className="g-4">
                    {
                        chefs.map(chef => <Chef key={chef._id} chef={chef}></Chef>)
                    }
                </Row>
            </div>
            <div className='mt-3 px-5'>
                <h3 className='text-success my-5 text-center'>Most Popular Food in Bangladesh</h3>
                    <Popular></Popular>
            </div>

        </div>
    );
};

export default Home;