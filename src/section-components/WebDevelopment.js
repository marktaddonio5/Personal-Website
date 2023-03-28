import Recipe from "../components/Recipe";
import { useEffect } from "react";
import Coursera from "../assets/CourseraFront-EndCertificatecopy.jpg"
import {Document} from "react-pdf"
import { useState } from "react";


const certificates = [
    require('../assets/CourseraIntroOct30.jpg'),
    require('../assets/CourseraJSNov11pdf.jpg'),
    require('../assets/CourseraVersionControlNov19.jpg'),
    require('../assets/CourseraInDepthHTMLCSSJan9.jpg'),
    require('../assets/CourseraReactBasicsJan21.jpg'),
    require('../assets/CourseraAdvReactFeb13.jpg'),
    require('../assets/CourseraUX:UIFeb16.jpg'),
    require('../assets/CourseraDevCapstoneMar11.jpg'),
    require('../assets/CourseraCodingInterviewMar21.jpg'),
]

const certs = certificates.map(items => {
   return (
    <img key={items} src={items} alt="certificate image" className="certs" />
)})






const WebDevelopment = () => {
    return(
        <section className="mainSection containerBlue" id="webDevelopment-section">
            <h1>React Developer</h1>
            <h2>Languages</h2>
            <p>
                <span>HTML, CSS, JavaScript, and React Framework</span>
            </p>
            <h2>Current React Projects</h2>
            <a href="https://github.com/marktaddonio5/Personal-Website">/* Click here Github link for this website */</a>
            <h2>Credentials</h2>
            <article className="certContainer"><img src={Coursera} className="certs" alt="Front-end Developer certification from Coursera and Meta" />{certs}</article>
        </section>
    )
}

export default WebDevelopment;