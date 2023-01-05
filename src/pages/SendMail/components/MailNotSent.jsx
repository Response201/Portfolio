import React from "react";
import animation from "../../../assets/lotties/mail-not-sent.json";
import Lottie from "lottie-react";

export const MailNotSent = () => {
  return (
    <Lottie
      animationData={animation}
      progress={0}
      loop={false}
      autoPlay={true}
      style={{ height: "50%", marginBottom: "10%" }}
    />
  );
};
