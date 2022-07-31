import React from 'react';
import { Link } from 'react-router-dom';

import HeroBg from '../images/hero-bg-02.jpg';
import tresLeches from "/images/personalized/tres-leches.jpeg"

function CustomizedCakes() {
  return (
    <section className="relative">

      {/* Background image */}
      {/* <div className="absolute inset-0 h-128 pt-16 box-content -z-1 bg-generalYellow-100">
        <img className="absolute inset-0 w-full h-full object-cover opacity-25" src={HeroBg} width="1440" height="577" alt="Testimonials" />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
      </div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="w-full mx-auto text-center">
            <h2 className="h2 text-black mb-8" data-aos="fade-down" data-aos-delay="150">
              Want a customized cake?
            </h2>
            <p className='h4 text-black mb-8'>Request a quote</p>
            
            {/* Explanation and images */}
            <div className='flex flex-col md:grid md:grid-cols-5 md:gap-10 md:items-center md:pt-8'>
              <div className='col-span-2 mb-8 md:mb-0'>
                <p className="text-xl text-black" data-aos="fade-down" data-aos-delay="150">
                  All of our personalized cakes are made from scratch with best quality local and seasonal ingredients. They can be made to suit any party or event theme, from birthdays to baby showers. 
                </p>
                <p className="text-xl text-black" data-aos="fade-down" data-aos-delay="150"> 
                  Prices will vary depending on number of servings, quantity and type of fruits, decoration and special enquiries.
                </p>
              </div>
              
              {/* Images */}
              <div className="col-span-3 grid grid-cols-12 gap-3" data-aos-id-gallery>
                <img className="col-span-6 md:col-span-4 object-cover min-h-[16rem] max-h-[16rem]" src={tresLeches} width="360" height="270" alt="About grid 01" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" />
                <img className="col-span-6 md:col-span-3 object-cover min-h-[16rem] max-h-[16rem]" src={tresLeches} width="270" height="270" alt="About grid 02" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="100" />
                <img className="col-span-6 md:col-span-5 object-cover min-h-[16rem] max-h-[16rem]" src={tresLeches} width="450" height="270" alt="About grid 03" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="200" />
                <img className="col-span-6 md:col-span-3 object-cover min-h-[16rem] max-h-[16rem]" src={tresLeches} width="270" height="270" alt="About grid 04" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="300" />
                <img className="col-span-6 md:col-span-5 object-cover min-h-[16rem] max-h-[16rem]" src={tresLeches} width="450" height="270" alt="About grid 05" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="400" />
                <img className="col-span-6 md:col-span-4 object-cover min-h-[16rem] max-h-[16rem]" src={tresLeches} width="360" height="270" alt="About grid 06" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="500" />
              </div>
            </div>
            
          </div>
        </div>
      </div>

    </section>
  );
}

export default CustomizedCakes;