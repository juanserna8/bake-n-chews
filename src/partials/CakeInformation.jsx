import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../reducers/shoppingCartSlice';
import cakes from '../assets/json/cakes.json'
import Header from './Header';
import Footer from './Footer';

const CakeInformation = () => {
    //Initial state for price, which is the small's size price
    // let [cakePrice, setCakePrice] = useState(cake.options[0]?.price)
    const [cake, setCake] = useState()
    let [cakePrice, setCakePrice] = useState()
    const [selected, setSelected] = useState()

    const dispatch = useDispatch();

    // This function is being used to select the size of the cake and therefore update the price, according
    // to the option selected
    function handleClick(index, price) {
        setSelected(index)
        setCakePrice(price)
    }

    const { cakeId } = useParams()

    useEffect((cake) => {
        // const cakeArray = cakes.filter(cake => cake.id == cakeId)
        // console.log(cakeArray)
        const cakeObject = cakes.find(cake => cake.id == cakeId)
        setCake(cakeObject)
        setCakePrice(cakeObject.options[0]?.price)
        setSelected(0)
    }, [])

    // This function is used to add items to the cart
    const handleAddToCart = (cake) => {
        dispatch(addToCart({cake, option: cake.options[selected]}))
        console.log('hello uzmi', cake, cake.options[selected])
    }


    return (
        <div className='flex flex-col min-h-screen overflow-hidden bg-generalYellow-100 font-marcellus'>

            <Header />
            
            <main className='grow mb-8 mt-[8rem]'>
                {cake && (
                    <section className='mb-4 h-full'>
                        <div className="max-w-6xl mx-auto px-4 sm:px-6">
                            

                            {/* Body section */}
                            <div className="mt-[2rem] md:mt-[4rem]">
                                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8 justify-center md:w-2/3 mx-auto'>
                                    <motion.figure 
                                        initial={{ x: '-100vw' }}
                                        animate={{ x: 0 }}
                                        transition={{ duration: 0.8}}
                                        className='md:col-span-1 relative mb-[6rem] pb-9/16 self-center'
                                    >
                                        <img 
                                            className='absolute mx-auto inset-0 w-[20rem] h-[16.5rem] object-cover' 
                                            src={cake?.image} 
                                            alt="genovese pic" 
                                        />
                                    </motion.figure>
                                    {/* Cake information */}
                                    <div className="text-center pt-4 md:pt-0 px-2">
                                        <motion.p 
                                            initial={{ scale: 1.5 }}
                                            animate={{ scale: 1}}
                                            transition={{ duration: 0.7}}
                                            className="h3 text-black text-center mb-4 md:mb-8"
                                        >{cake?.name}</motion.p>
                                        {/* Price and add to cart */}
                                        <motion.div 
                                            initial={{ x: '-100vw' }}
                                            animate={{ x: 0 }}
                                            transition={{ duration: 0.8}}
                                            className='flex flex-col md:flex-row md:justify-evenly mb-4'
                                        >
                                            <p className='h4 text-black mb-4 md:mb-0'>${cakePrice}</p>
                                            <button 
                                                className='btn btn-sm text-black bg-yellowHeader-100 border border-yellowBorder-100 flex items-center'
                                                onClick={() => handleAddToCart(cake)}
                                            >
                                                Add to cart
                                            </button>
                                        </motion.div>
                                        
                                        <motion.p 
                                            initial={{ x: '-100vw' }}
                                            animate={{ x: 0 }}
                                            transition={{ duration: 0.8}}
                                            className='text-black'
                                        >
                                            {cake.description}
                                        </motion.p>
                                       
                                        {/* Price buttons */}
                                        <motion.div 
                                            initial={{ scale: 1.5 }}
                                            animate={{ scale: 1}}
                                            transition={{ duration: 0.7}}
                                            className='mt-4'
                                        >
                                            {cake.options.map((cakeOption, index) => {
                                                return (
                                                    <div className='py-2' key={index}>
                                                        <button 
                                                            className={index == selected ? 'btn-sm text-white bg-redComplementary-100 w-full flex items-center' : 'btn btn-sm text-black bg-yellowHeader-100 border border-yellowBorder-100 w-full flex items-center'}
                                                            onClick={() => handleClick(index, cakeOption.price)}
                                                        >
                                                            {`${cakeOption.size} ${cakeOption.people}`}
                                                        </button>
                                                    </div>
                                                )
                                            })}
                                        </motion.div>

                                        <motion.button 
                                        initial={{ x: '100vw' }}
                                        animate={{ x: 0 }}
                                        transition={{ duration: 0.5}}
                                        className='btn btn-sm text-gray-400 w-full flex items-center'
                                        >
                                            <Link className='flex items-center' to={'/cakes'}>
                                                <svg className="h-8 w-8 text-gray-400 mr-2"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="5" y1="12" x2="9" y2="16" />  <line x1="5" y1="12" x2="9" y2="8" /></svg>
                                                Continue shopping
                                            </Link>
                                        </motion.button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                )
                || <p>Loading... </p>
                }
            </main>
            
            <Footer />

        </div>
    );
}
 
export default CakeInformation;