import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcomapre from "../assets/images/prodcompare.svg";
import view from "../assets/images/view.svg";
import cart from "../assets/images/add-cart.svg";
import wish from "../assets/images/wish.svg";




const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div
        className={`${
          location.pathname === "/store" ? `col-${grid}` : "col-3"
        }`}
      >
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img
              src="https://i.ibb.co/YdLq8yB/watch.jpg"
              className="img-fluid"
              alt="product"
            />
            <img
              src="https://i.ibb.co/d4BfMzF/watch-1.jpg"
              className="img-fluid"
              alt="product"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Sony</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              laboriosam dolorum molestias ad facere assumenda quae ullam ut
              sapiente sint.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcomapre} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={cart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img
              src="https://i.ibb.co/YdLq8yB/watch.jpg"
              className="img-fluid"
              alt="product"
            />
            <img
              src="https://i.ibb.co/d4BfMzF/watch-1.jpg"
              className="img-fluid"
              alt="product"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Sony</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              laboriosam dolorum molestias ad facere assumenda quae ullam ut
              sapiente sint.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcomapre} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={cart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    
      
    </>
  );
};

export default ProductCard;
