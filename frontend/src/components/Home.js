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
    <div></div>
  }
  </div>
  )
}

export default Homepage