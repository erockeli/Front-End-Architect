// import React, { useState, useEffect } from 'react'

// import {axiosWithAuth} from '../utils/axiosWithAuth'


//  const ChefDash = () => {
//     const [posts, setPosts] = useState([])
//     //get posts from api server using axioswithAuth
//     useEffect(() => {
//         axiosWithAuth()
//         .get('/recipes/auth/user')
//         .then(res => setPosts(res.data))
//         .catch(err => console.log(err.res))

//     })
// //put request for the edit passing post(body)
// //assigning variable that will be passed to editPost
//     const postEdit = post => {
//         axiosWithAuth()
//         .put(`/auth/user/recipes${recipes.id}`, post)
//         .then(res => {
//             setPosts(res.data)
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     }
//     //post request to add post newPost
    
//     const addRecipe = newRecipe => {
//         axiosWithAuth()
//         .post('/auth/user/:id', newRecipe )
//         .then(res => {
//             setPosts(res.data)
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     }
//     //delete request for deletepost
//     const deletePost = post => {
//         axiosWithAuth()
//         .delete(`/auth/user/recipes${recipes.id}`)
//         .then(res => {
//             setPosts(res.data)
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     }
//     return (
//         <div>
//             <h1>Recipes</h1>
//             <AddRecipe addRecipe={addPost}/>
//         {recipes.map(post => (
//                 <EditRecipes
//                     key={post.id}
//                     recipes={recipes}
//                     postEdit={postEdit}
//                     deletePost={deletePost}
//                     />                    
                    
//             ))}
                
//         </div>
//     )
// }
// export default ChefDash;