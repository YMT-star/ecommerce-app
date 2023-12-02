/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Homeproduct from "./home_product";
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
const Home = ({ addToCart }) => {
  const [newProduct, setNewProduct] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [topProduct, setTopProduct] = useState([]);

  const [trendingProduct, SetTrendingProduct] = useState(Homeproduct);

  const filtercate = (x) => {
    const filterProduct = Homeproduct.filter((curElm) => {
      return curElm.type === x;
    });
    SetTrendingProduct(filterProduct);
  };
  const allTrendingProduct = () => {
    SetTrendingProduct(Homeproduct);
  };
  useEffect(() => {
    productCategory();
  }, []);
  const productCategory = () => {
    const newCategory = Homeproduct.filter((x) => {
      return x.type === "new";
    });
    setNewProduct(newCategory);
    const featuredCategory = Homeproduct.filter((x) => {
      return x.type === "featured";
    });
    setFeaturedProduct(featuredCategory);
    const topCategory = Homeproduct.filter((x) => {
      return x.type === "top";
    });
    setTopProduct(topCategory);
  };
  return (
    <>
      <div className="home">
        <div
          className="top_banner"
          style={{ backgroundImage: "url(./image/Background.webp)" }}
        >
          <div className="content">
            <h3>silver aluminum</h3>
            <h2> Watch for Man</h2>
            <p>30% of at your first order</p>
            <Link to="/shop" className="link">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="trending">
          <div className="container">
            <div className="left_box">
              <div className="header">
                <div className="heading">
                  <h2 onClick={() => allTrendingProduct()}>trending product</h2>
                </div>
                <div className="cate">
                  <h3 onClick={() => filtercate("new")}>New</h3>
                  <h3 onClick={() => filtercate("featured")}>Feature</h3>
                  <h3 onClick={() => filtercate("top")}>top-selling</h3>
                </div>
              </div>
              <div className="products">
                <div className="container">
                  {trendingProduct.map((curElm) => {
                    return (
                      <div className="box" key={curElm.id}>
                        <div className="img_box">
                          <img src={curElm.image} alt="" />
                          <div className="icon">
                            <div className="icon_box">
                              <AiFillEye />
                            </div>
                            <div className="icon_box">
                              <AiFillHeart />
                            </div>
                          </div>
                        </div>
                        <div className="info">
                          <h3>{curElm.name}</h3>
                          <p>${curElm.price}</p>
                          <button
                            className="btn"
                            onClick={() => addToCart(curElm)}
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button>Show Moe</button>
              </div>
            </div>
            <div className="right_box">
              <div className="right_container">
                <div className="testimonial">
                  <div className="head">
                    <h3>our testmonial</h3>
                  </div>
                  <div className="detail">
                    <div className="img_box">
                      <img src="./image/testimonial-1.jpg" alt="" />
                    </div>
                    <div className="info">
                      <h3>stephan robot</h3>
                      <h4>web designer</h4>
                      {/* <p></p> */}
                    </div>
                  </div>
                </div>
                <div className="newsletter">
                  <div className="head">
                    <h3>newsletter</h3>
                  </div>
                  <div className="form">
                    <p>join our mailling list</p>
                    <input
                      type="email"
                      placeholder="E-mail"
                      autoComplete="off"
                    />
                    <button>Subscribe</button>
                    <div className="icon_box">
                      <div className="icon">
                        <BsFacebook />
                      </div>
                      <div className="icon">
                        <BsTwitter />
                      </div>
                      <div className="icon">
                        <BsInstagram />
                      </div>
                      <div className="icon">
                        <BsYoutube />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banners">
          <div className="container">
            <div className="left_box">
              <div className="box">
                <img
                  src="./image/iphone-discount.jpg"
                  alt=""
                  className="top_img"
                />
              </div>
              <div className="box">
                <img
                  src="./image/bluetooth-speaker-discount.jpg "
                  alt=""
                  className="bottom_img"
                />
              </div>
            </div>
            <div className="right_box">
              <div className="top">
                <img src="./image/shop-now.jpg" alt="" className="top_first" />
                <img
                  src="./image/bluetooth shop-now.jpg"
                  alt=""
                  className="top_second"
                />
              </div>
              <div className="bottom">
                <img src="./image/laptop-shop.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="product_type">
          <div className="container">
            <div className="box">
              <div className="header">
                <h2>New Product</h2>
              </div>

              {newProduct.map((curElm) => {
                return (
                  <div className="productBox" key={curElm.id}>
                    <div className="img-box ">
                      <img src={curElm.image} alt="" />
                    </div>
                    <div className="detail">
                      <h3>{curElm.name}</h3>
                      <p>${curElm.price}</p>
                      <div className="icon">
                        <button>
                          <AiFillEye />
                        </button>
                        <button>
                          <AiFillHeart />
                        </button>
                        <button>
                          <AiOutlineShoppingCart />
                        </button>
                        onClick={() => addToCart(curElm)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="box">
              <div className="header">
                <h2>Featured Product</h2>
              </div>

              {featuredProduct.map((curElm) => {
                return (
                  <div className="productBox" key={curElm.id}>
                    <div className="img-box ">
                      <img src={curElm.image} alt="" />
                    </div>
                    <div className="detail">
                      <h3>{curElm.name}</h3>
                      <p>${curElm.price}</p>
                      <div className="icon">
                        <button>
                          <AiFillEye />
                        </button>
                        <button>
                          <AiFillHeart />
                        </button>
                        <button onClick={() => addToCart(curElm)}>
                          <AiOutlineShoppingCart />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="box">
              <div className="header">
                <h2>Top Product</h2>
              </div>

              {topProduct.map((curElm) => {
                return (
                  <div className="productBox" key={curElm.id}>
                    <div className="img-box ">
                      <img src={curElm.image} alt="" />
                    </div>
                    <div className="detail">
                      <h3>{curElm.name}</h3>
                      <p>${curElm.price}</p>
                      <div className="icon">
                        <button>
                          <AiFillEye />
                        </button>
                        <button>
                          <AiFillHeart />
                        </button>
                        <button onClick={() => addToCart(curElm)}>
                          <AiOutlineShoppingCart />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
