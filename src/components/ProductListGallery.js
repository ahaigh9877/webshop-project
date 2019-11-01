import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    setProducts,
    getProducts,
    sortLowToHigh,
    sortHighToLow,
    sortAToZ,
    sortZToA
} from '../actions/getProducts';
import { addToCart } from '../actions/addToCart';
import { filterBySearch, resetFilters } from '../actions/filterProducts';
import ProductCard from './ProductCard';
import SearchForm from './SearchForm';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class ProductListGallery extends Component {
    state = {
        searchTerm: null
    };

    componentDidMount() {
        this.props.getProducts();
        window.addEventListener('scroll', this.resizeHeaderOnScroll);
    }
    resizeHeaderOnScroll() {
        const distanceY =
                window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 200,
            headerEl = document.getElementById('header');
        //headerBut = document.getElementsByClassName("headerButton");

        if (distanceY > shrinkOn) {
            headerEl.classList.add('smaller');
            //headerBut.classList.add("smaller");
        } else {
            headerEl.classList.remove('smaller');
            //headerBut.classList.add("smaller");
        }
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
        console.log('RESET');
        this.props.resetFilters();
        this.setState({ searchTerm: null });
        console.log(this.state);
    };

    sortLowToHigh = () => this.props.sortLowToHigh(this.props.products);

    sortHighToLow = () => this.props.sortHighToLow(this.props.products);

    sortAToZ = () => this.props.sortAToZ(this.props.products);

    sortZToA = () => this.props.sortZToA(this.props.products);

    render() {
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
                    handleReset={this.handleReset}
                />
                <DropdownButton id="dropdown-item-button" title="Sort products">
                    <Dropdown.Item
                        as="button"
                        onClick={() => this.sortLowToHigh()}
                    >
                        Price : low to high
                    </Dropdown.Item>
                    <Dropdown.Item
                        as="button"
                        onClick={() => this.sortHighToLow()}
                    >
                        Price : high to low
                    </Dropdown.Item>
                    <Dropdown.Item as="button" onClick={() => this.sortAToZ()}>
                        A - Z
                    </Dropdown.Item>
                    <Dropdown.Item as="button" onClick={() => this.sortZToA()}>
                        Z - A
                    </Dropdown.Item>
                </DropdownButton>
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

const mapStateToProps = state => {
    return {
        products: state.products,
        filteredProducts: state.filteredProducts
    };
};

export default connect(
    mapStateToProps,
    {
        setProducts,
        getProducts,
        addToCart,
        filterBySearch,
        resetFilters,
        sortLowToHigh,
        sortHighToLow,
        sortAToZ,
        sortZToA
    }
)(ProductListGallery);

// export default ProductListGallery;
