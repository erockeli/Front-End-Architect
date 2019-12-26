import React from 'react'
import pictures from '../images'

export const RecipeCard = props => {
    console.log('what is props',pictures[props.id])
    return (
        <div>
            
            <div><span>{props.recipe_name}</span></div>
            <img src={pictures[props.id]} alt=''/>
            
            
        </div>
    )
}