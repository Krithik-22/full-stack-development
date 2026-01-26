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
        <ul>
            {ingredientItemList}
        </ul>
    </>
  )
}

export default Main