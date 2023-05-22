import { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    searchInput: '',
  };

  handleChange = ev => {
    const { name, value } = ev.currentTarget;
    this.setState({ [name]: value.trim() });
  };

  handleSubmit = ev => {
    ev.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ searchInput: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            value={this.state.searchInput}
            onChange={this.handleChange}
            name="searchInput"
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
