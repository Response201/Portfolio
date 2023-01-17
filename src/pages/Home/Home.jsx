import React, { useState } from "react";
import { useNavigate } from "react-router";
import { BtnAndText } from "../../components/BtnAndText";
import { BackgroundBlob } from "../../components/BackgroundBlob";
import image from "../../assets/image/header.png";
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
              className='btnAndText___container'
            >
              <BtnAndText text="Contact"  />
            </section>
          </section>
        </section>

        <section className="home___background_blob_container">
         
          <BackgroundBlob image={image} />
        </section>
      </section>
    </article>
  );
};

export default Home;
