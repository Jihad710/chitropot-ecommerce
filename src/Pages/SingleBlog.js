import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi"
import blog3 from "../assets/images/blog-1.jpg";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"}></Meta>
      <BreadCrumb title="Dynamic Blog Name" />
      <div className=" blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10"><HiOutlineArrowLeft className="fs-4"/> Go Back to Blogs</Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img src={blog3} className="img-fluid w-100 my-4" alt="blog" />
              
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                molestias iusto alias impedit eaque magnam similique odit, a
                commodi beatae, totam illo quas tenetur obcaecati veritatis
                nihil doloribus itaque nostrum minima. Harum a inventore commodi
                dolores mollitia ex illum voluptatum, aperiam architecto
                consequuntur nulla distinctio? Nam ut nemo numquam magni!
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
