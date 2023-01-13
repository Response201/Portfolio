import React, { useEffect, useState } from "react";
import Cat from "./Cat";
import "./eyes.css";

export const Eyes = ({ height, width }) => {

  useEffect(() => {
    let Ball = document.getElementsByClassName("ball");
  
      var eye = document.querySelectorAll(".eye");
      eye.forEach(function (eye) {
              let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
              let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
              let radian = Math.atan2(width - x, height - y);
              let rot = (radian * (180 / Math.PI) * - 1) + 380;
              eye.style.transform = "rotate(" + rot + "deg)";
          })
  

      
  }, [height, width]);

  







  return (
   <section className="container_lottie_eyes" >
      <Cat   />
    <div className="container_eyes">
    
    <div className="face">
        <div className="eyes">
            <span className="eye"></span>
            <span className="eye"></span>
        </div>
    </div>
</div>
</section>


  );
};
