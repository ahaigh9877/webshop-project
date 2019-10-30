import React, { Component } from "react";
import { connect } from "react-redux";
import { setProducts, getProducts } from "../actions/getProducts";
import { addToCart } from "../actions/addToCart";
import ProductCard from "./ProductCard";
import { format } from "util";

class ProductListGallery extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  handleClick = (event, product, image, price, productId) => {
    event.preventDefault();
    this.props.addToCart(product, image, price, productId);
  };

  render() {
    return (
      <div className="productListGallery">
        {this.props.products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            img={product.imageUrl}
            price={product.price}
            handleClick={this.handleClick}
            productId={product.productId}
          />
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
  { setProducts, getProducts, addToCart }
)(ProductListGallery);

// export default ProductListGallery;
