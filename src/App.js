import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

// import the two exports from the last code snippet.
import { persistor, store } from "./store";
// import your necessary custom components.
// import { LoadingView } from './components';

import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./components/Footer";
import ProductListGallery from "./components/ProductListGallery";
import { Route } from "react-router-dom";
import ShoppingCartContainer from "./components/ShoppingCartContainer";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          <Header />
          <main>
            <Route exact path="/" component={ProductListGallery} />
            <Route path="/checkout" component={ShoppingCartContainer} />
          </main>
          <Footer />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
