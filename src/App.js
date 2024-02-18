import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import OurStore from './Pages/OurStore';
import Blog from './Pages/Blog';
import Wishlist from './Pages/Wishlist';
import Login from './Pages/Login';
import Forgotpassword from './Pages/Forgotpassword';
import Signup from './Pages/Signup';
import Resetpassword from './Pages/Resetpassword';
import SingleBlog from './Pages/SingleBlog';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import RefundPolicy from './Pages/RefundPolicy';
import ShippingPolicy from './Pages/ShippingPolicy';
import TermsAndConditions from './Pages/TermsAndConditions';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}></Route>
    <Route path='about' element={<About/>}></Route>
    <Route path='contact' element={<Contact/>}></Route>
    <Route path='product' element={<OurStore/>}></Route>
    <Route path='product/:id' element={<SingleProduct/>}></Route>
    <Route path='blogs' element={<Blog/>}></Route>
    <Route path='blog/:id' element={<SingleBlog/>}></Route>
    <Route path='cart' element={<Cart/>}></Route>
    <Route path='checkout' element={<Checkout/>}></Route>
    <Route path='wishlist' element={<Wishlist/>}></Route>
    <Route path='login' element={<Login/>}></Route>
    <Route path='forgot-password' element={<Forgotpassword/>}></Route>
    <Route path='reset-password' element={<Resetpassword/>}></Route>
    <Route path='signup' element={<Signup/>}></Route>
    <Route path='privacy-policy' element={<PrivacyPolicy/>}></Route>
    <Route path='refund-policy' element={<RefundPolicy/>}></Route>
    <Route path='shipping-policy' element={<ShippingPolicy/>}></Route>
    <Route path='term-conditions' element={<TermsAndConditions/>}></Route>
      
</Route>
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
