import React, { useEffect, useState } from "react";
import cv from "../../assets/document/CV.pdf";
import { BtnAndText } from "../../components/BtnAndText";
import { Eyes } from "./component/Eyes";
import store from "../../store";

import "./resume.css";
export const Resume = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");


  const onmousemove = (event) => {
    setWidth(event.clientX);
    setHeight(event.clientY);
    
  };
  const OnMuseOverCat = () => {

    store.clickCat = true;

  }

  return (
    <section
      onMouseMove={(event) => onmousemove(event)}
      className="resume___container"
    >
     
      <section className="resume___content">
        <section className="resume___content_cv">
          <h1>CV</h1>
          <a href={cv} target="_blank" download className="resume___download_a" onMouseEnter={OnMuseOverCat}>
            <BtnAndText text="Download" />
          </a>
        </section>

        <section className="resume___content_avatar">
        <Eyes width={width} height={height} />
        <section className="resume___content_line">
          <section className="resume___content_cube">
            <div className="email___section_rainbow"> </div></section>
          </section>
        </section>
      </section>
    </section>
  );
};
