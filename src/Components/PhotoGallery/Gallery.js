/* A komponens egy képgalériát hoz létre, melyben a képek az images prop-ból származnak. Minden kép egy Item komponensben van, ami a react-photoswipe-gallery csomag része. Az Item komponens rendelkezik néhány tulajdonsággal: original, thumbnail, width, height, amelyek az images objektumból származnak.

Az Item komponens gyereke egy funkció, ami egy ref-et és egy open függvényt kap, és egy img elemet ad vissza. Az img elem ref attribútuma lehetővé teszi, hogy közvetlenül hivatkozhassunk az elemre, és az onClick eseménykezelőben az open függvényt hívjuk meg, ami megnyitja a teljes méretű képet.
 */

import "./PhotoSwipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import classes from "./PhotoLayout.module.css";

const MyGallery = ({ images }) => (
  <div key="gallery" className={classes.galleryWrap}>
    <Gallery>
      {images.map((image, index) => (
        <div key={index} className={classes.single}>
          <Item
            className={classes.test}
            key={index}
            original={image.original}
            thumbnail={image.thumbnail}
            width={image.width}
            height={image.height}
          >
            {({ ref, open }) => (
              <img
                ref={ref}
                onClick={open}
                src={image.thumbnail}
                alt="thumbnail"
              />
            )}
          </Item>
        </div>
      ))}
    </Gallery>
  </div>
);

export default MyGallery;
