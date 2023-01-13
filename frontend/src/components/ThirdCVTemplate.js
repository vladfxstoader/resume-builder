import React, { Component } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import { PDFExport } from '@progress/kendo-react-pdf';


class ThirdCVTemplate extends Component {
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

    listExperiences = this.experiences.map(
        (element) => {
            return (
                <ul className='listexperiences3'>
                    <h4 className='roleEmployer3'>{element.role}, {element.employer}</h4>
                    <h4 className='interval3'>{element.interval}, {element.location}</h4>
                    <div className='description3'>{element.description}</div>
                </ul>
            )
        }
    )

    renderData = (
        <div class="container3">
            <div class="left3">
                <br></br>
                    <div class="picture3">{localStorage.getItem("profilePic") === null ? {} : <img className="photo3" src={localStorage.getItem("profilePic")}></img>}</div>
                    <div class="resumeBox">
                        <div class = "heading">
                            <p>Resume</p>
                        </div>
                    </div>
            </div>

            <div class="right3">
                <div class="title3">
                <h1 className='name3'>{localStorage.getItem("firstName") === null ? {} : <p>{localStorage.getItem("firstName")} {localStorage.getItem("lastName")}</p>}</h1>
                </div>

                <div class="summary3">
                <h3>Summary</h3>
                {localStorage.getItem("summary") === null ? {} : localStorage.getItem("summary")}
            </div>
            <div class="experiences3">
                <h3>Work experience</h3>
                {localStorage.getItem("experiences") === null ? {} : this.listExperiences}
            </div>
            {localStorage.getItem("useProjects") == 'true' && <div class="projects3">
                    <h3>Projects</h3>
                    {localStorage.getItem("projects")}
                </div>}
            </div>
        </div>

    )
    render() {
        return (
            <div style={{ height: '85vh', width: '50vw', paddingTop: 20 }}>
                {!this.canvLoaded && <canvas ref="canvas" style={{ display: 'none' }}>
                </canvas>}
                <PDFExport paperSize={'Letter'}
                    fileName="resume-template3.pdf"
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

export default ThirdCVTemplate;