import React, { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { API } from 'aws-amplify';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Footer from '../partials/Footer';


function Checkout(token) {
  
  const cartSelector = useSelector((state) => state.shoppingCart.cart)
  const cartState = useSelector((state) => state.shoppingCart)

  // transaction fee
  const transF = (cartState.cartTotalAmount * 0.0175) + 0.3
  const total = cartState.cartTotalAmount + transF

  
  // The following lines of code is to send the stripe products object to the backend
  const products = cartSelector.map((cartItem, index) => {
    return {
      name: cartItem.name,
      price: cartItem.price,
      description: cartItem.size,
      quantity: cartItem.cartQuantity
    }
  })

  const productNames = products.map((product) => {
    return product.name
  })

  const productNamesString = productNames.toString();

  const productDescriptions = products.map((product) => {
    return product.name + ' - ' + product.description + ` (x ${product.quantity.toString()})`
  })

  const productDescriptionsString = productDescriptions.join(', ');

  const stripeProducts = {
    name: productNamesString,
    price: total,
    description: productDescriptionsString
  }

  async function handleToken(token, addresses) {
    console.log({ token, addresses })
    const response = await API.post('payments', '/register', {
      body: {
        token,
        stripeProducts,
        date: dateToStr
      }
    })

    console.log(response)

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

  // Don't show the style of stripe in order to maintain our website's style
  const stripeStyle = {display: 'none'}


  // Date-picker 
  const [selectedDate, setSelectedDay] = useState(null)
  const currentDate = new Date()
  const minDate = currentDate.setDate(currentDate.getDate() + 5)

  const dateToStr = selectedDate?.toString("MMMM yyyy").slice(0, 15)

  // useEffect(() => {
  //   console.log(dateToStr)
  // }, [selectedDate])

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-generalYellow-100 font-marcellus">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        <section className='relative pb-20'>
          <div className="max-w-6xl md:w-4/5 mx-auto px-6 md:px-6 relative ">
            {/* max-w-6xl mx-auto px-4 sm:px-6 pt-10 */}
            <div className="pt-32 md:pt-40 md:pb-0 border-b-2 border-yellowBorder-100">
              <div className="max-w-3xl mx-auto text-center md:pb-16">
                <motion.h2 
                  className="h2 mb-8 text-black"
                  initial={{ scale: 1.5 }}
                  animate={{ scale: 1}}
                  transition={{ duration: 0.7}}  
                >Checkout Summary</motion.h2>
              </div>

              {/* Desktop Titles */}
              <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8}}
              >
              <div className='grid grid-cols-2'>
                <p className="col-span-1 h4 text-black text-center">Product</p>
                <p className="col-span-1 h4 text-black text-center">Subtotal</p>
              </div>

              <ul className='grid grid-cols-1 my-8'>
                {cartSelector.map((cartItem, index) => {
                  return <li key={index}>
                    {/* Desktop products */}
                    <div className='grid grid-cols-2 my-2 max-h-30'>
                      <div className="col-span-1 grid justify-items-center items-center pl-2">
                          <p className="hidden md:flex text-black text-2xl text-center self-end">{cartItem.cartQuantity} x {cartItem.name} {cartItem.size} ({cartItem.people})</p>
                          <p className="md:hidden text-black text-2xl text-center self-end">{cartItem.cartQuantity} x {cartItem.name}</p>
                          <p className="md:hidden text-gray-500 text-md text-center">{cartItem.size} ({cartItem.people})</p>
                      </div>
                      <div className="col-span-1 grid justify-items-center items-center pl-2">
                          <p className="text-black text-2xl text-center">${cartItem.price * cartItem.cartQuantity}</p>
                      </div>
                    </div>
                  </li>
                })}
              </ul>

              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8}}
          >

          <div className='mx-auto w-4/5 py-2 grid grid-cols-2 border-b border-yellowBorder-100'>
            <p className="col-span-1 h4 text-black text-center">Subtotal</p>
            <p className="text-black text-2xl text-center self-end">${cartState.cartTotalAmount}</p>
          </div>

          <div className='mx-auto w-4/5 py-2 grid grid-cols-2 items-center'>
            <p className="col-span-1 h4 text-black text-center">Transaction fee</p>
            <p className="text-black text-2xl text-center">${transF.toFixed(2)}</p>
          </div>

          <div className='mx-auto w-4/5 grid grid-cols-2 items-center'>
            <p className="col-span-1 h4 text-black text-center">Total (including GST)</p>
            <p className="text-black text-2xl text-center">${total.toFixed(2)}</p>
          </div>

          <div className='text-center mt-14 grid grid-cols-2'>
            <div className='col-span-2 md:col-span-1 lg:ml-8'>
              <p className="col-span-1 h4 text-black text-center">Select a delivery date</p>
            </div>
            <div className='col-span-2 md:col-span-1 md:-ml-16 mt-4 md:mt-0 md:mr-4' style={{ position: 'relative'}}>
              <DatePicker 
                placeholderText='Enter date'
                selected={selectedDate}
                onChange={date => setSelectedDay(date)}
                minDate={minDate}
                dateFormat="dd/MM/yyyy"
                className='text-black text-center'
                popperPlacement="top-start"
                popperModifiers={[
                  // {
                  //   name: "offset",
                  //   options: {
                  //     offset: [5, 10],
                  //   },
                  // },
                  // {
                  //   name: "preventOverflow",
                  //   options: {
                  //     rootBoundary: "viewport",
                  //     tether: false,
                  //     altAxis: true,
                  //   },
                  // },
                ]}
              >
                <div style={{ color: "red" }}>Select your delivery date!</div>
              </DatePicker>
            </div>
          </div>

          {/* Stripe btn */}
          {selectedDate !== null && (
          <div className='mt-12 text-center'>
            <StripeCheckout 
              stripeKey='pk_test_51La6UQAH1T8Fy7RT72W0uXcsFpg8yOyl4uVAekuHgMvnlH3FoohJ9AIZyOOknDXIQG6xWgw4ReVYlbloEa1gOMuD00tqTTVjMy'
              token={handleToken}
              amount={stripeProducts.price * 100}
              name={stripeProducts.name}
              style={stripeStyle}
            >
              <button className='btn btn-sm bg-yellowHeader-100 border border-yellowBorder-100 text-black font-marcellus md:hover:scale-125 md:hover:bg-teal-400'>
                Pay with card
              </button>
            </StripeCheckout>
          </div>
          )}

          </motion.div>
        </section>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Checkout;