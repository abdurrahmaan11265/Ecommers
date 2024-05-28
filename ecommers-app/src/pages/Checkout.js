import React from 'react'

const Checkout = () => {
    return (
        <>
            <div className="checkot-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-7">
                            <div className="checkout-left-data">
                                <h3 className='website-name'>Dev Corner</h3>
                                <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#">Home /</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Library</li>
                                    </ol>
                                </nav>
                                <h4 className="title">
                                    Contact Information
                                </h4>
                                <p className="user-details">Mohammed Abdur Rahman (asdf@gmail.com)</p>
                                <form action="" className='d-flex justify-content-between gap-15'>
                                    <div>
                                        <select name="" className='form-control form-select' id="">
                                            
                                        </select>
                                    </div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </form>
                            </div>
                        </div>
                        <div className="col-5"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout