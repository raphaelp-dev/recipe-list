import React, { useContext } from 'react'
import { RecipeContext } from '../App'
import IngredientList from './IngredientList'

export default function Recipe(props) {
    const {handleRecipeDelete} = useContext(RecipeContext)
  return (
    <div className='recipe'>
        <div className='recipe__header'>
            <h3 className='recipe__title'>{props.name}</h3>
            <div>
                <button className='btn btn--primary mr-1'>Edit</button>
                <button onClick={()=>handleRecipeDelete(props.id)}  className='btn btn-danger'>Delete</button>
            </div>
        </div>
        <div className='recipe__row'>
            <span className='recipe__label'>Cook time</span>
            <span className='recipe__value'>{props.cooktime}</span>
        </div>
        <div className='recipe__row'>
            <span className='recipe__label'>Servings: </span>
            <span className='recipe__value'>{props.servings}</span>
        </div>
        <div className='recipe__row'>
            <span className='recipe__label'>Instructions</span>
            <span className='recipe__value recipe__value--indented recipe__instructionss'>{props.instructions}</span>
        </div>
        <div className='recipe__row'>
            <span className='recipe__label'>Ingredients</span>
            <span className='recipe__value recipe__value--indented'><IngredientList ingredients={props.ingredients}/></span>
        </div>
    </div>

  )
}
