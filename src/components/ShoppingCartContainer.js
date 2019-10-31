import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import { calculateTotal } from '../actions/calculateCartTotal';
import { connect } from 'react-redux';

class ShoppingCartContainer extends Component {
    componentDidMount() {
        this.props.calculateTotal(this.props.productsInCart);
    }

    render() {
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
                            />
                        );
                    })}
                </div>
                <div className="shoppingCartRow">
                    <p>TOTAL TO CHECKOUT</p>
                    <p></p>
                    <p>Quantity: {this.props.cartTotal.quantity} ITEMS</p>
                    <p>Price :{this.props.cartTotal.total} €</p>
                </div>
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
    { calculateTotal }
)(ShoppingCartContainer);

// mapStateToProps to grab the Shopping cart state
