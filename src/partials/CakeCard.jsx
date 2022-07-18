import React, { useEffect, useState } from 'react';

const CakeCard = ({cake}) => {
    //Initial state for price, which is the small's size price
    let [cakePrice, setCakePrice] = useState(cake.options[0]?.price)
    const [selected, setSelected] = useState()

    useEffect(() => {
        console.log('Hello Uzmi ***', cakePrice);
    }, [cakePrice]);

    function handleClick(index, price) {
        //All functions triggered by the click have been grouped in handle click
        setSelected(index)
        setCakePrice(price)
    }
     
    return (
        <div className='mb-4'>
            <figure className='relative h-0 mb-4 pb-9/16'>
                <img 
                    className='absolute inset-0 w-full h-full object-cover' 
                    src={cake.image} 
                    alt="genovese pic" 
                />
            </figure>
                <div className='flex flex-col h-full'>
                    <div className='flex justify-between'>
                        <div>
                            <h3 className='h4 font-red-hat-display mb-2'>{ cake.name}</h3>
                            <p className='text-gray-600 dark:text-gray-400 grow'>{ cake.description}</p>
                        </div>
                        <h3 className='h4 font-red-hat-display'>${cakePrice}</h3>
                    </div>
                    <div className='mt-4'>{cake.options.map((cakeOption, index) => {
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
                </div>
        </div>
    );
}
 
export default CakeCard;