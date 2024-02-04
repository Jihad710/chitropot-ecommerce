import React, { useState } from 'react'
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
       <Meta title={"Login"}></Meta>
      <BreadCrumb title="Login" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className='text-center mb-3'>Login</h3>
              <form action="" className='d-flex flex-column gap-15'>
  <div>
    <div className="position-relative">
      <input type="email" name='email' placeholder='Email' className="form-control" />
    </div>
  </div>
  <div className='mt-1 position-relative'>
    <input
      type={passwordVisible ? "text" : "password"}
      name="password"
      placeholder="Password"
      className="form-control"
    />

    <div className="eye-icon" onClick={togglePasswordVisibility}>
      {passwordVisible ? <FaEyeSlash /> : <FaEye />}
    </div>
  </div>
  <div>
    <Link to="/forgot-password">Forgot Password?</Link>
  </div>
  <div className='d-flex mt-3 justify-content-center gap-15 align-items-center'>
    <button className='button border-0' type='submit'>Login</button>
    <Link to="/signup" className='button signup'>Sign Up</Link>
  </div>
</form>

            </div>
          </div>
        </div>
        </div>

      </div>
    </>
  )
}

export default Login
