import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../mms-logo-vertical.svg";
import shoppingcart from "../shopping-cart.svg";
import { resetFilters } from "../actions/filterProducts";
import { filterProducts } from "../actions/filterProducts";
//import shoppingCart from "./ShoppingCart";

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
      <header>
        <Link to="/">
          <img
            onClick={() => this.handleReset()}
            id="logoImg"
            alt="logo"
            src={logo}
          ></img>
        </Link>

        <Link to="/">
          <a className="topLink" onClick={() => this.categoryFilter(1)}>
            Category 1
          </a>
        </Link>

        <Link to="/">
          <a className="topLink" onClick={() => this.categoryFilter(2)}>
            Category 2
          </a>
        </Link>
        <Link to="/">
          <a className="topLink" onClick={() => this.categoryFilter(3)}>
            Category 3
          </a>
        </Link>
        <Link to="/checkout" className="topLink">
          <strong>
            {this.props.cartProducts.reduce((a, b) => a + b.quantity, 0)}
          </strong>
          <img id="shoppingCart" src={shoppingcart} alt="shopping cart" />
        </Link>
        {/* <a className="topLink" href="#">
          Shopping Cart
        </a> */}
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
