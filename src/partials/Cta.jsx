import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { API } from 'aws-amplify';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from 'react';


function Cta() {

  const url = '';

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState("")
  const [portions, setPortions] = useState("")
  const [flavour, setFlavour] = useState("")
  const [message, setMessage] = useState("")

  // Date-picker 
  const currentDate = new Date()
  // The order must be with min. 5 days in advance
  const minDate = currentDate.setDate(currentDate.getDate() + 5)

  // Convert the date to a string and then slice what you need to send to the customer
  const dateToStr = date.toString("MMMM yyyy").slice(0, 15)

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await API.post('contacts','/create', {
        body: {
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          email: email,
          date: dateToStr,
          portions: portions,
          flavour: flavour,
          message: message
        },
      });
      if (res.status === 200) {
        setFirstName('');
        setLastName('');
        setPhone('');
        setEmail('');
        setDate('');
        setPortions('');
        setFlavour('');
        setMessage('');
        toast("Success, your request has been sent", {
          type: 'success'
        })
      } else {
        toast("Failure, your request couldn't be processed", {
          type: 'error'
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* CTA box */}
        <div className="py-10 px-8 md:py-16 md:px-12">

          {/* Background illustration */}
          <div className="absolute inset-0 left-auto  pointer-events-none" aria-hidden="true">
            <svg className="h-full" width="400" height="232" viewBox="0 0 400 232" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="box-gr-a">
                  <stop stopColor="#667EEA" offset="0%" />
                  <stop stopColor="#667EEA" stopOpacity="0" offset="100%" />
                </radialGradient>
                <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="box-gr-b">
                  <stop stopColor="#3ABAB4" offset="0%" />
                  <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
                </radialGradient>
              </defs>
              <g transform="translate(-85 -369)" fill="none" fillRule="evenodd">
                <circle fillOpacity=".16" fill="url(#box-gr-a)" cx="413" cy="688" r="240" />
                <circle fillOpacity=".24" fill="url(#box-gr-b)" cx="400" cy="400" r="400" />
              </g>
            </svg>
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-center">

            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <p className="h3 text-black text-center">Send us a message</p>
            </div>

            {/* CTA form */}
              
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label className="block text-black text-sm mb-1" htmlFor="first-name">First Name <span className="text-red-600">*</span></label>
                    <input onChange={(e) => setFirstName(e.target.value)} value={firstName} id="first-name" type="text" className="form-input w-full text-white" placeholder="First name" required />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block text-black text-sm mb-1" htmlFor="last-name">Last Name <span className="text-red-600">*</span></label>
                    <input onChange={(e) => setLastName(e.target.value)} value={lastName} id="last-name" type="text" className="form-input w-full text-white" placeholder="Last name" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full px-3">
                    <label className="block text-black text-sm mb-1" htmlFor="phone">Phone Number <span className="text-red-600">*</span></label>
                    <input onChange={(e) => setPhone(e.target.value)} value={phone} id="phone" type="tel" className="form-input w-full text-white" placeholder="Phone number" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full px-3">
                    <label className="block text-black text-sm mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} id="email" type="email" className="form-input w-full text-white" placeholder="Email address" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full px-3">
                    <label className="block text-black text-sm mb-1" htmlFor="date">When do you need the cake? (min. 5 days of notice) <span className="text-red-600">*</span></label>
                    {/* <input onChange={(e) => setDate(e.target.value)} value={date} id="date" type="date" className="form-input w-full text-white" placeholder="Enter delivery date" required /> */}
                    <DatePicker 
                      placeholderText='Enter date'
                      selected={date}
                      onChange={date => setDate(date)}
                      minDate={minDate}
                      dateFormat="dd/MM/yyyy"
                      className='form-input w-full text-white'
                      required
                      type="date"
                      popperPlacement="top-start"
                    >
                      <div style={{ color: "red", textAlign: "center" }}>Select your delivery date!</div>
                    </DatePicker>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full px-3">
                    <label className="block text-black text-sm mb-1" htmlFor="portions">Number of portions <span className="text-red-600">*</span></label>
                    <input onChange={(e) => setPortions(e.target.value)} value={portions} id="portions" type="number" className="form-input w-full text-white" placeholder="Number of portions (min 15)" required />
                    {(portions != "" && portions < 15) && (
                      <p className='text-red-500'>Please select a minimum of 15 portions</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full px-3">
                    <label className="block text-black text-sm mb-1" htmlFor="flavour">Flavour <span className="text-red-600">*</span></label>
                    <input onChange={(e) => setFlavour(e.target.value)} value={flavour} id="flavour" type="text" className="form-input w-full text-white" placeholder="Flavour of the cake" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full px-3">
                      <label className="block text-black text-sm" htmlFor="message">Details <span className="text-red-600">*</span></label>
                    <textarea onChange={(e) => setMessage(e.target.value)} value={message} id="message" rows="4" className="form-textarea w-full text-white" placeholder="How would you wish your next cake be like?
                    Please specify the event theme, fruits and ingredients wished, and additional details."></textarea>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button className="btn btn-sm text-black w-full flex items-center bg-yellowHeader-100 border border-yellowBorder-100 hover:bg-teal-400 hover:scale-110">
                      <span>Get a free quote</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
              
              {/* Success message */}
              {/* <p className="text-center lg:text-left lg:absolute mt-2 opacity-75 text-sm">Thanks for subscribing!</p> */}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Cta;
