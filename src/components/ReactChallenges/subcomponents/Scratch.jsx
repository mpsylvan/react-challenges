import React from "react";
import { useState, useEffect } from "react";
import {shuffle} from "../../../utils"



let guessArray = []

export const Scratch = ()=>{
    
    const concepts = [
        {name: "Addams", connections : [{name:"FESTER"}, {name:"LURCH"}, {name:"WEDNESDAY"}, {name:"THING"}]},
        {name: "'Fat __'", connections : [{name:"CAT"}, {name:"TUESDAY"}, {name:"LIP"}, {name:"CHANCE"}]},
        {name: "Days", connections : [{name:"FRIDAY"}, {name:"SATURDAY"}, {name:"SUNDAY"}, {name:"THURSDAY"}]},
        {name: "Go Bad", connections : [{name:"SPOIL"}, {name:"ROT"}, {name:"TURN"}, {name:"SOUR"}]}
        
    ]
    
    const buildStateConceptArray = (concepts)=>{
        let conceptArray = []
        for (let index = 0; index < concepts.length; index++) {
            concepts[index].connections.map((connection)=>{
                conceptArray.push(
                        {
                            connection: connection.name,
                            conceptName: concepts[index].name
                        })
    
            })
        }
        return conceptArray;
    }
    
    
    // state array that handles the array of data to go on the tiles. 
    const [stateConceptArray, setStateConceptArray] = useState(buildStateConceptArray(concepts))
    const[shuffledConcepts, setShuffledConcepts]  = useState(shuffle(stateConceptArray))
    const [solvedArray, setSolvedArray] = useState([])
    
    
    
    
    // reshuffles conceptArray
    const reshuffle = () => {
        let newArray = shuffle(stateConceptArray)
        setShuffledConcepts(newArray.slice()) // the slice is a hacky way to expose "newness" to state of shuffledConcepts.
    }   
    
    const submit = () =>{
        let result;
        if(guessArray.length === 4){
            result = evaluateGuess(guessArray)
            setSolvedArray(solvedArray.concat(guessArray))
           }
        if(result.length === 1){
            console.log("solved")
        }
        else if (result.length === 2){
            console.log("one away")
        }
        else{
            console.log("mistake")
        }       
    }

    const evaluateGuess = (guessArray)=>{
        let resultArray = [guessArray[0]]
        guessArray.forEach((guess)=>{
            if(guess.conceptName !== resultArray[0].conceptName){
                resultArray.push(guess)
            }
        })
        return resultArray;
    }


    const handleTileClick = (obj)=>{
        if(guessArray.length < 4){
            if(guessArray.find((guess)=>guess.connection === obj.connection)){
                guessArray = guessArray.filter((guess)=>guess.connection !== obj.connection)
            }
            else{
                guessArray = guessArray.concat([obj])
            }
        }
        else if (guessArray.length === 4){
            if(guessArray.find((guess)=>guess.connection === obj.connection)){
                guessArray = guessArray.filter((guess)=>guess.connection !== obj.connection)
            }
            else{
                return;
            }
        }
        if(guessArray){
            console.log("*****")
            guessArray.forEach((guess)=>{
                console.log(`${guess.connection} : ${guess.conceptName}`)
            })
            console.log("*****")
        }
    }



    return(
        
        <div>

            <div style={{
                display: "grid", 
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                
            }}>
                {
                    shuffledConcepts.map((obj)=>(
                        <Tile
                            key={obj.connection}
                            connection={obj.connection}
                            conceptName = {obj.conceptName}
                            handleTileClick = {handleTileClick}
                            solvedArray = {solvedArray}
                        />
                    
                ))}
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <button onClick={reshuffle}>reset</button>
                <button onClick={submit}>submit</button>
            </div>
        </div>
 
            
    )
}

export const Tile = ({connection, conceptName,  handleTileClick, solvedArray}) => {

    const [selected, setSelected] = useState(false)
    const [solved, setSolved] = useState(false)
    

    
    const handleClick = ()=>{
        handleTileClick({connection: connection, conceptName:conceptName})
        if(guessArray.length <=4 && guessArray.find((guess)=>guess.connection === connection)){
            if(!selected){
                setSelected(true)
            }
        }
        else{
            setSelected(false)
        }


    }    
    useEffect(()=>{
        if(solvedArray.find((element)=>element.connection===connection)){
            console.log('match', connection)
        }
    },[selected, solvedArray])


    return(
        <div
            onClick={handleClick}
            style={{
                display: "flex",
                height: 100,
                width: 100,
                backgroundColor:  selected? "#63a594": solved? "#333444": "grey",
                color: solved? "grey": "white",
                margin: "10px",
                borderRadius: "3px",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
        }}
        >
            <div>{connection}</div>
            {selected?<small>{conceptName}</small>: null }
            {solved?<small>yes</small>:<small>no</small>}
        </div>
    )
}