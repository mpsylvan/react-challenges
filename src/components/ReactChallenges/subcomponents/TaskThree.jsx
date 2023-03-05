import React from "react";
import { useState } from "react";

export const TaskThree = ()=>{

    const [objectArray, setObjectArray] = useState([
        {
            title: "one",
            color: "red",
            id: 1,
        },
        {
            title: "two",
            color: "blue",
            id: 2,
        },
        {
            title: "three",
            color: "green",
            id: 3,
        },
        {
            title: "four",
            color: "yellow",
            id: 4,
        },

    ])
    
    const [deleteArray, setDeleteArray] = (useState([]));

    const initialArray = [
        {
            title: "one",
            color: "red",
            id: 1,
        },
        {
            title: "two",
            color: "blue",
            id: 2,
        },
        {
            title: "three",
            color: "green",
            id: 3,
        },
        {
            title: "four",
            color: "yellow",
            id: 4,
        },

    ]

    const handleObjectClick = (e)=>{
        if(objectArray.find((obj)=>obj.title === e.target.innerText)){
            setObjectArray(objectArray.filter((object)=>object.title !== e.target.innerText));
            setDeleteArray(deleteArray.concat(objectArray.filter((object)=>object.title === e.target.innerText)));
        }
        else{
            setDeleteArray(deleteArray.filter((object)=>object.title !== e.target.innerText));
            setObjectArray(objectArray.concat(deleteArray.filter((object)=>object.title === e.target.innerText)));
        }
    }
    
    const handleResetClick = ()=>{
        setObjectArray(initialArray);
        setDeleteArray([]);
    }




    return (
        <div className = "task-three">
           <h1>Task Three: Objects Come and Go</h1>
           <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr",  background: "black", width: "150px", height:"150px"}} className="objects-container">
                {objectArray.map((obj)=>(
                    <div onClick ={handleObjectClick} key={obj.id} style = {{color: "#e81", margin: "4px", padding: "3px",textAlign: "center",  background: obj.color, height: "20px", width: "30px" }}>
                        {obj.title}
                    </div>
                ))}
           </div>
           <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr",  background: "#bbb", width: "150px", height:"150px"}} className="objects-container">
                {deleteArray.map((obj)=>(
                    <div onClick ={handleObjectClick} key={obj.id} style = {{color: "#e81", margin: "4px", padding: "3px",textAlign: "center",  background: obj.color, height: "20px", width: "30px" }}>
                        {obj.title}
                    </div>
                ))}
           </div>
           <button onClick={handleResetClick}> Reset </button>
        </div>
    )
}