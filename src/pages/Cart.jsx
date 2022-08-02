import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Footer from '../partials/Footer';


function Cart() {
  const cartSelector = useSelector((state) => state.shoppingCart.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(cartSelector)
  }, [cartSelector])
  
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-generalYellow-100 font-marcellus">

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
                <h2 className="h2 mb-8 text-black">Your cart</h2>
                {/* {<p className="text-xl text-gray-600 dark:text-gray-400">We'll send you a text with a link to download the app.</p>} */}
              </div>

              {/* Items Selected */}
              <div className='flex justify-center'>
                {/* Conditional rendering... If the cart is empty, then show: */}
                {cartSelector.length === 0 && (
                  <p className='h4 text-black mb-8'>Your cart is empty</p>
                )}
                {/* Conditional rendering... If the car has items, then show: */}
                <div className='flex flex-col'>
                  <div className='grid grid-cols-5'>
                    <div className='Empty'></div>
                    <p className='h4 text-black'>Hello</p>
                    <p className='h4 text-black'>Hello</p>
                    <p className='h4 text-black'>Hello</p>
                    <p className='h4 text-black'>Hello</p>
                  </div>
                  {cartSelector.length > 0 && (
                    <ul className='grid grid-cols-1 gap-6 mt-4 w-2/3 mb-4'>
                      {cartSelector.map((cartItem, index) => {
                        return <li key={index} className=''>
                          <div className='grid grid-cols-3 md:grid-cols-5 my-2 max-h-30'>
                            <img src={cartItem.image} className='h-30 mx-4' />
                            <div className="col-span-1 md:col-span-3 grid justify-items-center items-center pl-2">
                                <p className="h4 text-black mb-4">{cartItem.name}</p>
                                <p className="text-black text-xl">${cartItem.price/*cake.price * cartQuantity*/}</p>
                            </div>
                            {/* right side container */}
                            <div className="md:col-start-5 flex flex-col justify-between items-end pr-2">
                              <button 
                                  onClick={() => {
                                      //dispatch(removecake({id}))
                                      console.log('Delete cake')
                                  }}
                                  className='pr-3'
                                  >
                                  <svg className="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
                              </button>
                              <p className="text-black text-xs mt-3 pr-3 font-bold">Qty: {}</p>
                              <div className="nums-container flex flex-row items-center border border-yellowBorder-100 rounded">
                                  <button 
                                      className="text-black px-1"
                                      onClick={() => {
                                          //dispatch(decreaseItemQuantity({id, name}))
                                      }}
                                  >-</button>
                                  <p className="text-black text-xs px-2">{/*cartQuantity*/}X</p>
                                  <button 
                                      className="text-black px-1"
                                      onClick={() => {
                                          //dispatch(addPokemonToCart({id, name}))
                                      }}
                                  >+</button>
                              </div>
                            </div>
                          </div>
                        </li>
                      })}
                    </ul>
                  )}
                </div>
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