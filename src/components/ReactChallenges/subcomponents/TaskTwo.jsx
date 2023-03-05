import React from "react";
import { useState } from "react";

export const TaskTwo = ()=>{


    const [colorFlipped, setColorFlipped] = useState(false)

    const handleClick = ()=>{
        const value = colorFlipped ? false : true;
        setColorFlipped(value);
    }

    return (
        <div className = "task-two">
            <h1>Task Two : Flip Colors </h1>
            <div className="blocks-container" style={{display: "flex"}}>
                <div onClick = {handleClick} style={{margin: "20px", width: "200px", height : "200px", background: colorFlipped ? "yellow" : "red" }}></div>
                <div onClick= {handleClick} style={{margin: "20px", width: "200px", height : "200px", background: colorFlipped ? "red": "yellow"}}></div>
            </div>
        </div>
    )
}