import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
      <>
          <Meta title='Login' />
          <BreadCrumb title='Login' />
          <div className="login-wrapper home-wrapper-2 py-5">
              <div className="container-xxl">
                  <div className="row justify-content-center align-items-center">
                      <div className="col-4">
                          <div className="auth-card">
                              <h3 className='text-center'>Login</h3>
                              <form action="" className='d-flex flex-column gap-30'>
                                  <div>
                                      <input type="email" name='email' placeholder='Email' className="form-control" />
                                  </div>
                                  <div>
                                      <input type="password" name='password' placeholder='Password' className="form-control" />
                                  </div>
                                  <Link to='/forgot-password'>Forgot Password?</Link>
                                  <div className="d-flex justify-content-center my-3 gap-15 align-items-center">
                                      <button type='submit' className='button border-0'>Login</button>
                                      <Link to="/signup" className='button signup border-0'>Sign up</Link>
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

export default Login