import React from 'react'
import './LoginScreen.css'

function LoginScreen() {
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
                >
                    Log In
                </button>

                <div className="loginScreen__gradient" />
            </div>
            
            <div className="loginScreen__body">
                <h1>Unlimited films, TV programmes and more.</h1>
                <h3>Watch anywhere. Cancel at any time.</h3>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <form className="loginScreen__form">
                    <input type="email" placeholder="Email address"/>
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
