import React, { useContext } from 'react'
import { RecipeContext } from '../App'
import RecipeIngredientsAdd from './RecipeIngredientsAdd'
import {v4 as uuidv4} from 'uuid'

export default function RecipeEdit({recipe}) {
    const {handleRecipeChange, handleRecipeSelect} = useContext(RecipeContext)
    function handleChange(changes){
        handleRecipeChange(recipe.id,{...recipe, ...changes})
    }
    function handleIngredientChange(id, ingredient){
        const newIngredients = [...recipe.ingredients]
        const index = newIngredients.findIndex(i => i.id === id)
        newIngredients[index] = ingredient 
        handleChange({ingredients : newIngredients})
    }
    function handleIngredientAdd(){
        const newIngredient = {
            id : uuidv4(),
            name: '',
            amount: ''
        }
        handleChange({ingredients : [...recipe.ingredients, newIngredient]})
    }
    function handleIngredientDelete(id){
        const newIngredientList = recipe.ingredients.filter(i => i.id != id)
        handleChange({ingredients : newIngredientList})
    }
  return (
    <div className='recipe-edit'>
        <div className='recipe-edit__remove-button-container'>
            <button onClick={()=> handleRecipeSelect(undefined)} className='btn recipe-edit__remove-button'>&times;</button>
        </div>
        <div className='recipe-edit__details-grid'>
            <label className='recip-edit__label' htmlFor='name'>Name</label>
            <input onChange={e => handleChange({name : e.target.value})} value={recipe.name} className='recipe-edit__input' type="text" name='name' id='name'/>
            <label className='recip-edit__label' htmlFor='cooktime'>Cook time</label>
            <input onChange={e => handleChange({cooktime : e.target.value})} value={recipe.cooktime} className='recipe-edit__input' type="text" name='cooktime' id='cooktime'/>
            <label className='recip-edit__label' htmlFor='servings'>Servings</label>
            <input onChange={e => handleChange({servings : +e.target.value})} value={recipe.servings} className='recipe-edit__input' type="number" min={1} name='servings' id='servings'/>
            <label className='recip-edit__label' htmlFor='instruction'>Instructions</label>
            <textarea onChange={e => handleIngredientChange({instructions : e.target.value})} value={recipe.instructions} className='recipe-edit__input' type="text" name='instructions' id='instructions'/>
        </div>
        <br/>
        <label>Ingredients</label>
        <div className='recipe-edit__ingredient-grid'>
            <div>Name</div>
            <div>Amount</div>
            <div></div>
            {recipe.ingredients.map(ingredient => <RecipeIngredientsAdd handleIngredientDelete={()=> handleIngredientDelete(ingredient.id)} handleIngredientChange={handleIngredientChange} key={ingredient.id} ingredient={ingredient}/>)}
        </div>
        <div className='recipe-edit__add-ingredient-btn-container'>
            <button onClick={handleIngredientAdd} className='btn btn--primary'>Add ingredient</button>
        </div>
    </div>
  )
}
