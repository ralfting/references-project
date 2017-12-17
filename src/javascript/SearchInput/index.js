import React, { Component } from 'react';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }
  render() {
    return (
      <div className="mb- flex flex-wrap mb-6">
        <label
          htmlFor="search"
          className="w-full mb-1 text-base font-normal text-blue">
          Search
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search a study tree..."
          className="w-full search mb-2"
          onChange={event => this.setState({ query: event.target.value })}
          value={this.state.query}
        />
        <button className="w-full btn btn-dark-blue">
          <i className="fa fa-search" aria-hidden="true" />
          Search
        </button>
      </div>
    )
  }
}

export default SearchInput;
