import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai';
import {BiPhoneCall,BiInfoCircle} from 'react-icons/bi';


const Contact = () => {
  return (
    <>
      <Meta title={"Contact"}></Meta>
      <BreadCrumb title="Contact" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.13083816516!2d90.36815997602358!3d23.77835478770124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0b3d03cd1d5%3A0x339edbe2189a918e!2sBNP%20Bazar!5e0!3m2!1sen!2sbd!4v1706712366446!5m2!1sen!2sbd"
                width="600"
                height="450"
                className="border-0 w-100"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="google-maps-location"
                title="BNP Bazar Location"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email*"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        placeholder="Comments"
                        cols="30"
                        rows="4"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex align-items-center gap-15">
                      <AiOutlineHome className="fs-5"/>
                      <address className="mb-0">West Agargaon, Dhaka-1207</address>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-15">
                        <BiPhoneCall className="fs-5"/>
                        <a href="tel: +88 01773239086">+88 01773239086</a>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-15">
                        <AiOutlineMail className="fs-5"/>
                        <a href="mailto:farukrahmanjihad@gmail.com">farukrahmanjihad@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-15">
                        <BiInfoCircle className="fs-5"/>
                        <p className="mb-0">Always Open, Feel-Free Place Your order</p>
                      </li>

                    </ul>
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

export default Contact;
