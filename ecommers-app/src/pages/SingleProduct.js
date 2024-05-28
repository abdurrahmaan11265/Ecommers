import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import { GoGitCompare, GoHeart } from "react-icons/go";

const SingleProduct = () => {
    const props = { width: 400, height: 600, zoomWidth: 600, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg" };
    const [orderedProduct, setOrderedProduct] = useState(true);
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Link copied to clipboard successfully');
            })
            .catch(err => {
                alert('Could not copy Link to clipboard: ', err);
            });
    }
    return (
        <>
            <Meta title='Dynamic Poduct Name' />
            <BreadCrumb title='Dynamic Poduct Name' />
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className="other-product-images d-flex flex-wrap gap-15">
                                <div><img className='img-fluid' src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg" alt="Watch" /></div>
                                <div><img className='img-fluid' src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg" alt="Watch" /></div>
                                <div><img className='img-fluid' src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg" alt="Watch" /></div>
                                <div><img className='img-fluid' src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg" alt="Watch" /></div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="main-product-details">
                                <div className='border-bottom'>
                                    <h3 className='title'>Kids Headphones Bulk 10 pack Multi Colored For Student</h3>
                                </div>
                                <div className="py-3">
                                    <p className="price">
                                        $100.0
                                    </p>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className="mb-0 t-review">
                                            (2 Reviews)
                                        </p>
                                    </div>
                                    <a className='review-btn' href="#review-form">Write a review</a>

                                </div>
                                <div className="border-bottom">
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className='product-heading'>Type: </h3> <p className='product-data'>Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className='product-heading'>Brand: </h3> <p className='product-data'>Havels</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className='product-heading'>Category: </h3> <p className='product-data'>Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className='product-heading'>Tags: </h3> <p className='product-data'>Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className='product-heading'>Availability: </h3> <p className='product-data'>In stock</p>
                                    </div>
                                    <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                        <h3 className='product-heading'>Size: </h3>
                                        <div className='d-flex flex-wrap gap-15'>
                                            <span className="badge border-1 border bg-white text-dark border-secondary">S</span>
                                            <span className="badge border-1 border bg-white text-dark border-secondary">M</span>
                                            <span className="badge border-1 border bg-white text-dark border-secondary">L</span>
                                            <span className="badge border-1 border bg-white text-dark border-secondary">XL</span>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-10 flex-column mt-2">
                                        <h3 className='product-heading'>Color: </h3> <Color />
                                    </div>
                                    <div className="d-flex gap-15 mb-3 align-items-center">
                                        <h3 className='product-heading'>Quantity: </h3>
                                        <input type="number" min={1} max={10} style={{ width: "70px" }} className='form-control' name="" id="" />
                                        <div className='d-flex align-items-center gap-30 ms-5'>
                                            <button type='submit' className='button border-0'>Add To Cart</button>
                                            <button className='button signup border-0'>Buy It Now</button>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-15">
                                        <div>
                                            <a href=""><GoGitCompare className='fs-5 me-2' /> Add to Compare</a>
                                        </div>
                                        <div>
                                            <a href=""><GoHeart className='fs-5 me-2' /> Add to WishList</a>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-10 flex-column my-3">
                                        <h3 className='product-heading'>Shipping & Returns: </h3> <p className='product-data'>Free shipping and returns available on all orders! <br /> We ship all US domestic orders within <b>5 - 10 business days!</b></p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-3">
                                        <h3 className='product-heading'>Copy Product Link: </h3>
                                        <a href="javascript:void(0)" onClick={() => copyToClipboard("www.google.com")}>Product Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <section className="description-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Description</h4>
                            <div className="bg-white p-3">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquam assumenda ad fugiat, saepe aspernatur sit voluptatibus facilis expedita totam dignissimos eum, nisi impedit cum?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="reviews-wrapper home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Reviews</h4>
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className='mb-2'>Customer Reviews</h4>
                                        <div className="d-flex gap-10 align-items-center">
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className='mb-0'>Based on 2 Reviews</p>
                                        </div>
                                    </div>
                                    {
                                        orderedProduct && <div>
                                            <a className='text-dark text-decoration-underline' href="">Write a Review</a>
                                        </div>
                                    }
                                </div>

                                <div id='review-form' className="review-form py-4">
                                    <h4>Write a Review</h4>
                                    <form action="" className='d-flex flex-column gap-15'>
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <div>
                                            <textarea name="" id="" className='w-100 form-control' placeholder='comments' rows="4"></textarea>
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button className='button border-0'>Submit Review</button>
                                        </div>
                                    </form>
                                </div>

                                <div className="reviews mt-4">
                                    <div className="review">
                                        <div className="d-flex gap-10 align-items-center">
                                            <h6 className='mb-0'>Mohammed Abdur Rahman</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, repellendus reprehenderit magni eius necessitatibus amet! Placeat corrupti, porro hic odio animi necessitatibus saepe, ut inventore eaque quam cum laborum quae?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="popular-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Our Popular Products</h3>
                        </div>
                    </div>
                    <div className="row">
                        <ProductCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct