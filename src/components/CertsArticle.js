import { useState } from 'react'
const certificates = [
    {
        name: "Introduction To Front-End Development",
        src: require('../assets/CourseraIntroOct30.jpg')
    },
    {
        name: "Programming with JavaScript",
        src: require('../assets/CourseraJSNov11pdf.jpg')
    },
    {
        name: "Version Control",
        src: require('../assets/CourseraVersionControlNov19.jpg')
    },
    {
        name: "HTML and CSS in depth",
        src: require('../assets/CourseraInDepthHTMLCSSJan9.jpg')
    },
    {
        name: "React Basics",
        src: require('../assets/CourseraReactBasicsJan21.jpg')
    },
    {
        name: "Advanced React",
        src: require('../assets/CourseraAdvReactFeb13.jpg')
    },
    {
        name: "Priciples of UX/UI Design",
        src: require('../assets/CourseraUX:UIFeb16.jpg')
    },
    {
        name: "Front-End Developer Capstone",
        src: require('../assets/CourseraDevCapstoneMar11.jpg')
    },
    {
        name: "Coding Interview Preparation",
        src: require('../assets/CourseraCodingInterviewMar21.jpg')
    },
]

const ImageShow = (props) => {
    const [visible, setVisible] = useState(false)

    const onClick = () => {
        if (visible === true) {setVisible(false)}
        if (visible === false) {setVisible(true)}
    }

    if (visible === true) {
    return (
        <>
        <button className="certButton column2" onClick={onClick}>Hide {props.name} Certificate</button>
        <img className="certimg columnSpan" style={{animationName: "certa"}}  key={props.name} src={props.src} alt={props.name} />
        </>
    )
    }
    else return (
        <>
        <button className="column2 certButton" onClick={onClick}>Show {props.name} Certificate</button>
        </>
    )
}

const certs = certificates.map(items => {
    return (
        <>
            <li className="column1">{items.name}</li>
            <ImageShow key={items.name} src={items.src} />
        </>
    )
})
 

const CertsArticle = () => {
    
    return (
        <div className="credential">
        <h3 style={{padding: "5px"}}>Meta Front-End Developer Professional Certificate</h3>
        <label for="courses">Courses</label>
        <ul className="ulGrid">
            {certs}
        </ul>
        </div>
    )
}

export default CertsArticle;