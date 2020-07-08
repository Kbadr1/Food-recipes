import React, { useState } from 'react';
import RecipeDetails from './RecipeDetails';

const Recipes = ({ recipe }) => {
    const [show, setShow] = useState(false);
    const { url, image, label, ingredients } = recipe.recipe;

        return(
            <div className="recipe col-12 col-sm-6 col-lg-4" key={url} >
                <div className="rec col-12">
                    <img src={image} className="card-img-top" alt="..."/>
                    <div className="recipe-body">
                        <h5 className="recipe-title">{label}</h5>
                        <a className="btn btn-dark" onClick={() => setShow(!show)}>Ingredients</a>
                        {show && <RecipeDetails ingredients={ingredients}/>}
                    </div>
                </div>
                
            </div>
        )
}
 
export default Recipes;