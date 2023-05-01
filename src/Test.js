import image1 from "./Assets/FtcMol/image1.jpg";

function Test() {
  async function getImageDimensions(urls) {
    const getDimensions = (url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          resolve({
            src: url,
            width: img.width,
            height: img.height,
          });
        };
        img.src = url;
      });
    };

    const dimensions = await Promise.all(urls.map((url) => getDimensions(url)));
    return dimensions;
  }

  // Példa használatra:
  const imageUrls = [image1];
  getImageDimensions(imageUrls).then((result) => {
    console.log(result);
  });
}

export default Test;
