import React, {useState, useEffect} from "react";
import ClockDigits from "./clockdigits.jsx"; 

// export this component
//useEffect triggers something with a change
//useState changes variable value dynamically
//use useEffect to set the timer for the seconds useState


const Counter = () => {
    const [seconds, setSeconds] = useState(0);
    let singleDigit = Math.floor((seconds / 1) % 10);
    let tensDigit = Math.floor((seconds / 10 ) % 10);
    let hundredsDigit = Math.floor((seconds / 100) % 10);
    let thousandsDigit = Math.floor((seconds / 1000) % 10);
    //const [buttonVariable, setButtonVariable] = useState(0);

useEffect(() => {
    setTimeout (
        () => {
            setSeconds((seconds) => seconds + 1); 
           //console.log("One second has passed");

        },
    1000);
}); 

// const clickHandler = () => {
//     console.log("We are inside the handler");
//     setButtonVariable(buttonVariable => buttonVariable + 1);
// }

return (
    <div>
        <div className="d-flex flex-row clock-BG">
            <div className="clock-indices">
                <h1>
                    <i className="fas fa-clock"></i>
                </h1>
            </div> 

            <ClockDigits value={thousandsDigit} />
            <ClockDigits value={hundredsDigit} />
            <ClockDigits value={tensDigit} />
            <ClockDigits value={singleDigit} />
        </div>

    </div>
)



}

export default Counter;