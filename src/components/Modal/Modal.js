import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleEscapeKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleEscapeKeyDown);
  }

  hendleEscapeKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClick();
    }
  };

  hendleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClick();
    }
  };

  render() {
    const { data, selectedImage } = this.props;
    const imageForModal = data.find(image => image.id === selectedImage);
    const { largeImageURL, tags } = imageForModal;
    return createPortal(
      <div className={css.overlay} onClick={this.hendleOverlayClick}>
        <div className={css.modal}>
          <img className={css.modalImg} src={largeImageURL} alt={tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
