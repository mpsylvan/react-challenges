import React from "react";
import { useState } from "react";
import {shuffle} from "../../../utils"


export const Scratch = ()=>{
    
    
    const concepts = [
        {name: "'The' Rappers", connections : [{name:"Creator"}, {name:"Stallion"}, {name:"Dude"}, {name:"Rapper"}]},
        {name: "'B' towns", connections : [{name:"Lagos"}, {name:"Limerick"}, {name:"Leipzig"}, {name:"Lincoln"}]},
        {name: "Beans", connections : [{name:"Kidney"}, {name:"Lima"}, {name:"Pinto"}, {name:"Fava"}]},
        {name: "Poetic structures", connections : [{name:"Meter"}, {name:"Verse"}, {name:"Line"}, {name:"Rhyme"}]}
        
    ]
    const conceptArray =  []
    
    for (let index = 0; index < concepts.length; index++) {
        concepts[index].connections.map((connection)=>{
            conceptArray.push(connection.name)

        }
        )
    }

    // state array that handles the array of data to go on the tiles. 
    const[shuffledConcepts, setShuffledConcepts]  = useState(shuffle(conceptArray))
    
    const reshuffle = () =>{

        let newArray = shuffle(conceptArray)
        if (newArray)(
            setShuffledConcepts(newArray.slice())
        )}

    const submit = () =>{
        console.log("submit ")
    }

    return(
        <div style={{
            display: "grid", 
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            
        }}>
            {
                shuffledConcepts.map((str)=>(
                    <Tile
                        key={str}
                        text_string={str}
                    />
                
            ))}
            <button onClick={reshuffle}>reset</button>
            <button onClick={submit}>submit</button>
        </div>
        
            
    )
}

export const Tile = ({text_string}) => {

    const [selected, setSelected] = useState(false)

    return(
        <div
            onClick={()=>{setSelected(!selected)}}
            style={{
                height: 50,
                width: 100,
                backgroundColor:  selected? "#243344" : "#332444",
                margin: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
        }}
        >
            {text_string}
        </div>
    )
}