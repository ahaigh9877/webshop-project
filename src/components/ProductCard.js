import React, { Component } from "react";
import ModalProductWindow from "./ModalProductWindow";

class ProductCard extends Component {
  state = { isOpen: false };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div className="productCard">
        <div>
          <img src={this.props.img} alt={this.props.name} />
          <p>
            <strong>{this.props.name}</strong>
          </p>
        </div>
        <p>{this.props.description}</p>
        <p>Price: {this.props.price}€</p>
        <div>
          <button className="addToCartButton" onClick={this.toggleModal}>
            Show product details{" "}
          </button>
          <ModalProductWindow
            show={this.state.isOpen}
            onClose={this.toggleModal}
            img={this.props.img}
            name={this.props.name}
            description={this.props.description}
            price={this.props.price}
            handleClick={this.props.handleClick}
          />
          <br />
          <button
            className="addToCartButton"
            onClick={event =>
              this.props.handleClick(
                event,
                this.props.name,
                this.props.img,
                this.props.price,
                this.props.productId
              )
            }
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

export default ProductCard;
