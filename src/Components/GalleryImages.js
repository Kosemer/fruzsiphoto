import image1 from "../Assets/image.jpg";
import image2 from "../Assets/image2.jpg";
import image3 from "../Assets/image3.jpg";
import image4 from "../Assets/image4.jpg";
import image5 from "../Assets/image5.jpg";
import image6 from "../Assets/image6.jpg";
import image7 from "../Assets/image7.jpg";

const GalleryImages = () => {
  const images = [
    {
      original: image1,
      thumbnail: image1,
      width: "1024",
      height: "768",
    },
    {
      original: image2,
      thumbnail: image2,
      width: "1024",
      height: "768",
    },
    {
      original: image3,
      thumbnail: image3,
      width: "1024",
      height: "768",
    },
    {
      original: image4,
      thumbnail: image4,
      width: "1024",
      height: "768",
    },
    {
      original: image5,
      thumbnail: image5,
      width: "1024",
      height: "768",
    },
    {
      original: image6,
      thumbnail: image6,
      width: "1024",
      height: "768",
    },
    {
      original: image7,
      thumbnail: image7,
      width: "1024",
      height: "768",
    },
  ];
  return images;
};

export default GalleryImages;
