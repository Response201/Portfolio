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
      setColor("rgb(201, 19, 159)");
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
      >
        <div className={mode === "black" ? "activeSwitch" : "notSwitch"}> </div>
        <button
          style={{ backgroundColor: "rgb(0, 0, 0)" }}
          className="switchBtn"
        />
      </section>

      <section
        className="switchBtn___content"
        onClick={(e) => onClickMode(e, "pink")}
      >
        <div className={mode === "pink" ? "activeSwitch" : "notSwitch"}> </div>

        <button
          style={{ backgroundColor: "rgb(255, 20, 200)" }}
          className="switchBtn"
        />
      </section>

      <section
        className="switchBtn___content"
        onClick={(e) => onClickMode(e, "turquoise")}
      >
        <div className={mode === "turquoise" ? "activeSwitch" : "notSwitch"}>
          {" "}
        </div>
        <button
          style={{ backgroundColor: "rgb(71, 220, 223)" }}
          className="switchBtn"
        />
      </section>
    </div>
  );
};
