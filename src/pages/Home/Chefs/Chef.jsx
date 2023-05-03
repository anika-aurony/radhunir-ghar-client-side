import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Chef = ({chef}) => {
    const {picture, likes, experiance, name, recipesNumber} = chef;
    return (
        <div>
            <Col >
                <Card >
                    <Card.Img variant="top" className='' style={{height: '250px'}} src={picture}/>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p>Years of Experiance: {experiance}years</p>
                            <p>Number of Recipes: {recipesNumber}</p>
                            <div className='d-flex justify-content-between'>
                                <p>Likes: {likes}</p>
                                <Link to='/'><Button variant="outline-success" >View Recipes</Button></Link>
                                
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Chef;