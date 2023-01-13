import React, { useState } from "react";
import { GetProjectForImage } from "./GetProjectForImage";
import "./projectSectionList.css";
import Tilty from "react-parallax-tilt";
import RainbowDiv from "../../../components/RainbowDiv";
import store from "../../../store"
import { useSnapshot } from "valtio";
import { BtnAndText } from "../../../components/BtnAndText";
export const ProjectSectionList = ({ item }) => {
  const snap = useSnapshot(store);
  const [clickLottie, setClickLottie] = useState(false);
  const [scale, setScale] = useState(1.03);
  const onClickBtn = () => {
    setClickLottie(true);
  };

  return (
    <Tilty
      className="ProjectSection____container"
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      perspective={1500}
      scale={scale}
      transitionSpeed={1000}
      glareEnable={true}
      glareMaxOpacity={0.1}
      glareColor={snap.glar}
      glarePosition="all"
      glareBorderRadius="13px"
    >
<RainbowDiv />
      <section className="image___container">
        <GetProjectForImage item={item.imgName} className='hello'  />
      </section>
      {/* button + text with link to project */}
      <section className="image___textLottieBtn_container">
       
            <a href={item.url} target="_blank" className="textLottieBtn____lottie">
           <BtnAndText text={item.name} />
            </a>

      </section>
    </Tilty>
  );
};
