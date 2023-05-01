import React from "react";
import classes from "./Footer.module.css";
import email from "../../Assets/Icon/email.svg";
import phone from "../../Assets/Icon/phone.svg";
import instagram from "../../Assets/SocialIcon/instagram.svg";
import facebook from "../../Assets/SocialIcon/facebook.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  function handleClickInsta() {
    window.open(
      "https://www.instagram.com/p/Cp-3l-7I0k6/?igshid=MDJmNzVkMjY=",
      "_blank",
      "noopener,noreferrer"
    );
  }

  function handleClickFace() {
    window.open(
      "https://www.facebook.com/fruzsika88",
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.containerContact}>
          <h2>Elérhetőségek</h2>
          <hr className={classes.underline}></hr>
          <div className={classes.emailContainer}>
            <img src={email} alt="E-mail" className={classes.icon} />
            <div className={classes.email}>
              <span>dfruzsiphoto</span>
              <span>@</span>
              <span>gmail.com</span>
            </div>
          </div>

          <div className={classes.emailContainer}>
            <img src={phone} alt="phone icon" className={classes.icon} />
            <p className={classes.iconText}>+36 20 310 7721</p>
          </div>

          <div className={classes.iconContainer} onClick={handleClickInsta}>
            <img
              src={instagram}
              alt="instagram icon"
              className={classes.icon}
            />
            <p className={classes.iconText}>Instagram</p>
          </div>

          <div className={classes.iconContainer} onClick={handleClickFace}>
            <img src={facebook} alt="facebook icon" className={classes.icon} />
            <p className={classes.iconText}>Facebook</p>
          </div>
        </div>

        <div className={classes.photoServices}>
          <h2>Fotó szolgáltatások</h2>
          <hr className={classes.underline}></hr>
          <div className={classes.linkContainer}>
            <NavLink to="/arak" className={classes.linkText}>
              Portré fotózás
            </NavLink>
          </div>
          <div className={classes.linkContainer}>
            <NavLink to="/arak" className={classes.linkText}>
              Esküvői fotózás
            </NavLink>
          </div>
          <div className={classes.linkContainer}>
            <NavLink to="/arak" className={classes.linkText}>
            Boudoir fotózás
            </NavLink>
          </div>
          <div className={classes.linkContainer}>
            <NavLink to="/arak" className={classes.linkText}>
              Sport fotózás
            </NavLink>
          </div>
          <div className={classes.linkContainer}>
            <NavLink to="/arak" className={classes.linkText}>
              Családi fotózás
            </NavLink>
          </div>
          <div className={classes.linkContainer}>
            <NavLink to="/arak" className={classes.linkText}>
              Rendezvény fotózás
            </NavLink>
          </div>
        </div>

        <div className={classes.pages}>
          <h2>FruzsiPhoto</h2>
          <hr className={classes.underline}></hr>
          <div className={classes.linkContainer}>
            <NavLink to="/" className={classes.linkText}>
              Főoldal
            </NavLink>
          </div>
          <div className={classes.linkContainer}>
            <NavLink to="/galeria" className={classes.linkText}>
              Galéria
            </NavLink>
          </div>
          <div className={classes.linkContainer}>
            <NavLink to="/arak" className={classes.linkText}>
              Árak
            </NavLink>
          </div>
          <div className={classes.linkContainer}>
            <NavLink to="/rolam" className={classes.linkText}>
              Rólam
            </NavLink>
          </div>
          <div className={classes.linkContainer}>
            <NavLink to="/kapcsolat" className={classes.linkText}>
              Kapcsolat
            </NavLink>
          </div>
        </div>
      </div>
      <hr className={classes.underlineLong}></hr>
      <p className={classes.author}>
        © {currentYear} fruzsiphoto &{" "}
        <a
          href="https://www.frontweb.hu"
          style={{
            color: "#23967F",
            textDecoration: "none",
            fontWeight: "bold",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          FrontWeb
        </a>{" "}
        | Minden jog fenntartva.
      </p>
      <p className={classes.reCAPTCHA}>This site is protected by reCAPTCHA and the Google and Terms of Service apply.</p>
    </footer>
  );
}

export default Footer;
