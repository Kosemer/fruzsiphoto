/* A komponens egy képgalériát hoz létre a react-photo-gallery és a react-images csomagok segítségével. A galéria képei az images prop-ból származnak.

A useState hook segítségével nyomon követi a jelenleg megjelenített képet (currentImage), valamint azt, hogy a fénykép megtekintő (lightbox) nyitva van-e (viewerIsOpen).

Az openLightbox függvény megnyitja a lightboxot a képre kattintáskor, beállítja a currentImage értékét a kattintott kép indexére, és true-ra állítja a viewerIsOpen-t.

A closeLightbox függvény bezárja a lightboxot, visszaállítja a currentImage értékét 0-ra, és false-ra állítja a viewerIsOpen-t.

A Gallery komponens jeleníti meg a képeket, és az onClick eseménykezelőben az openLightbox függvényt hívja meg. Ha a viewerIsOpen true, akkor a ModalGateway egy Modal komponenst jelenít meg, amelyben a Carousel komponens segítségével megjeleníthetők a képek teljes méretben. */

import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import classes from "./PhotoGallery.module.css";

const PhotoGallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { index }) => {
    event.stopPropagation();
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = (event) => {
    if (event) {
      event.stopPropagation();
    }
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className={classes.container}>
      <Gallery photos={images} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={(event) => closeLightbox(event)}>
            <Carousel
              currentIndex={currentImage}
              views={images.map((image) => ({
                ...image,
                srcset: image.srcSet,
                caption: image.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default PhotoGallery;
