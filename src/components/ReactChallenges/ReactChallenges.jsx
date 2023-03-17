import React from "react";
import {useState} from "react";
import { TaskOne } from './subcomponents/TaskOne';
import {TaskTwo} from './subcomponents/TaskTwo';
import {  TaskThree } from './subcomponents/TaskThree';
import {  TaskFour } from './subcomponents/TaskFour';


export const ReactChallenges = ()=>{

    const [currentTask, setCurrentTask] = useState("task1");

    const tasks = {
        task1: <TaskOne />,
        task2: <TaskTwo />,
        task3: <TaskThree />,
        task4: <TaskFour />,

    }

    const handleTaskClick = (task)=>{
        setCurrentTask(task)
    }

    return (
        <div className ="react-challenges"  style={{height: "100%", display: "flex", flexDirection: "column",  justifyContent: "center", alignItems: "center"}}>
            <h2>React Challenges</h2>
            <div className="task-buttons" style={{ margin: "20px", display: "flex", alignContent: "center",  justifyContent:"center",  width: "100%"}}>
                <button style={{marginRight: "100px", height: "80px", width: "80px", background: currentTask === 'task1' ? "coral" : "white"} } onClick={()=>handleTaskClick('task1')}>Task 1</button>
                <button style={{ marginRight: "100px", height: "80px", width: "80px", background: currentTask === 'task2' ? "coral" :"white"} } onClick={()=>handleTaskClick('task2')}>Task 2</button>
                <button style={{marginRight: "100px",  height: "80px", width: "80px", background: currentTask === 'task3' ? "coral" :"white"} }onClick={()=>handleTaskClick('task3')}>Task 3</button>
                <button style={{marginRight: "100px", height: "80px", width: "80px", background: currentTask === 'task4' ? "coral" :"white"} } onClick={()=>handleTaskClick('task4')}>Task 4</button>
            </div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", height:"70%", width: "100%", background: "#ddd"}} className="task=board">
                {tasks[currentTask]}
            </div>
            
        </div>
    )
}