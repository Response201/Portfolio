import React from "react";
import "./about.css";

import { Card } from "../../components/Card";
 import img from '../../assets/r.png' 

export const About = () => {
const data = ["My name is Jessica and I am based in Täby. My passion for web development began in 2011 when I worked at a streaming company and had the opportunity to collaborate closely with programmers. This sparked my interest in the industry and motivated me to pursue my dream of becoming a developer",
"I have several years of work experience as a receptionist/technical support and a bachelor's degree in environmental and development studies. In the past year, I have focused on learning the fundamentals of HTML, CSS, and JavaScript, as well as the technologies within the Mern-stack.",
 "I am excited to start my career in web development and continue learning new technologies. My goal is to become a versatile programmer and create code that enhances user interaction and improves the user experience."
]



  return (
    <article className="about___container">
       <h1>About</h1>
      <section className="about___content">
       
        <section className="about___section_text">
          <Card
            text={data} />
        </section>

        <section className="about___section_img">
           <Card img={img} alt='hello' />
        </section>
      </section>
    </article>
  );
};
