import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../mms-logo-vertical.svg";
import shoppingcart from "../shopping-cart.svg";
import { resetFilters } from "../actions/filterProducts";
import { filterProducts } from "../actions/filterProducts";
import { CSSTransition } from "react-transition-group";

class Header extends Component {
  categoryFilter = id => {
    console.log("filtering called", this.props.products, id);
    return this.props.filterProducts(this.props.products, id);
  };

  handleReset = () => {
    this.props.resetFilters();
  };
  render() {
    console.log("header state: ", this.props.cartProducts);
    return (
      <header id="header">
        <div id="logoLinkWrapper">
          <Link id="logoLink" to="/">
            <img
              onClick={() => this.handleReset()}
              id="logoImg"
              alt="logo"
              src={logo}
            ></img>
          </Link>
        </div>
        <div id="headerButtonWrapper">
          <div className="headerButton" className="dropdown">
            <button className="dropButton">Categories</button>
            <div className="dropdownCategories">
              <Link to="/">
                <a className="topLink" onClick={() => this.categoryFilter(1)}>
                  Potions 'n' pills
                </a>
              </Link>

              <Link to="/">
                <a className="topLink" onClick={() => this.categoryFilter(2)}>
                  Charms 'n' spells
                </a>
              </Link>
              <Link to="/">
                <a className="topLink" onClick={() => this.categoryFilter(3)}>
                  Beatles merchandise
                </a>
              </Link>
            </div>
          </div>
          <div className="headerButton" id="searchWrapper">
            Search
          </div>
        </div>
        <CSSTransition>
          <div id="cartLinkWrapper">
            <Link to="/checkout" id="cartLink">
              <div id="cartIconBox">
                {console.log(this.props.cartProducts)}
                {this.props.cartProducts.length > 0 && (
                  <div id="quantityBadge">
                    <p id="quantityNumber">
                      {this.props.cartProducts.reduce(
                        (a, b) => a + b.quantity,
                        0
                      )}
                    </p>
                  </div>
                )}
                <img id="shoppingCart" src={shoppingcart} alt="shopping cart" />
              </div>
            </Link>
          </div>
        </CSSTransition>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    cartProducts: state.shoppingCart
  };
};

export default connect(
  mapStateToProps,
  { filterProducts, resetFilters }
)(Header);
