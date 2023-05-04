import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Chef = ({ chef }) => {
    const { _id, picture, likes, experiance, name, recipesNumber } = chef;
    return (
        <div>
            <Col >
                <Card >
                    <LazyLoadImage  effect="blur" variant="top" className='' style={{ height: '250px',  width: '373px'}} src={picture}></LazyLoadImage>
                    
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p>Years of Experiance: {experiance}years</p>
                            <p>Number of Recipes: {recipesNumber}</p>
                            <div className='d-flex justify-content-between'>
                                <p>Likes: {likes}</p>
                                <Link to={`/chefs/${_id}`}><Button variant="outline-success" >View Recipes</Button></Link>

                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Chef;