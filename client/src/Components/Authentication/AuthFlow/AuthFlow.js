import React, { useState } from 'react'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import './AuthFlow.css'

const AuthFlow = () => {
  // used to toggle between login and signup
  const [view, setView] = useState('login')

  const toggleView = (view) => {
    setView(view)
  }
  return (
    <>
      <button onClick={() => toggleView('login')}>Login</button>
      <button onClick={() => toggleView('signup')}>Signup</button>
      {view === 'login' &&
        <Login />
      }
      {view === 'signup' &&
        <Signup />
      }
    </>
  )
}

export default AuthFlow;