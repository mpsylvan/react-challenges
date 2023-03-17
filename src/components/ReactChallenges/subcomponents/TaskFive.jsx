import React from "react";
import { useState } from "react";

export const TaskFive = ()=>{

    const [string, setString] = useState("");

    const handleInputChange = (value)=>{
        setString(value);
    }

    const handleReset = ()=>{
        setString("")
    }

    return (
        <div className = "task-one">
            <h1>Task One : Mirror the Input </h1>
            <input 
                type="text"
                placeholder="input a text"
                value = {string}
                onChange = {(e)=>{handleInputChange(e.target.value)}}
                style={{width: "200px"}}
            />
            <div style={{width: "200px", height: "50px", background: "lightgrey", fontSize: "2rem"}}className="output-box">
                {string}
            </div>
            <button onClick={handleReset}> reset all </button>
        </div>
    )
}