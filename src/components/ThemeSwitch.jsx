import React, { useEffect, useState } from "react";
import "./themeSwitch.css";
import store from "../store";
import { useSnapshot } from "valtio";

export const ThemeSwitch = () => {
  const [mode, setMode] = useState("rgb(243, 19, 190)");
  const snap = useSnapshot(store);

  const onClickMode = (e, text) => {
    e.preventDefault();
    setMode(text);
  };

  useEffect(() => {
    store.colors = mode;

    if (mode === "rgb(0,0,0)") {
      document.documentElement.setAttribute("data-theme", "rgb(0,0,0)");
    }
    if (mode === "rgb(243, 19, 190)") {
      document.documentElement.setAttribute("data-theme", "root");
    }
    if (mode === "rgb(51, 255, 255)") {
      document.documentElement.setAttribute("data-theme", "turquoise");
    }
  }, [mode]);

  return (
    <div className="switch___content">
      <section
        className="switchBtn___content"
        onClick={(e) => onClickMode(e, "rgb(0,0,0)")}
        style={{
          backgroundColor: `${
            mode === "rgb(0,0,0)" ? `${mode}` : "rgb(100, 100, 100)"
          }`
        }}
      >
        <button className="switchBtn" />
      </section>

      <section
        className="switchBtn___content"
        onClick={(e) => onClickMode(e, "rgb(243, 19, 190)")}
        style={{
          backgroundColor: `${
            mode === "rgb(243, 19, 190)" ? `${mode}` : "rgb(105, 000, 105)"
          }`
        }}
      >
        <button className="switchBtn" />
      </section>

      <section
        className="switchBtn___content"
        onClick={(e) => onClickMode(e, "rgb(51, 255, 255)")}
        style={{
          backgroundColor: `${
            mode === "rgb(51, 255, 255)" ? `${mode}` : "rgb(000, 100, 100)"
          }`
        }}
      >
        <button className="switchBtn" />
      </section>
    </div>
  );
};
