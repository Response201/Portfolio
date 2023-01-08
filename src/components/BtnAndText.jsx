import React, { useState } from "react";
import ButtonLottie from "./ButtonLottie";
import "./btnAndText.css";

export const BtnAndText = ({ text }) => {
  const [hoverLottie, setHoverLottie] = useState(false);

  const onClickBtn = () => {
    setHoverLottie(true);
  };
  return (
    <article className="btnAndText___container">
      <section className="btnAndText___content" onMouseEnter={onClickBtn}>
        <ButtonLottie
          clickLottie={hoverLottie}
          setClickLottie={setHoverLottie}
        />

        <p className="btnAndText___text"> {text} </p>
      </section>
    </article>
  );
};
