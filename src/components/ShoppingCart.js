import React from 'react';

const ShoppingCart = props => {
    return (
        <div className="shoppingCartRow">
            <img src={props.img} />
            <p>{props.name}</p>
            <p>Quantity: {props.quantity}</p>
            <p>Price : {props.price}€</p>
        </div>
    );
};

export default ShoppingCart;
