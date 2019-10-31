import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setProducts, getProducts } from '../actions/getProducts';
import { addToCart } from '../actions/addToCart';
import { filterBySearch } from '../actions/filterProducts';
import ProductCard from './ProductCard';
import SearchForm from './SearchForm';

let foundProducts;

class ProductListGallery extends Component {
  state = {
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
        this.props.filterBySearch(this.props.products, this.state.searchTerm);
        // this.setState({ foundProducts: foundProducts });
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
        console.log('props.filteredProducts', this.props.filteredProducts);

        const isFiltered = this.props.filteredProducts.length > 0;
        let galleryDisplay;

        if (isFiltered) {
            galleryDisplay = this.props.filteredProducts.map(
                (product, index) => (
                    <ProductCard
                        key={index}
                        name={product.name}
                        description={product.description}
                        img={product.imageUrl}
                        price={product.price}
                        handleClick={this.handleClick}
                        productId={product.productId}
                    />
                )
            );
        } else {
            galleryDisplay = this.props.products.map((product, index) => (
                <ProductCard
                    key={index}
                    name={product.name}
                    description={product.description}
                    img={product.imageUrl}
                    price={product.price}
                    handleClick={this.handleClick}
                    productId={product.productId}
                />
            ));
        }
      
        return (
            <div>
                <SearchForm
                    handleSearch={this.handleSearch}
                    handleSubmitSearch={this.handleSubmitSearch}
                    searchTerm={this.state.searchTerm}
                />
                <div className="productListGallery">{galleryDisplay}</div>
                <div className="productListGallery">
                    {this.state.foundProducts &&
                        this.state.foundProducts.map((product, index) => (
                            <ProductCard
                                key={index}
                                na
                                me={product.name}
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
}

const mapStateToProps = state => {
    return {
        products: state.products,
        filteredProducts: state.filteredProducts
    };
};

export default connect(
    mapStateToProps,
    { setProducts, getProducts, addToCart, filterBySearch }
)(ProductListGallery);

// export default ProductListGallery;
