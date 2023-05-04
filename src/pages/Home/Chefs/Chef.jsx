import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const Chef = ({chef}) => {
    const {_id, picture, likes, experiance, name, recipesNumber} = chef;
    return (
        <div>
            <Col >
                <Card >
                    <LazyLoad height={262}>
                    <Card.Img variant="top" className='' style={{height: '250px'}} src={picture}/></LazyLoad>
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