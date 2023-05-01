import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSendClick = () => {
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <div className="container">
      <h1 className="title">
      Írhatsz közvetlen üzenetet is!
      </h1>
      <div className={`wrapper centered ${isSent ? "sent" : ""}`}>
        <article className="letter">
          <div className="side">
            <h1 className="contactH1">Kapcsolat</h1>
            <p>
              <label className="photoChoose">Milyen fényképezést szeretnél? </label>
              <select id="photoType" name="photoType" required className="select">
                <option value="">--Válassz--</option>
                <option value="image1">Portré</option>
                <option value="image2">Esküvői</option>
                <option value="image3">Budoir</option>
                <option value="image3">Sport</option>
                <option value="image3">Családi</option>
                <option value="image3">Gyermek-Baba</option>
                <option value="image3">Rendezvény</option>
              </select>
              <textarea placeholder="Üzeneted"></textarea>
            </p>
          </div>
          <div className="side">
            <p>
              <input type="text" placeholder="Neved"></input>
            </p>
            <p>
              <input type="email" placeholder="E-mail cimed"></input>
            </p>
            <p>
              <button id="sendLetter" onClick={handleSendClick}>
                Küldés
              </button>
            </p>
          </div>
        </article>
        <div className="envelope front"></div>
        <div className="envelope back"></div>
      </div>
      <p className={`result-message centered ${isSent ? "sent" : ""}`}>
        Thank you for your message
      </p>
      {isSent && (
        <p>
          Köszönöm az üzeneted!:)
          <br />
          <br />
          Hamarosan válaszolok!{" "}
        </p>
      )}
    </div>
  );
};

export default ContactUs;
