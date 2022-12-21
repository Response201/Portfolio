import React, { useEffect, useRef, useState } from "react";
import animation from "../../assets/lotties/button.json";
import Lottie from "lottie-react";

const ButtonLottie = ({ clickLottie, setClickLottie }) => {
  const [isFirstRun, setisFirstRun] = useState(true);
  const lottieRef = useRef();

  useEffect(() => {
    if (isFirstRun && !clickLottie) {
      lottieRef.current.goToAndStop(3, 3);
      setisFirstRun(false);
    } else {
      if (!isFirstRun && clickLottie) {
        lottieRef.current.playSegments([4, 51], true);
        setClickLottie(false);
      }
    }
  }, [clickLottie]);

  return (
    <Lottie
      animationData={animation}
      progress={0}
      loop={false}
      autoPlay={false}
      lottieRef={lottieRef}
      style={{ filter: "drop-shadow(1px 1px 2px black)" }}
    />
  );
};

export default ButtonLottie;
