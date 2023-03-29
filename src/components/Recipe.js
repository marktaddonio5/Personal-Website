
import { useState } from "react";

const Recipe = (props) => {
    const array = props.arr;

    const [stepNumber, setStepNumber] = useState(1);
    const [step, setStep] = useState(array[stepNumber - 1]);

    function handleButtons(props){
        function stepNext() {
            if (stepNumber < array.length) return (setStepNumber(stepNumber + 1), setStep(array[stepNumber]));
            else return
        };

        function stepPrevious() {
            if (stepNumber >= 2) return (setStepNumber(stepNumber - 1), setStep(array[stepNumber - 2]));
            else return;
        };

        if (props === "next") return (stepNext());
        if (props === "previous") return (stepPrevious());
        return;
    };

    return (
        <div className="recipeSection">
        <h1 className="grid1"pa>Step: {stepNumber} of {array.length}</h1>
        <img className="grid2 recipeImg" src = {step.imgCook} />
        <img className="grid3 recipeImg" src = {step.imgPrep}  />
        <p className="grid4">{step.directions}</p>
        <button className="grid5" type="button" onClick={() => handleButtons('previous')}>Previous Step</button>
        <button className="grid6" type="button" onClick={() => handleButtons('next')}>Next Step</button>
        </div>
    )
}
export default Recipe;