import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"

function Login() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
    
        var { uname, pass } = document.forms[0];
    
        const object = {
          uniqueIdentifier: uname.value, 
          password: pass.value, 
        };
       
        axios.post('https://localhost:44388/api/Account/login', object)
           .then(response => {
             console.log(response)
                if (response.status != 200) {
                    alert("There was a problem with the login. Please try again.");
                  }
                  console.log(response);
                  localStorage.setItem("isAuthenticated", "true");
                  console.log(localStorage)
                  setIsSubmitted(true);
                  window.location.pathname = "/";
                })
            .catch (function (error) {
                if (error.response) {
                  console.log(error.response.data);
                  alert("There was a problem with the login. Please try again.\n" + "Error: " + error.response.data);
                }
            });
      };
    

    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

    const renderForm = (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>E-mail </label>
              <input type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
              {renderErrorMessage("pass")}
            </div>
            <br></br>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
          <br></br>
          <p>Don't have an account? Click <Link to ="/register" className='text-link1'>here</Link> to register!</p>
        </div>
      );

      const navigate = useNavigate();

      var flag = localStorage.getItem("isAuthenticated");
  
  return (
    <div className='homepage'>
      {flag == "true" ?
    <div className='homedescription'>
    <h1 className='desctext'>You are already logged in.</h1>
    </div>
    : 
    <div className="login-form">
        <h1 className="title">Log In</h1>
        {isSubmitted ? navigate("/") : renderForm}
      </div>
  }
    </div>
  )
}

export default Login