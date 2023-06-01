import React, { Component } from 'react';

import { getImages } from '../../services/get_images';
import { PER_PAGE } from '../../services/get_images';

import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import Btn from '../Button/Button';
import Modal from '../Modal/Modal';
import css from '../App/App.module.css';

class App extends Component {
  state = {
    pictures: [],
    queryValue: '',
    page: 1,
    isLoading: false,
    errorMesage: '',
    selectedImage: null,
    showBtn: false,
    showModal: false,
    modalImage: '',
  };

  componentDidUpdate(_, prevState) {
    const page = this.state.page;
    const query = this.state.queryValue;

    if (prevState.queryValue !== query || prevState.page !== page) {
      this.setState({ isLoading: true });
      getImages(query, page)
        .then(images =>
          this.setState(prevState => {
            return {
              pictures: [...prevState.pictures, ...images.hits],
              showBtn: page < Math.ceil(images.totalHits / PER_PAGE),
            };
          })
        )
        .catch(eror => {
          this.setState({ errorMesage: 'Something went wrong' });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  formSubmitHendler = searchQuery => {
    this.setState({
      queryValue: searchQuery,
      pictures: [],
      page: 1,
    });
  };

  hendleLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  toggleModal = imageId => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      selectedImage: imageId,
    }));
  };

  render() {
    const {
      pictures,
      isLoading,
      errorMesage,
      showBtn,
      showModal,
      selectedImage,
    } = this.state;
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.formSubmitHendler} />
        {isLoading && <Loader />}
        {errorMesage && <h2>{errorMesage}</h2>}
        {pictures.length > 0 && (
          <ImageGallery data={pictures} onClick={this.toggleModal} />
        )}
        {showBtn && <Btn onClick={this.hendleLoadMore} />}
        {showModal && (
          <Modal
            onClick={this.toggleModal}
            selectedImage={selectedImage}
            data={pictures}
          />
        )}
      </div>
    );
  }
}

export default App;
