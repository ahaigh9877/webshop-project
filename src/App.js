import React from 'react';

import "./App.css";
import Header from "./components/Header";

import Footer from "./components/Footer";
import ProductListGallery from "./components/ProductListGallery";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ProductListGallery />
      </main>
      <Footer />
    </div>
  );


}

export default App;
