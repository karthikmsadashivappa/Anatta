import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Products extends Component {
  state = {
    data: [],
    pictures: []
  };

  fetchImage = id => {
    fetch(`https://anatta-demo-app.herokuapp.com/api/products/${id}/image`)
      .then(response => response.json())
      .then(pic => this.state.pictures.push(pic));
  };

  // fetch()
  // repsint check

  componentDidMount() {
    fetch("https://anatta-demo-app.herokuapp.com/api/products")
      .then(response => response.json())
      .then(products_data => this.setState({ data: products_data }))
      .then(e => {
        this.state.data.map(i => {
          this.fetchImage(i.id);
        });
      });
    // product['image'] = "dummy_link"
    // fetchProductImage(id)
  }

  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const { data, pictures } = this.state;
    if (this.state.pictures.length > 0) {
      console.log(pictures);
    }

    return (
      <div className="produts-wrapper">
        <div className="you-may-like-section">
          <h1 className="products-title">You'll also like</h1>
          <Slider {...settings}>
            {data.map((d, i) => (
              <div key={d.id} className="product-secton">
                <div className="product-wrapper">
                  <img
                    className="product-image"
                    src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
                  ></img>
                  <span className="product-name">{d.name}</span>
                  <span className="product-price">${d.price}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Products;
