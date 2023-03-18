import salad from "../assets/logo192.png"
import { useState } from "react";
const array = [
    {
        imgPrep: require("../assets/greek salad.jpg"),
        imgCook: require("../assets/greek salad.jpg"),
        directions: "abcdefg1111111111111111111111111111111111111111"
    },
    {
        imgPrep: require("../assets/greek salad.jpg"),
        imgCook: require("../assets/greek salad.jpg"),
        directions: "hijklmnop"
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

const Recipe = () => {
    const [stepNumber, setStepNumber] = useState(1)
    const [step, setStep] = useState(array[stepNumber - 1])


    function handleButtons(props){
        function stepNext() {
            if (stepNumber < array.length) return (setStepNumber(stepNumber + 1), setStep(array[stepNumber]));
        }

        function stepPrevious() {
            if (stepNumber >= 2) return (setStepNumber(stepNumber - 1), setStep(array[stepNumber - 2]));
        }
        
        if (props === "next") return (stepNext())
        if (props === "previous") return (stepPrevious())   
    }

    return (
        <div className="recipe">
        <h1>Step: {stepNumber} of {array.length}</h1>
        <img src = {step.imgPrep} height="200px" />
        <img src = {step.imgCook} height="200px" />
        <p>{step.directions}</p>
        <button type="button" onClick={() => handleButtons('next')}>Next Step</button>
        <button type="button" onClick={() => handleButtons('previous')}>Previous Step</button>
        </div>
    )
}
export default Recipe;