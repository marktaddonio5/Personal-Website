import ProjectsComponent from "../components/ProjectsComponent";
import Recipe from "../components/Recipe";
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
const ProjectsPage = () => {

    return (
        <section className="mainSection" id="projects-section">
        <h1>React Component Projects</h1>
        <ProjectsComponent
                project1={<Recipe arr={recipeTemplate1} />}
                project2={<Recipe arr={recipeTemplate2} />}
                heading={"Recipe Display Component"}
                description={"This component demonstrates use of array methods such as .map. It also includes state management using useState to update step numbers and what images are displayed. It is included with two iterations to display re-usability with different array data."}
            />
        <ProjectsComponent
                project1={<Form />}
                heading={"Sample Account Creation Form"}
                description={"placeholder text"}
            />
        </section>
    )
}

export default ProjectsPage;