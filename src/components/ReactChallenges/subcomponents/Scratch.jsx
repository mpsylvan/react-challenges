import React from "react";
import { useState } from "react";
import {shuffle} from "../../../utils"


export const Scratch = ()=>{
    
    const concepts = [
        {name: "'The' Rappers", connections : [{name:"Creator"}, {name:"Stallion"}, {name:"Dude"}, {name:"Rapper"}]},
        {name: "'L' towns", connections : [{name:"Lagos"}, {name:"Limerick"}, {name:"Leipzig"}, {name:"Lincoln"}]},
        {name: "Beans", connections : [{name:"Kidney"}, {name:"Lima"}, {name:"Pinto"}, {name:"Fava"}]},
        {name: "Poetic structures", connections : [{name:"Meter"}, {name:"Verse"}, {name:"Line"}, {name:"Rhyme"}]}
        
    ]
    const conceptArray =  []

    const guessArray = []

    const arrayOfGuesses = []
    
    for (let index = 0; index < concepts.length; index++) {
        concepts[index].connections.map((connection)=>{
            conceptArray.push(
                    {
                        connection: connection.name,
                        concept: concepts[index].name
                    })

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
           console.log(`submitted with an array of ${guessArray.length} guesses.`)
           if(guessArray.length === 4){
            
           }
           return;         
    }

    const evaluateGuess = (arr)=>{
        for (let i = 0; i < guessArray.length; i ++ ){
            
        }
    }

    return(
        <div style={{
            display: "grid", 
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            
        }}>
            {
                shuffledConcepts.map((obj)=>(
                    <Tile
                        key={obj.connection}
                        text_string={obj.connection}
                        concept = {obj.concept}
                        guessArray = {guessArray}
                    />
                
            ))}
            <button onClick={reshuffle}>reset</button>
            <button onClick={submit}>submit</button>
        </div>
        
            
    )
}

export const Tile = ({text_string, concept,  guessArray}) => {

    const [selected, setSelected] = useState(false)
    
    const handleClick = ()=>{
        if(guessArray.length < 4){
            if (!selected) {
                guessArray.push(text_string)
                setSelected(!selected)
            }
            else {
                guessArray.splice(guessArray.findIndex((element)=> element = text_string), 1)
                setSelected(!selected)
            }}
        else if (guessArray.length === 4) {
            if(selected){
                guessArray.splice(guessArray.findIndex((element)=> element = text_string), 1)
                setSelected(!selected)
            }
            else{
                return
            }
        }
        console.log(guessArray)
        return
        }


    return(
        <div
            onClick={handleClick}
            style={{
                height: 50,
                width: 100,
                backgroundColor:  selected? "#235534" : "#333444",
                margin: "10px",
                display: "flex",
                borderRadius: "3px",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
        }}
        >
            <div>{text_string}</div>
            {selected?<small>{concept}</small>: null }
        </div>
    )
}