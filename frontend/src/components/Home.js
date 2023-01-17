import React from 'react'
import '../App.css'
import ProfileLink from './ProfileLink'

function Homepage() {
    var flag = localStorage.getItem("isAuthenticated");
  return (
    <div className='homepage'>
    {flag == "true" ?
    <ProfileLink/>
    : 
    <h1 className='title-home'>Please login to see the content of the app.</h1>
  }
  </div>
  )
}

export default Homepage