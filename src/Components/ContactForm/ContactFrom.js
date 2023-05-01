import React, { useState, useEffect } from "react";
import classes from "./ContactForm.module.css";
import ContactDetails from "./ContactDetails";
import { useContext } from "react";
import CartContext from "../Store/cart-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const cartCtx = useContext(CartContext);
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message, photoType } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
      photoType: photoType.value,
    };

    const recaptchaToken = await new Promise((resolve) => {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute("6LfS378lAAAAABNByvfMus2mzznY4ZHzmThpaFUO", {
            action: "contact",
          })
          .then(resolve);
      });
    });

    details.recaptchaToken = recaptchaToken;

    let response = await fetch("/backend/contact.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    if (response.ok) {
      setSuccessMessageVisible(true);
      setTimeout(() => {
        setSuccessMessageVisible(false);
        name.value = "";
        email.value = "";
        message.value = "";
        photoType.value = "";
      }, 5000);
    }
  };
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>
        Kérj időpontot a kapcsolati űrlap kitöltésével!
      </h1>
      <hr className={classes.underline} />
      <div className={classes.contactForm}>
        <span className={classes.heading}>Üzenetküldés</span>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Neved:</label>
          <input type="text" id="name" required />
          <label htmlFor="email">E-mail címed:</label>
          <input type="email" id="email" name="email" required />
          <label>Fotózás típusa:</label>
          <select id="photoType" name="photoType" required>
            <option
              value={
                cartCtx.photoPackage !== "--Választás--"
                  ? cartCtx.photoPackage
                  : ""
              }
            >
              {cartCtx.photoPackage}
            </option>
            <option value="Szabadtéri fotózás - Alap csomag - 30.000 Ft">
              Szabadtéri fotózás - Alap csomag - 30.000 Ft
            </option>
            <option value="Szabadtéri fotózás - Normál csomag - 35.000 Ft">
              Szabadtéri fotózás - Normál csomag - 35.000 Ft
            </option>
            <option value="Szabadtéri fotózás - Prémium csomag - 40.000 Ft">
              Szabadtéri fotózás - Prémium csomag - 40.000 Ft
            </option>
            <option value="Stúdió fotózás - Alap csomag - 40.000 Ft">
              Stúdió fotózás - Alap csomag - 40.000 Ft
            </option>
            <option value="Stúdió fotózás - Normál csomag - 50.000 Ft">
              Stúdió fotózás - Normál csomag - 50.000 Ft
            </option>
            <option value="Stúdió fotózás - Prémium csomag - 55.000 Ft">
              Stúdió fotózás - Prémium csomag - 55.000 Ft
            </option>
            <option value="Stúdió fotózás - Prémium csomag - 55.000 Ft">
              Esküvői fotózás - Kreatív - 60.000 Ft
            </option>
            <option value="Esküvői fotózás - Szertartás - 30.000 Ft">
              Esküvői fotózás - Szertartás - 30.000 Ft
            </option>
            <option value="Esküvői fotózás - Alap csomag - 30.000 Ft">
              Esküvői fotózás - Alap csomag - 30.000 Ft
            </option>
            <option value="Esküvői fotózás - Normál csomag - 35.000 Ft">
              Esküvői fotózás - Normál csomag - 35.000 Ft
            </option>
            <option value="Esküvői fotózás - Prémium csomag - 40.000 Ft">
              Esküvői fotózás - Prémium csomag - 40.000 Ft
            </option>
          </select>
          <label htmlFor="message">Üzeneted:</label>
          <textarea
            id="message"
            name="message"
            required
            style={{ resize: "none" }}
            rows="6"
          ></textarea>
          {successMessageVisible && (
            <div className={classes.responseContainer}>
              <p className={classes.successMessage}>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  style={{ fontSize: "2em", marginRight: "10px" }}
                />
                Sikeres üzenetküldés! Hamarosan válaszolok. :)
              </p>
            </div>
          )}
          <button type="submit">Küldés</button>
        </form>
      </div>
      <h1 className={classes.titleBottom}>
        Vagy keress az alább lehetőségek egyikén!
      </h1>
      <hr className={classes.underline} />
      <ContactDetails></ContactDetails>
    </div>
  );
};

/*    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label>Select an photo type:</label>
        <select id="photoType" name="photoType" required>
          <option value="">--Select--</option>
          <option value="image1">Photo 1</option>
          <option value="image2">Photo 2</option>
          <option value="image3">Photo 3</option>
        </select>
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      <button type="submit">{status}</button>
    </form> */

export default ContactForm;
