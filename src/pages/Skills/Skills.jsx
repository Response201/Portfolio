import React from "react";
import { Card } from "../../components/Card";
import "./skills.css";
export const Skills = () => {
  const otherData =['Figma', 'Responsive design', 'Git', 'Procreate'];
  const developmentData = ['JavaScript'
    , 'React'
    , 'Redux', 'Valtio'
    , 'CSS','Sass'
    , 'HTML5'
    , 'Node.js'
    , 'REST API'
    , 'Mongodb', 'jQuery'];
  return (
    <article className="skills___container">
      <h1 className="skills___container_h1">Skills</h1>
      <section className="skills___content">
        <section className="skills___section">
          <Card  title='Other' text={otherData} />
        </section>
        <section className="skills___section">
          <Card
          title='Development'
          text={developmentData} 
          />
        </section>
      </section>
    </article>
  );
};
