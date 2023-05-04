import React from 'react';
import { Card, Row } from 'react-bootstrap';
import ViewItems from './ViewItems';

const ChefBanner = ({ chefsRecipe }) => {
    const { picture, desc, name, experiance, likes, recipesNumber, recipes } = chefsRecipe
    return (
        <div>
            <Card>
                <div className='d-flex'>
                    <Card.Img variant="top" className='w-50 ' src={picture} style={{height: '450px'}}/>
                    <Card.Body>
                        <Card.Text>
                            <h4>{name}</h4>
                            <p> {desc}</p>
                            <p><b>Number of Recipes:</b> {recipesNumber} </p>
                            <p><b>Years of Experience:</b> {experiance} Years </p>
                            <p><b>Likes:</b> {likes} </p>
                        </Card.Text>
                    </Card.Body>
                </div>
            </Card>
            <h3 className='text-center my-5'>Yummy Recipes</h3>

            <div className='ms-5'>
                <Row xs={1} md={3} className="g-4">
                    {
                        recipes.map(recipe => <ViewItems key={recipe.id} recipe={recipe}></ViewItems>)
                    }
                </Row>
            </div>



        </div>
    );
};

export default ChefBanner;