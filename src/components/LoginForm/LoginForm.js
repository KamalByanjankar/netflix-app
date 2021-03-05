import React, { useState } from 'react'
import './LoginForm.css'
import FacebookIcon from '@material-ui/icons/Facebook'

function LoginForm() {
    const [checked, setChecked] = useState(true)
    return (
        <div className="loginForm">
            <div className="loginForm__container">
                <h1>Sign In</h1>
                <form>
                    <input 
                        type="text" 
                        placeholder="Email or phone number" 
                        className="loginForm__inputEmail"
                    />
                    <input 
                        type="password"
                        placeholder="Password"
                        className="loginForm__inputPassword"
                    />
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
                    <p>Need help?</p>
                </div>

                <div className="loginForm__additionalLogin">
                    <button 
                        className="loginForm__facebook"
                    >
                        <FacebookIcon />
                            Login with Facebook
                    </button>
                    <p className="loginForm__signuplink">New to Netflix? {' '}
                        <span className="color__white">Sign up now.</span>
                    </p>
                    <p className="loginForm__info">
                        This page is procted by Google reCAPTCHA to ensure you're not a bot.{' '}
                        <span className="color__blue">Learn more.</span>
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default LoginForm
