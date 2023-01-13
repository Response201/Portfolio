import React, { useEffect, useRef, useState } from "react";
import cat from "../../../assets/lotties/cat.json";
import catmove from "../../../assets/lotties/catmoving.json";
import "./lottieCat.css";
import { useSnapshot } from "valtio";
import Lottie from "lottie-react";
import store from "../../../store";
const Cat = () => {
  const snap = useSnapshot(store);
  const lottieRef = useRef();
  const [isFirstRun, setisFirstRun] = useState(true);
  const click = snap.clickCat;


  /* kör animation vid händelse */
  useEffect(() => {
    if (isFirstRun && !click) {
      lottieRef.current.goToAndStop(3, 3);
      setisFirstRun(false);
    } else if (!isFirstRun && click) {
      lottieRef.current.playSegments([15, 56], true);
    } else if (isFirstRun && click) {
      lottieRef.current.goToAndStop(54, 56);
    }
  }, [click]);

  return (
    <>
      <Lottie
        animationData={cat}
        progress={0}
        loop={true}
        autoPlay={true}
        className="cat"
      />
      <Lottie
        animationData={catmove}
        progress={0}
        loop={false}
        autoPlay={false}
        lottieRef={lottieRef}
        className="cat"
      />
    </>
  );
};

export default Cat;
