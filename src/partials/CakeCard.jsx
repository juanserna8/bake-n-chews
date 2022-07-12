import React, { useState } from 'react';

const CakeCard = ({cake}) => {
    let [cakePrice, setCakePrice] = useState(cake.price)
    
    return (
        <div className='my-4'>
            <figure className='relative h-0 pb-9/16'>
                <img 
                    className='absolute inset-0 w-full h-full object-cover' 
                    src={cake.image} 
                    alt="genovese pic" 
                />
            </figure>
            <h3 className='h4 font-red-hat-display mb-2'>{ cake.name}</h3>
            <p>{ cake.description}</p>
            <div>{cake.options.map((cakeOption, index) => {
                return (
                    <div className='flex flex-wrap' key={index}>
                        <button 
                        className='btn-sm text-white bg-teal-500 hover:bg-teal-400 mb-4'
                        onClick={() => setCakePrice(cakeOption.price)}  
                        >{`${cakeOption.size} ${cakeOption.people}`}</button>
                    </div>
                )
                })}
            </div>
            <p>${cakePrice}</p>
        </div>
    );
}
 
export default CakeCard;