import React, { useState } from "react";
import ButtonLottie from "../lotties/ButtonLottie";
import { GetProjectForImage } from "./GetProjectForImage";
import "./projectSectionList.css";
import Tilty from "react-parallax-tilt";






export const ProjectSectionList = ({ item }) => {
  const [clickLottie, setClickLottie] = useState(false);
  const [scale, setScale] = useState(1.03);
  const onClickBtn = () => {
    setClickLottie(true);
  };

 

  return (
    <Tilty
      className="ProjectSection____container"
      tiltMaxAngleX={5}
      tiltMaxAngleY={10}
      perspective={1500}
      scale={scale}
      transitionSpeed={1000}
      glareEnable={true}
      glareMaxOpacity={0.3}
      glareColor="white"
      glarePosition="all"
      glareBorderRadius="13px"



    >
      <section className="imageAndUl___container">
        <GetProjectForImage item={item.imgName} />
      </section>
      {/* button + text with link to project */}
      <section className="imageAndUl___textLottieBtn_container">
        <section className="ProjectSection____textLottieBtn_content">
          <div className="textLottieBtn____lottie">
            <a href={item.url} target="_blank">
              <ButtonLottie
                clickLottie={clickLottie}
                setClickLottie={setClickLottie}
              />
              <div className="textLottieBtn____p">
                <p onMouseEnter={onClickBtn}>{item.name} </p>
              </div>
            </a>
          </div>
        </section>
      </section>

    
    </Tilty>
  );
};
