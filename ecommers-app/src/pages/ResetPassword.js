import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const ResetPassword = () => {
    return (
        <>
            <Meta title='Reset Password' />
            <BreadCrumb title='Reset Password' />
            <Container class1="login-wrapper home-wrapper-2 py-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-4">
                        <div className="auth-card">
                            <h3 className='text-center'>Reset Password</h3>
                            <form action="" className='d-flex flex-column gap-30'>
                                <CustomInput type="password" name='password' placeholder='Password' />
                                <CustomInput type="password" name='confpassword' placeholder='Confirm Password' />
                                <div className="d-flex justify-content-center my-3 gap-15 align-items-center">
                                    <button type='submit' className='button border-0'>Ok</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ResetPassword