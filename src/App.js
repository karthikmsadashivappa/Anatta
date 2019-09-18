import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Products from "./components/products";
import Product from "./components/Singleproduct";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Product />
      <Products />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
