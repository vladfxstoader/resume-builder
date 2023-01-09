import React, { Component } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"

function ProfileLink() {

    const [reqData, setReqData] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    var data = {
      fname: "AAAA",
      lname: "",
      profilepic: "",
      summary: "",
      curremp: ""
    };



    const handleSubmit = async (event) => {
        //Prevent page reload
        event.preventDefault();

        var { plink } = document.forms[0];
        localStorage.setItem("profileLink", plink.value);

       await axios.get('https://localhost:5001/api/Account/Linkedin-Crawler', 
            { params: { 
                profileUrl: plink.value 
            } 
        }).then(response => {
            console.log(response)
            if (response.status != 200) {
                alert("There was a problem with the crawling. Please try again.");
            }
            data.fname = response.data.firstName;
            data.lname = response.data.lastName;
            data.profilepic = response.data.profilePicture;
            data.curremp = response.data.currentEmployer;
            data.summary = response.data.summary;
            localStorage.setItem("firstName", data.fname);
            localStorage.setItem("lastName", data.lname);
            localStorage.setItem("profilePic", data.profilepic);
            localStorage.setItem("currentEmployer", data.curremp);
            localStorage.setItem("summary", data.summary);
            localStorage.setItem("experiences", response.data.experiences);
            console.log(data);
            setIsSubmitted(true);
            window.location.reload(false);
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
              <input type="text" defaultalue= {localStorage.getItem("profileLink")} name="plink" required />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
          <br></br>
        </div>
      );

  const renderData = (
    <div>
      {localStorage.getItem("firstName") === null ? <p></p> : <p>First name: </p>} {localStorage.getItem("firstName")}<br></br>
      {localStorage.getItem("lastName") === null ? <p></p> : <p>Last name: </p>} {localStorage.getItem("lastName")}<br></br>
      {localStorage.getItem("currentEmployer") === null ? <p></p> : <p>Current employer: </p>} {localStorage.getItem("currentEmployer")}<br></br>
      {localStorage.getItem("summary") === null ? <p></p> : <p>Summary: </p>} {localStorage.getItem("summary")}<br></br>
      {localStorage.getItem("profilePic") === null ? <p></p> : <p><img src = {localStorage.getItem("profilePic")}></img></p>} <br></br>
    </div>
  )
      
  return (
    <div className='homepage'>
    <div className="login-form">
        <h1 className="title">Enter profile link</h1>
        <h3>Please enter your LinkedIn profile URL, so that
            <br></br>your information can be collected.</h3>
        <br></br>
        <br></br>
        {renderForm}
        {renderData}
      </div>
    </div>
  )
}

export default ProfileLink