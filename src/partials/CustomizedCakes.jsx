import React from 'react';
import { Link } from 'react-router-dom';

import HeroBg from '../images/hero-bg-02.jpg';
import tresLeches from "/images/personalized/tres-leches.jpeg"

function CustomizedCakes() {
  return (
    <section className="relative">

      {/* Background image */}
      <div className="absolute inset-0 h-128 pt-16 box-content -z-1">
        <img className="absolute inset-0 w-full h-full object-cover opacity-25" src={HeroBg} width="1440" height="577" alt="Testimonials" />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            {/* <h1 className="h1 font-red-hat-display mb-4" data-aos="fade-down">Let's get in touch</h1> */}
            <h1 className="h2 font-red-hat-display mb-8" data-aos="fade-down" data-aos-delay="150">
              Want a customized cake?
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">
              All of our personalized cakes are made from scratch with best quality local and seasonal ingredients. They can be made to suit any party or event theme, from birthdays to baby showers. 
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150"> 
              Prices will vary depending on number of servings, quantity and type of fruits, decoration and special enquiries.
            </p>
            
            {/* Images */}
            <div className="grid grid-cols-12 gap-3 mt-12 md:mt-20" data-aos-id-gallery>
              <img className="col-span-4 object-cover min-h-[16rem] max-h-[16rem]" src={tresLeches} width="360" height="270" alt="About grid 01" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" />
              <img className="col-span-3 object-cover min-h-[16rem] max-h-[16rem]" src={tresLeches} width="270" height="270" alt="About grid 02" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="100" />
              <img className="col-span-5 object-cover min-h-[16rem] max-h-[16rem]" src={tresLeches} width="450" height="270" alt="About grid 03" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="200" />
              <img className="col-span-3 object-cover min-h-[16rem] max-h-[16rem]" src={tresLeches} width="270" height="270" alt="About grid 04" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="300" />
              <img className="col-span-5 object-cover min-h-[16rem] max-h-[16rem]" src={tresLeches} width="450" height="270" alt="About grid 05" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="400" />
              <img className="col-span-4 object-cover min-h-[16rem] max-h-[16rem]" src={tresLeches} width="360" height="270" alt="About grid 06" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="500" />
            </div>
            
            <div className="mt-8" data-aos="fade-down" data-aos-delay="300">
              <Link className="btn text-white bg-teal-500 hover:bg-teal-400 ml-3" to="/contact">Get a quote</Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default CustomizedCakes;