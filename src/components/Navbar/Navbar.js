import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import './Navbar.css'

function Navbar() {
    const history = useHistory()
    const [show, setShow] = useState(false)

    const transitionNavbar = () => {
        if(window.scrollY > 80){
            setShow(true)
        }
        else{
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar)
        return () => {
            window.removeEventListener("scroll", transitionNavbar)
        }
    }, [])

    return (
        <div className={`navbar ${show && "navbar__black"}`}>
            <div className="navbar__contents">
                <img
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="NETFLIX"
                    className="navbar__netflixlogo"
                    onClick={() => history.push("/")}
                />

                <img 
                    src ="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png?h=8030f4d5734548795c22da59ca72e3e1" 
                    alt="Profile"
                    className="navbar__profilelogo"
                    onClick={() => history.push("/profile")}
                />
            </div>

        </div>
    )
}

export default Navbar
