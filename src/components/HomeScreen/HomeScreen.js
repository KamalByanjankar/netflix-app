import React from 'react'
import { useHistory } from 'react-router'
import { useStateValue } from '../../context/StateProvider'


function HomeScreen() {
    const [ , dispatch] = useStateValue()
    const history = useHistory()

    const logoutHandler = () => {
        dispatch({
            type: 'LOGOUT'
        })
        localStorage.removeItem('currentUser')
        history.push("/")
    }


    return (
        <div>
            <h1>I am a home Screen after login</h1>
            <button
                onClick={logoutHandler}
            >
                Log out
            </button>
        </div>
    )
}

export default HomeScreen
