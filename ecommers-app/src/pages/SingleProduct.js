import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";


const SingleProduct = () => {
    const [orderedProduct, setOrderedProduct] = useState(true);
    return (
        <>
            <Meta title='Dynamic Poduct Name' />
            <BreadCrumb title='Dynamic Poduct Name' />
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">

                        </div>

                        <div className="col-6">

                        </div>
                    </div>
                </div>
            </div>

            <section className="description-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12 bg-white">
                            <h4>Description</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquam assumenda ad fugiat, saepe aspernatur sit voluptatibus facilis expedita totam dignissimos eum, nisi impedit cum?
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="reviews-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
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

                                <div className="review-form">
                                    <form action="" className='d-flex flex-column gap-15'>
                                        <div>
                                            <input type="text" className="form-control" placeholder='Name' />
                                        </div>
                                        <div>
                                            <input type="text" className="form-control" placeholder='Email' />
                                        </div>
                                        <div>
                                            <input type="tel" className="form-control" placeholder='Phone Number' />
                                        </div>
                                        <div>
                                            <textarea name="" id="" className='w-100 form-control' placeholder='comments' rows="4"></textarea>
                                        </div>
                                        <div>
                                            <button className='button border-0'>Submit</button>
                                        </div>
                                    </form>
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