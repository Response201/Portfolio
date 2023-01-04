import React, { useEffect, useState } from "react";
import "./themeSwitch.css";
import store from "../../store";
import { useSnapshot, proxy } from "valtio";

export const ThemeSwitch = ({ setColor, color }) => {
  const [mode, setMode] = useState("pink");
  const snap = useSnapshot(store);

  const onClickMode = (e, text) => {
    e.preventDefault();
    setMode(text);
  };

  useEffect(() => {
    store.colors = mode;

    if (mode === "black") {
      setColor("rgb(0,0,0)");
      document.documentElement.setAttribute("data-theme", "black");
    }
    if (mode === "pink") {
      setColor("rgb(243, 19, 190)");
      document.documentElement.setAttribute("data-theme", "root");
    }
    if (mode === "turquoise") {
      setColor("rgb(51, 255, 255)");
      document.documentElement.setAttribute("data-theme", "turquoise");
    }
  }, [mode]);

  return (
    <div className="switch___content">
      <section
        className="switchBtn___content"
        onClick={(e) => onClickMode(e, "black")}
        style={{
          backgroundColor: `${
            mode === "black" ? `${color}` : "rgb(100, 100, 100)"
          }`
        }}
      >
        <button className="switchBtn" />
      </section>

      <section
        className="switchBtn___content"
        onClick={(e) => onClickMode(e, "pink")}
        style={{
          backgroundColor: `${
            mode === "pink" ? `${color}` : "rgb(105, 000, 105)"
          }`
        }}
      >
        <button className="switchBtn" />
      </section>

      <section
        className="switchBtn___content"
        onClick={(e) => onClickMode(e, "turquoise")}
        style={{
          backgroundColor: `${
            mode === "turquoise" ? `${color}` : "rgb(000, 100, 100)"
          }`
        }}
      >
        <button className="switchBtn" />
      </section>
    </div>
  );
};
