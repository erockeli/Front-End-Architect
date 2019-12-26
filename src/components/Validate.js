export default function Validate(newUser) {
    let errors = {}

    if(!newUser.username) {
        errors.username = 'UserName required'
    }
    // if(!newUser.email) {
    // } else if (!/|S+@\S+\.\S+/.test(newUser.email)) {
    //     errors.email = 'Email is invalid'
    // }
    if(!newUser.password) {
        errors.password = 'Password required'
    } else if (newUser.password.length < 6) {
        errors.password = 'password must 8 characters'
    }
    return errors
}