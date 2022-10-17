import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import andrea from '/images/andrea.png';
import title from '/images/title.png';

import logo from '/images/logo.png'

function EverAbout() {
  return (
    <section className="relative">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-[8rem]">
        <div className="pt-32 pb-10 md:pt-[11rem] md:pb-10">
          <motion.img 
            initial={{ scale: 1.5 }}
            animate={{ scale: 1}}
            transition={{ duration: 0.7}}
            className="mb-8 md:pb-16"
            src={title} alt="Baker"
          />
          {/* <img src={title} alt="Business name" className="mb-8 md:pb-16 scale-150 md:scale-98"/> */}
          <div className='mt-4 py-4 grid md:grid-cols-2 gap-4 transition hover:scale-110 duration-500'>
            <div className="col-span-1 relative inline-flex items-center md:pl-4 mx-auto" data-aos="">
                  <motion.img 
                    initial={{ opacity:0 }}
                    animate={{ opacity:1 }}
                    transition={{ duration: 2 }}
                    className="h-[20rem] object-contain border-2 border-yellowBorder-100 rounded" 
                    src={andrea} alt="Baker" 
                  />
                <div className="" aria-hidden="true"></div>
            </div>
            <motion.div
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8}}
            >
              <div className='grid items-center max-w-3xl mx-auto text-black'>
                <p className="text-xl text-justify">The Ever Cake is a Tasmanian home business operating to bake delicious and unique cakes for your celebrations, birthdays and baby showers. <br /> Choose one of our cakes in the Cakes section, or ask for customizing your cake and design it according to your event theme.</p>
                <div className='mt-8 sm:px-10 mx-auto'>
                  <Link to="/cakes" className="btn-sm bg-yellowHeader-100 border border-yellowBorder-100 sm:w-[15rem] transition hover:scale-125 duration-500 hover:bg-teal-400">
                    <button 
                        className='text-black'  
                    >
                        ONLINE SHOP
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default EverAbout;