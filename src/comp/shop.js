import React, { useState } from "react";
import "./shop.css";
import { AiFillEye, AiFillHeart, AiOutlineClose } from "react-icons/ai";
const Shop = ({ shop, Filter, allCateFilter, addToCart }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [detail, setDetail] = useState([]);
  const detailPage = (product) => {
    const detailData = [{ product }];
    const productDetail = detailData[0]["product"];
    console.log(productDetail);
    setDetail(productDetail);
    setShowDetail(true);
  };
  const closeDetail = () => {
    setShowDetail(false);
  };
  return (
    <>
      {showDetail ? (
        <>
          <div className="product_detail">
            <button className="close_btn" onClick={closeDetail}>
              <AiOutlineClose />
            </button>
            <div className="container">
              <div className="img_box">
                <img src={detail.image} alt="" />
              </div>
              <div className="info">
                <h4># {detail.cat}</h4>
                <h2>{detail.name}</h2>
                <p>
                  A Screen Everyone Will Love: Whether your family is streaming
                  or chatting friends tablet A8
                </p>
                <h3>$ {detail.price}</h3>
                <button onClick={() => addToCart(detail)}>Add to Cart</button>
              </div>
            </div>
          </div>
        </>
      ) : null}
      <div className="shop">
        <h2># shop</h2>
        <p>Home . shop</p>
        <div className="container">
          <div className="left_box">
            <div className="category">
              <div className="header">
                <h2>all categories</h2>
              </div>
              <div className="box">
                <ul>
                  <li onClick={() => allCateFilter()}># All</li>
                  <li onClick={() => Filter("tv")}># tv</li>
                  <li onClick={() => Filter("laptop")}># laptop</li>
                  <li onClick={() => Filter("watch")}># watch</li>
                  <li onClick={() => Filter("phone")}># phone</li>
                  <li onClick={() => Filter("headphone")}># headphone</li>
                  <li onClick={() => Filter("speaker")}># speaker</li>
                </ul>
              </div>
            </div>
            <div className="banner">
              <div className="img_box">
                <img src="/image/Laptop_shopNow.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="right_box">
            <div className="banner">
              <div className="img_box">
                <img src="/image/phone-shopnow1.jpg" alt="" />
              </div>
            </div>
            <div className="product_box">
              <h2>Shop Product</h2>
              <div className="product_container">
                {shop.map((curElm) => {
                  return (
                    <div className="box" key={curElm.id}>
                      <div className="img_box">
                        <img src={curElm.image} alt="" />
                        <div className="icon">
                          <li>
                            <AiFillHeart />
                          </li>
                          <li onClick={() => detailPage(curElm)}>
                            <AiFillEye />
                          </li>
                        </div>
                      </div>
                      <div className="detail">
                        <h3>{curElm.name}</h3>
                        <p>${curElm.price}</p>
                        <button onClick={() => addToCart(curElm)}>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
