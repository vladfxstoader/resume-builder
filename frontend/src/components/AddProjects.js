import React, { Component } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"

function AddProjects() {

    var [projects, setProjects] = useState(false);
    var [message, setMessage] = useState('');

    const handleClick = (event) => {
        //event.preventDefault();
        setProjects(true);
        localStorage.setItem("useProjects", true);
    }

    const handleClick1 = (event) => {
        //event.preventDefault();
        setProjects(false);
        localStorage.setItem("useProjects", false);
        localStorage.setItem("projects", "");
        window.location.reload(false);
    }

    const handleChange = event => {
        setMessage(event.target.value);
    };

    const handleProjectSave = event => {
        event.preventDefault();
        localStorage.setItem("projects", message);
        setTimeout(() => {
            window.location.reload(false);
          }, 1000);
    }

    return (
        <div>
            {localStorage.getItem("useProjects") == "false" && <button onClick={handleClick} className="addProjects">Click here to add a 'Projects' section to your resume</button>}
            {localStorage.getItem("useProjects") == "true" && <button onClick={handleClick1} className="removeProjects">Click here to remove the 'Projects' section from your resume</button>}
            {localStorage.getItem("useProjects") == "true" && <div>
                <textarea className="textarea" onChange={handleChange} defaultValue={localStorage.getItem("projects")}></textarea><br></br>
                {/* <input type='text' onChange={handleChange} defaultValue={localStorage.getItem("projects")} placeholder='Add details about your projects here'></input> */}
                <button onClick={handleProjectSave}>Save</button>
            </div>}
        </div>
    )
}

export default AddProjects
