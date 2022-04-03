import { useState } from "react";

function Example1 () {
   const [A, number2]= useState ("");
   const [B, number3]= useState ("");



   const onFirstChange = (event) => {
    number2 (event.target.value)
   }
   const onInputChange = (event) => {
    number3(event.target.value);
   }
    
    return (
        <div className="Example1">
            {A-B} <br/>
            <label>
                A:
                <input type="text" onChange = {onFirstChange}/>
            </label>
            <label>
                B:
                <input type="text" onChange = {onInputChange}/>
            </label>
        </div>
    );
}
export default Example1;