import React, { Component } from "react";
import { connect } from "react-redux";

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>
          Powered by Codaisseur ©2019
          <span> :&#123;</span>
          <span> &#x29;</span>
        </p>
        <p>
          Made by <a href="https://alastair-haigh.netlify.com/">Alastair</a>{" "}
          &#x214B;
          <a href=""> Manon</a>
        </p>
      </footer>
    );
  }
}

export default connect()(Footer);
