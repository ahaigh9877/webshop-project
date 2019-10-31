import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../mms-logo-vertical.svg";

class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          <img id="logoImg" alt="logo" src={logo}></img>
        </Link>

        <a className="topLink" href="#">
          Category 1
        </a>
        <a className="topLink" href="#">
          Category 2
        </a>
        <a className="topLink" href="#">
          Category 3
        </a>
        <Link to="/checkout" className="topLink">
          Shopping Cart
        </Link>
        {/* <a className="topLink" href="#">
          Shopping Cart
        </a> */}
      </header>
    );
  }
}

export default connect()(Header);
