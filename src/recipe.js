import React, {useState} from 'react'
import RecipeDetails from "./recipedetails"

const Recipe = ({recipe}) => {
    const [show, setShow] = useState(false)
    const {label, image, url, ingredients} = recipe.recipe
    return (
    <div className="recipe">
        <h2>{label}</h2>
        <img src={image} alt={label}/>
        <a className="URL" href={url} target="_blank">
            Recipe
        </a>
        <button onClick={() => setShow(!show)}>Ingredients</button>
        {show  && <RecipeDetails ingredients={ingredients}/>}
        <a className="twitter-share-button"
  href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20dinner%20suggested%20to%20me%20by%20UNNAMED%20APP/${url}`} target="_blank">
Tweet</a>
    </div>
    )
}

export default Recipe