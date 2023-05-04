import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Popular = () => {
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://www.chefspencil.com/wp-content/uploads/Panta-Ilish-960x720.jpg.webp" style={{height: "250px"}}/>
                    <Card.Body>
                        <Card.Title>Panta Ilish</Card.Title>
                        <Card.Text>
                            Panta Ilish is a traditional food that almost every Bangladeshi eats at the Pohela Boishakh Festival (the first day of Bangla year). It’s the most popular food in Bangladesh. We love this dish as it is a great symbol and celebration of our culture and tradition.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" src="https://www.chefspencil.com/wp-content/uploads/Khichuri-960x960.jpg.webp" style={{height: "250px"}} />
                    <Card.Body>
                        <Card.Title>Vuna Khichuri/ Khichuri</Card.Title>
                        <Card.Text>
                            Khichuri is a dish made of rice and lentils (dal). Vuna Khichuri (roasted) is cooked with different ingredients and spices from normal Khichuri. It’s served with roasted meat and pickle. It’s one of the tastiest and best loved foods in Bangladesh. Seasoned with a dash of turmeric and salt and topped with ghee, Khuchuri makes an ideal lunch or dinner.
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://www.chefspencil.com/wp-content/uploads/Screenshot-2021-05-24-at-19.15.48.jpg.webp" style={{height: "250px"}} />
                    <Card.Body>
                        <Card.Title>Grill Chicken With Naan Roti</Card.Title>
                        <Card.Text>
                            Almost every restaurant in Bangladesh serves this dish, and more than 50,000 grilled chickens are sold every day throughout the country. There are different ways of grilling chicken and there are many variations of spices that are used. Many restaurants roast chickens in a glass oven placed outside to entice people in to eat. It’s a very successful strategy.
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
            </CardGroup>
        </div>
    );
};

export default Popular;