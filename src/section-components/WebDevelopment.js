import Recipe from "../components/Recipe";
import Coursera from "../assets/CourseraFront-EndCertificatecopy.jpg"
import ProjectsComponent from "../components/ProjectsComponent";
import Form from "../components/Form";
const recipeTemplate1 = [
    {
        imgPrep: require("../assets/greek salad.jpg"),
        imgCook: require("../assets/greek salad.jpg"),
        directions: "abcdefg111111111111111111111111 11111111 11111 1112 2222 22 22222 22222 2222 2222222 2 222"
    },
    {
        imgPrep: require("../assets/greek salad.jpg"),
        imgCook: require("../assets/greek salad.jpg"),
        directions: "hijklmnop 111111111111111111111111 11111111 11111 1112 2222 22 22222 22222 2222 2222222 2 222 111111111111111111111111 11111111 11111 1112 2222 22 22222 22222 2222 2222222 2 222"
    },
    {
        imgPrep: require("../assets/greek salad.jpg"),
        imgCook: require("../assets/greek salad.jpg"),
        directions: "qrxtuv"
    },
    {
        imgPrep: require("../assets/greek salad.jpg"),
        imgCook: require("../assets/greek salad.jpg"),
        directions: "xy"
    },
    {
        imgPrep: require("../assets/greek salad.jpg"),
        imgCook: require("../assets/greek salad.jpg"),
        directions: "z"
    },
    {
        imgPrep: require("../assets/greek salad.jpg"),
        imgCook: require("../assets/greek salad.jpg"),
        directions: "z1"
    },
];

const recipeTemplate2 = [
    {
        imgPrep: require("../assets/greek salad.jpg"),
        imgCook: require("../assets/greek salad.jpg"),
        directions: "1"
    },
    {
        imgPrep: require("../assets/greek salad.jpg"),
        imgCook: require("../assets/greek salad.jpg"),
        directions: "2"
    },
    {
        imgPrep: require("../assets/greek salad.jpg"),
        imgCook: require("../assets/greek salad.jpg"),
        directions: "3"
    },
    {
        imgPrep: require("../assets/greek salad.jpg"),
        imgCook: require("../assets/greek salad.jpg"),
        directions: "4"
    },
    {
        imgPrep: require("../assets/greek salad.jpg"),
        imgCook: require("../assets/greek salad.jpg"),
        directions: "5"
    }
];

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
            <a href="https://github.com/marktaddonio5/Personal-Website">/* Click here Github link for this website */</a>
            <h2>Languages</h2>
            <p>
                <span>HTML, CSS, JavaScript, React, Jest</span>
            </p>
            <h2>Credentials</h2>
            <article className="certContainer">
                <img src={Coursera} className="certs" alt="Front-end Developer certification from Coursera and Meta" />
                {certs}
            </article>
        </section>
        
    )
}

export default WebDevelopment;