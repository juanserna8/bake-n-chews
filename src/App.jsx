import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import './css/style.scss';
import 'react-toastify/dist/ReactToastify.css'

import AOS from 'aos';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Cakes from './pages/Cakes';
import CakeInformation from './partials/CakeInformation'
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Cart from './pages/Cart';
import Help from './pages/Help';
import PageNotFound from './pages/PageNotFound';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 750,
      easing: 'ease-out-quart',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        {/* <ToastContainer /> */}
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/cakes/:cakeId" element={<CakeInformation />} />
        <Route path="/blog-post" element={<BlogPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
