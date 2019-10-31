import React, { Component } from "react";
import PropTypes from "prop-types";

class ModalProductWindow extends Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    return (
      <div id="modalBackdrop">
        <div id="modalWindow">
          {/* {this.props.children} */}
          <img src={this.props.img} alt={this.props.name} />
          <p>
            <strong>{this.props.name}</strong>
          </p>
          <p>{this.props.description}</p>
          <p>Price: {this.props.price}€</p>
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

          <button id="modalCloseButton" onClick={this.props.onClose}>
            <strong>X</strong>
          </button>
        </div>
      </div>
    );
  }
}

ModalProductWindow.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default ModalProductWindow;
