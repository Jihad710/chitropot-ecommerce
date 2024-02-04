import React, { useState } from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Container from "../Components/Container";
import Custominput from "../Components/Custominput";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
      <Meta title={"Login"}></Meta>
      <BreadCrumb title="Login" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-15">
                <Custominput type="email" name="email" placeholder="Email" />
                <div className="mt-1 position-relative">
                  <Custominput
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                  />
                  <div className="eye-icon" onClick={togglePasswordVisibility}>
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>

                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>
                </div>
                <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                  <button className="button border-0" type="submit">
                    Login
                  </button>
                  <Link to="/signup" className="button signup">
                    Sign Up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
