import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProducts from './pages/CompareProducts';
import WishList from './pages/WishList';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* in the below line the elements will be passed to the outlet in the layout.js file */}
            <Route index element={<Home />}></Route>
            <Route path='about' element={<About />}></Route> 
            <Route path='contact' element={<Contact />}></Route>
            <Route path='store' element={<OurStore />}></Route>
            <Route path='product/:id' element={<SingleProduct />}></Route>
            <Route path='blogs' element={<Blog />}></Route>
            <Route path='blog/:id' element={<SingleBlog />}></Route>
            <Route path='compare-product' element={<CompareProducts />}></Route>
            <Route path='wishlist' element={<WishList />}></Route>
            <Route path='login' element={<Login/>}></Route>
            <Route path='forgot-password' element={<ForgotPassword/>}></Route>
            <Route path='signup' element={<Signup/>}></Route>
            <Route path='reset-password' element={<ResetPassword/>}></Route>
            <Route path='privacy-policy' element={<PrivacyPolicy/>}></Route>
            <Route path='refund-policy' element={<RefundPolicy/>}></Route>
            <Route path='shipping-policy' element={<ShippingPolicy/>}></Route>
            <Route path='terms-and-conditions' element={<TermsAndConditions/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
