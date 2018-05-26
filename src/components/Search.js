import React, { Component } from 'react';
import '../styles/Search.css';

class Search extends Component {
  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  }

  render() {
    const {
      value, 
      onChange, 
      onSubmit 
    } = this.props;

    return (
      <form className="SearchForm" onSubmit={onSubmit}>
        <div className="SearchBar">
          <span><i className="fas fa-search"></i></span>
          <input
            type="text"
            value={value}
            onChange={onChange}
            ref={(node) => { this.input = node; }}
          />
        </div>
      </form>
    )
  }
}

export default Search;