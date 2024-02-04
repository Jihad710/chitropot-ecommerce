import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import cross from '../assets/images/cross.svg';
import watch from '../assets/images/watch.jpg';
import Container from "../Components/Container";
const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"}></Meta>
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src={cross}
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                    <img src={watch} className="img-fluid w-100" alt="jpg" />
                </div>
                <div className=" py-3 px-3">
                <h5 className="title">Honor T1 7.0 1 8GB RAM & Inch With Wi-Fi</h5>
                <h6 className="price">$100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src={cross}
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                    <img src={watch} className="img-fluid w-100" alt="jpg" />
                </div>
                <div className=" py-3 px-3">
                <h5 className="title">Honor T1 7.0 1 8GB RAM & Inch With Wi-Fi</h5>
                <h6 className="price">$100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src={cross}
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                    <img src={watch} className="img-fluid w-100" alt="jpg" />
                </div>
                <div className=" py-3 px-3">
                <h5 className="title">Honor T1 7.0 1 8GB RAM & Inch With Wi-Fi</h5>
                <h6 className="price">$100</h6>
                </div>
              </div>
            </div>
          </div>
   
      </Container>
    </>
  );
};

export default Wishlist;
