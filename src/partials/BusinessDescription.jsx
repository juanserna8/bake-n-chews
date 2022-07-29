import React from 'react';

import Cake from '/images/cake.jpg';
import Lemon from "/images/lemon.jpg";
import AboutImage02 from '../images/about-grid-02.jpg';
import AboutImage04 from '../images/about-grid-04.jpg';
import Vanilla from "/images/vanilla.jpg";
import Carrot from "/images/carrot.jpeg";
import Tres from "/images/personalized/tres-leches.jpeg";

function BusinessDescription() {
  return (
    <section>
      <div className="mx-auto px-4 sm:px-6">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mb-12 text-black">
            <p className="text-xl">The Ever Cake is a Tasmanian home business operating to bake delicious and unique cakes for your celebrations, birthdays and baby showers.</p>
            <p className="text-xl">Choose one of our cakes in the Cakes section, or ask for customizing your cake and design it according to your event theme.</p>
          </div>

          {/* Buttons section */}
          <div className='grid gap-4 sm:flex sm:justify-evenly sm:px-10'>
            <button 
                className='btn-sm text-black bg-yellowHeader-100 border border-yellowBorder-100 sm:w-[15rem]'
                onClick={() => console.log('Go to online shop')}  
            >
                ONLINE SHOP
            </button>

            <button 
                className='btn-sm text-black bg-yellowHeader-100 border border-yellowBorder-100 sm:w-[15rem]'
                onClick={() => console.log('Go to online shop')}  
            >
                CUSTOMIZE YOUR CAKE
            </button>
          </div>

          {/* Images grid */}
          <div className="grid grid-cols-12 gap-3 mt-12 md:mt-20" data-aos-id-gallery>
            <img className="col-span-6 md:col-span-4 object-cover h-[16.5rem]" src={Cake} width="360" height="270" alt="About grid 01" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" />
            <img className="col-span-6 md:col-span-3 object-cover h-[16.5rem]" src={AboutImage02} width="270" height="270" alt="About grid 02" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="100" />
            <img className="col-span-6 md:col-span-5 object-cover h-[16.5rem]" src={Lemon} width="450" height="270" alt="About grid 03" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="200" />
            <img className="col-span-6 md:col-span-3 object-cover h-[16.5rem]" src={AboutImage04} width="270" height="270" alt="About grid 04" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="300" />
            <img className="col-span-6 md:col-span-5 object-cover h-[16.5rem]" src={Carrot} width="450" height="270" alt="About grid 05" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="400" />
            <img className="col-span-6 md:col-span-4 object-cover h-[16.5rem]" src={Tres} width="360" height="270" alt="About grid 06" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="500" />
          </div>

      </div>
    </section>
  );
}

export default BusinessDescription;
