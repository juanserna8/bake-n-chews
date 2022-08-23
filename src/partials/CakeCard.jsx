import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CakeCard = ({cake}) => {
    function truncateString(str, num) {
        if (num <= 90) {
            return str.slice(0, num) + '...'
        };
    }
    
    return (
        <div className='w-full p-2'>
            <figure className='w-full h-[20rem] mb-4'>
                <img src={cake.image} alt={cake.name} className='h-[20rem] w-[24rem] object-cover' />
            </figure>
            <p className='text-black h4 mb-4 text-center'>{cake.name}</p>
            <p className='text-black text-center mb-4'>{truncateString( cake.description,90)}</p>
            <Link to={`/cakes/${cake.id}`} className="text-black font-marcellus px-2 flex items-center transition duration-150 ease-in-out hover:scale-110">
                <button className='w-1/2 md:w-2/3 flex mx-auto mb-2 btn btn-sm bg-yellowHeader-100 border border-yellowBorder-100 hover:bg-teal-400'>
                    View product
                </button>
            </Link>
        </div>
    );
}
 
export default CakeCard;