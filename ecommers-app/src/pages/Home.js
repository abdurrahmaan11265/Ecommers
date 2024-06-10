import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard.js';
import ProductCard from '../components/ProductCard.js';
import SpecialProduct from '../components/SpecialProduct.js';
import Meta from '../components/Meta.js';
import Container from '../components/Container.js';
import { services } from '../utils/Data.js';

function Home() {
  return (
    <>
      <Meta title='E Commers App' />
      <Container class1='home-wrapper-1 py-5'>
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img className='img-fluid rounded-3' src="images/main-banner-1.jpg" alt="Main banner" />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 of $41.62/month</p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img className='img-fluid rounded-3' src="images/catbanner-01.jpg" alt="Main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>BEST SALE</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 <br /> of $41.62/month</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img className='img-fluid rounded-3' src="images/catbanner-02.jpg" alt="Main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>BEST SALE</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 <br /> of $41.62/month</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img className='img-fluid rounded-3' src="images/catbanner-03.jpg" alt="Main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>BEST SALE</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 <br /> of $41.62/month</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img className='img-fluid rounded-3' src="images/catbanner-04.jpg" alt="Main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>BEST SALE</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 <br /> of $41.62/month</p>
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

              {
                services.map((i, j) => {
                  return (<div className='d-flex align-items-center gap-15' key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className='mb-0'>{i.tagline}</p>
                    </div>
                  </div>)
                })
              }

            </div>
          </div>
        </div>
      </Container>

      <Container class1='home-wrapper-2 py-5'>
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="Camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>TV</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="TV" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="Head phone" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Head phone</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="Camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="Camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>TV</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="TV" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="Head phone" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Head phone</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="Camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative bg-dark card-wrapper">
              <img src="images/famous-1.png" className='famous-img img-fluid position-absolute' alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className='text-white'>Big Screen</h5>
                <h6 className='text-white'>Smart Watch Series 7</h6>
                <p className='text-white'>From $399 or $16.62/mo. for 24 mo.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative card-wrapper">
              <img src="images/famous-2.png" className='famous-img img-fluid position-absolute' alt="famous" />
              <div className="famous-content position-absolute text-dark">
                <h5>Studio Display</h5>
                <h6>600 nits of brightness.</h6>
                <p>27-inch 5K Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative card-wrapper">
              <img src="images/famous-3.png" className='famous-img img-fluid position-absolute' alt="famous" />
              <div className="famous-content position-absolute">
                <h5>SMART PHONES</h5>
                <h6>Smartphone 13 Pro.</h6>
                <p>NOW in Green. From $999.00 or <br />
                  $41.62/mo. for 24 mo. Footnote*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative card-wrapper">
              <img src="images/famous-4.png" className='famous-img img-fluid position-absolute' alt="famous" />
              <div className="famous-content position-absolute">
                <h5>HOME Speakers</h5>
                <h6>Room-filling sound.</h6>
                <p>From $699 or $116.58/mo. for 12 mo.*</p>
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
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="marquee-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
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
        </div>
      </Container>
    </>
  )
}

export default Home