import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import watch from '../images/watch.jpg';
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const Cart = () => {
    return (
        <>
            <Meta title='Cart' />
            <BreadCrumb title='Cart' />
            <Container class1="cart-wrapper home-wrapper-2 py-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="cart-header d-flex justify-content-between align-items-center">
                                <h4 className='cart-col-1'>PRODUCT</h4>
                                <h4 className='cart-col-2'>PRICE</h4>
                                <h4 className='cart-col-3'>QUANTITY</h4>
                                <h4 className='cart-col-4'>TOTAL</h4>
                            </div>
                            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                                <div className='d-flex gap-15 align-items-center cart-col-1'>
                                    <div className='w-25'>
                                        <img src={watch} className='img-fluid' alt="" />
                                    </div>
                                    <div className='w-75'>
                                        <p>Apple Watch</p>
                                        <p>Size: XL</p>
                                        <p>Color: red</p>
                                    </div>
                                </div>
                                <div className='cart-col-2'>
                                    <h5 className="price">
                                        $ 100.00
                                    </h5>
                                </div>
                                <div className='d-flex align-items-center gap-15 cart-col-3'>
                                    <div>
                                        <input min={1} max={10} type="number" className='form-control' name="" id="" />
                                    </div>
                                    <div><RiDeleteBin6Line className='text-danger' /></div>
                                </div>
                                <div className='cart-col-4'>
                                    <h5 className="price">
                                        $ 100.00
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 py-2 mt-4">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex justify-content-between align-items-baseline">
                                    <Link className='button' to="/store">Continue Shopping</Link>
                                </div>
                                <div className='d-flex align-items-end flex-column'>
                                    <h4>Sub Total: $100.00</h4>
                                    <p>Taxes and shipping calculated at checkout</p>
                                    <Link className='button' to='/checkout'>Checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default Cart