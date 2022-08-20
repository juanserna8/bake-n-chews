import React, { useEffect, useState } from 'react';
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
        setSelected(cakeObject.options[0]?.id)
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
                                    <figure className='md:col-span-1 relative mb-[6rem] pb-9/16 self-center'>
                                        <img 
                                            className='absolute mx-auto inset-0 w-[20rem] h-[16.5rem] object-cover' 
                                            src={cake?.image} 
                                            alt="genovese pic" 
                                        />
                                    </figure>
                                    {/* Cake information */}
                                    <div className="text-center pt-4 md:pt-0 px-2">
                                        <p className="h3 text-black text-center mb-4 md:mb-8">{cake?.name}</p>
                                        {/* Price and add to cart */}
                                        <div className='flex flex-col md:flex-row md:justify-evenly mb-4'>
                                            <p className='h4 text-black mb-4 md:mb-0'>${cakePrice}</p>
                                            <button 
                                                className='btn btn-sm text-black bg-yellowHeader-100 border border-yellowBorder-100 flex items-center'
                                                onClick={() => handleAddToCart(cake)}
                                            >
                                                Add to cart
                                            </button>
                                        </div>
                                        
                                        <p className='text-black'>{cake.description}</p>
                                       
                                        {/* Price buttons */}
                                        <div className='mt-4'>
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
                                        </div>
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