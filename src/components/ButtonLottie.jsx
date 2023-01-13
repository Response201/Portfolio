import React, { useEffect, useRef, useState } from "react";
import turquoise from "../assets/lotties/button.json";
import black from "../assets/lotties/buttonBlack.json";
import pink from "../assets/lotties/buttonPink.json";
import Lottie from "lottie-react";
import store from "../store";
import { useSnapshot } from "valtio";
const ButtonLottie = ({ clickLottie, setClickLottie }) => {
  const snap = useSnapshot(store);
  const [isFirstRun, setisFirstRun] = useState(true);
  const [animation, setAnimation] = useState(pink);
  const lottieRef = useRef();

  /* ändrar knappens färg efter mode */
  useEffect(() => {
    if (snap.colors === "rgb(0,0,0)") {
      setAnimation(black);
    }
    if (snap.colors === "rgb(51, 255, 255)") {
      setAnimation(turquoise);
    }
    if (snap.colors === "rgb(243, 19, 190)") {
      setAnimation(pink);
    }
  }, [snap.colors]);

  /* useEffect för att stoppa 'ny' animation ifrån att köras vid ändring av mode */
  useEffect(() => {
    lottieRef.current.goToAndStop(0, 3);
    setisFirstRun(false);
  }, [animation]);

  /* kör animation vid händelse */
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
