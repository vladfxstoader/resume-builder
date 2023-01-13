import React, { Component } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import { PDFExport } from '@progress/kendo-react-pdf';



class SecondCVTemplate extends Component {
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
                <ul className='listexperiences2'>
                    <h4><li className='role2'>{element.role}, {element.employer} </li></h4>
                    <h4><li className='interval2'>{element.interval}, {element.location}</li></h4>
                    <li className='description2'>{element.description}</li>
                    <br></br>
                </ul>
            )
        }
    )

    renderData = (
        <div class="container2">
            <div class="column left">
                <div class="introduction2">
                    <div class="picture2">{localStorage.getItem("profilePic") === null ? "" : <img className="photo2" src={localStorage.getItem("profilePic")}></img>}</div>
                    <div class="title2">
                        <h3 className='resumeTitle2'>- RESUME -</h3>
                        <h1 className='lastName2'><p>{localStorage.getItem("lastName")}</p></h1>
                        <h2 className='firstName2'>{localStorage.getItem("firstName") === null ? "" : <p>{localStorage.getItem("firstName")}</p>}</h2>
                    </div>
                </div>
            </div>
            <div class="column right">
                <div class="summary2">
                    <h3>Summary</h3>
                    <p>{localStorage.getItem("summary") === null ? "" : localStorage.getItem("summary")}</p>
                </div>
                <div class="experiences2">
                    <h3>Experience</h3>
                    <p>{localStorage.getItem("experiences") === null ? "" : this.listExperiences}</p>
                </div>
                {localStorage.getItem("useProjects") == 'true' && <div class="projects2">
                    <h3>Projects</h3>
                    <p>{localStorage.getItem("projects")}</p>
                </div>}
            </div>
        </div>

    )
    render() {
        return (
            <div data-testid = "template-2" style={{ height: '85vh', width: '50vw', paddingTop: 20 }}>
                {!this.canvLoaded && <canvas ref="canvas" style={{ display: 'none' }}>
                </canvas>}
                <PDFExport paperSize={'Letter'}
                    fileName="resume-template2.pdf"
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
                        overflowY: 'hidden',
                        fontFamily: "Georgia",
                        fontFamily: "Verdana"
                    }}>{this.renderData}
                    </div>
                </PDFExport>
                <div style={{ textAlign: 'center', marginTop: 10 }}><button onClick={this.exportPDF} style={{ margin: 'auto' }}>Download resume</button></div>
            </div>
        );
    }
}

export default SecondCVTemplate;