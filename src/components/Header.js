import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <Link to="/">
                    <img className="logoImg" alt="logo" src=""></img>
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
