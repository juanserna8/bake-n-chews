import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

import Celebration from '/images/celebration.webp';
import Slice from '/images/slice.webp'
import Stand from "/images/stand.webp";
import Coffee from "/images/coffee.webp";
import Wood from "/images/wood.webp"
import Bake from "/images/bake.webp"
import cake1 from "/images/cake1.png"
import cake2 from "/images/cake2.png"
import cake3 from "/images/cake3.png"
import { useState } from 'react';

function BusinessDescription() {
  const [imageLoaded, setImageLoaded] = useState(false) 
 
  return (
    <section>
      <motion.div 
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8}}
        className="mx-auto px-4 sm:px-6"
      >

          <div className='mt-6 flex flex-col md:grid grid-cols-3 gap-8 md:gap-4 border-2 border-yellowBorder-100 rounded py-8 px-4'>
            <div className='flex flex-col mx-auto hover:animate-float'>
              <img src={cake1} alt="cake1" className='h-[14rem] border-2 border-yellowBorder-100 rounded' />
              <div className='max-w-[14rem] mt-4'>
                <p className='h4 text-black text-center'>Unique flavours</p>
                <p className='text-black text-justify mt-2 px-2'>We always try to innovate with new and unique flavours, based on seasonal ingredients and European-inspired pastries.</p>
              </div>
            </div>
            <div className='flex flex-col mx-auto hover:animate-float'>
              <img src={cake2} alt="cake2" className='h-[14rem] border-2 border-yellowBorder-100 rounded'/>
              <div className='max-w-[14rem] mt-4'>
                <p className='h4 text-black text-center'>Home made</p>
                <p className='text-black text-justify mt-2 px-2'>Creative mouth-watering cakes made from scratch. We handmake all our products so every cake is different and fresh.</p>
              </div>
            </div>
            <div className='flex flex-col mx-auto hover:animate-float'>
              <img src={cake3} alt="cake3" className='h-[14rem] border-2 border-yellowBorder-100 rounded'/>
              <div className='max-w-[14rem] mt-4'>
                <p className='h4 text-black text-center'>Customized cakes</p>
                <p className='text-black text-justify mt-2 px-2'>We are pleased to fulfill orders for personalized cakes for your celebrations and special occasions.</p>
              </div>
            </div>
          </div>

          {/* Buttons section */}
          <div className='mt-12 grid gap-4 sm:flex sm:justify-evenly sm:px-10'>
            <Link to="/contact" className="btn-sm bg-yellowHeader-100 border border-yellowBorder-100 sm:w-[15rem] transition hover:scale-125 duration-500 hover:bg-teal-400">
            <button 
                className=' text-black'  
            >
                CUSTOMIZE YOUR CAKE
            </button>
            </Link>
          </div>

          {/* Images grid */}
          <div className="grid grid-cols-12 gap-3 mt-12 md:mt-20 mx-auto justify-items-center" data-aos-id-gallery>
            <img 
              className={`ease-in duration-150 ${imageLoaded ? 'col-span-6 md:col-span-4 lg:col-span-4 object-cover h-[16.5rem] xl:w-[25rem] transition xl:hover:object-contain' : 'hidden'}`} src={Bake} width="360" height="270" alt="About grid 01" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]"
              onLoad={() => setImageLoaded(true)} 
            />
            <img 
              className={`ease-in duration-150 ${imageLoaded ? 'col-span-6 md:col-span-3 lg:col-span-4 object-cover h-[16.5rem] xl:w-[25rem] transition xl:hover:object-contain' : 'hidden'}`} src={Slice} width="270" height="270" alt="About grid 02" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="100" 
              onLoad={() => setImageLoaded(true)}
            />
            <img 
              className={`ease-in duration-150 ${imageLoaded ? 'col-span-6 md:col-span-5 lg:col-span-4 object-cover h-[16.5rem] xl:w-[25rem] xl:hover:object-contain' : 'hidden'}`} src={Stand} width="450" height="270" alt="About grid 03" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="200" 
              onLoad={() => setImageLoaded(true)}
            />
            <img 
              className={`ease-in duration-150 ${imageLoaded ? 'col-span-6 md:col-span-3 lg:col-span-4 object-cover h-[16.5rem] xl:w-[25rem] xl:hover:object-contain' : 'hidden'}`} src={Coffee} width="270" height="270" alt="About grid 04" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="300" 
              onLoad={() => setImageLoaded(true)}
            />
            <img 
              className={`ease-in duration-150 ${imageLoaded ? 'col-span-6 md:col-span-4 lg:col-span-4 object-cover h-[16.5rem] xl:w-[25rem] xl:hover:object-contain' : 'hidden'}`} src={Celebration} width="360" height="270" alt="About grid 06" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="500" 
              onLoad={() => setImageLoaded(true)}
            />
            <img 
              className={`ease-in duration-150 ${imageLoaded ? 'col-span-6 md:col-span-5 lg:col-span-4 object-cover h-[16.5rem] xl:w-[25rem] xl:hover:object-contain' : 'hidden'}`} src={Wood} width="450" height="270" alt="About grid 05" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="400" 
              onLoad={() => setImageLoaded(true)}
            />
          </div>

      </motion.div>
    </section>
  );
}

export default BusinessDescription;
