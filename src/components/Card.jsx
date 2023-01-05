import React from 'react'
import Tilty from "react-parallax-tilt";
import './card.css'
import store from "../store";
import { useSnapshot } from "valtio";
export const Card = ({textOne,textThree, textTwo, img, alt}) => {
  const snap = useSnapshot(store);



  return (
    <Tilty
    transitionSpeed={1000}
    glareEnable={true}
    glareMaxOpacity={0.2}
    glareColor="white"
    glarePosition="all"
    glareBorderRadius="13px"
    tiltMaxAngleX={5}
    tiltMaxAngleY={10}
    perspective={1500}
    className={!img ? "card___section text" : "img card___section"}
    style={{
      backgroundColor: `${snap.colors}` 
   
   }}
  >
    <section>
      
     {textOne && textTwo && textThree && <>   <div className="card_rainbow"> </div> <section className="card___text_container">   <p className='card___p_One'>  {textOne} </p> <p className='card___p_Two'>  {textTwo}  </p> <p className='card___p_Three'>  {textThree}  </p> </section>  </>}
     {img &&  <>  <div className="card_rainbow rainbow_colorMix"> </div>  <img src={img} alt={alt} /> </> }
    </section>
  </Tilty>
  )
}
