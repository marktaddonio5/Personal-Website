import Recipe from "../components/Recipe";
import { useEffect } from "react";
import Coursera from "../assets/CourseraFront-EndCertificatecopy.jpg"
import {Document} from "react-pdf"

const WebDevelopment = () => {
    return(
        <section className="mainSection containerBlue" id="webDevelopment-section">
            <h1>React Developer</h1>
            <h3>Languages</h3>
            <p>
                <span>HTML, CSS, JavaScript, and React Framework</span>
            </p>
            <h3>Credentials</h3>
            <img src={Coursera} alt="Front-end Developer certification from Coursera and Meta" />
            <h3>Current React Projects</h3>
            <a href="https://github.com/marktaddonio5/Personal-Website">/* Click here Github link for this website */</a>
        </section>
    )
}

export default WebDevelopment;