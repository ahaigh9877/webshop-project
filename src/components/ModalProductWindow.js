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
          <div id="modalContainer">
            {/* {this.props.children} */}
            <img
              className="modalPic"
              //width="300px"
              src={this.props.img}
              alt={this.props.name}
            />
            <div id="modalDetails">
              <p id="modalHeadline">
                <strong>
                  <h2>{this.props.name}</h2>
                </strong>
              </p>
              <p id="modalDescription">{this.props.description}</p>
              <p>
                <strong>Price: {this.props.price}€</strong>
              </p>
              <button
                id="modalAddToCartButton"
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
