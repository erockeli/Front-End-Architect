import React from 'react'

export const RecipeCard = props => {
    return (
        <div>
            <div>{props.id}</div>
            <div>{props.recipe_name}</div>
            <div>{props.user_id}</div>
        </div>
    )
}