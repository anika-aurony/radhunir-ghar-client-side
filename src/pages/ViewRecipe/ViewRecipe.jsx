import React, { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ChefBanner from './ChefBanner';

const ViewRecipe = () => {
    const { id } = useParams();
    const [Isloading, setIsLoading] = useState(true)
    // const chefsRecipe = useLoaderData();
    Isloading
    console.log(id)
    if(Isloading){
        <Spinner animation="border" variant="primary" />
    }
    
    const [chefsRecipe, setChefsRecipe] = useState()
    useEffect(() => {
        
        fetch(`https://chef-recipe-assignment-project-server-anika-tasnim-aurony.vercel.app/chefs/${id}`)
            .then(res => res.json())
            .then(data => {
                setChefsRecipe(data)
                setIsLoading(false)
            })
    }, [])

    
    console.log(chefsRecipe)
    

    return (
        <div>
            {
                Isloading==false && <ChefBanner chefsRecipe={chefsRecipe}></ChefBanner>
            }
            
            
        </div>
    );
};

export default ViewRecipe;