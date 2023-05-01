//import classes from './Gallery.module.css'
import './PhotoSwipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery';
import classes from './PhotoLayout.module.css'


const MyGallery = ({images}) => (
  <div key="gallery" className={classes.galleryWrap}>
  <Gallery>
    {images.map((image, index) => (
      <div key={index} className={classes.single}>
      <Item className={classes.test}
        key={index}
        original={image.original}
        thumbnail={image.thumbnail}
        width={image.width}
        height={image.height}
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src={image.thumbnail} alt='thumbnail'/>
        )}
      </Item>
      </div>
    ))}
  </Gallery>
  </div>
)

export default MyGallery;