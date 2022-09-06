import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { toast } from 'react-toastify';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Footer from '../partials/Footer';


function Checkout(token) {
  
  const [product] = useState({
    name: 'Uchubas',
    price: 500,
    description: 'Fresh fruit'
  })
  
  async function handleToken(token, addresses) {
    //console.log({ token, addresses })
    const response = await axios.post('http://localhost:5000/checkout', {
      token,
      product
    })

    console.log(response.status)

    if(response.status === 200) {
      toast("Success Payment is completed", {
        type: 'success'
      })
    } else {
      toast("Failure Payment is not completed", {
        type: 'error'
      })
    }
  }

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

              <button 
                      className="btn text-white bg-teal-500 hover:bg-teal-400 w-full flex items-center">
                      <span>Request code</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
              </button>
              <StripeCheckout 
                stripeKey='pk_test_51La6UQAH1T8Fy7RT72W0uXcsFpg8yOyl4uVAekuHgMvnlH3FoohJ9AIZyOOknDXIQG6xWgw4ReVYlbloEa1gOMuD00tqTTVjMy'
                token={handleToken}
                amount={product.price * 100}
                name={product.name}
              />
            </div>
          </div>
        </section>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Checkout;