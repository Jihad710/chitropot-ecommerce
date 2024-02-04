import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import Color from "../Components/Color";
import cross from '../assets/images/cross.svg';
import watch from '../assets/images/watch.jpg';

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Product"}></Meta>
      <BreadCrumb title="Compare Product" />

      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            {/* compare Product */}
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src={cross}
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src={watch} alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honor T1 7.0 1 8GB RAM & Inch With Wi-Fi
                  </h5>
                  <h6 className="price mb-3 mt-3">$100.00</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <p>Havels</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type:</h5>
                      <p>Watch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availablity:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color/>
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src={cross}
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src={watch} alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honor T1 7.0 1 8GB RAM & Inch With Wi-Fi
                  </h5>
                  <h6 className="price mb-3 mt-3">$100.00</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <p>Havels</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type:</h5>
                      <p>Watch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availablity:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color/>
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;
