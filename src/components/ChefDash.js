import React, { useState, useEffect } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import Logout from './Logout'


 const ChefDash = () => {
    const [recipes, setRecipes] = useState([])
    //get posts from api server using axioswithAuth
    useEffect(() => {
        axiosWithAuth()
        .get('/recipes/auth/user/:id')
        .then(res => setRecipes(res.data))
        .catch(err => console.log(err.res))

    }, [])
//put request for the edit passing post(body)
//assigning variable that will be passed to editPost
    const recipeEdit = recipe => {
        axiosWithAuth()
        .put(`/auth/user/recipes${recipes.id}`, recipe)
        .then(res => {
            setRecipes(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    //post request to add post newPost
    
    const addRecipe = newRecipe => {
        axiosWithAuth()
        .post('/auth/user/:id', newRecipe )
        .then(res => {
            setRecipes(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    //delete request for deletepost
    const deleteRecipe = post => {
        axiosWithAuth()
        .delete(`/auth/user/recipes${recipes.id}`)
        .then(res => {
            setRecipes(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            <Logout/>
            <h1>Chef DashBoard</h1>
            {/* <h1>Recipes</h1>
            <AddRecipe addRecipe={addRecipe}/>
        {recipes.map(post => (
                <EditRecipes
                    key={post.id}
                    recipes={recipes}
                    recipeEdit={recipeEdit}
                    deleteRecipe={deleteRecipe}
                    />                    
                    
            ))} */}
                
        </div>
    )
}
export default ChefDash;