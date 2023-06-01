import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image: { webformatURL, tags }, onClick }) => {
  return (
    <li className={css.imageGalleryItem}>
      <img
        className={css.imageGalleryItem_image}
        src={webformatURL}
        alt={tags}
        onClick={onClick}
      />
    </li>
  );
};
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
