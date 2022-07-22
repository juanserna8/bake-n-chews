import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Footer from '../partials/Footer';

function Cart() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="h1 font-red-hat-display mb-4">Your cart</h1>
                {/* {<p className="text-xl text-gray-600 dark:text-gray-400">We'll send you a text with a link to download the app.</p>} */}
              </div>

              {/* Items Selected */}
              <div className='flex justify-center'>
                <ul className='grid grid-cols-1 gap-3 mt-4 w-2/3 md:w-1/2 mb-4'>
                  <li className='border-solid border-2 border-blue-400 rounded'>
                    <p className='text-white'>hello</p>
                  </li>
                  <li className='border-solid border-2 border-blue-400 rounded'>
                    <p className='text-white'>Uzmi</p>
                  </li>
                  <li className='border-solid border-2 border-blue-400 rounded'>
                    <p className='text-white'>Lita</p>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Cart;