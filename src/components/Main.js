import MusicEducation from "../section-components/MusicEducation"
import WebDevelopment from "../section-components/WebDevelopment"
import Trombone from "../section-components/Trombone"
import {Routes, Route} from "react-router-dom"
import Recipe from "./Recipe"


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


const Main = () => {
    return(
            <main className="gridContainer containerBlue">
                <WebDevelopment />
                <Recipe arr={recipeTemplate1} />
                <Recipe arr={recipeTemplate2} />
                <MusicEducation />
                <Trombone />
            </main>
    )
}

export default Main;