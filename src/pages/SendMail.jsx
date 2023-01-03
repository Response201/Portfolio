import React, { useEffect, useState } from "react";
import ButtonLottie from "../components/lotties/ButtonLottie";
import "./sendMail.css";

const SendMail = () => {
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [adress, setAdress] = useState("");
  const [showBtn, setshowBtn] = useState(false);
  const [hoverLottie, setHoverLottie] = useState(false);
  const [validEmail, setValidEmail] = useState(null);

  const url = `https://backend-recipe-ect.herokuapp.com/send`;

  const onClickBtn = () => {
    setClickLottie(true);
  };

  useEffect(() => {
    const mail = adress
      .toLowerCase()
      .match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/);

    setValidEmail(mail);
  }, [adress]);

  useEffect(() => {
    if (message.length >= 10 && validEmail !== null && subject) {
      setshowBtn(true);
    } else {
      setshowBtn(false);
    }
  }, [message, validEmail, subject]);

  // Denna funktion anropas när formuläret skickas
  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.length >= 10 && validEmail !== null && subject) {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },

        body: JSON.stringify({
          email: `${adress}`,
          title: `${subject}`,
          message: `${message}`
        })
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            setMessage("");
            setAdress("");
            setSubject("");
          }
        })
        .catch((err) => {
          // Handle error
          console.log("Error message: ", error);
        });
    }
  };

  return (
    <article className="email___form_container"> 
   
   <section className="email___section"> 
    <form onSubmit={handleSubmit} className="email___form">

      <section className="adress___section">
        <label className={validEmail !== null ? "validText" : "notValidText"}>
          Epostadress:
        </label>
        <input
          type="text"
          id="adress"
          value={adress}
          onChange={(event) => setAdress(event.target.value)}
          className={validEmail !== null ? "valid" : "notValid"}
          maxLength={254}
          minLength={5}
          required
        />
      </section>

      <section className="subject___section">
        <label className={subject.length >= 1 ? "validText" : "notValidText"}>
          Ämne:
        </label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          className="subject___input"
          maxLength={100}
          required
        />
      </section>

      <section className="message___section">
        <label className={message.length >= 10 ? "validText" : "notValidText"}>
          Meddelande:
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="message___input"
          minLength={10}
          maxLength={1500}
          required
        />
        
      </section>
      <section
        className={showBtn ? "submit___input" : "submit___input_hidden"}
        onMouseEnter={onClickBtn}
      >
        <button type="submit">Skicka</button>

        <ButtonLottie
          clickLottie={hoverLottie}
          setClickLottie={setHoverLottie}
        />
      </section>
    </form>
    
    <div className="email___section_rainbow">gewgegew </div>
    </section>
    </article>
  );
};

export default SendMail;
