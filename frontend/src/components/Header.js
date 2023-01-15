import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

function Header() {
    const handleLogout = (event) => {
        localStorage.clear();
        window.location.reload(false);
    };
    var flag = localStorage.getItem("isAuthenticated");
    //window.location.reload(false);
  return (
    <div className='header'>
      <h1><Link to ="/" className='text-link'>&nbsp;&nbsp;Home</Link></h1>
      <h1>RESUME BUILDER</h1>
      {flag == "true" ?
    <h1 style={{cursor: "pointer"}} onClick={handleLogout} className='text-link'>Logout&nbsp;&nbsp;</h1>
    : 
    <h1><Link to ="/login" className='text-link'>Login&nbsp;&nbsp;</Link></h1>
  }
    </div>
  )
}

export default Header