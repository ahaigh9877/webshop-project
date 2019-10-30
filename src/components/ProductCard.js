import React from 'react';

const ProductCard = props => {
    return (
        <div className="productCard">
            <img src={props.img} />
            <p>
                <strong>{props.name}</strong>
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <p>Price: {props.price / 100}€</p>
            <button>Add to cart</button>
        </div>
    );
};

export default ProductCard;
