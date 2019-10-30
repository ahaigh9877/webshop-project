import React from "react";

import "./App.css";
import Header from "./components/Header";

import Footer from "./components/Footer";
import ProductListGalleryContainer from "./components/ProductListGalleryContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ProductListGalleryContainer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
