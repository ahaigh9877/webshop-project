import React from 'react';

const ProductCard = () => {
    return (
        <div>
            <img src="https://via.placeholder.com/150" />
            <p>
                <strong>This will be a product name</strong>
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
