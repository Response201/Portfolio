import React, { useEffect, useState } from "react";
import { ProjectSectionList } from "../components/Projects/ProjectSectionList";

const Projects = () => {
  const array = [
    {
      name: "weather-app",
      url: "https://kolla-vadret.netlify.app/",
      tech: ["CSS", "JavaScript", "React", "API"],
      imgName: "weather"
    },
    {
      name: "grabacoffee",
      url: "https://grabacoffee.netlify.app/",
      tech: ["SCSS", "JavaScript", "React", "API"],
      imgName: "coffee"
    },
    {
      name: "productivity-app",
      url: "https://productivity-flow.netlify.app",
      tech: ["CSS", "JavaScript", "React", "API", "JSX"],
      imgName: "todo"
    },
    {
      name: "foodnary",
      url: "https://foodnary.netlify.app",
      tech: ["SCSS", "Redux", "React", "JavaScript"],
      imgName: "foodnary"
    }
  ];

  return (
    <section className="projectSection_grid_container">
      {array.map((item) => {
        return <ProjectSectionList item={item} key={item.name} />;
      })}
    </section>
  );
};

export default Projects;
