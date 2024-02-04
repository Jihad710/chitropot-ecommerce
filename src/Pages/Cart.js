import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../Components/Container";
const Cart = () => {
  return (
    <>
      <Meta title={"Cart"}></Meta>
      <BreadCrumb title="Your shopping Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
      
      
          <div className="row">
            <div className="col-12">
              <div className="cart-header d-flex py-3 mb-2 justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data d-flex py-3 justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      src="https://i.ibb.co/YdLq8yB/watch.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="w-25">
                    <p>Lorem, ipsum dolor.</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$100</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      id=""
                    />
                  </div>
                  <div>
                    <AiFillDelete className="text-danger fs-3" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">$100</h5>
                </div>
              </div>
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/product" className="button">
                  Continue To Shopping
                </Link>
              <div className="d-flex flex-column align-items-end">
              <h4>Subtotal: $100</h4>
              <p>Taxes and shipping calculated at checkout</p>
              <Link to="/checkout" className="button">
                Checkout
              </Link>
            </div>
          </div>
        </div>
        </div>
      
      </Container>
    </>
  );
};

export default Cart;
