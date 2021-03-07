import React, { useState } from 'react'
import './LoginForm.css'
import FacebookIcon from '@material-ui/icons/Facebook'
import SignupForm from '../SignupForm/SignupForm'

function LoginForm() {
    const [checked, setChecked] = useState(true)
    const [signupForm, setSignupForm] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isEmailActive, setIsEmailActive] = useState(false)
    const [isPasswordActive, setIsPasswordActive] = useState(false)


    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value)

        if(value !== ''){
            setIsEmailActive(true)
        }
        else{
            setIsEmailActive(false)
        }
    }

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value)

        if(value !== ''){
            setIsPasswordActive(true)
        }
        else{
            setIsPasswordActive(false)
        }
    }
 
    return (
        <div className="loginForm">
            {
                signupForm ? (
                    <SignupForm />
                ) : (
                    <div className="loginForm__container">
                        <h1>Sign In</h1>
                        <form>
                            <div className="loginForm__floatlabel">
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

                            <div className="loginForm__floatlabel">
                                <input 
                                    type="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                                <label 
                                    htmlFor="password"
                                    className={isPasswordActive ? "active" : ""}
                                >
                                    Password
                                </label>
                            </div>
                            
                            <button 
                                type="submit"
                                className="loginForm__button"
                            >
                                Sign In
                            </button>
                        </form>
                        <div className="loginForm__footer">
                            <label>
                                <input 
                                    type="checkbox" 
                                    defaultChecked={checked}
                                    onChange={() => setChecked(!checked)}    
                                />
                                <span> Remember me</span>
                            </label>
                            <p className="loginForm__help">Need help?</p>
                        </div>

                        <div className="loginForm__additionalLogin">
                            <button 
                                className="loginForm__facebook"
                            >
                                <FacebookIcon />
                                    Login with Facebook
                            </button>
                            <p 
                                className="loginForm__signuplink"
                                onClick={() => setSignupForm(true)}
                            >
                                New to Netflix? {' '}
                                <span className="color__white">Sign up now.</span>
                            </p>
                            <p className="loginForm__info">
                                This page is procted by Google reCAPTCHA to ensure you're not a bot.{' '}
                                <span className="color__blue">Learn more.</span>
                            </p>
                        </div>
                    </div>
                )
            }            
        </div>
    )
}

export default LoginForm
