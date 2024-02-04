import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Checkout = () => {
  return (
    <>
      <Meta title={"checkout"}></Meta>
      <BreadCrumb title="Checkout" />

      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">Chitropot</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item total-price">
                      <Link to="/cart " className="text-dark total-price">Cart</Link>
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item total-price  active" aria-current="page">
                      Information
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item total-price active">
                      Shipping
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item total-price active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title total">Contact Information</h4>
                <p className="user-details total">
                  Faruk Rahman Jihad (farukrahmanjihad@gmail.com)
                </p>
                <h4 className="mb-3">Shipping Address</h4>
                <form
                  action=""
                  className="d-flex flex-wrap gap-15 justify-content-between"
                >
                  
                  <div className="flex-grow-1">
                    <p>First Name *</p>
                    <input type="text" placeholder="First Name" className="form-control" />
                  </div>

                  <div className="flex-grow-1">
                  <p>Last Name *</p>
                    <input type="text" placeholder="Last Name" className="form-control" />
                  </div>
                  <div className="w-100">
                  <p>District</p>
                    <select
                      className="form-control form-select"
                      name=""
                      id=""
                    >
                        <option value="" selected disabled>
                            Select District
                        </option>
                    </select>
                  </div >
                  <div className="w-100">
                  <p>Town / City</p>
                    <input type="text" placeholder="Town / City" className="form-control" />
                  </div>
                  <div className="w-100">
                  <p>Street Address</p>
                    <input type="text" placeholder="House Number, Street Name" className="form-control" />
                  </div>
                  
                  <div className="w-100">
                  <p>Phone *</p>
                    <input type="text" placeholder="Mobile Number" className="form-control" />
                  </div>
                  <div className="w-100">
                  <p>Email Address *</p>
                    <input type="email" className="form-control" placeholder="Email" name="" id="" />
                  </div>
              
                 <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                        <Link to="/cart" className="text-dark"><FaArrowLeft className="me-2" />Return To Cart</Link>
                        <Link to="/cart" className="button">Continue To Shipping</Link>
                    </div>
                 </div>
                </form>
              </div>
            </div>
            <div className="col-5">
                <div className="border-bottom py-4">
                    <div className="d-flex gap-10 mb-2 align-align-items-center">
                    <div className="w-75 d-flex gap-10">
                       <div  className="w-25 position-relative ">
                        <span style={{"top":"-10px",right:"2px"}} className="badge bg-secondary text-white p-2 rounded-circle position-absolute">
                          1
                        </span>
                    
                        <img className="img-fluid" src="https://i.ibb.co/YdLq8yB/watch.jpg"  alt="product" />
                       </div>
                       <div>
                        <h5 className="total-price">
                            Lorem ipsum dolor sit 
                        </h5>
                        <p className="total">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                       </div>
                    </div>
                    <div className="flex-grow-1">
                    <h5 className="total-price">$100</h5> 
                    </div>
                    </div>
                </div>
                <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                    <p className="total">Subtotal</p>
                    <p className="total-price">$1000</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0 total">Shipping</p>
                    <p className="mb-0 total-price">$60</p>
                </div>
                </div>
                <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                    <h4 className="total">Total</h4>
                    <h5 className="total-price">$1000</h5>
                </div>
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
