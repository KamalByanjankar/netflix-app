import React, { useRef, useState } from 'react'
import './LoginForm.css'
import FacebookIcon from '@material-ui/icons/Facebook'
import { useHistory } from 'react-router'
import { auth } from '../../context/firebase'
import { useStateValue } from '../../context/StateProvider'

function LoginForm() {
    const [checked, setChecked] = useState(true)
    const [isEmailActive, setIsEmailActive] = useState(false)
    const [isPasswordActive, setIsPasswordActive] = useState(false)
    const history = useHistory()
    const [ , dispatch] = useStateValue()
    const emailRef = useRef(null)
    const passwordRef = useRef(null)


    const handleEmailChange = (e) => {
        if(e.target.value !== ''){
            setIsEmailActive(true)
        }
        else{
            setIsEmailActive(false)
        }
    }

    const handlePasswordChange = (e) => {
        if(e.target.value !== ''){
            setIsPasswordActive(true)
        }
        else{
            setIsPasswordActive(false)
        }
    }

    const handleLoginForm = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .then((authUser) => {
            dispatch({
                type: 'LOGIN', payload: authUser,
                user: localStorage.setItem('currentUser', JSON.stringify(authUser))
            })
        })
        .catch(error => {
            alert(error.message)
        })

        history.push("/home")
    }
 
    return (
        <div className="loginForm">
            <div>
                <img 
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="NETFLIX"
                    className="loginScreen__logo"
                    onClick={() => history.push("/")}
                />
                
                <div className="loginScreen__gradient" />
            </div>
            

            <div className="loginForm__container">
                <h1>Sign In</h1>
                <form onSubmit={handleLoginForm}>
                    <div className="loginForm__floatlabel">
                        <input 
                            type="email" 
                            required
                            ref={emailRef}
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
                            required
                            ref={passwordRef}
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
                        onClick={handleLoginForm}
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
                    >
                        New to Netflix? {' '}
                        <span 
                            className="color__white"
                            onClick={() => history.push("/signup")}
                        >
                            Sign up now.
                        </span>
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
