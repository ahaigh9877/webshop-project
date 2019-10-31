import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import {
    incrementQuantity,
    decrementQuantity,
    deleteProduct
} from '../actions/addToCart';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetFilters } from '../actions/filterProducts';

class ShoppingCartContainer extends Component {
    increment(id) {
        this.props.incrementQuantity(id);
    }

    decrement(id) {
        this.props.decrementQuantity(id);
    }

    delete(id) {
        this.props.deleteProduct(id);
    }

    handleReset = () => {
        this.props.resetFilters();
    };

    render() {
        const totalCart = this.props.productsInCart.reduce(
            (acc, currentValue) => {
                acc.totalQuantity += currentValue.quantity;
                acc.totalCost += currentValue.quantity * currentValue.price;
                return acc;
            },
            {
                totalQuantity: 0,
                totalCost: 0
            }
        );

        let finalRow;

        if (this.props.productsInCart.length === 0) {
            finalRow = (
                <p id="emptyCart">
                    Your cart is empty, please go{' '}
                    <Link to="/">
                        {' '}
                        <span onClick={this.handleReset}>browse our items</span>
                    </Link>{' '}
                    !
                </p>
            );
        } else {
            finalRow = (
                <div className="shoppingCartRow">
                    <p>TOTAL TO CHECKOUT</p>
                    <p></p>
                    <p>Quantity: {totalCart.totalQuantity} ITEMS</p>
                    <p>Price :{totalCart.totalCost} €</p>
                </div>
            );
        }

        return (
            <div>
                <div>
                    {this.props.productsInCart.map(product => {
                        return (
                            <ShoppingCart
                                className="shoppingCart"
                                name={product.product}
                                img={product.image}
                                price={product.price}
                                quantity={product.quantity}
                                increment={id => this.increment(id)}
                                decrement={id => this.decrement(id)}
                                delete={id => this.delete(id)}
                                id={product.productId}
                            />
                        );
                    })}
                </div>
                {finalRow}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        productsInCart: state.shoppingCart,
        cartTotal: state.cartTotal
    };
};

export default connect(
    mapStateToProps,
    { incrementQuantity, decrementQuantity, deleteProduct, resetFilters }
)(ShoppingCartContainer);

// mapStateToProps to grab the Shopping cart state
