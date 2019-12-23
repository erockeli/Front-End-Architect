import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";




// start of Component

const SignUp = props => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    streetAddress: "",
    city: "",
    state: "",
    phone: '',
    username: "",
    password: ""
  });
 

  const handleChange = e => {
    setNewUser({
        ...newUser,
        [e.target.name]: e.target.value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/auth/register', newUser)     
      .then(response => {
        console.log("registration response", response)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('userId', response.data.user.id)
        props.history.push('/chefdash')
      })
      .catch(error => console.log(error));
  };

  return (
    

      <div className="signup">
        <form onSubmit={handleSubmit}>
        <h1>Let's Eat</h1>
        <h2>Sign-Up</h2>
          <input
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            value={newUser.firstName}
            type="text"
          />
          <input
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            value={newUser.lastName}
            type="text"
          />
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={newUser.email}
            type="email"
          />
          <input
            name="streetAddress"
            placeholder="Address"
            onChange={handleChange}
            value={newUser.streetAddress}
            type="text"
          />
          <input
            name="city"
            placeholder="City"
            onChange={handleChange}
            value={newUser.city}
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
            name="zipCode"
            placeholder="Zip"
            onChange={handleChange}
            value={newUser.zipCode}
            type="text"
          />
          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={newUser.username}
            type="text"
          />
          <input
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={newUser.password}
            type="password"
          />
          
          <buttons>Submit</buttons>
        </form>
      </div>
    
  );
};

export default SignUp;