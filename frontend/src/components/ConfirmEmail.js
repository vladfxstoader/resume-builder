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
    
        var { token } = document.forms[0];
    
        const object = {
            confirmationToken: token.value,
          }
       
        axios.post('https://localhost:44388/api/Account/email-confirm', object)
           .then(response => {
             console.log(response)
                if (response.status != 200) {
                    alert("There was a problem with the registration. Please try again.");
                  }
                  console.log(response);
                  setIsSubmitted(true);
                  //window.location.pathname = "/confirmEmail";
                })
            .catch (function (error) {
                if (error.response) {
                  console.log(error.response.data);
                  alert("There was a problem with the registration. Please try again.\n" + "Error: " + error.response.data);
                }
            });
      };

    const renderForm = (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Token</label>
              <input type="text" name="token" required />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
          <br></br>
        </div>
      );

      const navigate = useNavigate();

      var flag = localStorage.getItem("isAuthenticated");
  
  return (
    <div className='homepage'>
    <div className="login-form">
        <h1 className="title">Confirm email</h1>
        <h3>Please confirm your email by entering the token 
            <br></br>received on your email.</h3>
        <h4>The token is contained in the link, after "email-confirmation/". 
        <br></br>If the email is not in the inbox section, please also check the spam.</h4>
        {isSubmitted ? navigate("/") : renderForm}
      </div>
    </div>
  )
}

export default Login