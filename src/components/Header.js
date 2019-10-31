import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../mms-logo-vertical.svg';
import { resetFilters } from '../actions/filterProducts';
import { filterProducts } from '../actions/filterProducts';

class Header extends Component {
    categoryFilter = id => {
        console.log('filtering called', this.props.products, id);
        return this.props.filterProducts(this.props.products, id);
    };
    handleReset = () => {
        this.props.resetFilters();
    };
    render() {
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
                    <a
                        className="topLink"
                        href="#"
                        onClick={() => this.categoryFilter(1)}
                    >
                        Category 1
                    </a>
                </Link>

                <Link to="/">
                    <a
                        className="topLink"
                        href="#"
                        onClick={() => this.categoryFilter(2)}
                    >
                        Category 2
                    </a>
                </Link>
                <Link to="/">
                    <a
                        className="topLink"
                        href="#"
                        onClick={() => this.categoryFilter(3)}
                    >
                        Category 3
                    </a>
                </Link>
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

const mapStateToProps = state => {
    return {
        products: state.products
    };
};

export default connect(
    mapStateToProps,
    { filterProducts, resetFilters }
)(Header);
