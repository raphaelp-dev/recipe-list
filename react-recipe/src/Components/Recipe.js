import React from 'react'

export default function Recipe(props) {
  return (
    <div>
        <div>
            <h3>{props.name}</h3>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
        <div>
            <span>Cook time</span>
            <span>{props.cooktime}</span>
        </div>
        <div>
            <span>Servings</span>
            <span>{props.servings}</span>
        </div>
        <div>
            <span>Instructions</span>
            <span>{props.instructions}</span>
        </div>
    </div>

  )
}
