import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Footer from '../partials/Footer';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../reducers/shoppingCartSlice';


function Cart() {
  const cartSelector = useSelector((state) => state.shoppingCart.cart)
  const dispatch = useDispatch()

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem))
  }

  const handleDecreaseQuantity = (cartItem) => {
    dispatch(decreaseQuantity(cartItem))
  }

  const handleIncreaseCart = (cartItem) => {
    dispatch(increaseQuantity(cartItem))
  }
  
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
              <div className="max-w-3xl mx-auto text-center md:pb-16">
                <h2 className="h2 mb-8 text-black">Your cart</h2>
              </div>

              {/* Items Selected */}
              <div className='flex justify-center'>
                {/* Conditional rendering... If the cart is empty, then show: */}
                {cartSelector.length === 0 && (
                  <p className='h4 text-black mb-8'>Your cart is empty</p>
                )}
                {/* Conditional rendering... If the car has items, then show: */}
                <div className='flex flex-col'>
                  {cartSelector.length > 0 && (
                    
                    <div>

                      {/* Desktop view */}
                      {/* Titles grid */}
                      <div className='hidden md:grid grid-cols-12 gap-6 mb-4'>
                        <div className="col-span-2">{/* Emtpy div */}</div>
                        <p className="col-span-3 h4 text-black text-center">Product</p>
                        <p className="col-span-2 h4 text-black text-center">Price</p>
                        <p className="col-span-2 h4 text-black text-center">Quantity</p>
                        <p className="col-span-2 h4 text-black text-center">Subtotal</p>
                      </div>

                      {/* Products grid */}
                      <ul className='grid grid-cols-1 gap-6 mt-4 mb-4 pt-4 border-t-2'>
                        {cartSelector.map((cartItem, index) => {
                          return <li key={index} className=''>
                             {/* Desktop view */}
                            <div className='hidden md:grid md:grid-cols-12 md:gap-6 my-2 max-h-30'>
                              <figure className="col-span-2">
                                <img src={cartItem.image} className='p-2 h-[10rem]' />
                              </figure>
                              <div className="col-span-1 md:col-span-3 grid justify-items-center items-center pl-2">
                                  <p className="text-black text-2xl text-center self-end">{cartItem.name}</p>
                                  <p className="text-gray-500 text-xl text-center self-start">{cartItem.size} ({cartItem.people})</p>
                              </div>
                              <div className="col-span-2 hidden md:flex justify-center items-center">
                                  <p className="text-black text-xl text-center">${cartItem.price/*cake.price * cartQuantity*/}</p>
                              </div>
                              {/* Quantity's div */}
                              <div className="col-span-2 flex justify-center items-center">
                                <div className="nums-container flex flex-row items-center border border-yellowBorder-100 rounded">
                                    <button 
                                        className="text-black px-1"
                                        onClick={() => {
                                          handleDecreaseQuantity(cartItem)
                                        }}
                                    >-</button>
                                    <p className="text-black text-xs px-2">{cartItem.cartQuantity}</p>
                                    <button 
                                        className="text-black px-1"
                                        onClick={() => {
                                            handleIncreaseCart(cartItem)
                                        }}
                                    >+</button>
                                </div>
                              </div>
                              <div className="col-span-2 flex justify-center items-center">
                                  <p className="text-black text-xl text-center">${cartItem.price * cartItem.cartQuantity}</p>
                              </div>
                              <div className="col-span-1 flex justify-end items-center">
                                <button 
                                      onClick={() => {
                                          //dispatch(removecake({id}))
                                          console.log('Delete cake')
                                          handleRemoveFromCart(cartItem)
                                      }}
                                      >
                                      <svg className="h-6 w-6 text-gray-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
                                  </button>
                              </div>
                            </div>

                            {/* Mobile view */}
                            <div className='md:hidden grid grid-cols-6 gap-4'>
                              
                              {/* First column */}
                              <div className="col-span-2 flex flex-col">
                                <figure>
                                  <img src={cartItem.image} className='p-2 max-h-[10rem]' />
                                </figure>
                                <button 
                                      onClick={() => {
                                          //dispatch(removecake({id}))
                                          console.log('Delete cake')
                                      }}
                                      className='mx-auto mt-2'
                                      >
                                      <svg className="h-6 w-6 text-gray-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
                                  </button>
                              </div>
                              
                              {/* Second column */}
                              <div className="col-span-4 flex flex-col">
                                <p className="text-black text-2xl text-center pt-2">{cartItem.name}</p>
                                <p className="text-gray-500 text-l text-center pt-2">{cartItem.size} ({cartItem.people})</p>
                                {/* Price and qty */}
                                <div className="flex justify-between mt-4">
                                  <p className="text-black text-xl text-center pt-2 w-20 ml-4">${cartItem.price}</p>
                                  <div className="flex flex-row items-center border border-yellowBorder-100 rounded w-min mt-2 mx-auto p-1">
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
                            </div>
                          </li>
                        })}
                      </ul>

                    </div>
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