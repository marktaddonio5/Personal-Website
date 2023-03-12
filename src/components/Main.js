import MusicEducation from "../section-components/MusicEducation"
import WebDevelopment from "../section-components/WebDevelopment"
import Trombone from "../section-components/Trombone"
import {Routes, Route} from "react-router-dom"

const Main = () => {
    return(
            <main className="gridContainer containerBlue">
                <WebDevelopment />
                <MusicEducation />
                <Trombone />
            </main>
    )
}

export default Main;