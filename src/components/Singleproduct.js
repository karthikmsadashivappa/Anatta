import React, { Component } from "react";
import SlideShow from "react-image-show";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

class Product extends React.Component {
  state = {
    productImages: [],
    productUrl: []
  };

  componentDidMount() {
    fetch("https://anatta-demo-app.herokuapp.com/api/products/7/image")
      .then(response => response.json())
      .then(images => this.setState({ productImages: images }));
  }

  render() {
    const { productUrl, productImages } = this.state;
    if (productImages.length > 0) {
      productImages.map((e, i) => {
        productUrl.push(e.url);
        console.log(productUrl);
      });
    }
    return (
      <div className="pdp-section-wrapper">
        <div className="pdp-filter-section">
          <span className="breadcrumb">
            <FontAwesomeIcon icon={faChevronLeft} /> MEN
          </span>
          <div className="filter-chose">
            <div className="filter-name">
              <div className="name">Red Canvas</div>
              <div className="details">OCA Low</div>
            </div>
            <div className="filter-price">
              <div className="price">$79USD</div>
              <div className="rating">
                <FontAwesomeIcon className="star" icon={faStar} />
                <FontAwesomeIcon className="star" icon={faStar} />
                <FontAwesomeIcon className="star" icon={faStar} />
                <FontAwesomeIcon className="star" icon={faStar} />
                <FontAwesomeIcon className="star" icon={faStar} /> 154 Reviews
              </div>
            </div>
          </div>
          <div className="color-chose">
            <div className="category">
              <div className="men cat">Men</div>
              <div className="women cat">Women</div>
            </div>
            <span className="color-title">Select Color</span>
            <div className="color-change">
              <span className="color green"></span>
              <span className="color blue"></span>
              <span className="color yellow"></span>
              <span className="color selected red"></span>
              <span className="color dark-blue"></span>
              <span className="color black"></span>
              <span className="color brown"></span>
              <span className="color grey"></span>
              <span className="color cement"></span>
              <span className="color clay"></span>
            </div>
            <div className="select-size">
              <span className="color-title">Select Size</span>
              <span className="color-title select-sizes">Size & Fit guide</span>
            </div>
            <div className="size-change">
              <span className="size special">5</span>
              <span className="size">5.5</span>
              <span className="size special">6</span>
              <span className="size">6.5</span>
              <span className="size special">7</span>
              <span className="size">7.5</span>
              <span className="size">8</span>
              <span className="size selected">8.5</span>
              <span className="size special">9</span>
              <span className="size">9.5</span>
              <span className="size special">10</span>
              <span className="size">10.5</span>
              <span className="size">11</span>
              <span className="size">11.5</span>
              <span className="size special">12</span>
              <span className="size">12.5</span>
              <span className="size">13</span>
            </div>
            <span className="add-to-bag">Add to bag</span>
          </div>
          <span className="offers">Worldwide Shipping + Free Returns</span>
        </div>
        <SlideShow
          images={productUrl.length > 0 ? productUrl : []}
          width="920px"
          imagesWidth="450px"
          imagesHeight="300px"
          imagesHeightMobile="56vw"
          thumbnailsWidth="500px"
          thumbnailsHeight="12vw"
          indicators
          thumbnails
          fixedImagesHeight
        />
      </div>
    );
  }
}

export default Product;
