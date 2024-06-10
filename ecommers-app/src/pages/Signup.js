import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const Signup = () => {
  return (
    <>
      <Meta title='Sign up' />
      <BreadCrumb title='Sign up' />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-4">
            <div className="auth-card">
              <h3 className='text-center'>Sign up</h3>
              <form action="" className='d-flex flex-column gap-30'>
                <CustomInput type="text" name='name' placeholder='Name' />
                <CustomInput type="email" name='email' placeholder='Email' />
                <CustomInput type="tel" name='mobile' placeholder='Mobile Number' />
                <CustomInput type="password" name='password' placeholder='Password' />
                <div className="d-flex justify-content-center my-3 gap-15 align-items-center">
                  <button type='submit' className='button border-0'>Sign up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Signup