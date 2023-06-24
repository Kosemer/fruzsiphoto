import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import classes from "./Slider.module.css";
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import FallingLetters from "../../FallingText/Fallingletter";
import { useEffect, useState } from "react";
import { ImageDimensions } from "../../../Pages/PhotoGalleryPage/ImageDimensions";

const Slider = () => {
  // const startupScreen = (
  //   <div>
  //     <img src={image3} alt="image" />
  //   </div>
  // );

  // const onFirstMount = ({
  //   element,
  //   currentIndex,
  //   nextIndex,
  //   currentScreen,
  //   nextScreen,
  // }) => {
  //   /*
  //     ... do Something
  //   */
  // };

  // const onAnimationStart = ({
  //   element,
  //   currentIndex,
  //   nextIndex,
  //   currentScreen,
  //   nextScreen,
  // }) => {
  //   /*
  //     ... do Something
  //   */
  // };

  // const onAnimationEnd = ({
  //   element,
  //   currentIndex,
  //   nextIndex,
  //   currentScreen,
  //   nextScreen,
  // }) => {
  //   /*
  //     ... do Something
  //   */
  // };

  //   Nyomj meg egy egyszerre a Ctrl és a K billentyűket, majd azután azután a C billentyűt, hogy kiemeld a kijelölt sorokat.
  // Ha vissza szeretnéd vonni a kommentelést vagy kiemelést, akkor ugyanezeket a billentyűkombinációkat használhatod,
  //  csak a D betűt kell megnyomnod az F vagy C helyett.

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const [images, setImages] = useState([]);

  useEffect(() => {
    async function loadImages() {
      const isMobile = window.innerWidth <= 768;
      const folder = isMobile ? "sliderMobile" : "slider";
      const imageData = await ImageDimensions(folder);
      setImages(imageData);
    }

    loadImages();

    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      const folder = isMobile ? "sliderMobile" : "slider";
      loadImages(folder);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slider = (
    <AutoplaySlider
      bullets={false} // alsó kis körök elrejtése
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={5000}
      animation="foldOutAnimation"
      className={classes.awsBtn}
    >
      {images.map((image, index) => (
        <div key={index} data-src={image.src} />
      ))}
    </AutoplaySlider>
  );

  const mobileSlider = (
    <AutoplaySlider
      bullets={false} // alsó kis körök elrejtése
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={5000}
      animation="foldOutAnimation"
      className={classes.awsBtn}
    >
      {/*<div data-src={image8} />
      <div data-src={image9} />
  <div data-src={image2} />*/}
      {images.map((image, index) => (
        <div key={index} data-src={image.src} />
      ))}
    </AutoplaySlider>
  );

  /*const slider2 = (
    <AwesomeSlider
      startupScreen={startupScreen}
      className={classes.awsBtn}
      onFirstMount={onFirstMount}
      onAnimationStart={onAnimationStart}
      onAnimationEnd={onAnimationEnd}
    >
      <div data-src={image1} />
      <div data-src={image2} />
      <div data-src={image3} />
    </AwesomeSlider>
  );*/

  return (
    <>
      <div className={classes.desktop}>
        {slider}
        <div className={classes.desktopTitle}>
          <FallingLetters text="Üdvözöllek|az oldalamon!"></FallingLetters>
        </div>
        {/*<div className={classes.trackingInContract}>
          Üdvözöllek az oldalamon!
  </div>*/}
      </div>
      <div className={classes.mobile}>{mobileSlider}</div>
      <div className={classes.mobileFallingLetters}>
        <FallingLetters text="Üdvözöllek|az oldalamon!"></FallingLetters>
      </div>
    </>
  );
};

export default Slider;
