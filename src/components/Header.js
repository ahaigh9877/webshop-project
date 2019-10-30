import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <header>
        <img className="logoImg" alt="logo" src=""></img>
        <a className="topLink" href="#">
          Category 1
        </a>
        <a className="topLink" href="#">
          Category 2
        </a>
        <a className="topLink" href="#">
          Category 3
        </a>
        <a className="topLink" href="#">
          Shopping Cart
        </a>
      </header>
    );
  }
}

export default connect()(Header);
