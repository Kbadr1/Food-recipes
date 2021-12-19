import React from 'react';

const RecipeDetails = ({ ingredients }) => {
    return (
        <ul className="RecipeDetails">
            {ingredients.map(ingredient => {
                return(
                        <li key={Math.random()}>{ingredient.text}</li>
                )
            })}
        </ul>
    )
}
 
export default RecipeDetails;