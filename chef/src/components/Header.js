import React from 'react'
import SignUp from './Signup'
import { Login } from './Login'

export const Header = () => {
    return (
        <div>
            <nav>
            <button>Log In</button>
            <button>Sign Up</button>
            </nav>
        </div>
    )
}