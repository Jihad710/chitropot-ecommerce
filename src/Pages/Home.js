import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../Components/BlogCard";
import ProductCard from "../Components/ProductCard";
import SpecialProduct from "../Components/SpecialProduct";
import mainbanner from "../assets/images/main-banner-1.jpg";
import catbanner from "../assets/images/catbanner-01.jpg";
import catbanner2 from "../assets/images/catbanner-02.jpg";
import catbanner3 from "../assets/images/catbanner-03.jpg";
import catbanner4 from "../assets/images/catbanner-04.jpg";
import services from "../assets/images/service.png";
import services2 from "../assets/images/service-02.png";
import services3 from "../assets/images/service-03.png";
import services4 from "../assets/images/service-04.png";
import services5 from "../assets/images/service-05.png";
import camera from "../assets/images/camera.jpg";
import tv from "../assets/images/tv.jpg";
import headphone from "../assets/images/headphone.jpg";
import speaker from "../assets/images/speaker.jpg";
import laptop from "../assets/images/laptop.jpg";
import famous from "../assets/images/famous-01.webp";
import famous2 from "../assets/images/famous-02.webp";
import famous3 from "../assets/images/famous-03.webp";
import famous4 from "../assets/images/famous-04.webp";
import brand from "../assets/images/brand-01.png";
import brand2 from "../assets/images/brand-02.png";
import brand3 from "../assets/images/brand-03.png";
import brand4 from "../assets/images/brand-04.png";
import brand5 from "../assets/images/brand-05.png";
import brand6 from "../assets/images/brand-06.png";
import brand7 from "../assets/images/brand-07.png";
import brand8 from "../assets/images/brand-08.png";
import Container from "../Components/Container";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative ">
              <img
                className="img-fluid rounded-3"
                src={mainbanner}
                alt="main banner"
              ></img>
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS</h4>
                <h5>iPad S13+ Pro</h5>
                <p>From $999.00 or $41.62/mo</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between gap-10 align-items-center">
              <div className="small-banner position-relative ">
                <img
                  className="img-fluid rounded-3"
                  src={catbanner}
                  alt="main banner"
                ></img>
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>Laptop Max</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  className="img-fluid rounded-3"
                  src={catbanner2}
                  alt="main banner"
                ></img>
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy iPad Air</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  className="img-fluid rounded-3"
                  src={catbanner3}
                  alt="main banner"
                ></img>
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Smart Watch 7</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  className="img-fluid rounded-3"
                  src={catbanner4}
                  alt="main banner"
                ></img>
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>AirPods Max</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-15">
                <img src={services} alt="services" />
                <div>
                  <h6>Free Shipping</h6>
                  <p className="mb-0">From all orders over 5000 BDT</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src={services2} alt="services" />
                <div>
                  <h6>Daily Surprise Offers</h6>
                  <p className="mb-0">Save upto 25% off</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src={services3} alt="services" />
                <div>
                  <h6>Support 24/7</h6>
                  <p className="mb-0">Shop With an expert</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src={services4} alt="services" />
                <div>
                  <h6>Affordable Prices</h6>
                  <p className="mb-0">Get Factory Default Prices</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src={services5} alt="services" />
                <div>
                  <h6>Secure Payments</h6>
                  <p className="mb-0">100% Protected Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Camera</h6>
                  <p>10 Items</p>
                </div>
                <img src={camera} alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src={tv} alt="tv" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music</h6>
                  <p>10 Items</p>
                </div>
                <img src={headphone} alt="headphone" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src={speaker} alt="speaker" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Laptop</h6>
                  <p>10 Items</p>
                </div>
                <img src={laptop} alt="laptop" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Tab</h6>
                  <p>10 Items</p>
                </div>
                <img src={tv} alt="tv" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music</h6>
                  <p>10 Items</p>
                </div>
                <img src={headphone} alt="headphone" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src={speaker} alt="speaker" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Featured Products</h3>
          </div>

          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={famous} className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
                <h5>BIG SCREEN</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399or $16.62/mon. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={famous2} className="img-fluid" alt="" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">STUDIO DISPLAY</h5>
                <h6 className="text-dark">600 nits of brightness</h6>
                <p className="text-dark">27-inch 5k Retina Display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={famous3} className="img-fluid" alt="" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">SMARTPHONES</h5>
                <h6 className="text-dark">Smart Phone 13 pro</h6>
                <p className="text-dark">27-inch 5k Retina Display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={famous4} className="img-fluid" alt="" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">HOME SPEAKERS</h5>
                <h6 className="text-dark">Room-filling sound</h6>
                <p className="text-dark">From $399or $16.62/mon. for 24 mo.*</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="marque-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marque-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src={brand} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand2} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand3} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand4} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand5} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand6} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand7} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand8} alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest News</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
