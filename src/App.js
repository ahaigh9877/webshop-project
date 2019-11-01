import React from 'react';

import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/Footer';
import ProductListGallery from './components/ProductListGallery';
import { Route } from 'react-router-dom';
import ShoppingCartContainer from './components/ShoppingCartContainer';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Route exact path="/" component={ProductListGallery} />
                <Route path="/checkout" component={ShoppingCartContainer} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
