import PhotoGallery from "../../Components/PhotoGallery/PhotoGallery";
import styles from "./AccordionImage.module.css";
import { useContext, useState, useEffect, useRef, useCallback } from "react";
import CartContext from "../../Components/Store/cart-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { ImageDimensions } from "./ImageDimensions";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

function AccordionImage() {
  const cartCtx = useContext(CartContext);

  const [displayedImagesCounts, setDisplayedImagesCounts] = useState({
    portrait: 200,
    wedding: 200,
    budoir: 200,
    sport: 200,
    family: 200,
    event: 200,
    all: 200,
  });
  const [activeFolder, setActiveFolder] = useState(null);
  const [totalImagesCount, setTotalImagesCount] = useState(0);

  //Mobilnézetben nem tölt be semmilyen képet kezdésnek
  const isMobileView = () => {
    return window.innerWidth <= 768;
  };

  const [openSection, setOpenSection] = useState(
    isMobileView() ? null : cartCtx.selectedFilter
  );

  //const [openSection, setOpenSection] = useState(cartCtx.selectedFilter);

  useEffect(() => {
    if (!isMobileView()) {
      handleSectionClick(cartCtx.selectedFilter, true);
    }
  }, [cartCtx.selectedFilter]);

  const [images, setImages] = useState([]);

  async function fetchImages(folder) {
    const imageData = await ImageDimensions(folder);
    setImages(imageData.slice(0, displayedImagesCounts[folder]));
    setTotalImagesCount(imageData.length);
    setActiveFolder(folder);
  }

  async function fetchAllImages() {
    const folders = [
      "portrait",
      "wedding",
      "budoir",
      "sport",
      "family",
      "event",
    ];
    const allImageData = [];
    for (let folder of folders) {
      const imageData = await ImageDimensions(folder);
      allImageData.push(...imageData.slice(0, displayedImagesCounts[folder]));
    }
    setImages(allImageData);
    setTotalImagesCount(allImageData.length);
    setActiveFolder("all");
  }

  // A SZERVERRŐL EGYSZERRE CSAK MEGHATÁROZOTT SZÁMÚ KÉPET TÖLT LE, HA EGY AKTUÁLIS SECTION ALJÁHOZ ÉRSZ AKKOR BETÖLT MÉG +5 (VAGY AMENNYIT MEGADSZ) KÉPET

  const loaders = useRef({});
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreImages = useCallback(
    async (folder) => {
      if (activeFolder === folder && images.length < totalImagesCount) {
        setIsLoading(true);
        const newCount = displayedImagesCounts[activeFolder] + 20;
        setDisplayedImagesCounts({
          ...displayedImagesCounts,
          [activeFolder]: newCount,
        });
        const imageData = await ImageDimensions(activeFolder);
        setImages((prevImages) => [
          ...prevImages,
          ...imageData.slice(prevImages.length, newCount),
        ]);
        setIsLoading(false);
      }
    },
    [activeFolder, displayedImagesCounts, images.length, totalImagesCount]
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "30px",
      threshold: 0.5,
    };

    Object.keys(loaders.current).forEach((folder) => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          console.log("Element is in the viewport!");
          loadMoreImages(folder);
        }
      }, options);

      if (loaders.current[folder]) {
        observer.observe(loaders.current[folder]);
      }

      return () => {
        observer.disconnect();
      };
    });
  }, [loadMoreImages]);
  // BLOKK VÉGE

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
        setTimeout(() => {
          sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
      }
      switch (sectionId) {
        case "portrait":
          fetchImages("portrait", 100);
          cartCtx.setSelectedFilter("portrait");
          break;
        case "wedding":
          fetchImages("wedding", 100);
          cartCtx.setSelectedFilter("wedding");
          break;
        case "budoir":
          fetchImages("budoir", 100);
          cartCtx.setSelectedFilter("budoir");
          break;
        case "sport":
          fetchImages("sport", 100);
          cartCtx.setSelectedFilter("sport");
          break;
        case "family":
          fetchImages("family", 100);
          cartCtx.setSelectedFilter("family");
          break;
        case "event":
          fetchImages("event", 100);
          cartCtx.setSelectedFilter("event");
          break;
        case "all":
          fetchAllImages();
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

  const loadingSpinner = (
    <div className={styles.loadingSpinner}>
      {isLoading && <LoadingSpinner />}
    </div>
  );

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
          <PhotoGallery images={images}></PhotoGallery>
          {loadingSpinner}
          <div ref={(ref) => (loaders.current["portrait"] = ref)} />
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
          <PhotoGallery images={images}></PhotoGallery>
          {loadingSpinner}
          <div ref={(ref) => (loaders.current["wedding"] = ref)} />
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
          <PhotoGallery images={images}></PhotoGallery>
          {loadingSpinner}
          <div ref={(ref) => (loaders.current["budoir"] = ref)} />
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
          <PhotoGallery images={images}></PhotoGallery>
          {loadingSpinner}
          <div ref={(ref) => (loaders.current["sport"] = ref)} />
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
          <PhotoGallery images={images}></PhotoGallery>
          {loadingSpinner}
          <div ref={(ref) => (loaders.current["family"] = ref)} />
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
          <PhotoGallery images={images}></PhotoGallery>
          {loadingSpinner}
          <div ref={(ref) => (loaders.current["event"] = ref)} />
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
          <PhotoGallery images={images}></PhotoGallery>
          {loadingSpinner}
          <div ref={(ref) => (loaders.current["all"] = ref)} />
        </div>
      </section>
    </div>
  );
}

export default AccordionImage;
