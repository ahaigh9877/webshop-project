import React from 'react';

const ProductCard = props => {
    return (
        <div>
            <img src={props.img} />
            <p>
                <strong>{props.name}</strong>
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vitae nibh venenatis, aliquam diam eget, tempus metus.{' '}
            </p>
            <button>Add to cart</button>
        </div>
    );
};

export default ProductCard;
