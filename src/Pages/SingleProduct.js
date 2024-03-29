import React, { useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import ProductCard from "../Components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";

import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../Components/Container";

const SingleProduct = () => {
  const props = {
    width: 594,
    height: 600,
    zoomWidth: 600,

    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };

  const [orderProduct] = useState(true);
  return (
    <>
      <Meta title={"Product Name"}></Meta>
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15 ">
              <div>
                <img
                  src="https://cynor.b-cdn.net/wp-content/uploads/2023/12/TL64-11-Multi-color-Stone-Large-Size-Chimney-Design-Turkish-Table-Lamp-1-600x600.jpg"
                  className="img-fluid"
                  alt="images"
                />
              </div>
              <div>
                <img
                  src="https://cynor.b-cdn.net/wp-content/uploads/2023/12/TL64-11-Multi-color-Stone-Large-Size-Chimney-Design-Turkish-Table-Lamp-1-600x600.jpg"
                  className="img-fluid"
                  alt="images"
                />
              </div>
              <div>
                <img
                  src="https://cynor.b-cdn.net/wp-content/uploads/2023/12/TL64-11-Multi-color-Stone-Large-Size-Chimney-Design-Turkish-Table-Lamp-1-600x600.jpg"
                  className="img-fluid"
                  alt="images"
                />
              </div>
              <div>
                <img
                  src="https://cynor.b-cdn.net/wp-content/uploads/2023/12/TL64-11-Multi-color-Stone-Large-Size-Chimney-Design-Turkish-Table-Lamp-1-600x600.jpg"
                  className="img-fluid"
                  alt="images"
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom ">
                <h3 className="title">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </h3>
              </div>
              <div className=" py-2">
                <p className="price">$100</p>
              </div>
              <div className="gap-10 align-items-center  ">
                <h3 className="product-heading mb-2">Description :</h3>
                <p className="product-data">
                  <ul>
                    <li>Total Height: 62 Inches;</li>
                    <li>Shade Height: 10 Inches;</li>
                    <li>Shade Width: 15.8 Inches;</li>
                    <li>Base Width: 9.7 Inches;</li>
                  </ul>
                </p>
              </div>
              <div className=" py-2">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type:</h3>
                  <p className="product-data">Headphone</p>
                </div>

                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category:</h3>
                  <p className="product-data">
                    airpods, camera's, headphones, mini speaker
                  </p>
                </div>

                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availablity:</h3>
                  <p className="product-data">In Stock</p>
                </div>

                <div className="d-flex gap-15 align-items-center flex-row mt-2 mb-3">
                  <h3 className="product-heading">Quantity:</h3>
                  <div className="">
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      style={{ width: "70px" }}
                      min={1}
                      max={10}
                      id=""
                    />
                  </div>

                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button className="button border-0" type="submit">
                      Add To Cart
                    </button>
                    <button className="button signup">Buy It Now</button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 mb-3 ">
                  <div>
                    <a href=" ">
                      <TbGitCompare className="fs-5 me-2" />
                      Add to Compare
                    </a>
                  </div>
                  <div>
                    <a href=" ">
                      <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value="3"
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">(2 Reviews)</p>
                </div>
                <div>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className="gap-10 align-items-center mt-4 ">
                  <h3 className="product-heading mb-2">
                    Shipping & Return Policy :
                  </h3>
                  <p className="product-data">
                    <ul>
                      <li>
                        ঢাকা সিটিতে সম্পূর্ণ ক্যাশ অন ডেলিভারি। আমাদের নিজস্ব
                        ডেলিভারি ম্যানের মাধ্যমে নিরাপদ ডেলিভারি। ডেলিভারির সময়
                        ১-৩ দিন সর্বচ্চো ৭ দিন।
                      </li>
                      <li>
                        ঢাকা সিটির বাহিরে Redx Home Delivery অথবা সুন্দরবন
                        কুরিয়ারের মাধ্যমে নিরাপদ ডেলিভারি। এক্ষেত্রে অগ্রিম ৩০০
                        টাকা পেমেন্ট করতে হবে। পণ্যের মূল্য ৫,০০০ টাকার বেশি হলে
                        অগ্রিম ৫০০ টাকা, ১০,০০০ টাকার বেশি হলে ১০০০ টাকা টাকা
                        পেমেন্ট করতে হবে। ডেলিভারির সময় ৩-৫ দিন সর্বচ্চো ১০ দিন।
                      </li>
                      <li>
                        ডেলিভারির সময় পণ্য দেখে বুঝে নিয়ে তারপর পেমেন্ট করতে
                        পারবেন। পণ্যে কোন সমস্যা থাকলে ফেরত দিতে পারবেন। ৭ দিনের
                        মধ্যে কোন সমস্যা হলে পণ্য পরিবর্তন করে নিতে পারবেন।
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description:</h4>
            <div className="bg-white p-3">
              <p className="bg-white p-3">
                <p>
                  Plastic & Metal Body Golden & Black Color Double Sided Station
                  Wall Clock
                </p>
                <ul>
                  <li className="py-2">
                  Dial width: 11.5 inches;
                  </li>
                  <li className="py-2">
                  Clock Width: 15.5 Inches;
                  </li>
                  <li className="py-2">
                  Clock Height: 20 Inches;
                  </li>
                  <li className="py-2">
                  Clock Height: 20 Inches;
                  </li>
                  <li className="py-2">
                  Clock Height: 20 Inches;
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="reviews-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4 id="review" className="mb-2">
              Reviews
            </h4>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between">
                <div>
                  <h4 className="mb-2">Customer Review</h4>
                  <div className="d-flex gap-10 align-items-center">
                    <ReactStars
                      count={5}
                      size={24}
                      value="3"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>

                {orderProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href=" ">
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Write a Review</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value="3"
                      edit={true}
                      activeColor="#ffd700"
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
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Faruk Rahman Jihad</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value="3"
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sint itaque eius harum vitae culpa atque accusantium omnis,
                    unde veritatis corporis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
