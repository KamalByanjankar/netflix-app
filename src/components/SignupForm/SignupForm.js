import React, { useState } from 'react'
import LoginForm from '../LoginForm/LoginForm'
import './SignupForm.css'
import {auth} from '../../context/firebase'
import { useHistory } from 'react-router'

function SignupForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const [isEmailActive, setIsEmailActive] = useState(false)
    const [isPasswordActive, setIsPasswordActive] = useState(false)
    const [isRepasswordActive, setIsRepasswordActive] = useState(false)
    const history = useHistory()


    const handleEmailChange = (e) => {
        const value = e.target.value
        setEmail(value)

        if(value !== ''){
            setIsEmailActive(true)
        }       
        else {
            setIsEmailActive(false)
        }
    }

    const handlePasswordChange = (e) => {
        const value = e.target.value
        setPassword(value)

        if(value !== ''){
            setIsPasswordActive(true)
        }       
        else {
            setIsPasswordActive(false)
        }
    }

    const handleRepasswordChange = (e) => {
        const value = e.target.value
        setRepassword(value)

        if(value !== ''){
            setIsRepasswordActive(true)
        }       
        else {
            setIsRepasswordActive(false)
        }
    }

    const handleSignupForm = (e) => {
        e.preventDefault()
        if(password !== repassword){
            alert("Passwords don't match!")
        }
        else{
            auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                // console.log(authUser)
                alert('Your account has been successfully created!')
            })
            .catch(error => {
                alert(error.message)
            })

            setEmail('')
            setPassword('')
            setRepassword('')

            history.push("/login")
        }
    }

    return (
        <div className="signupForm">
            <div>
                <img 
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="NETFLIX"
                    className="loginScreen__logo"
                    onClick={() => history.push("/")}
                />
                
                <div className="loginScreen__gradient" />
            </div>
            <div className="signupForm__container">
                <h1>Sign up</h1>
                <form onSubmit={handleSignupForm}>
                    <div className="signupForm__floatlabel">
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <label
                            htmlFor="email"
                            className={isEmailActive ? "active" : ""}
                        >
                            Email or phone number
                        </label>
                    </div>
                    <div className="signupForm__floatlabel">
                        <input 
                            type="password"
                            onChange={handlePasswordChange} 
                        />
                        <label
                            htmlFor="password"
                            className={isPasswordActive ? "active" : ""}
                        >
                            Password
                        </label>
                    </div>
                    <div className="signupForm__floatlabel">
                        <input 
                            type="password" 
                            onChange={handleRepasswordChange}
                        />
                        <label
                            htmlFor="repeatPassword"
                            className={isRepasswordActive ? "active" : ""}
                        >
                            Re-enter password
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="signupForm__button"
                        onClick={handleSignupForm}
                    >
                        Sign up
                    </button>
                </form>

                <div className="signupForm__footer">
                    <p>Already have an account?{" "}
                        <span 
                            className="color__white"
                            onClick={() => history.push("/login")}
                        >
                            Log In.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignupForm
