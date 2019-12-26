import React, { useState } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import useForm from './useForm'
import Validate from './Validate'




// start of Component

const SignUp = props => {
  
  const {handleChange, newUser, setErrors, errors } = useForm(Validate)

  const handleSubmit = e => {
    setErrors(Validate(newUser))
    e.preventDefault();
    
    axiosWithAuth()
      .post('/auth/register', newUser)     
      .then(res => {
        console.log("registration res", res)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('userId', res.data.user.id)
        props.history.push('/chefdash')
      }, [])
      .catch(error => console.log(error));
  };

  return (
    

      <div className="signup">
        <form onSubmit={handleSubmit} noValidate>
       
        <h3>Sign-Up</h3>
          <input
            name="firstname"
            placeholder="First Name"
            onChange={handleChange}
            value={newUser.firstname}
            type="text"
          />        
          <input
            name="lastname"
            placeholder="Last Name"
            onChange={handleChange}
            value={newUser.lastname}
            type="text"
          />
          <br/>
          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={newUser.username}
            type="text"         
          /> 
          {errors.username && <p>{errors.username}</p>}        
          <input
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={newUser.password}
            type="password"
          />
          {errors.password && <p>{errors.password}</p>} 
          <br/>
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={newUser.email}
            type="email"
          
          />
          {errors.email && <p>{errors.email}</p>} 
          <input
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            value={newUser.phone}
            type="phone"
          />
          <br/>
          <input
            name="address"
            placeholder="Address"
            onChange={handleChange}
            value={newUser.address}
            type="text"
          />
          <input
            name="state"
            placeholder="State"
            onChange={handleChange}
            value={newUser.state}
            type="text"
          />
          <input
            name="city"
            placeholder="City"
            onChange={handleChange}
            value={newUser.city}
            type="text"
          />          
          <br/>        
          {/* <input
            name="zipcode"
            placeholder="Zip"
            onChange={handleChange}
            value={newUser.zipCode}
            type="text"
          /> */}
          <br/>        
          <button>Submit</button>
        </form>
      </div>
    
  );
};

export default SignUp;