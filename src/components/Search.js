import React from 'react';
import '../styles/Search.css';

const Search = ({ value, onChange, onSubmit }) =>
  <form className="SearchForm" onSubmit={onSubmit}>
    <div className="SearchBar">
      <span><i className="fas fa-search"></i></span>
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  </form>

export default Search;