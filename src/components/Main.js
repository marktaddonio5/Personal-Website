import MusicEducation from "../section-components/MusicEducation"
import WebDevelopment from "../section-components/WebDevelopment"
import Trombone from "../section-components/Trombone"
import LandingPage from "../section-components/LandingPage"
import Recipe from "./Recipe"
import {Routes, Route} from "react-router-dom"
import ProjectsPage from "../section-components/ProjectsPage"



const Main = () => {
    return(
            <main className="gridContainer">
                <LandingPage />
                <WebDevelopment />
                <MusicEducation />
                <Trombone />
            </main>
    )
}

export default Main;