import React, { Component } from 'react';
import ProductCardContainer from './ProductCardContainer';

class ProductListGallery extends Component {
    render() {
        return (
            <div className="productListGallery">
                {/* Map over products below */}
                <ProductCardContainer />
                <ProductCardContainer />
                <ProductCardContainer />
                <ProductCardContainer />
                <ProductCardContainer />
                <ProductCardContainer />
                <ProductCardContainer />
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//     };
// };

// export default connect(mapStateToProps)(ProductCardContainer);

export default ProductListGallery;
