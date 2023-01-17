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
    
        var { fname, lname, uname, pass, pnumber, pprefix } = document.forms[0];
    
        const object = {
            firstName: fname.value,
            lastName: lname.value,
            email: uname.value,
            password: pass.value,
            phoneNumber: pnumber.value,
            phoneNumberCountryPrefix: pprefix.value
          }
       
        axios.post('https://localhost:5001/api/Account/register', object)
           .then(response => {
             console.log(response)
                if (response.status != 200) {
                    alert("There was a problem with the registration. Please try again.");
                  }
                  console.log(response);
                  setIsSubmitted(true);
                  window.location.pathname = "/confirmEmail";
                })
            .catch (function (error) {
                if (error.response) {
                  console.log(error.response.data);
                  alert("There was a problem with the registration. Please try again.\n" + "Error: " + error.response.data);
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
              <label>First name</label>
              <input type="text" name="fname" required />
            </div>
            <div className="input-container">
              <label>Last name</label>
              <input type="text" name="lname" required />
            </div>
            <div className="input-container">
              <label>E-mail</label>
              <input type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Password</label>
              <input type="password" name="pass" required />
              {renderErrorMessage("pass")}
            </div>
            <div className="input-container">
              <label>Phone prefix</label>
              <input type="text" name="pprefix" required />
            </div>
            <div className="input-container">
              <label>Phone number</label>
              <input type="text" name="pnumber" required />
            </div>
            <br></br>
            <div className="button-container">
              <input type="submit"  value="Register"/>
            </div>
          </form>
          <br></br>
          <p>Already have an account? Click <Link to ="/login" className='text-link1'>here</Link> to login!</p>
        </div>
      );

      const navigate = useNavigate();

      var flag = localStorage.getItem("isAuthenticated");
  
  return (
    <div className='registerpage'>
    <div className="login-form">
        <h1 className="title-login">Register</h1>
        {isSubmitted ? navigate("/") : renderForm}
      </div>
    </div>
  )
}

export default Login