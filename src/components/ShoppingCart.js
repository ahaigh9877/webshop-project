import React from "react";

const ShoppingCart = props => {
  return (
    <div className="shoppingCartRow">
      <img src={props.img} />
      <p className="shoppingCartText">{props.name}</p>
      <div id="quantityRow">
        {" "}
        <p className="shoppingCartText">
          Quantity:
          {props.quantity}
        </p>
        <div id="quantityBtns">
          <button
            className="quantityBtn"
            onClick={() => props.increment(props.id)}
          >
            +
          </button>
          <button
            className="quantityBtn"
            onClick={() => props.decrement(props.id)}
          >
            -
          </button>
        </div>
      </div>
      <p className="shoppingCartText">Price : {props.price}€</p>
      <button id="deleteProduct" onClick={() => props.delete(props.id)}>
          Delete item
      </button>
    </div>
  );
};

export default ShoppingCart;
