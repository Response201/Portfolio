import React, { useState } from "react";
import { GrGithub, GrFacebook, GrMail } from "react-icons/gr";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { useSnapshot } from "valtio";
import { ThemeSwitch } from "./components/lotties/ThemeSwitch";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import store from "./store";

export const App = () => {
  const [color, setColor] = useState("");
  const snap = useSnapshot(store);

  console.log(snap.colors);

  return (
    <article className="App">
      <section className="link___section_top">
        <Link to="/projects"> Projects </Link>
        <Link to="/"> Home </Link>
      </section>
      <section className="link___section_bottom">
        <Link to="/projects">
          {" "}
          <p> About </p>{" "}
        </Link>
        <Link to="/"> My skills </Link>
      </section>

      <section className="link___section_left">
        <div className="link___left_a_container">
          <Link to="/" className="link___left_a">
            {" "}
            Work{" "}
          </Link>
        </div>
        <div className="link___icons_container">
          <a>
            <GrMail />
          </a>

          <a>
            {" "}
            <GrFacebook />{" "}
          </a>
          <a>
            {" "}
            <GrGithub />{" "}
          </a>

          <div className="line"></div>
        </div>
      </section>

      <section className="link___section_rigth">
        <div className="link___rigth_a">
          <Link to="/"> My skills </Link>
        </div>
        <div></div>
      </section>

      <section className="switch_container">
        <ThemeSwitch setColor={setColor} color={color} />
      </section>

      <section style={{ height: "90vh", width: "80vw", overflow: "scroll" }}>
        <Routes>
          <Route exact path="/" element={<Home color={color} />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
        </Routes>
      </section>
    </article>
  );
};
