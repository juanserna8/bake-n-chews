import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';
import Transition from '../utils/Transition';
import logo from '/images/logoHeader.png'

function Header() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  // Handle light modes
  const [darkMode, setDarkMode] = useState(() => {
    const dark = localStorage.getItem('dark-mode');
    if (dark === null) {
      return true;
    } else {
      return dark === 'true';
    }
  });

  useEffect(() => {
    localStorage.setItem('dark-mode', darkMode)
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode]);  

  return (
    <header className="absolute w-full z-30 bg-yellowHeader-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-5">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <img 
                src={logo} 
                alt="El Mohan Logo" 
                className='object-contain h-12 rounded-full '  
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center font-medium">
              <li>
                <Link to="/about" className="text-black font-marcellus hover:text-gray-900 dark:text-black dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out">About</Link>
              </li>
              <li>
                <Link to="/cakes" className="text-black font-marcellus hover:text-gray-900 dark:text-black dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out">Cakes</Link>
              </li>
              <li>
                <Link to="/contact" className="text-black font-marcellus hover:text-gray-900 dark:text-black dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out">Contact us</Link>
              </li>
            </ul>     

            {/* Desktop CTA on the right */}
            <ul className="flex justify-end flex-wrap items-center">
              <li>
                <Link to="/cart" className="btn-sm text-white ml-6 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                <svg class="h-6 w-6 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>

                </Link>
              </li>
            </ul>

          </nav>

          {/* Mobile menu */}
          <div className="inline-flex md:hidden">

            {/* Hamburger button */}
            <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-900 hover:text-gray-900 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <Transition
              show={mobileNavOpen}
              tag="ul"
              className="fixed top-0 h-screen z-20 left-0 w-full max-w-sm -ml-16 overflow-scroll bg-white dark:bg-gray-900 shadow-lg"
              enter="transition ease-out duration-200 transform"
              enterStart="opacity-0 -translate-x-full"
              enterEnd="opacity-100 translate-x-0"
              leave="transition ease-out duration-200"
              leaveStart="opacity-100"
              leaveEnd="opacity-0"              
            >
              <nav id="mobile-nav" ref={mobileNav} className="fixed top-0 h-screen z-20 left-0 w-full max-w-sm -ml-16 overflow-scroll bg-yellowHeader-100 shadow-lg no-scrollbar">
                <div className="py-6 pr-4 pl-20 ">                  
                  {/* Logo */}
                  <img 
                    src={logo} 
                    alt="El Mohan Logo" 
                    className='object-contain h-12 rounded '  
                  />

                  {/* Links */}
                  <ul className='text-black py-2 my-4 border-t border-gray-800'>
                    <li>
                      <Link to="/about" className="flex py-2">About</Link>
                    </li>
                    <li>
                      <Link to="/cakes" className="flex py-2">Cakes</Link>
                    </li>
                    <li>
                      <Link to="/contact" className="flex py-2">Contact us</Link>
                    </li>
                   
                    <li>
                      <Link to="/contact" className="font-medium w-full inline-flex items-center justify-center px-4 py-2 my-2 rounded btn-sm text-black bg-yellowHeader-100 border border-yellowBorder-100 transition duration-150 ease-in-out">Order online</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </Transition>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
