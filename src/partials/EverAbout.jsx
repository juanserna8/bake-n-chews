import React from 'react';
import { motion } from 'framer-motion';

import logo from '/images/logo.png'

function EverAbout() {
  return (
    <section className="relative">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10 md:pt-40 md:pb-10">
          <div className="text-center">
            <div className="relative flex justify-center items-center">
              <div className="relative inline-flex items-start" data-aos="">
                  <motion.img 
                    initial={{ opacity:0 }}
                    animate={{ opacity:1 }}
                    transition={{ duration: 2 }}
                    className="h-[20rem] object-contain animate-beat" 
                    src={logo} alt="About hero" 
                  />
                <div className="" aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default EverAbout;