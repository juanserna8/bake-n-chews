import React from 'react';
import { motion } from 'framer-motion'

import tresLeches from "/images/personalized/tres-leches.jpeg"
import Pink from "/images/personalized/pink.webp"
import Levels from "/images/personalized/levels.webp"
import Brown from "/images/personalized/brown.webp"
import Fruits from "/images/personalized/fruits.webp"
import Chocolate from "/images/personalized/chocolate.webp"

function CustomizedCakes() {
  return (
    <section className="relative">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="w-full mx-auto text-center">
            <motion.h2 
              initial={{ scale: 1.2 }}
              animate={{ scale: 1}}
              transition={{ duration: 0.4}}
              className="h2 text-black mb-8" data-aos="fade-down" data-aos-delay="150">
              Want a customized cake?
            </motion.h2>
            <motion.p 
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8}}
              className='h4 text-black mb-8'
            >Request a quote</motion.p>
            
            {/* Explanation and images */}
            <motion.div 
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8}}
              className='flex flex-col md:grid md:grid-cols-5 md:gap-10 md:items-center md:pt-8'
            >
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
                <img className="col-span-6 md:col-span-4 object-cover min-h-[16rem] max-h-[16rem]" src={Levels} width="360" height="270" alt="About grid 01" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" />
                <img className="col-span-6 md:col-span-3 object-cover min-h-[16rem] max-h-[16rem]" src={Pink} width="270" height="270" alt="About grid 02" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="100" />
                <img className="col-span-12 md:col-span-5 object-cover min-h-[16rem] max-h-[16rem]" src={Chocolate} width="450" height="270" alt="About grid 03" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="200" />
                <img className="hidden md:flex md:col-span-3 object-cover min-h-[16rem] max-h-[16rem]" src={tresLeches} width="270" height="270" alt="About grid 04" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="300" />
                <img className="col-span-6 md:col-span-5 object-cover min-h-[16rem] max-h-[16rem]" src={Brown} width="450" height="270" alt="About grid 05" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="400" />
                <img className="col-span-6 md:col-span-4 object-cover min-h-[16rem] max-h-[16rem]" src={Fruits} width="360" height="270" alt="About grid 06" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="500" />
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>

    </section>
  );
}

export default CustomizedCakes;