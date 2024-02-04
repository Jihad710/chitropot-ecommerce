import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";


const Signup = () => {
  return (
    <>
      <Meta title={"Sign Up"}></Meta>
      <BreadCrumb title="Sign Up" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="Mobile Number"
                    placeholder="Mobile Number"
                    className="form-control"
                  />
                </div>
                <div className="mt-1 position-relative">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>

                <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                  <button className="button border-0">Sign Up</button>
                 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
