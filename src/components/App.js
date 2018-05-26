import React, { Component } from 'react';
import axios from 'axios';

import SideBar from './SideBar';
import Search from './Search';
import Table from './Table';
import Button from './Button';
import ErrorBlock from './ErrorBlock';
import withLoading from './withLoading';
import '../styles/App.css';

import {
  DEFAULT_QUERY,
  DEFAULT_HPP,
  PATH_BASE,
  PATH_SEARCH,
  PARAM_SEARCH,
  PARAM_PAGE,
  PARAM_HPP,
} from '../constants';

class App extends Component {
  _isMounted = false;

  state = {
    result: null,
    searchKey: '',
    searchTerm: DEFAULT_QUERY,
    error: null,
    isLoading: false,
    sortKey: 'NONE',
  }

  onSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  onSearchSubmit = (event) => {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });

    if (this.needsToSearchTopStories(searchTerm)) {
      this.fetchSearchTopStories(searchTerm);
    }

    event.preventDefault();
  }

  onSort = (event) => {
    console.log(event.target.value);
    this.setState({ sortKey: event.target.value });
  }

  setSearchTopStories = (result) => {
    const { hits, page } = result;
    const { searchKey, results } = this.state;

    const oldHits = results && results[searchKey]
      ? results[searchKey].hits
      : [];

    const updatedHits = [
      ...oldHits,
      ...hits
    ];

    this.setState({
      results: {
        ...results,
        [searchKey]: { hits: updatedHits, page }
      },
      isLoading: false
    });
  }

  fetchSearchTopStories = (searchTerm, page = 0) => {
    this.setState({ isLoading: true });

    axios(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
      .then(result => this._isMounted && this.setSearchTopStories(result.data))
      .catch(error => this._isMounted && this.setState({ error }));
  }

  needsToSearchTopStories = (searchTerm) => {
    return !this.state.results[searchTerm];
  }

  componentDidMount() {
    this._isMounted = true;

    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });
    this.fetchSearchTopStories(searchTerm);
  }

  componentWillAmount() {
    this._isMounted = false;
  }

  render() {
    const {
      searchTerm,
      searchKey,
      results,
      error,
      isLoading,
      sortKey,
    } = this.state;

    const page = (
      results &&
      results[searchKey] &&
      results[searchKey].page
    ) || 0;

    const list = (
      results &&
      results[searchKey] &&
      results[searchKey].hits
    ) || [];

    const ButtonWithLoading = withLoading(Button);

    return (
      <div className="App">
        <div className="App__panel App__panel--left">
          <SideBar side="left" />
        </div>

        <div className="App__panel App__panel--center">
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          />
          { error
            ? <ErrorBlock />
            : <Table 
                list={list}
                sortKey={sortKey}
                onSort={this.onSort}
              />
          }
          <ButtonWithLoading
            isLoading={isLoading} 
            onClick={() => 
                this.fetchSearchTopStories(searchTerm, page + 1)}
          >
            Get More
          </ButtonWithLoading>
        </div>
        <div className="App__panel App__panel--right">
          <SideBar side="right" />
        </div>
      </div>
    );
  }
}

export default App;
