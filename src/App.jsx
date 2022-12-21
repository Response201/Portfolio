import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Background } from "./components/Background";
import { ThemeSwitch } from "./components/lotties/ThemeSwitch";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export const App = () => {
  const [mode, setMode] = useState(false);
  const [color, setColor] = useState("");

  useEffect(() => {
    if (mode) {
      setColor("rgb(232, 118, 35)");
    } else {
      setColor("rgb(253, 16, 199)");
    }
  }, [mode]);

  return (
    <article className="App">
      <Background color={color} />

      <section onClick={() => setMode(!mode)} className="switch_container">
        <ThemeSwitch
          mode={mode}
          startFram={[3, 3]}
          firstClick={[[34, 3]]}
          secondClick={[[4, 33]]}
        />
      </section>

      <>
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
        </Routes>
      </>
    </article>
  );
};
