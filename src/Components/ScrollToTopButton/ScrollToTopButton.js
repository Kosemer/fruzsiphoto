/* "Vissza az oldal tetejére" gombot hoz létre, amely megjelenik, amikor a felhasználó lefelé görget az oldalon. A gomb láthatóságát a böngésző ablak pozíciójához viszonyítva állítja be: ha a pozíció nagyobb, mint 300px, a gomb láthatóvá válik, különben rejtett.

A gombra kattintva a felhasználó visszakerül az oldal tetejére, a gördülés sima, adott időtartamú (jelen esetben 500 ms) animációval. Az animáció lépései és időintervallumai a gördülési időtartam alapján vannak kiszámítva.

A komponens "useEffect" hook-ot használ a gördülés eseményfigyelő hozzáadására és eltávolítására az oldal betöltésekor és eltűnésekor. */

import React, { useState, useEffect } from "react";
import styles from "./ScrollToTopButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTopSmooth = () => {
    const scrollDuration = 500; // Görgetési időtartam (milliszekundumban)
    const scrollStep = -window.pageYOffset / (scrollDuration / 15);

    const scrollInterval = setInterval(() => {
      if (window.pageYOffset !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const buttonClass = visible ? styles.fadeIn : styles.fadeOut;

  return (
    <div className={styles.scrollToTop}>
      <button
        onClick={scrollToTopSmooth}
        className={`${styles.scrollToTopButton} ${buttonClass}`}
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
