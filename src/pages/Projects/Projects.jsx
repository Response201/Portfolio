import React, { useEffect, useState } from "react";
import { ProjectSectionList } from "./components/ProjectSectionList";
import './projects.css'
const Projects = () => {
  const array = [
    {
      name: "Weather app",
      url: "https://kolla-vadret.netlify.app/",
      imgName: "weather"
    },
    {
      name: "Grab a coffee",
      url: "https://grabacoffee.netlify.app/",
      imgName: "coffee"
    },
    {
      name: "Productivity app",
      url: "https://productivity-flow.netlify.app",
      imgName: "todo"
    },
    {
      name: "Foodnary",
      url: "https://foodnary.netlify.app",
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
