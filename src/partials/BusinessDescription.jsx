import React from 'react';

import AboutImage01 from '../images/about-grid-01.jpg';
import AboutImage02 from '../images/about-grid-02.jpg';
import AboutImage03 from '../images/about-grid-03.jpg';
import AboutImage04 from '../images/about-grid-04.jpg';
import AboutImage05 from '../images/about-grid-05.jpg';
import AboutImage06 from '../images/about-grid-06.jpg';

function BusinessDescription() {
  return (
    <section>
      <div className="max-w-2xl mx-auto px-4 sm:px-6">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-600 dark:text-gray-400">The Ever Cake is a Tasmanian home business operating to bake delicious and unique cakes for your celebrations, birthdays and baby showers.</p>
            <p className="text-xl text-gray-600 dark:text-gray-400">Choose one of our cakes in the Cakes section, or ask for customizing your cake and design it according to your event theme.</p>
          </div>

          <div className='flex justify-between'>
            <button 
                className='btn-sm text-white bg-redComplementary-100'
                onClick={() => console.log('Go to online shop')}  
            >
                ONLINE SHOP
            </button>

            <button 
                className='btn-sm text-white bg-redComplementary-100'
                onClick={() => console.log('Go to online shop')}  
            >
                CUSTOMIZE YOUR CAKE
            </button>
          </div>

          {/* Images grid */}
          <div className="grid grid-cols-12 gap-3 mt-12 md:mt-20" data-aos-id-gallery>
            <img className="col-span-4" src={AboutImage01} width="360" height="270" alt="About grid 01" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" />
            <img className="col-span-3" src={AboutImage02} width="270" height="270" alt="About grid 02" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="100" />
            <img className="col-span-5" src={AboutImage03} width="450" height="270" alt="About grid 03" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="200" />
            <img className="col-span-3" src={AboutImage04} width="270" height="270" alt="About grid 04" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="300" />
            <img className="col-span-5" src={AboutImage05} width="450" height="270" alt="About grid 05" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="400" />
            <img className="col-span-4" src={AboutImage06} width="360" height="270" alt="About grid 06" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="500" />
          </div>

      </div>
    </section>
  );
}

export default BusinessDescription;
