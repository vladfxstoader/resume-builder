import React, { Component } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import { PDFExport } from '@progress/kendo-react-pdf';

class FirstCVTemplate extends Component {
    resume;
    experiences;

    constructor() {
        super();
        this.canvLoaded = false;
    }

    exportPDF = () => {
        this.resume.save();
    }

    componentDidMount() {
    }

    experiences = JSON.parse(localStorage.getItem("experiences"));
 
    listExperiences = this.experiences === null ? {} : this.experiences.map(
        (element) => {
            return (
                <ul className='listexperiences1'>
                    <h4><li className='role1'>- {element.role}</li></h4>
                    <h4><li className='employer1'>{element.employer}</li></h4>
                    <h4><li className='interval1'>{element.interval}, {element.location}</li></h4>
                    <li className='description1'>{element.description}</li>
                    <br></br>
                </ul>
            )
        }
    )

    renderData = (
        <div class="container">
            <div class="introduction">
            <div class="picture">{localStorage.getItem("profilePic") === null ? "" : <img className="photo1" src={localStorage.getItem("profilePic")}></img>}</div>
            <div class="title">
                <h3 className='resumeTitle1'>RESUME</h3>
                <h1 className='name1'>{localStorage.getItem("firstName") === null ? "" : <p>{localStorage.getItem("firstName")} {localStorage.getItem("lastName")}</p>}</h1>
            </div>
            </div>
            <div class="summary">
                <h3>Summary</h3>
                {localStorage.getItem("summary") === null ? "" : localStorage.getItem("summary")}
            </div>
            <div class="experiences">
                <h3>Experience</h3>
                {localStorage.getItem("experiences") === null ? "" : this.listExperiences}
            </div>
            {localStorage.getItem("useProjects") == 'true' && <div class="projects">
                    <h3>Projects</h3>
                    {localStorage.getItem("projects")}
                </div>}
        </div>

    )
    render() {
        return (
            <div data-testid = "template-1" style={{ height: '85vh', width: '50vw', paddingTop: 20 }}>
                {!this.canvLoaded && <canvas ref="canvas" style={{ display: 'none' }}>
                </canvas>}
                <PDFExport paperSize={'Letter'}
                    fileName="resume-template1.pdf"
                    title="Resume"
                    subject=""
                    keywords=""
                    ref={(r) => this.resume = r}>
                    <div style={{
                        height: 792,
                        width: 612,
                        padding: 'none',
                        backgroundColor: 'white',
                        boxShadow: '5px 5px 5px black',
                        margin: 'auto',
                        overflowX: 'hidden',
                        overflowY: 'hidden'
                    }}>{this.renderData}
                    </div>
                </PDFExport>
                <div style={{ textAlign: 'center', marginTop: 10 }}><button onClick={this.exportPDF} style={{ margin: 'auto' }}>Download resume</button></div>
            </div>
        );
    }
}

export default FirstCVTemplate;