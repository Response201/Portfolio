import React, { useEffect, useState } from "react";
import ButtonLottie from "../../components/ButtonLottie"
import { MailNotSent } from "./components/MailNotSent";
import { LoadingDots } from "./components/LoadingDots";
import "./sendMail.css";
import { MailSent } from "./components/MailSent";

const SendMail = () => {
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [adress, setAdress] = useState("");
  const [showBtn, setshowBtn] = useState(false);
  const [hoverLottie, setHoverLottie] = useState(false);
  const [validEmail, setValidEmail] = useState(null);
  const [mailSent, setMailSent] = useState("wait");
  const [loading, setLoading] = useState(false);
  const url = `https://backend-recipe-ect.herokuapp.com/send`;

  const onClickBtn = () => {
    setClickLottie(true);
  };
/* check för att se att adressen är uppbyggt som en emailadress */
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

    if (showBtn) {
      setLoading(true);
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
            setLoading(false);
            setMailSent("sent");
            setMessage("");
            setAdress("");
            setSubject("");

            setTimeout(() => {
              setMailSent("wait");
            }, "2300");
          }
        })
        .catch((err) => {
          setLoading(false);
          setMailSent("error");
        });
    }
  };

  return (
    <article className="email___form_container">
      <section className="email___section">
        <form  className="email___form">
          <section className="adress___section">
            <label
              className={validEmail !== null ? "validText" : "notValidText"}
            >
              Email address:
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
            <label
              className={subject.length >= 1 ? "validText" : "notValidText"}
            >
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              className="subject___input"
              maxLength={100}
              minLength={5}
              required
            />
          </section>

          <section className="message___section">
            <label
              className={message.length >= 10 ? "validText" : "notValidText"}
            >
              Message:
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
            {mailSent === "sent" && <MailSent />}
          </section>
          <section
            className={showBtn ? "submit___input" : "submit___input_hidden"}
            onMouseEnter={onClickBtn}
          >
            {loading ? (
              <button >
                <LoadingDots />
              </button>
            ) : (
              <button onClick={handleSubmit} className="dots">
                {mailSent === "error" ? <MailNotSent /> : <p>Send</p>}
              </button>
            )}

            <ButtonLottie
              clickLottie={hoverLottie}
              setClickLottie={setHoverLottie}
            />
          </section>
        </form>

        <div className="email___section_rainbow"> </div>
      </section>
    </article>
  );
};

export default SendMail;
