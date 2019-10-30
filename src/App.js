import React from "react";

import "./App.css";
import Header from "./components/Header";
import ProductListGallery from "./components/ProductListGallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductListGallery />
      <Footer />
    </div>
  );
}

export default App;
