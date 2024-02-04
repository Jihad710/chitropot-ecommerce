import React from "react";
import { Link } from "react-router-dom";
import blog from "../assets/images/blog-1.jpg";

const BlogCard = () => {
  return (
   
      <div className="blog-card">
        <div className="card-image">
          <img src={blog} className="img-fluid w-100" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">1 Dec, 2023</p>
          <h5 className="title">A Beautiful Sunday Morning Renaissance</h5>
          <p className="desc">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate.
          </p>
          <Link to="/blog/:id" className="button">
            Read more
          </Link>
        </div>
      </div>

  );
};

export default BlogCard;
