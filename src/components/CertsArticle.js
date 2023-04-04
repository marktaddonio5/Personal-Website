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
        <img key={props.name} src={props.src} alt={props.name} className="certs" />
        <button onClick={onClick}>Hide {props.name} Certificate</button>
        </>
    )
    }
    else return (
        <>
        <button onClick={onClick}>Show {props.name} Certificate</button>
        </>
    )
}

const certs = certificates.map(items => {
    return (
        <>
            <li>{items.name}</li>
            <ImageShow key={items.name} src={items.src} />
        </>
    )
})
 

const CertsArticle = () => {
    
    return (
        <>
        <h3>Meta Front-End Developer Professional Certificate</h3>
            <label for="courses">Courses</label>
            <ol className="courses">
               {certs}
            </ol>
        </>
    )
}

export default CertsArticle;