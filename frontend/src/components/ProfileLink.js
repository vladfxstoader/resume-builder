import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"

function ProfileLink() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
    
        var { plink } = document.forms[0];

       axios.get('https://localhost:44388/api/Account/Linkedin-Crawler', 
            { params: { 
                profileUrl: plink.value 
            } 
        }).then(response => {
            console.log(response)
            if (response.status != 200) {
                alert("There was a problem with the crawling. Please try again.");
            }
            console.log(response);
            setIsSubmitted(true);
        }).catch(function(error) {
            if (error.response) {
                console.log(error.response.data);
                alert("There was a problem with the crawling. Please try again.\n" + "Error: " + error.response.data);
            }
        });
      };

    const renderForm = (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Profile link</label>
              <input type="text" name="plink" required />
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
        <h1 className="title">Enter profile link</h1>
        <h3>Please enter your LinkedIn profile URL, so that
            <br></br>your information can be collected.</h3>
        <br></br>
        <br></br>
        {isSubmitted ? navigate("/") : renderForm}
      </div>
    </div>
  )
}

export default ProfileLink