/* A Photography egy fotógalériát hoz létre, amelyben a felhasználók kiválaszthatnak különböző témájú fotókat (mint például portré, esküvői, sport, stb.).

A kezdeti állapotban a "portrait" témakör lesz kiválasztva, és a megfelelő képek kerülnek betöltésre a szerverről a fetchImages funkció segítségével. A felhasználók az oldal tetején található menüpontokra kattintva változtathatják meg a jelenleg kiválasztott témakört, ami új képek betöltését váltja ki.

Az oldal tetején lévő menüpontok a különböző handle funkciókat hívják meg a kattintás eseményre, melyek új képek betöltését indítják el a megfelelő mappából, és beállítják a kiválasztott szűrőt a CartContext-ben.

A képek a PhotoGallery komponensben kerülnek megjelenítésre, amit a Photography komponens használ. A képek dinamikusan változnak attól függően, hogy a felhasználó melyik témakört választotta ki. */

import PhotoGallery from "../../Components/PhotoGallery/PhotoGallery";
import classes from "./Photography.module.css";
import { useContext, useEffect, useState, useRef, useCallback } from "react";
import CartContext from "../../Components/Store/cart-context";
import AccordionImage from "../../Pages/PhotoGalleryPage/AccordionImage";
import { ImageDimensions } from "../../Pages/PhotoGalleryPage/ImageDimensions";
import { useLocation } from "react-router-dom";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

function Photography() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cartCtx = useContext(CartContext);

  //Képek lekérdezése szerverről

  const location = useLocation();
  const filterFromState = location.state?.filter;

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const loaders = useRef({});

  const loadMoreImages = useCallback(async (folder) => {
    setIsLoading(true);
    const imageData = await ImageDimensions(folder);
    setImages((prevImages) => [
      ...prevImages,
      ...imageData.slice(prevImages.length, prevImages.length + 20),
    ]);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMoreImages(filterFromState || "portrait");
      }
    }, options);

    if (loaders.current) {
      observer.observe(loaders.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [loadMoreImages, filterFromState]);

  useEffect(() => {
    return () => {
      cartCtx.setSelectedFilter("portrait");
    };
  }, [location.pathname]);

  useEffect(() => {
    if (filterFromState) {
      fetchImages(filterFromState, 20);
      cartCtx.setSelectedFilter(filterFromState);
    } else {
      fetchImages("portrait", 20);
    }
  }, [filterFromState]);

  async function fetchImages(folder, count) {
    const imageData = await ImageDimensions(folder);
    setImages(imageData.slice(0, count));
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
      allImageData.push(...imageData);
    }
    setImages(allImageData);
  }

  const loadingSpinner = (
    <div className={classes.loadingSpinner}>
      {isLoading && <LoadingSpinner />}
    </div>
  );

  const handleAllClick = () => {
    fetchAllImages(); // Összes fotó betöltése
    cartCtx.setSelectedFilter("all", 20);
  };

  const handlePortraitClick = () => {
    fetchImages("portrait"); // Portré fotók betöltése
    cartCtx.setSelectedFilter("portrait", 20);
  };
  const handleWeddingClick = () => {
    fetchImages("wedding"); // Esküvői fotók betöltése
    cartCtx.setSelectedFilter("wedding", 20);
  };
  const handleBudoirClick = () => {
    fetchImages("budoir"); // Budoir fotók betöltése
    cartCtx.setSelectedFilter("budoir", 20);
  };
  const handleSportClick = () => {
    fetchImages("sport"); // Sport fotók betöltése
    cartCtx.setSelectedFilter("sport", 20);
  };
  const handleFamiyClick = () => {
    fetchImages("family"); // Családi fotók betöltése
    cartCtx.setSelectedFilter("family", 20);
  };
  const handleEventClick = () => {
    fetchImages("event"); // Rendezvény fotók betöltése
    cartCtx.setSelectedFilter("event", 20);
  };
  return (
    <div className={classes.conatiner}>
      <h2 className={classes.photoTitle}>Válogass a témakörök között!</h2>
      <hr className={classes.underline}></hr>
      <div className={classes.photoFilter}>
        <h2
          onClick={handleAllClick}
          data-selected={cartCtx.selectedFilter === "all"}
        >
          Összes
        </h2>
        <h2
          onClick={handlePortraitClick}
          data-selected={cartCtx.selectedFilter === "portrait"}
        >
          Portré
        </h2>
        <h2
          onClick={handleWeddingClick}
          data-selected={cartCtx.selectedFilter === "wedding"}
        >
          Esküvői
        </h2>
        <h2
          onClick={handleBudoirClick}
          data-selected={cartCtx.selectedFilter === "budoir"}
        >
          Boudoir
        </h2>
        <h2
          onClick={handleSportClick}
          data-selected={cartCtx.selectedFilter === "sport"}
        >
          Sport
        </h2>
        <h2
          onClick={handleFamiyClick}
          data-selected={cartCtx.selectedFilter === "family"}
        >
          Családi
        </h2>
        <h2
          onClick={handleEventClick}
          data-selected={cartCtx.selectedFilter === "event"}
        >
          Rendezvény
        </h2>
      </div>
      <div className={classes.PhotoGallery}>
        <PhotoGallery images={images}></PhotoGallery>
        {loadingSpinner}
        <div ref={(ref) => (loaders.current = ref)} />
      </div>
      <div className={classes.AccordionImage}>
        <AccordionImage></AccordionImage>
      </div>
    </div>
  );
}

export default Photography;
