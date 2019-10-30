import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import { connect } from 'react-redux';

class ShoppingCartContainer extends Component {
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
                    <p>Quantity: 12 ITEMS</p>
                    <p>Price : 9.999 €</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        productsInCart: state.shoppingCart
    };
};

export default connect(mapStateToProps)(ShoppingCartContainer);

// mapStateToProps to grab the Shopping cart state
