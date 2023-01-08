import React from "react";
import { Card } from "../../components/Card";
import "./skills.css";
export const Skills = () => {
  const designData =['figma', 'photoshop'];
  const developmentData = ['React', 'HTML', 'CSS', 'Node.js'];
  return (
    <article className="skills___container">
      <h1 className="skills___container_h1">Skills</h1>
      <section className="skills___content">
        <section className="skills___section">
          <Card  title='Design' text={designData} />
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
