import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ data, onClick }) => {
  return (
    <ul className={css.imageGallery}>
      {data.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onClick={() => onClick(image.id)}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  data: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
