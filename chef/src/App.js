import React from 'react';
import './App.css';
import UserDash from './components/UserDash'

import PrivateRoute from './utils/PrivateRoute'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import {Logout} from './components/Logout'


function App() {
  
      
  return (
    
      <div className="App">
        
        <UserDash/>
       

        {/* <Router> */}
       
        {/* <PrivateRoute exact path='/chefdash' component={ChefDash}/> */}
        {/* <Route path='/login' component={Login}/> */}
        {/* <Route path='/userdash' component={UserDash}/>
        </Router>  */}
      </div>
       

  );
}

export default App;
