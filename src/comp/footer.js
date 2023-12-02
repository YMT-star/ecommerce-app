import React from "react";
import {
  FaTruckMoving,
  FaHeadphonesAlt,
  FaPiggyBank,
  FaWallet,
} from "react-icons/fa";
import "./footer.css";
const footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="left_box">
            <div className="box">
              <div className="icon_box">
                <FaPiggyBank />
              </div>
              <div className="detail">
                <h3>Great Saving</h3>
                <p>lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="box">
              <div className="icon_box">
                <FaTruckMoving />
              </div>
              <div className="detail">
                <h3>Free Delivery</h3>
                <p>lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="box">
              <div className="icon_box">
                <FaHeadphonesAlt />
              </div>
              <div className="detail">
                <h3>22334 Support</h3>
                <p>lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="box">
              <div className="icon_box">
                <FaWallet />
              </div>
              <div className="detail">
                <h3>money back</h3>
                <p>lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
          <div className="right_box">
            <div className="header">
              <img src="" alt="" />
              <p>Lorem ipsu dolor sit amet, consectetur Nuliscing elit. </p>
            </div>
            <div className="bottom">
              <div className="box">
                <h3>Your Account</h3>
                <ul>
                  <li>About us</li>
                  <li>Account</li>
                  <li>Payment</li>
                  <li>Sales</li>
                </ul>
              </div>
              <div className="box">
                <h3>Product</h3>
                <ul>
                  <li>Delivery</li>
                  <li>Track Order</li>
                  <li>New Product</li>
                  <li>Old Product</li>
                </ul>
              </div>
              <div className="box">
                <h3>Contact us</h3>
                <ul>
                  <li>4005, Silver Business Point</li>
                  <li>+95 9999999999</li>
                  <li>info@gamail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
