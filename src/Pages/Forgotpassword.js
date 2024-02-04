import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../Components/Container";
import Custominput from "../Components/Custominput";

const Forgotpassword = () => {
  return (
    <>
      <Meta title={"Forgot Password"}></Meta>
      <BreadCrumb title="Forgot Password" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center mt-2 mb-3">
                We will send your an email to reset your password
              </p>
              <form action="" className="d-flex flex-column gap-15">
                <Custominput type="email" name="email" placeholder="Email" />
                <div></div>

                <div className="d-flex mt-3 justify-content-center flex-column gap-15 align-items-center">
                  <button className="button border-0" type="submit">
                    Submit
                  </button>
                  <Link to="/login">Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Forgotpassword;
