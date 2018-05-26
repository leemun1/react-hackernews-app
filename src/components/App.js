import React, { Component } from 'react';
import axios from 'axios';

import SideBar from './SideBar';
import Search from './Search';
import Table from './Table';
import Button from './Button';
import ErrorBlock from './ErrorBlock';
import '../styles/App.css';

const DEFAULT_QUERY = 'react';
const DEFAULT_HPP = '100';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage=';

class App extends Component {
  state = {
    result: null,
    searchKey: '',
    searchTerm: DEFAULT_QUERY,
    error: null,
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
      }
    });
  }

  fetchSearchTopStories = (searchTerm, page = 0) => {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(error => this.setState({ error }));
  }

  needsToSearchTopStories = (searchTerm) => {
    return !this.state.results[searchTerm];
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });
    this.fetchSearchTopStories(searchTerm);
  }

  render() {
    const {
      searchTerm,
      searchKey,
      results,
      error,
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
            : <div>
                <Table list={list}/>
                <div>
                  <Button onClick={() => 
                    this.fetchSearchTopStories(searchTerm, page + 1)}
                  >
                    Get More
                  </Button>
                </div>
              </div>
          }
        </div>
        <div className="App__panel App__panel--right">
          <SideBar side="right" />
        </div>
      </div>
    );
  }
}

export default App;
