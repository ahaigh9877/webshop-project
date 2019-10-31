import React, { Component } from "react";
import { connect } from "react-redux";

class SearchForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmitSearch}>
          <h3>Search the store:</h3>
          <input
            type="text"
            className="searchField"
            value={this.props.searchTerm}
            onChange={this.props.handleSearch}
          />
          <button className="searchButton" type="submit" value="Submit">
            Search
          </button>
        </form>
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
