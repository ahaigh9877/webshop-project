import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../mms-logo-vertical.svg';
import shoppingcart from '../shopping-cart.svg';
import shoppingcartactive from '../shopping-cart-active.svg';
import {
    filterBySearch,
    resetFilters,
    filterProducts
} from '../actions/filterProducts';
import { getProducts } from '../actions/getProducts';
import { CSSTransition } from 'react-transition-group';
import SearchForm from './SearchForm';

class Header extends Component {
    state = {
        searchTerm: null
    };
    handleSearch = event => {
        this.setState({ searchTerm: event.target.value });
    };

    handleSubmitSearch = event => {
        event.preventDefault();
        if (this.state.searchTerm) {
            this.props.filterBySearch(
                this.props.products,
                this.state.searchTerm
            );
        }
    };
    categoryFilter = id => {
        // console.log('filtering called', this.props.products, id);
        return this.props.filterProducts(this.props.products, id);
    };

    handleReset = () => {
        this.props.getProducts();
        this.props.resetFilters();
    };
    render() {
        // console.log('header state: ', this.props.cartProducts);
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
                    <div className="dropdown">
                        <button className="dropButton">Categories</button>
                        <div className="dropdownCategories">
                            <Link to="/">
                                <a
                                    className="topLink"
                                    onClick={() => this.categoryFilter(1)}
                                >
                                    Potions 'n' pills
                                </a>
                            </Link>

                            <Link to="/">
                                <a
                                    className="topLink"
                                    onClick={() => this.categoryFilter(2)}
                                >
                                    Charms 'n' spells
                                </a>
                            </Link>
                            <Link to="/">
                                <a
                                    className="topLink"
                                    onClick={() => this.categoryFilter(3)}
                                >
                                    Beatles merchandise
                                </a>
                            </Link>
                        </div>
                    </div>
                    {/* <div className="headerButton" id="searchWrapper"> */}
                    <div className="dropdown">
                        <button className="dropButton">Search</button>
                        <div className="dropdownCategories">
                            <SearchForm
                                className="headerButton"
                                // id="searchWrapper"
                                handleSearch={this.handleSearch}
                                handleSubmitSearch={this.handleSubmitSearch}
                                searchTerm={this.state.searchTerm}
                                handleReset={this.handleReset}
                            />
                        </div>
                    </div>
                </div>

                <div id="cartLinkWrapper">
                    <Link to="/checkout" id="cartLink">
                        <div id="cartIconBox">
                            {this.props.cartProducts.length > 0 && (
                                <div id="activeCartWrapper">
                                    <img
                                        id="shoppingCart"
                                        src={shoppingcartactive}
                                        alt="shopping cart with items"
                                    />
                                    <CSSTransition transitionname="quantityBadge">
                                        {
                                            <div className="quantityBadge">
                                                <p id="quantityNumber">
                                                    {this.props.cartProducts.reduce(
                                                        (a, b) =>
                                                            a + b.quantity,
                                                        0
                                                    )}
                                                </p>
                                            </div>
                                        }
                                    </CSSTransition>
                                </div>
                            )}

                            {this.props.cartProducts.length < 1 && (
                                <img
                                    id="shoppingCart"
                                    src={shoppingcart}
                                    alt="empty shopping cart"
                                />
                            )}
                        </div>
                    </Link>
                </div>
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
    { filterProducts, resetFilters, filterBySearch, getProducts }
)(Header);
