import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import { calculateTotal } from '../actions/calculateCartTotal';
import { incrementQuantity, decrementQuantity } from '../actions/addToCart';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ShoppingCartContainer extends Component {
    componentDidMount() {
        this.props.calculateTotal(this.props.productsInCart);
    }

    increment(id) {
        this.props.incrementQuantity(id);
        this.props.calculateTotal(this.props.productsInCart);
    }

    decrement(id) {
        this.props.decrementQuantity(id);
        this.props.calculateTotal(this.props.productsInCart);
    }

    render() {
        let finalRow;

        if (this.props.productsInCart.length === 0) {
            finalRow = (
                <p id="emptyCart">
                    Your cart is empty, please go{' '}
                    <Link to="/"> browse our items</Link> !
                </p>
            );
        } else {
            finalRow = (
                <div className="shoppingCartRow">
                    <p>TOTAL TO CHECKOUT</p>
                    <p></p>
                    <p>Quantity: {this.props.cartTotal.quantity} ITEMS</p>
                    <p>Price :{this.props.cartTotal.total} €</p>
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
    { calculateTotal, incrementQuantity, decrementQuantity }
)(ShoppingCartContainer);

// mapStateToProps to grab the Shopping cart state
