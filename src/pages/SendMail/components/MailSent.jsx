import React, { useEffect, useRef, useState } from "react";
import turquoise from "../../../assets/lotties/Email Sent Turquoise.json";
import black from "../../../assets/lotties/Email Sent Black.json";
import pink from "../../../assets/lotties/Sent Email Pink.json";
import Lottie from "lottie-react";
import store from "../../../store";
import { useSnapshot } from "valtio";

export const MailSent = () => {
  const snap = useSnapshot(store);
  const [animation, setAnimation] = useState();
  const [runFirst, setRunFirst] = useState(true);
  const lottieRef = useRef();

  /* useEffect för att stoppa 'ny' animation ifrån att köras vid ändring av mode */
  useEffect(() => {
    if (animation) {
      if (runFirst) {
        lottieRef.current.goToAndPlay(0, 25);
        setRunFirst(false);
      } else {
        lottieRef.current.goToAndStop(24, 25);
      }
    }
  }, [animation]);

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

  return (
    <section
      style={{
        position: "absolute",
        top: "40%",
        left: "0%",
        bottom: "0%",
        rigth: "0%",
        height: "50%",
        width: "100%",
        zIndex: "100"
      }}
    >
      <Lottie
        animationData={animation}
        progress={0}
        loop={false}
        lottieRef={lottieRef}
        autoPlay={true}
        style={{ height: "80%" }}
      />
    </section>
  );
};
