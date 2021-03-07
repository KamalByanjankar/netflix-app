import React, { useState } from 'react'
import LoginForm from '../LoginForm/LoginForm'
import './LoginScreen.css'

function LoginScreen() {
    const [signin, setSignin] = useState(false)
    const [showSignin, setShowSignin] = useState(true)
    const [value, setValue] = useState('')
    const [isActive, setIsActive] = useState(false)


    const handleTextChange = (e) => {
        const text = e.target.value
        setValue(text)

        if(text !== ''){
            setIsActive(true)
        }
        else{
            setIsActive(false)
        }
    }

    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img 
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="NETFLIX"
                    className="loginScreen__logo"
                    onClick={() => (setSignin(false), setShowSignin(true))}

                /> 
                {
                    showSignin ? (
                        <button
                            className="loginScreen__loginbutton"
                            onClick={() => (setSignin(true), setShowSignin(false))}
                        >
                            Sign In
                        </button>
                        ) : ('')
                }

                <div className="loginScreen__gradient" />
            </div>
            
            <div className="loginScreen__body">
                {
                    signin ? (
                        <LoginForm />
                    ) : (
                        <>
                            <h1>Unlimited films, TV programmes and more.</h1>
                            <h3>Watch anywhere. Cancel at any time.</h3>
                            <p>Ready to watch? Enter your email to create or restart your membership.</p>
                            
                            <form className="loginScreen__form">
                                <div className="float__label">
                                    <input 
                                        type="email" 
                                        value={value}
                                        onChange={handleTextChange}
                                    />
                                    <label 
                                        htmlFor="email"
                                        className={isActive ? "active" : ""}
                                    >
                                        Email address
                                    </label>
                                </div>
                                
                                <button 
                                    type="submit"
                                >
                                    Get Started 
                                </button>
                            </form>
                        </>
                    )

                }
                
            </div>

        </div>
    )
}

export default LoginScreen
