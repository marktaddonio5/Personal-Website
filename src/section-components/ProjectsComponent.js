import { useState } from "react";
import Recipe from "../components/Recipe"
/* 
Accepts the following props:
- project1
- project2 (if needed)
- project3 (if needed)
- heading (h2)
- description (p)
*/

const ProjectsComponent = (props) => {
    const [visible, setVisible] = useState(false)

    const clickShow = () => {
        if (visible === false) return setVisible(true)
        if (visible === true) return setVisible(false)
    }

    if (visible === true) return(
        <div className="projectsSection">
            <button type="button" onClick={clickShow} >Hide React {props.heading}</button>
            <h2>{props.heading}</h2>
            <p>{props.description}</p>
            {props.project1}
            {props.project2}
            {props.project3}
        </div>
    )
    else return (
        <div classname="projectsSection">
            <button type="button" onClick={clickShow} >Show {props.heading}</button>
        </div>
    )
}

export default ProjectsComponent;