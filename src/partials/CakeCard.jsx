import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../reducers/shoppingCartSlice';

const CakeCard = ({cake}) => {
    //Initial state for price, which is the small's size price
    let [cakePrice, setCakePrice] = useState(cake.options[0]?.price)
    const [selected, setSelected] = useState()

    const dispatch = useDispatch();

    function handleClick(index, price) {
        //All functions triggered by the click have been grouped in handle click
        setSelected(index)
        setCakePrice(price)
    }

    const handleAddToCart = (cake) => {
        dispatch(addToCart(cake, cake.options[selected]))
        console.log(cake, cake.options[selected])
    }

    return (
        <div className='mb-4'>
            <figure className='relative mb-4 pb-9/16'>
                <img 
                    className='absolute inset-0 w-full h-[20rem] object-cover' 
                    src={cake.image} 
                    alt="genovese pic" 
                />
            </figure>
                <div className='information-card flex flex-col h-full'>
                    {/*Every section has its identifier I.e. information card */}
                    <div className='title-and-price-card flex justify-between'>
                        <div className='title-container'>
                            <h3 className='h4 font-red-hat-display mb-2'>{ cake.name}</h3>
                            <p className='text-gray-600 dark:text-gray-400 grow'>{ cake.description}</p>
                        </div>
                        <h3 className='h4 font-red-hat-display'>${cakePrice}</h3>
                    </div>
                    <div className='buttons-container flex justify-between mt-4'>
                        <div className='flex flex-col'>{cake.options.map((cakeOption, index) => {
                            return (
                                <div key={index} className='flex justify-start items-center my-2'>
                                    <button 
                                        className={index == selected ? 'btn-sm text-white bg-redComplementary-100' : 'btn-sm text-white bg-teal-500 hover:bg-teal-400'}
                                        onClick={() => handleClick(index, cakeOption.price)}  
                                    >
                                        {`${cakeOption.size} ${cakeOption.people}`}
                                    </button>
                                </div>
                            )
                            })}
                        </div>
                        <button 
                            className='btn-sm text-white bg-teal-500 hover:bg-teal-400 hover:text-black hover:border hover:border-white h-1/5 my-2'
                            onClick={() => handleAddToCart(cake)}
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
        </div>
    );
}
 
export default CakeCard;