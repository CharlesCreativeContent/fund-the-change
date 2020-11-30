import React, { useState } from 'react'
import './Signup.css'

const Signup = () => {

  const [contactInfo, setContactInfo] = useState({
    email: '',
    password: ''
  })
  // handleContactChange is responsible for accessing the value that the user types into the inputs
  const handleContactChange = (e) => {
    const { name, value } = e.target
    setContactInfo(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })

  }

  // const handleSubmit = (e) => {
  //   console.log(contactInfo)
  //   e.preventDefault()
  //   fetch('/Signup', {
  //     method: "Post",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(contactInfo)
  //   })
  //
  // }
  return (
    <div className="root">
    <div className="container2">
    <h1>Sign Up</h1>
      <p className="lead">
        Sign Up with your email address.
      </p>
      <form className="formGroup" method="POST" action='/signup'>
        {/* in order for react to read my inputs they must be in self closing tags */}

      
        <input className="input"  onChange={handleContactChange} name="email" placeholder="Email" />
        <input className="input"  onChange={handleContactChange} name="password" placeholder="Password" />
        <button className="button">Sign me up</button>
      </form>
      </div>
    </div>
  )
}

export default Signup;
