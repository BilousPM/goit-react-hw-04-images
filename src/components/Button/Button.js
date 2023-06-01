import css from './Button.module.css';
import PropTypes from 'prop-types';

const Btn = ({ onClick }) => {
  return (
    <button className={css.button} type="button" onClick={onClick}>
      Load more
    </button>
  );
};

export default Btn;

Btn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
