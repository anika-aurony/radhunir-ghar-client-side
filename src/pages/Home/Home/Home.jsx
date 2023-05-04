import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Chef from '../Chefs/Chef';
import { Card, Col, Row } from 'react-bootstrap';
import Popular from './Popular/Popular';
import Services from '../Services/services';
// import { GrDeliver } from 'react-icons/fa';

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
            <div className='mt-3 px-5 ms-5'>
                <h3 className='text-success my-5 text-center'>Our Services</h3>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card border="info" style={{ width: '15rem' }}>

                            <Card.Body className='text-center'>
                                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGE0p0y9iE7eSnIakLs0BEk36O9AYh44lfHA&usqp=CAU" style={{ height: '100px', width: '100px' }} />
                                <Card.Title>Home Service</Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="info" style={{ width: '15rem' }}>

                            <Card.Body className='text-center'>
                                <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/1940/1940981.png" style={{ height: '100px', width: '100px' }} />

                                <Card.Title>Catering Services</Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="info" style={{ width: '15rem' }}>

                            <Card.Body className='text-center'>
                                <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/2037/2037551.png" style={{ height: '100px', width: '100px' }} />
                                <Card.Title>Event Management</Card.Title>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

        </div>
    );
};

export default Home;