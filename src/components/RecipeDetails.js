import React from 'react';

const RecipeDetails = ({ ingredients }) => {
    return (
        <div className="RecipeDetails">
            {ingredients.map(ingredient => {
                return(
                    <ul key={Math.random()}>
                        <li>{ingredient.text}</li>
                    </ul>
                )
            })}
        </div>
    )
}
 
export default RecipeDetails;