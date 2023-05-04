import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewItems = ({recipe}) => {


    console.log(recipe)
    const {name, method, ratings, ingredients} = recipe

    const handleFavourite = event =>{
        toast("This Recipe is my favourite!");
        event.currentTarget.disabled = true;
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='pt-3'>
                       
                        <p>Cooking Method: {method}</p>
                        <p>Rating: {ratings}</p>
                    </Card.Text>
                </Card.Body>
                <p className='p-2'><b>Ingredients:</b></p>
                <ListGroup variant="flush" className='mb-3'>
                    <ListGroup.Item>{ingredients[0]}</ListGroup.Item>
                    <ListGroup.Item>{ingredients[1]}</ListGroup.Item>
                    <ListGroup.Item>{ingredients[2]}</ListGroup.Item>
                    <ListGroup.Item>{ingredients[3]}</ListGroup.Item>
                    <ListGroup.Item>{ingredients[4]}</ListGroup.Item>
                    
                </ListGroup>
                <Button variant="primary" className='m-3' onClick={handleFavourite}>Favourite</Button>
            </Card>
            <ToastContainer />
        </div>
    );
};

export default ViewItems;