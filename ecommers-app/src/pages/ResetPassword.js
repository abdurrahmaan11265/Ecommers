import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return (
      <>
          <Meta title='Reset Password' />
          <BreadCrumb title='Reset Password' />
          <div className="login-wrapper home-wrapper-2 py-5">
              <div className="container-xxl">
                  <div className="row justify-content-center align-items-center">
                      <div className="col-4">
                          <div className="auth-card">
                              <h3 className='text-center'>Reset Password</h3>
                              <form action="" className='d-flex flex-column gap-30'>
                                  <div>
                                      <input type="password" name='password' placeholder='Password' className="form-control" />
                                  </div>
                                  <div>
                                      <input type="password" name='confpassword' placeholder='Confirm Password' className="form-control" />
                                  </div>
                                  <div className="d-flex justify-content-center my-3 gap-15 align-items-center">
                                      <button type='submit' className='button border-0'>Ok</button>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default ResetPassword