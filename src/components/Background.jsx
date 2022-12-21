import React, { useRef, useEffect, useState } from "react";
import "./background.css";
export const Background = ({ color }) => {
  const [backgroundColor, setbackgroundColor] = useState(color);
  const canvasRef = useRef(null);

  useEffect(() => {
    setbackgroundColor(color);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

console.log(color)




    // Skapa en array med partiklar
    const particles = [];
    for (let i = 0; i < 10; i++) {
let mix = ''

      if(color === 'rgb(253, 16, 199)'){
        mix = `rgb(${Math.random() * 255}, ${color.slice(9, 11)} ,${color.slice(12, 16)})`
       }else{

        mix = `rgb(${color.slice(5, 7)} ,${Math.random() * 255}, ${color.slice(12, 16)})`

       }

      particles.push({
        x: Math.random() * canvas.width, // slumpmässig x-position
        y: Math.random() * canvas.height, // slumpmässig y-position
        radius: Math.random() * 20 + 30, // slumpmässig radius (10-70)
        color: mix, // slumpmässig färg ifrån valt them(rosa, ljus, blå ect)
        velocityX: -1 + 1, // slumpmässig x-hastighet (-1 till 1)
        velocityY: Math.random() * -1 + 1 // slumpmässig y-hastighet (-1 till 1)
      });
    }

    // Animera partiklarna
    const animate = () => {
      requestAnimationFrame(animate);

      // Rensa canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Uppdatera partiklarnas positioner
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.velocityX;
        p.y += p.velocityY;

        // Byt riktning om partikeln når kanten av canvas
        if (p.x + p.radius > canvas.width || p.x - p.radius < 0) {
          p.velocityX = -p.velocityX;
        }
        if (p.y + p.radius > canvas.height || p.y - p.radius < 0) {
          p.velocityY = -p.velocityY;
        }
      }

      // Rita partiklarna
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 3);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
    };
    animate();
  }, [color]); //

  return (
    <>
      <canvas
        ref={canvasRef}
        className="container"
        style={{ backgroundColor: `${backgroundColor}` }}
      ></canvas>
      <div className="container___overlay"></div>
    </>
  );
};
