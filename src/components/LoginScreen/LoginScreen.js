import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './LoginScreen.css'

function LoginScreen() {
    const [value, setValue] = useState('')
    const [isActive, setIsActive] = useState(false)
    const history = useHistory()


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
                /> 

                <button
                    className="loginScreen__loginbutton"
                    onClick={() => history.push("/login")}
                >
                    Sign In
                </button>

                <div className="loginScreen__gradient" />
            </div>
            
            <div className="loginScreen__body">
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
                      
            </div>

        </div>
    )
}

export default LoginScreen
