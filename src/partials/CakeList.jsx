import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

import cakes from '../assets/json/cakes.json'
import CakeCard from './CakeCard';

function CakeList() {
  
  return (
    <section className='mt-[8rem]'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10">

        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1}}
          transition={{ duration: 0.7}}
          className="text-center"
        >
            <h2 className="h2 text-black">Our Cakes</h2>
        </motion.div>

        <motion.div 
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8}}
          className="mt-[4rem] md:mt-[6rem]"
        >
          <div className="lg:flex lg:justify-between">

            {/* Main content */}
            <div className="lg:grow" data-aos="fade-down" data-aos-delay="200">

              {/* Articles container */}
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 sm:mx-auto">
                
                    {
                      cakes && cakes.map((cake, index) => {
                        return(
                          <div className="sm:mx-auto border border-gray-400 my-2" key={index}>
                            <CakeCard key={index} cake={cake} />
                          </div>
                        )
                      })
                    }
                   
            
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CakeList;