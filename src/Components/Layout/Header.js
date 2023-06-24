/* A navigációs menüt és a logót tartalmazza. A komponens reagál a böngésző ablak görgetésére: ha a felhasználó görget, a fejléc eltűnik, ha visszagörget, a fejléc újra megjelenik. Ez a funkció a useEffect és useState horgok használatával van implementálva.

Figyelembe veszi a mobil nézet állapotát a cssMobile változó segítségével, amit a CartContext-ból szerez meg. Ha a nézet mobil, a fejléc stílusa változik, és a moblieMenuChange funkcióval lehet megváltoztatni ezt az állapotot. */

import { Fragment, useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import BurgerButton from "../BurgerButton/BurgerButton";
import CartContext from "../Store/cart-context";
import Logo from "../../Assets/Logo/LogoHeaderNoBackground.png";
import instagram from "../../Assets/SocialIcon/instagram.svg";
import facebook from "../../Assets/SocialIcon/facebook.svg";

function Header() {
  const cartCtx = useContext(CartContext);

  const cssMobile = cartCtx.cssMobile;
  const setCssMobile = cartCtx.setCssMobile;

  /*Menü eltüntetése görgetéskor*/

  const [menuVisible, setMenuVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setMenuVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const moblieMenuChange = () => {
    setCssMobile(!cartCtx.cssMobile);
  };

  //MOBILNÉZETBEN KOMPONENSEK ELTÜNTETÉSE

  const headerClasses = `${classes.header} ${
    menuVisible ? "" : classes.hidden
  } ${cssMobile ? classes.active : ""}`;

  return (
    <Fragment>
      {
        <header className={headerClasses}>
          <NavLink to="/" className={classes.logoLink}>
            <img src={Logo} className={classes.logo} alt="logo"></img>
          </NavLink>
          <nav>
            <ul onClick={moblieMenuChange}>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? classes.active : ""
                  }
                  to="/"
                >
                  Főoldal
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? classes.active : ""
                  }
                  to="/galeria"
                >
                  Galéria
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? classes.active : ""
                  }
                  to="/arak"
                >
                  Árak
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? classes.active : ""
                  }
                  to="/rolam"
                >
                  Rólam
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? classes.active : ""
                  }
                  to="/kapcsolat"
                >
                  Kapcsolat
                </NavLink>
              </li>
              <a
                href="https://www.instagram.com/p/Cp-3l-7I0k6/?igshid=MDJmNzVkMjY="
                target="_blank"
                rel="noopener noreferrer"
                className={classes.socialIconMobile}
              >
                <img
                  src={instagram}
                  alt="instagram icon"
                  className={classes.socialIconMobile}
                ></img>
              </a>
              <a
                href="https://www.facebook.com/fruzsika88"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.socialIconMobile}
              >
                <img
                  src={facebook}
                  alt="facebook icon"
                  className={classes.socialIconMobile}
                ></img>
              </a>
            </ul>
          </nav>
          {/*<a
            href="https://www.instagram.com/p/Cp-3l-7I0k6/?igshid=MDJmNzVkMjY="
            target="_blank"
            rel="noopener noreferrer"
            className={classes.social}
          >
            <img
              src={instagram}
              alt="instagram icon"
              className={classes.socialIcon}
            ></img>
          </a>
          <a
            href="https://www.facebook.com/fruzsika88"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.social}
          >
            <img
              src={facebook}
              alt="facebook icon"
              className={classes.socialIcon}
            ></img>
          </a>*/}
          <NavLink to="/" className={classes.logoLink}>
            <img src={Logo} className={classes.logoMobile} alt="logo"></img>
          </NavLink>
          <BurgerButton moblieMenuChange={moblieMenuChange}></BurgerButton>
        </header>
      }
    </Fragment>
  );
}

export default Header;
