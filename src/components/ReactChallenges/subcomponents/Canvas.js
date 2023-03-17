import React, { useState, useEffect } from "react";
import { useRef } from "react";

const Canvas = ({ draw, height, width }) => {
  const canvas = useRef();

  const [n, setN] = useState(10);

  useEffect(() => {
    const ctx = canvas.current.getContext("2d");

    ctx.clearRect(0, 0, 300, 200);
    // context.beginPath();
    // context.arc(50, 50, 50, 0, 2 * Math.PI);
    // context.fill();
    ctx.strokeRect(n, 150, n, 10);

    ctx.beginPath();
    ctx.arc(100, n, 40, 0, 2 * Math.PI);
    // ctx.fill();
    ctx.stroke();
  }, [n]);

  return (
    <>
      <canvas
        style={{ background: "grey" }}
        ref={canvas}
        width={300}
        height={200}
      />
      <button onClick={() => setN(n + 5)}>/\</button>
      <button onClick={() => setN(n - 5)}>\/</button>
    </>
  );
};
export default Canvas;
