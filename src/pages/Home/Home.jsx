import React, { useState } from "react";
import { useNavigate } from "react-router";
import { BtnAndText } from "../../components/BtnAndText";
import { Background } from "./components/Background";
import "./home.css";
const Home = () => {
  const navigate = useNavigate();

  return (
    <article className="home___container">
      <section className="home___content">
        <section className="home___header_container">
          <section className="header___content">
            <h1>Frontend devoloper</h1>
            <p className="header___content_p">
              With a strong focus on user experience and modern technologies
            </p>
            <section
              onClick={() => {
                navigate("/mail");
              }}
            >
              <BtnAndText text="contact" className="btnAndText___text" />
            </section>
          </section>
        </section>

        <section className="home___background_blob_container">
          {" "}
          <Background />
        </section>
      </section>
    </article>
  );
};

export default Home;
