import React, {useState} from 'react';
import './App.css';
import ChefDash from './components/ChefDash'
import PrivateRoute from './utils/PrivateRoute'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Login} from './components/Login'
import {Logout} from './components/Logout'
import Modal from './utils/modal'

function App() {
  const [showModal, setShowModal] = useState()
      
      const handleShowModal = e => {
        setShowModal({
            showModal: true
        })
      }
      const handleHideModal = e => {
        setShowModal({
          showModal: false
        })
      }
      
  return (
    <Router>
      <div className="App">
        {/* { showModal ? <div onClick={handleHideModal} className='back-drop'></div> : null }
        <button className='open-modal-btn' onClick={handleShowModal}>Log In</button> */}

        {/* <Modal className='modal'
               showModal={showModal}
               close={handleHideModal}
         >{Login}</Modal> */}
       
        <Link to='/login'>Log In</Link>
        <PrivateRoute exact path='/chefdash' component={ChefDash}/>
        <Route path='/login' component={Login}/>
        <Route path='/logout' component={Logout}/>
      </div>
    </Router>    

  );
}

export default App;
