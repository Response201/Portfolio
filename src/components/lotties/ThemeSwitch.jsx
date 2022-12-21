import React, { useEffect, useRef, useState } from "react";
import animation from "../../assets/lotties/switch.json";
import Lottie from "lottie-react";

export const ThemeSwitch = ({startFram, firstClick, secondClick,  mode }) => {
  const [isFirstRun, setisFirstRun] = useState(true);
  const lottieRef = useRef(null);

  useEffect(() => {

    if (isFirstRun && !mode) {
      lottieRef.current.goToAndStop(startFram);
    
      setisFirstRun(false);
    } else {


      if (!isFirstRun && !mode) {
        lottieRef.current.playSegments(firstClick, true);
        document.documentElement.setAttribute('data-theme', 'root');
      }

      if (!isFirstRun && mode) {
        lottieRef.current.playSegments(secondClick, true);
        document.documentElement.setAttribute('data-theme', 'dark');
      }

    
    }





    // eslint-disable-next-line
  }, [mode]);

  return (
   
      <Lottie
        animationData={animation}
        loop={false}
        autoPlay={false}
        lottieRef={lottieRef}
        className='lottieSwitch'
      />
  
  );
};
