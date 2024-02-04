import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import Container from "../Components/Container";
import Custominput from "../Components/Custominput";




const Signup = () => {
  return (
    <>
      <Meta title={"Sign Up"}></Meta>
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-15">
                <Custominput type="text" name="name" placeholder="Name" />
                <Custominput type="email" name="email" placeholder="Email" />
                <Custominput
                  type="tel"
                  name="Mobile Number"
                  placeholder="Mobile Number"
                />
                <Custominput
                  type="password"
                  name="password"
                  placeholder="Password"
                />

                <div>
                  <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Sign Up</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
