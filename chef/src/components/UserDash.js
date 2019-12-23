import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { RecipeCard } from './RecipeCard';
import Header from './Header';



const UserDash = () => {
    const [recipes, setRecipes] = useState([])
    //get posts from api server using axioswithAuth
    useEffect(() => {
        axiosWithAuth()
        .get('/recipes')
        .then(res => setRecipes(res.data))
        .catch(err => console.log(err.res))
    })
    return (
        <div>
            <Header/>
           {recipes.map(item => (
               <RecipeCard 
                    key={item.id}
                    recipe_name={item.recipe_name}
                    user_id={item.user_id}
                    />
         
           ))}
             

        </div>
        )
    
}
export default UserDash;