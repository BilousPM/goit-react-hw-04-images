import { Component } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  hendleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value.toLowerCase() });
  };

  hendleSubmit = e => {
    e.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      alert('Please enter, what exactly you want to find');
      return;
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.hendleSubmit}>
          <input
            onChange={this.hendleInputChange}
            name="searchQuery"
            value={this.state.searchQuery}
            className={css.searchForm_input}
            type="text"
            placeholder="Search images and photos"
          />

          <button type="submit" className={css.searchForm_button}>
            <span className={css.searchForm_button_label}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}

export default SearchBar;
SearchBar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
