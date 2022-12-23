import React, { useState } from "react";


const SendMail = () => {
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [adress, setAdress] = useState("");
const url = `https://backend-recipe-ect.herokuapp.com/send`




















  // Denna funktion anropas när formuläret skickas
  const handleSubmit = (e) => {
    e.preventDefault();
    if ((message, adress, subject)) {
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="adress">
        epost-adress:
        <input
          type="text"
          id="adress"
          value={adress}
          onChange={(event) => setAdress(event.target.value)}
        />
      </label>
      <label htmlFor="subject">
        Ämne:
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
      </label>
      <br />
      <label htmlFor="message">
        Meddelande:
        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Skicka</button>
    </form>
  );
};

export default SendMail;
