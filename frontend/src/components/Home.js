import React from 'react'
import '../App.css'
import ProfileLink from './ProfileLink'

function Homepage() {
    var flag = localStorage.getItem("isAuthenticated");
  return (
    <div className='homepage'>
    <h1>Home</h1>
    {flag == "true" ?
    <ProfileLink/>
    : 
    <div>Please login to see the content of the app.</div>
  }
  </div>
  )
}

export default Homepage