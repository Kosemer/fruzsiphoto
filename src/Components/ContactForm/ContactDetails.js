import classes from "./ContactDetails.module.css";
import email from "../../Assets/Icon/email.svg";
import phone from "../../Assets/Icon/phone.svg";
import instagram from "../../Assets/SocialIcon/instagram.svg";
import facebook from "../../Assets/SocialIcon/facebook.svg";

const ContactDetails = () => {
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
    <div className={classes.container}>
      <div className={classes.emailContainer}>
        <img src={email} alt="E-mail" className={classes.icon} />
        <div className={classes.email}>
          <span>dfruzsiphoto</span>
          <span>@</span>
          <span>gmail.com</span>
        </div>
      </div>

      <img src={phone} alt="phone icon" className={classes.icon} />
      <p className={classes.iconText}>+36 20 310 7721</p>

      <div className={classes.iconContainer} onClick={handleClickInsta}>
        <img src={instagram} alt="instagram icon" className={classes.icon} />
        <p className={classes.iconText}>Instagram</p>
      </div>

      <div className={classes.iconContainer} onClick={handleClickFace}>
        <img src={facebook} alt="facebook icon" className={classes.icon} />
        <p className={classes.iconText}>Facebook</p>
      </div>
    </div>
  );
};

export default ContactDetails;
