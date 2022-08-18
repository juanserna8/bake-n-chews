import React from 'react';
import { Link } from 'react-router-dom';

import Celebration from '/images/celebration.jpg';
import Slice from '/images/slice.jpg'
import Stand from "/images/stand.jpg";
import Coffee from "/images/coffee.jpg";
import Wood from "/images/wood.jpg"
import Bake from "/images/bake.jpg"

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
            <Link to="/cakes" className="btn-sm bg-yellowHeader-100 border border-yellowBorder-100 sm:w-[15rem]">
              <button 
                  className='text-black'  
              >
                  ONLINE SHOP
              </button>
            </Link>
            <Link to="/contact" className="btn-sm bg-yellowHeader-100 border border-yellowBorder-100 sm:w-[15rem]">
            <button 
                className=' text-black'  
            >
                CUSTOMIZE YOUR CAKE
            </button>
            </Link>
          </div>

          {/* Images grid */}
          <div className="grid grid-cols-12 gap-3 mt-12 md:mt-20" data-aos-id-gallery>
            <img className="col-span-6 md:col-span-4 object-cover h-[16.5rem]" src={Bake} width="360" height="270" alt="About grid 01" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" />
            <img className="col-span-6 md:col-span-3 object-cover h-[16.5rem]" src={Slice} width="270" height="270" alt="About grid 02" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="100" />
            <img className="col-span-6 md:col-span-5 object-cover h-[16.5rem]" src={Stand} width="450" height="270" alt="About grid 03" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="200" />
            <img className="col-span-6 md:col-span-3 object-cover h-[16.5rem]" src={Coffee} width="270" height="270" alt="About grid 04" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="300" />
            <img className="col-span-6 md:col-span-4 object-cover h-[16.5rem]" src={Celebration} width="360" height="270" alt="About grid 06" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="500" />
            <img className="col-span-6 md:col-span-5 object-cover h-[16.5rem]" src={Wood} width="450" height="270" alt="About grid 05" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="400" />
          </div>

      </div>
    </section>
  );
}

export default BusinessDescription;
