import React, { useEffect, useState } from 'react';

const CakeCard = ({cake}) => {
    let [cakePrice, setCakePrice] = useState(cake.options[0]?.price)

    useEffect(() => {
        console.log('Hello Uzmi ***', cakePrice);
    }, [cakePrice]);

    return (
        <div className='my-4'>
            <figure className='relative h-0 mb-4 pb-9/16'>
                <img 
                    className='absolute inset-0 w-full h-full object-cover' 
                    src={cake.image} 
                    alt="genovese pic" 
                />
            </figure>
            <div className='flex justify-between'>
                <div>
                    <h3 className='h4 font-red-hat-display mb-2'>{ cake.name}</h3>
                    <p className='text-gray-600 dark:text-gray-400 grow'>{ cake.description}</p>
                    <div className='mt-4'>{cake.options.map((cakeOption, index) => {
                        return (
                            <div key={index}>
                                <button 
                                    className='btn-sm text-white bg-teal-500 hover:bg-teal-400 mb-4'
                                    onClick={() => {setCakePrice(cakeOption.price)
                                    }}  
                                >
                                    {`${cakeOption.size} ${cakeOption.people}`}
                                </button>

                            </div>
                        )
                        })}
                    </div>
                </div>
                <h3 className='h4 font-red-hat-display'>${cakePrice}</h3>
            </div>
        </div>
    );
}
 
export default CakeCard;