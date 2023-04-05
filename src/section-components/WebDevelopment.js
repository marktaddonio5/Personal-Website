import Recipe from "../components/Recipe";
import Coursera from "../assets/CourseraFront-EndCertificatecopy.jpg"
import ProjectsComponent from "../components/ProjectsComponent";
import Form from "../components/Form";
import { useState } from "react";
import CertsArticle from "../components/CertsArticle";


const WebDevelopment = () => {

    return(
        <section className="mainSection containerBlue" id="webDevelopment-section">
            <h1>React Developer</h1>
            <a href="https://github.com/marktaddonio5/Personal-Website">/* Click here Github link for this website */</a>
            <h2>Languages</h2>
            <p>
                <span>HTML, CSS, JavaScript, React, Jest</span>
            </p>
            <h2>Credentials</h2>
            <CertsArticle />
        </section>
        
    )
}

export default WebDevelopment;