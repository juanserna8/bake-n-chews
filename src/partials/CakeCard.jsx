import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../reducers/shoppingCartSlice';
import { Link } from 'react-router-dom';

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
        dispatch(addToCart({cake, option: cake.options[selected]}))
        console.log(cake, cake.options[selected])
    }

    return (
        <div className='w-full p-2'>
            <figure className='w-full h-[20rem] mb-4'>
                <img src={cake.image} alt={cake.name} className='h-[20rem] w-[24rem] object-cover' />
            </figure>
            <p className='text-black h4 mb-4 text-center'>{cake.name}</p>
            <p className='text-black text-center mb-4'>{cake.description}</p>
            <button className='w-full flex justify-center mb-2'>
            <Link to={`/cakes/${cake.id}`} className="text-black font-marcellus hover:text-gray-900 dark:text-black dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out">
                <svg className="h-8 w-8 text-gray-400"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="16" y1="15" x2="12" y2="19" />  <line x1="8" y1="15" x2="12" y2="19" />
                </svg>
            </Link>
            </button>
        </div>
    );
}
 
export default CakeCard;