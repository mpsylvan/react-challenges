import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const Canvas = ({draw, height, width}) => {
  const canvas = useRef();
  
  useEffect(()=>{
    const context = canvas.current.getContext('2d');
    // context.beginPath();
    // context.arc(50, 50, 50, 0, 2 * Math.PI);
    // context.fill();
    context.strokeRect(1, 10, 70, 5);
    context.strokeRect(1, 20, 70, 5);
    context.strokeRect(1, 30, 70, 5);
    context.strokeRect(1, 40, 70, 5);
    
  })
  
  return (
    <canvas
        style={{background: "grey"}}
        ref={canvas}
        width= {300}
        height= {200}
    />
  )
};
export default Canvas;
