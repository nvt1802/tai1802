import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function AuthRoute(props) {
    const { user } = props
    if (user) {
        localStorage.setItem('photoURL', user?.photoURL)
        return <Route {...props} />
    } else {
        return <Redirect to="/login"></Redirect>
    }
}

export default AuthRoute