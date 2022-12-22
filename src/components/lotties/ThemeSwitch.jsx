import React, { useEffect, useRef, useState } from "react";
import './themeSwitch.css'
import animation from "../../assets/lotties/switch.json";
import Lottie from "lottie-react";

export const ThemeSwitch = ({setColor, color}) => {
  const [mode, setMode] = useState('pink');


  useEffect(() => {


      if (mode === 'black') {
        setColor("rgb(0,0,0)");
        document.documentElement.setAttribute('data-theme', 'black');
  
      } if (mode === 'pink') {
        setColor("rgb(253, 16, 199)");
        document.documentElement.setAttribute('data-theme', 'root');
      }
      if (mode === 'turquoise') {
        setColor("rgb(51, 255, 255)");
        document.documentElement.setAttribute('data-theme', 'turquoise');
      }
    

  }, [mode]);

  return (
   
 <div className="switch___content">

  <section className="switchBtn___content" onClick={() => setMode('pink')} > 
  <div className={mode === 'pink'? 'activeSwitch' : 'notSwitch'} > </div>
    
 <button style={{backgroundColor:'rgb(253, 16, 199)'}} className='switchBtn' /> 
 
 </section>

 <section className="switchBtn___content" onClick={() => setMode('turquoise')}>
 <div className={mode === 'turquoise'? 'activeSwitch' : 'notSwitch'} >  </div>
 <button  style={{backgroundColor:'rgb(51, 255, 255)'}} className='switchBtn' /> 

 </section>


 <section className="switchBtn___content" onClick={() => setMode('black')} >
 <div className={mode === 'black'? 'activeSwitch' : 'notSwitch'} >   </div>
 <button style={{backgroundColor:'rgb(0, 0, 0)'}} className='switchBtn' />  

 </section>
 
 </div>
  );
};
