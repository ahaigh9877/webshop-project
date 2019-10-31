import React, { Component } from "react";
import { connect } from "react-redux";
import { setProducts, getProducts } from "../actions/getProducts";
import { addToCart } from "../actions/addToCart";
import ProductCard from "./ProductCard";
import { format } from "util";
import SearchForm from "./SearchForm";

class ProductListGallery extends Component {
  state = {
    foundProducts: null,
    searchTerm: null
  };

  componentDidMount() {
    this.props.getProducts();
  }

  handleSearch = event => {
    //using setState here for now. May use action later... or just on submit perhaps?

    this.setState({ searchTerm: event.target.value });
  };

  handleSubmitSearch = event => {
    event.preventDefault();

    const searchTerm = this.state.searchTerm;
    if (searchTerm) {
      const foundProducts = this.props.products.filter(product => {
        return (
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });

      this.setState({ foundProducts: foundProducts });
      console.log("state after search setstate: ", this.state);
    }
  };

  handleClick = (event, product, image, price, productId) => {
    event.preventDefault();
    this.props.addToCart(product, image, price, productId);
  };

  handleReset = event => {
    console.log("RESET");
    this.setState({ foundProducts: null, searchTerm: null });
    console.log(this.state);
    //this.props.getProducts();
  };

  render() {
    return (
      <div>
        <SearchForm
          handleSearch={this.handleSearch}
          handleSubmitSearch={this.handleSubmitSearch}
          searchTerm={this.state.searchTerm}
          handleReset={this.handleReset}
        />
        <div className="productListGallery">
          {this.state.foundProducts &&
            this.state.foundProducts.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                description={product.description}
                img={product.imageUrl}
                price={product.price}
                handleClick={this.handleClick}
                productId={product.productId}
              />
            ))}
          {this.state.foundProducts === null &&
            this.props.products.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                description={product.description}
                img={product.imageUrl}
                price={product.price}
                handleClick={this.handleClick}
                productId={product.productId}
              />
            ))}
        </div>
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
