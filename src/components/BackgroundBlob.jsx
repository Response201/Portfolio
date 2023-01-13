import React, { useRef, useEffect, useState } from "react";
import Tilty from "react-parallax-tilt";
import "./backgroundBlob.css";
import { useSnapshot } from "valtio";
import store from "../store";


export const BackgroundBlob = ({image}) => {
  const [backgroundColor, setbackgroundColor] = useState("");
  const canvasRef = useRef(null);
  const snap = useSnapshot(store);
  useEffect(() => {
    setbackgroundColor(snap.colors);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Skapa en array med partiklar
    const particles = [];
    for (let i = 0; i < 15; i++) {
      let mix = "";

      if (snap.colors === "rgb(243, 19, 190)") {
        mix = `rgba(${Math.random() * 30 + 180}, 19 , 159, 1)`;
      } else if (snap.colors === "rgb(0,0,0)") {
        mix = `rgba(255,255,255,0.3)`;
      } else if (snap.colors === "rgb(51, 255, 255)") {
        mix = ` rgba(41 , ${Math.random() * 20 + 200} , 214 , 1)`;
      }

      /* rgb(103, 10, 81) */

      particles.push({
        x: Math.random() * canvas.width, // slumpmässig x-position
        y: Math.random() * canvas.height, // slumpmässig y-position
        radius: Math.random() * 40 + 10, // slumpmässig radius (10-70)
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
  }, [snap.colors]); //

  return (
    <article className="container">
      <Tilty
     tiltMaxAngleX={5}
     tiltMaxAngleY={5}
        className="content"
      >
        <section className="blob___container">
          <canvas ref={canvasRef} className="blob"></canvas>

          <div className="container___overlay"></div>
        </section>
        <img src={image} alt="" className="image" />
      </Tilty>
    </article>
  );
};
