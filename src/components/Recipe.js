
import { useState } from "react";

const Recipe = (props) => {
    const array = props.arr
    
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