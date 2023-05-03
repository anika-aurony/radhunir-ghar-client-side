import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewRecipe = () => {
    const { id } = useParams();
    // const chefsRecipe = useLoaderData();
    console.log(id)

    const [chefsRecipe, setChefsRecipe] =useState()
    console.log(chefsRecipe)
    useEffect(()=>{
        fetch(`http://localhost:5000/chefs/${id}`)
        .then(res=>res.json())
        .then(data=>setChefsRecipe(data))
    },[])
    return (
        <div>
            <h1>hi</h1>
        </div>
    );
};

export default ViewRecipe;