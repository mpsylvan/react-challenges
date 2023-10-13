import React, { useState, useEffect } from "react";
import { useRef } from "react";

const Canvas = ({ draw, height, width }) => {
  const canvas = useRef();

  const [n, setN] = useState(10);
  const [startX, setStartX] = useState(100);
  const [startY, setStartY] = useState(100);
  const [endX, setendX] = useState(200);
  const [endY, setEndY] = useState(100);

  useEffect(() => {
    const ctx = canvas.current.getContext("2d");

    ctx.clearRect(0, 0, 300, 200);
    ctx.beginPath();

    ctx.arc(100, 90, 10, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }, [startX, startY, endX, endY, n]);

  return (
    <>
      <canvas
        style={{ background: "grey" }}
        ref={canvas}
        width={300}
        height={200}
      />
      <button onClick={() => {setStartX(startX+ Math.PI * 2); setendX(endX - Math.PI * 2);}} >/\</button>
      <button onClick={() => {setStartX(startX- Math.PI * 2); setendX(endX + Math.PI * 2);}}>\/</button>
    </>
  );
};
export default Canvas;
