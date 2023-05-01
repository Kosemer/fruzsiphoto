import 'photoswipe/dist/photoswipe.css'
import classes from './Gallery.module.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

const MyGallery = ({images}) => (
  <div key="gallery" className={classes.galleryWrap}>
  <Gallery>
    {images.map((image, index) => (
      <div key={index} className={classes.single}>
      <Item
        key={index}
        original={image.original}
        thumbnail={image.thumbnail}
        width={image.width}
        height={image.height}
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src={image.thumbnail} />
        )}
      </Item>
      </div>
    ))}
  </Gallery>
  </div>
)

export default MyGallery;