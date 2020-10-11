import React, { Component } from "react";

export class SearchFormJikan extends Component {
  render() {
    const onSubmit = (event) => {
      event.preventDefault();
      this.props.onFormSubmit("search/anime?q=");
    };
    return (
      <form onSubmit={onSubmit} className="Search-form">
        <input
          className="searchTerm"
          type="search"
          placeholder="enter search"
          onChange={(event) =>
            this.props.onSearchValueChange(event.target.value)
          }
        ></input>
        <button>Submit</button>
      </form>
    );
  }
}

export default SearchFormJikan;
