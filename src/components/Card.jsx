import React from "react";
import Tilty from "react-parallax-tilt";
import "./card.css";
import store from "../store";
import { useSnapshot } from "valtio";
import RainbowDiv from './RainbowDiv'
import { BackgroundBlob } from "../components/BackgroundBlob";
export const Card = ({ title,text, img }) => {
  const snap = useSnapshot(store);

  return (
    <Tilty
      transitionSpeed={1000}
      glareEnable={true}
      glareMaxOpacity={0.2}
      glareColor={snap.glar}
      glarePosition="all"
      glareBorderRadius="13px"
      tiltMaxAngleX={5}
      tiltMaxAngleY={10}
      perspective={1500}
      className={!img ? "card___section text" : "img card___section"}
     
    >
     




   
        
       <RainbowDiv/>
           
            <section className="card___text_container" >
            {title && <h1 className="card___h1_Title"> {title} </h1>}
            <section className={title ? "card___p_container" : ''}>
             {text && text.map( item =>  <p className="card___p" key={item}> {item} </p> ) }
             </section>
            </section>
      
      
   
      
        {img && (
          
          
           <BackgroundBlob image={img} />
          
         
        )}
       
    
    </Tilty>
  );
};
