import PhotoGallery from "../Components/PhotoGallery/PhotoGallery";
import styles from "./AccordionImage.module.css";
import { useContext, useState, useEffect } from "react";
import CartContext from "../Components/Store/cart-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function AccordionImage() {
  const cartCtx = useContext(CartContext);

  //Mobilnézetben nem tölt be semmilyen képet kezdésnek
  const isMobileView = () => {
    return window.innerWidth <= 768;
  };
  
  const [openSection, setOpenSection] = useState(
    isMobileView() ? null : cartCtx.selectedFilter
  );
  
  //const [openSection, setOpenSection] = useState(cartCtx.selectedFilter);
  

  useEffect(() => {
    handleSectionClick(cartCtx.selectedFilter, true);
  }, [cartCtx.selectedFilter]);
  

  const handleSectionClick = (sectionId, forceOpen = false) => {
    if (openSection === sectionId && !forceOpen) {
      setOpenSection(null);
      // Új kód: Görgessen fel az oldal tetejére, ha egy szekció bezáródik
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setOpenSection(sectionId);
      // Új kód: Görgessen le a kiválasztott szakaszig
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      switch (sectionId) {
        case "portrait":
          cartCtx.setSelectedPhotos(cartCtx.photos.portrait);
          cartCtx.setSelectedFilter("portrait");
          break;
        case "wedding":
          cartCtx.setSelectedPhotos(cartCtx.photos.wedding);
          cartCtx.setSelectedFilter("wedding");
          break;
        case "budoir":
          cartCtx.setSelectedPhotos(cartCtx.photos.budoir);
          cartCtx.setSelectedFilter("budoir");
          break;
        case "sport":
          cartCtx.setSelectedPhotos(cartCtx.photos.sport);
          cartCtx.setSelectedFilter("sport");
          break;
        case "family":
          cartCtx.setSelectedPhotos(cartCtx.photos.family);
          cartCtx.setSelectedFilter("family");
          break;
        case "event":
          cartCtx.setSelectedPhotos(cartCtx.photos.event);
          cartCtx.setSelectedFilter("event");
          break;
        case "all":
          cartCtx.setSelectedPhotos(cartCtx.photos.all);
          cartCtx.setSelectedFilter("all");
          break;
        default:
          break;
      }
    }
  };

  const renderArrow = (sectionId) => {
    return openSection === sectionId ? (
      <FontAwesomeIcon
        className={`${styles.arrow} ${styles.rotateUp}`}
        icon={faChevronUp}
      />
    ) : (
      <FontAwesomeIcon
        className={`${styles.arrow} ${styles.rotateDown}`}
        icon={faChevronDown}
      />
    );
  };

  return (
    <div className={styles.center}>
      <section
        id="portrait"
        onClick={() => handleSectionClick("portrait")}
        className={openSection === "portrait" ? styles.active : ""}
      >
        <section className={styles.clickableSection}>
          {renderArrow("portrait")}
          Portré
        </section>

        <div style={{ height: openSection === "portrait" ? "auto" : 0 }}>
          <PhotoGallery images={cartCtx.selectedPhotos}></PhotoGallery>
        </div>
      </section>
      <section
        id="wedding"
        onClick={() => handleSectionClick("wedding")}
        className={openSection === "wedding" ? styles.active : ""}
      >
        <section className={styles.clickableSection}>
          {renderArrow("wedding")}
          Esküvői
        </section>
        <div style={{ height: openSection === "wedding" ? "auto" : 0 }}>
          <PhotoGallery images={cartCtx.selectedPhotos}></PhotoGallery>
        </div>
      </section>
      <section
        id="budoir"
        onClick={() => handleSectionClick("budoir")}
        className={openSection === "budoir" ? styles.active : ""}
      >
        <section className={styles.clickableSection}>
          {renderArrow("budoir")}
          Boudoir
        </section>
        <div style={{ height: openSection === "budoir" ? "auto" : 0 }}>
          <PhotoGallery images={cartCtx.selectedPhotos}></PhotoGallery>
        </div>
      </section>
      <section
        id="sport"
        onClick={() => handleSectionClick("sport")}
        className={openSection === "sport" ? styles.active : ""}
      >
        <section className={styles.clickableSection}>
          {renderArrow("sport")}
          Sport
        </section>
        <div style={{ height: openSection === "sport" ? "auto" : 0 }}>
          <PhotoGallery images={cartCtx.selectedPhotos}></PhotoGallery>
        </div>
      </section>
      <section
        id="family"
        onClick={() => handleSectionClick("family")}
        className={openSection === "family" ? styles.active : ""}
      >
        <section className={styles.clickableSection}>
          {renderArrow("family")}
          Családi
        </section>
        <div style={{ height: openSection === "family" ? "auto" : 0 }}>
          <PhotoGallery images={cartCtx.selectedPhotos}></PhotoGallery>
        </div>
      </section>
      <section
        id="event"
        onClick={() => handleSectionClick("event")}
        className={openSection === "event" ? styles.active : ""}
      >
        <section className={styles.clickableSection}>
          {renderArrow("event")}
          Rendezvény
        </section>
        <div style={{ height: openSection === "event" ? "auto" : 0 }}>
          <PhotoGallery images={cartCtx.selectedPhotos}></PhotoGallery>
        </div>
      </section>
      <section
        id="all"
        onClick={() => handleSectionClick("all")}
        className={openSection === "all" ? styles.active : ""}
      >
        <section className={styles.clickableSection}>
          {renderArrow("all")}
          Összes
        </section>
        <div style={{ height: openSection === "all" ? "auto" : 0 }}>
          <PhotoGallery images={cartCtx.selectedPhotos}></PhotoGallery>
        </div>
      </section>
    </div>
  );
}

export default AccordionImage;
