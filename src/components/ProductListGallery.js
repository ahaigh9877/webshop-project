import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setProducts, getProducts } from '../actions/getProducts';
import ProductCard from './ProductCard';

class ProductListGallery extends Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        return (
            <div className="productListGallery">
                {this.props.products.map(product => (
                    <ProductCard name={product.name} img={product.imageUrl} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    };
};

export default connect(
    mapStateToProps,
    { setProducts, getProducts }
)(ProductListGallery);

// export default ProductListGallery;
