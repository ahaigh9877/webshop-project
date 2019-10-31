import React from 'react';

const ShoppingCart = props => {
    return (
        <div className="shoppingCartRow">
            <img src={props.img} />
            <p>{props.name}</p>
            <div id="quantityRow">
                {' '}
                <p>
                    Quantity:
                    {props.quantity}
                </p>
                <div id="quantityBtns">
                    <button onClick={() => props.increment(props.id)}>+</button>
                    <button onClick={() => props.decrement(props.id)}>-</button>
                </div>
            </div>
            <p>Price : {props.price}€</p>
        </div>
    );
};

export default ShoppingCart;
