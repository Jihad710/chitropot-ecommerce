import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import Container from "../Components/Container";
import Custominput from "../Components/Custominput";

const Resetpassword = () => {
  return (
    <>
      <Meta title={"Reset Password"}></Meta>
      <BreadCrumb title="Reset Password" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
       
       <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Password</h3>
              <form action="" className="d-flex flex-column gap-15">
                <Custominput type="password"
                    name="password"
                    placeholder="Password"/>
                <Custominput type="confirm password"
                    name="confirm password"
                    placeholder="Confirm Password"/>
                
                
              <div>

                <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                  <button className="button border-0">Ok</button>
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

export default Resetpassword;
