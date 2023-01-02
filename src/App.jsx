import React, { useState } from "react";
import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { useSnapshot } from "valtio";
import { ThemeSwitch } from "./components/lotties/ThemeSwitch";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import store from "./store";
import SendMail from "./pages/SendMail";

export const App = () => {
  const [color, setColor] = useState("");
  const snap = useSnapshot(store);



  return (
    <article className="App">
      <section className="link___section_bottom">
        <Link to="/projects">
          {" "}
          <p> About Me</p>{" "}
        </Link>
        <Link to="/"> My skills </Link>
      </section>

      <section className="link___section_rigth">
        <div className="link___rigth_a_container">
          <Link to="/" className="link___rigth_a">
            {" "}
            Work{" "}
          </Link>
        </div>
        <div className="link___icons_container">
          <Link to="/mail">
            <GrMail />
          </Link>

          <a href="https://www.linkedin.com/in/jessicatech" target="_blank">
            {" "}
            <GrLinkedin />{" "}
          </a>
          <a href="https://github.com/Response201" target="_blank">
            {" "}
            <GrGithub />{" "}
          </a>

          <div className="line"></div>
        </div>
      </section>

      <section className="link___section_left">
        <div className="link___left_a_container_first_p">
          <Link to="/" className="link___left_a">
            Home
          </Link>
        </div>
        <div className="link___left_a_container_second_p">
          <Link to="/projects" className="link___left_a">
            Projects
          </Link>
        </div>
      </section>

      <section className="switch_container">
        <ThemeSwitch setColor={setColor} color={color} />
      </section>

      <section style={{ height: "90vh", width: "80vw", overflowY: "scroll" }}>
        <Routes>
          <Route exact path="/" element={<Home color={color} />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/mail" element={<SendMail />}></Route>
        </Routes>
      </section>
    </article>
  );
};
