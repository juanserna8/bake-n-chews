import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import { AnimatePresence } from 'framer-motion';

import './css/style.scss';
import 'react-toastify/dist/ReactToastify.css'

import AOS from 'aos';

import Contact from './pages/Contact';
import Cakes from './pages/Cakes';
import CakeInformation from './partials/CakeInformation'

import Home from './pages/Home';
import Cart from './pages/Cart';
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
        <ToastContainer />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/cakes/:cakeId" element={<CakeInformation />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>
  );
}

export default App;
