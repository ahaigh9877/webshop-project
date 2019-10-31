import React from 'react';

const ProductCard = props => {
    return (
        <div className="productCard">
            <img src={props.img} alt={props.name} />
            <p>
                <strong>{props.name}</strong>
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vitae nibh venenatis, aliquam diam eget, tempus metus.{' '}
            </p>
            <p>Price: {props.price}€</p>
            <button
                className="addToCartButton"
                onClick={event =>
                    props.handleClick(
                        event,
                        props.name,
                        props.img,
                        props.price,
                        props.productId
                    )
                }
            >
                Add to cart
            </button>
        </div>
    );
};

export default ProductCard;
