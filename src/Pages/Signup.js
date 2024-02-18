
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import Container from "../Components/Container";
import Custominput from "../Components/Custominput";



import { Link } from "react-router-dom";


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
              <form
              
                className="d-flex flex-column gap-15"
              >
                {/* First Name Input */}
                <div>
                  <label htmlFor="email" className="mb-2">
                    First Name
                  </label>
                  <Custominput
                    type="text"
                    name="firstname"
                    placeholder="First Name"
             
                  />
                </div>
                <div className="error">
             
                </div>

                {/* Last Name Input */}
                <div>
                  <label htmlFor="email" className="mb-2">
                    Last Name
                  </label>
                  <Custominput
                    type="text"
                    name="lastname"
                    placeholder="Last Name"

                  />
                </div>
                <div className="error">
        
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="mb-2">
                    Email address
                  </label>
                  <Custominput
                    type="email"
                    name="email"
                    placeholder="Email"
                
                  />
                </div>
            

                {/* Mobile Number Input */}
                <div>
                  <label htmlFor="email" className="mb-2">
                    Mobile Number
                  </label>
                  <Custominput
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
              
                  />
                </div>
           

                {/* Password Input */}
                <div>
                  <label htmlFor="password" className="mb-2">
                    Password
                  </label>
                  <div className="position-relative">
                    <Custominput
                      type="password"
                      name="password"
                      placeholder="Password"

                    />
                   
                  </div>
                </div>
                <div className="error">
    
                </div>
                <div>
                  <p>Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our <Link to="/privacy-policy">privacy policy.</Link></p>
                </div>
                <div>
                  <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                    <button type="submit" className="button border-0">
                      Sign Up
                    </button>
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
