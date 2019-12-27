import React from 'react'
import PrivateRoute from '../utils/PrivateRoute'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ChefDash from './ChefDash'
import Signup from './Signup'
import { Login } from './Login'
import Logout from './Logout'

const Header = props => {
   
    return (
        <div>
            <Router> 
                <nav>
                <Link to='/login'>Log In</Link>
                <Link to='/signup'>Sign Up</Link>
                
                </nav>

                   
                <PrivateRoute exact path='/chefdash' component={ChefDash}/> 
                <Route path='/login' component={Login}/> 
                <Route path='/signup' component={Signup}/>
                <Route path='/' component={Logout}/>
            </Router>
        </div>
    )
}
export default Header;