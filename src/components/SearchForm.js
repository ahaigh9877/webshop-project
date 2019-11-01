import React, { Component } from "react";
import { connect } from "react-redux";
import loupe from "../loupe-dark.svg";

class SearchForm extends Component {
  render() {
    return (
      <div id="searchDiv">
        <form id="searchForm" onSubmit={this.props.handleSubmitSearch}>
          {/* <h3>Search the store:</h3> */}

          <input
            type="text"
            id="searchField"
            placeholder="search the store"
            value={this.props.searchTerm}
            onChange={this.props.handleSearch}
          />
          <button id="searchButton" type="submit" value="Submit">
            <img id="loupe" src={loupe}></img>
          </button>
        </form>
        <button id="resetButton" onClick={this.props.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(SearchForm);
