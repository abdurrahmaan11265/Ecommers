import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";
import watch from "../images/watch.jpg";
import Container from '../components/Container';

const Checkout = () => {
    return (
        <>
            <Container class1="checkot-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-7">
                            <div className="checkout-left-data">
                                <h3 className='website-name'>Dev Corner</h3>
                                <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link className='text-dark total-price' to='/cart'>Cart <FaAngleRight /></Link>
                                        </li>
                                        <li className="breadcrumb-item total-price active" aria-current="page">
                                            Information <FaAngleRight />
                                        </li>
                                        <li className="breadcrumb-item total-price active" active>
                                            Shipping <FaAngleRight />
                                        </li>
                                        <li className="breadcrumb-item total-price active" aria-current="page">
                                            Payment
                                        </li>
                                    </ol>
                                </nav>
                                <h4 className="title total">
                                    Contact Information
                                </h4>
                                <p className="total user-details">Mohammed Abdur Rahman (asdf@gmail.com)</p>
                                <h4 className='mb-3'>Shipping Address</h4>
                                <form action="" className='d-flex flex-wrap justify-content-between gap-15'>
                                    <div className='w-100'>
                                        <select name="" className='form-control form-select' id="">
                                            <option value="" selected disabled>
                                                Select Country
                                            </option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text' placeholder='First Name' className="form-control"></input>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text' placeholder='Last Name' className="form-control"></input>
                                    </div>
                                    <div className='w-100'>
                                        <input type='text' placeholder='Addredd' className="form-control"></input>
                                    </div>
                                    <div className='w-100'>
                                        <input type='text' placeholder='Apartment, Suite, etc..' className="form-control"></input>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text' placeholder='City' className="form-control"></input>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <select name="" className='form-control form-select' id="">
                                            <option value="" selected disabled>
                                                Select State
                                            </option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text' placeholder='Zipcode' className="form-control"></input>
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link to='/cart' className='text-dark'><IoMdArrowBack /> Return To Cart</Link>
                                            <Link to='/cart' className='button'>Continue To Shipping</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className='border-bottom py-4'>
                                <div className='d-flex gap-10 mb-2 align-items-center'>
                                    <div className="w-75 d-flex gap-10 align-items-center">
                                        <div className='w-25 position-relative'>
                                            <span style={{ "top": "-10px", "right": "2px" }} className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>1</span>
                                            <img className='img-fluid' src={watch} alt="product" />
                                        </div>
                                        <div>
                                            <h5 className="total-price">Watch</h5>
                                            <p className='total-price'>S / #B4234ZD</p>
                                        </div>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <h5 className='total'>$ 100</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='border-bottom py-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className='total'>Subtotal</p>
                                    <p className='total-price'>$ 10000</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className='mb-0 total'>Shipping</p>
                                    <p className='mb-0 total-price'>$ 10000</p>
                                </div>
                            </div>
                            <div className='border-bottom py-4 d-flex justify-content-between align-items-center'>
                                <h4 className='total'>Total</h4>
                                <h5 className='total-price'>$ 10000</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Checkout