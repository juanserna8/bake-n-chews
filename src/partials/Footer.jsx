import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/images/logo.png'

function Footer() {
  return (
<footer className="relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-16 border-t -mt-px">
            
            {/* Footer illustration */}
            <div className="pointer-events-none -z-1" aria-hidden="true">
                <svg className="absolute bottom-0 left-0 transform -translate-x-1/2 ml-24 dark:opacity-40" width="800" height="264" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="400" cy="400" r="400" fill="url(#footerglow_paint0_radial)" fillOpacity=".4" />
                    <defs>
                        <radialGradient id="footerglow_paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 0 400) scale(315.089)">
                            <stop stopColor="#3ABAB4" />
                            <stop offset="1" stopColor="#3ABAB4" stopOpacity=".01" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>

            {/* Top area: Blocks */}
            <div className="mb-8 md:mb-12">

                {/* 1st block */}
                <div className="mx-auto text-center">
                    {/* Logo */}
                    <Link className="inline-block" to="/" aria-label="Cruip">
                    <img 
                        src={logo} 
                        alt="El Mohan Logo" 
                        className='object-contain h-16 rounded-full transition hover:scale-125 duration-500'  
                    />
                    </Link>
                </div>
                
            </div>

            {/* Bottom area */}
            <div className="md:flex md:items-center md:justify-between">

                {/* Social links */}
                <ul className="flex mb-4 md:order-2 md:ml-4 md:mb-0">
                    {/* Facebook */}
                    <li className="ml-4">
                        <a className="flex justify-center items-center text-gray-600 bg-generalYellow-100 hover:underline hover:bg-teal-600 hover:text-white rounded-full transition duration-150 ease-in-out" href="#0" aria-label="Facebook">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                            </svg>
                        </a>
                    </li>
                    {/* Instagram */}
                    <li className="ml-4">
                        <a className="flex justify-center items-center text-gray-600 bg-generalYellow-100 hover:underline hover:bg-teal-600 hover:text-white rounded-full transition duration-150 ease-in-out" href="#0" aria-label="Instagram">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20.145" cy="11.892" r="1" />
                                <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                                <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                            </svg>
                        </a>
                    </li>
                </ul>

                {/* Copyrights note */}
                <div className="text-gray-600 dark:text-gray-400 text-sm mr-4">&copy; 2022. All rights reserved.</div>

            </div>

        </div>
    </div>
</footer>
  );
}

export default Footer;
