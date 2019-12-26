import {useState,useEffect} from 'react'
// import Validate from './Validate'

const useForm = Validate => {
    
    const [errors, setErrors] = useState({})
    const [newUser, setNewUser] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "", 
        email: "",
        phone: '',
        state: '',
        city: "",
        address: ""          
      });
     
    const handleChange = e => { 
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
      };
      
      return {
          handleChange,
          newUser,
          setErrors,
          errors          
      }
}
export default useForm;

