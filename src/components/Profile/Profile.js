import React from 'react'
import { useHistory } from 'react-router'
import { useStateValue } from '../../context/StateProvider'
import Navbar from '../Navbar/Navbar'
import './Profile.css'


const plans = [
    {
        name: 'Basic',
        value: '720p'
    },
    {
        name: 'Standard',
        value: '1080p'
    },
    {
        name: 'Premium',
        value: '4K + HDR'
    }
]



function Profile() {
    const [{user}, dispatch] = useStateValue()
    const history = useHistory()


    const logoutHandler = () => {
        dispatch({type: 'LOGOUT'})
        localStorage.removeItem('currentUser')
        history.push("/")
    }


    return (
        <div className="profile">
            <Navbar />
            <div className="profile__body">
                <h1>Edit Profile</h1>
                <div className="profile__info">
                    <img 
                        src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png?h=8030f4d5734548795c22da59ca72e3e1"
                        alt="profile"
                        className="profile__logo"
                    />
                    <div className="profile__details">
                        <h2>{user.email}</h2>
                        <div className="profile__plans">
                            <h3>Plans (Current Plan: Premium)</h3>
                            <p>Renewal date: 15/04/2021</p>
                            {
                                plans.map(plan => {
                                    return(
                                        <div
                                            key={plan.value}
                                            className="profile__plan"    
                                        >
                                            <div className="profile__planItem">
                                                <p>{plan.name}</p>
                                                <p>{plan.value}</p>
                                            </div>

                                            <button
                                                className="profile__subscribeBtn"
                                            >
                                                Subscribe
                                            </button>
                                        </div>
                                    )
                                })
                            }

                            <button
                                className="profile__logoutBtn"
                                onClick={logoutHandler}
                            >
                                Log Out    
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
