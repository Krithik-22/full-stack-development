import React from 'react'
import { useState } from 'react'

function Main() {
    const [ingredients, setIngredients] = useState([])

const ingredientItemList = ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)

const handleSubmit = (formData) => {
    console.log("Input button clicked")
    const newIngredient = formData.get('ingredient')
    setIngredients(prevItemList => [...prevItemList, newIngredient])
    console.log(ingredients)
}
  return (
    <>
        <form action={handleSubmit}>
            <input type="text" aria-label='add ingredient' name='ingredient' />
            <button type='submit'>Add Ingredient</button>
        </form>
        {ingredients.length > 0 && 
            <section>
                <h2>Ingredients:</h2>
                <ul>{ingredientItemList}</ul>
                {ingredients.length >= 4 &&
                    <div>
                        <h3>Ready for a Recipe? Click on the below button to generate a recipe!</h3>
                        <button>Get a Recipe</button>
                    </div>
                }
            </section>
        }
    </>
  )
}

export default Main