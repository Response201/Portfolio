import React, { useEffect, useState } from "react";
import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { useSnapshot } from "valtio";
import { ThemeSwitch } from "./components/ThemeSwitch";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import store from "./store";
import SendMail from "./pages/SendMail/SendMail";
import { About } from "./pages/About/About";

export const App = () => {
  const [color, setColor] = useState("");
  const snap = useSnapshot(store);
  const [cursors, setCursors] = useState("pinkCursor");



  useEffect(() => {
    if (snap.colors === "rgb(243, 19, 190)") {
      setCursors("pinkCursor");
    } else if (snap.colors === "rgb(51, 255, 255)") {
      setCursors("turquoiseCursor");
    } else {
      setCursors("blackCursor");
    }
  }, [snap.colors]);

  /* */

  return (
    <article className={`App ${cursors}`}>
      <section className="switch_container">
        <ThemeSwitch setColor={setColor} color={color} className={`${cursors}`} />
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

      <section className="App_Routes____container">
        <Routes>
          <Route exact path="/" element={<Home color={color} />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/mail" element={<SendMail />}></Route>
        </Routes>
      </section>
      <section className="link___section_bottom">
        <Link to="/about">
          {" "}
          <p> About Me</p>{" "}
        </Link>
        <Link to="/"> My skills </Link>
      </section>
    </article>
  );
};
