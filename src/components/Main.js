import MusicEducation from "../section-components/MusicEducation"
import WebDevelopment from "../section-components/WebDevelopment"
import Trombone from "../section-components/Trombone"
import LandingPage from "../section-components/LandingPage"
import ProjectsPage from "../section-components/ProjectsPage"




const Main = () => {
    return(
            <main className="gridContainer">
                <LandingPage />
                <WebDevelopment />
                <ProjectsPage />
                <MusicEducation />
                <Trombone />
            </main>
    )
}

export default Main;