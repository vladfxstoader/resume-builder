import React from 'react'
import '../App.css'

function Homepage() {
    var flag = localStorage.getItem("isAuthenticated");
  return (
    <div className='homepage'>
    <h1>Home</h1>
    {flag == "true" ?
    <h1>You are only seeing this if you are logged in.</h1>
    : 
    <div></div>
  }
  </div>
  )
}

export default Homepage