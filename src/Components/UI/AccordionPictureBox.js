import classes from './AccordionPictureBox.module.css';
import image from '../../Assets/DavidBetti/image1.jpg';
import image2 from '../../Assets/Budoir/image6.jpg';
import image3 from '../../Assets/FtcMtk/image11.jpg';
import image4 from '../../Assets/Ovi/image16.jpg';
import image5 from '../../Assets/KatiKristofLena/image6.jpg';

function AccordionPictureBox() {
  const emailBg = { backgroundImage: `url(${image})` };
  const phoneBg = { backgroundImage: `url(${image2})` };
  const instagramBg = { backgroundImage: `url(${image3})` };
  const facebookBg = { backgroundImage: `url(${image4})` };
  const facebookBg2 = { backgroundImage: `url(${image5})` };
  return (
    <div className={classes.container}>
      <div style={emailBg}></div>
      <div style={phoneBg}></div>
      <div style={instagramBg}></div>
      <div style={facebookBg}></div>
      <div style={facebookBg2}></div>
    </div>
  );
}

export default AccordionPictureBox;
