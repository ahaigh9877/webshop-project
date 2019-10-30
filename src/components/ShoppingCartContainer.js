import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';

class ShoppingCartContainer extends Component {
    render() {
        return <ShoppingCart className="shoppingCart" />;
    }
}

// mapStateToProps to grab the Shopping cart state

export default ShoppingCartContainer;
