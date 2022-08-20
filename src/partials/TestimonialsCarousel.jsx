import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

function TestimonialsCarousel() {

  const [active, setActive] = useState(0);
  const [autorotate, setAutorotate] = useState(true);
  const [autorotateTiming] = useState(7000);
  const [items] = useState([
    {
      quote: '“The personalized carrot cake that Andrea baked for our baby shower was delicious!... The decoration matched perfectly with our event theme and everyone loved its flavour.“',
      name: 'Nao Koseki',
      link: '#0'
    },
    {
      quote: '“I loved the way Andrea uses the different colours, they all make it look overall the perfect cake“',
      name: 'Pia Poser',
      link: '#0'
    },
    {
      quote: '“First time trying a tres leches cake. It is a real delight. Must try!“',
      name: 'Lieth',
      link: '#0'
    }
  ]);

  const testimonials = useRef(null);

  const stopAutorotate = () => {
    setAutorotate(null);
  }

  const heightFix = () => {
    if (testimonials.current.children[active]) {
      testimonials.current.style.height = testimonials.current.children[active].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    if (!autorotate) return
    const interval = setInterval(() => {
      setActive(active + 1 === items.length ? 0 : active => active + 1)
    }, autorotateTiming)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, autorotate])

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-6 md:pb-8">

          {/* Carousel area */}
          <div className="max-w-5xl mx-auto">

            {/* Carousel */}
            <div className="relative" data-aos="fade-down">

              {/* Testimonials */}
              <div className="relative flex items-start z-10 transition-all duration-300 ease-in-out" ref={testimonials}>

                {items.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    appear={true}
                    className="w-full text-center px-12 py-8 mx-4 md:mx-0"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterStart="opacity-0 -translate-y-8"
                    enterEnd="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveStart="opacity-100 translate-y-0"
                    leaveEnd="opacity-0 translate-y-8"
                  >

                    <blockquote className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-400 mb-4">{item.quote}</blockquote>
                    <div className="font-medium text-lg">
                      <cite className="not-italic text-gray-800">{item.name}</cite>
                    </div>

                  </Transition>
                ))}

              </div>

              {/* Skewed borders */}
              <div className="absolute inset-0 transform -skew-x-3 border border-gray-200 dark:border-gray-800 pointer-events-none" aria-hidden="true"></div>

              {/* Arrows */}
              <div className="absolute inset-0 flex items-center justify-between">
                <button
                  className="relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group transform -translate-x-2 md:-translate-x-1/2 bg-teal-500 hover:bg-teal-400 dark:bg-gray-800 dark:hover:bg-teal-500 dark:hover:bg-opacity-25 transition duration-150 ease-in-out"
                  onClick={() => { setActive(active === 0 ? items.length - 1 : active - 1); stopAutorotate(); }}
                >
                  <span className="sr-only">Previous</span>
                  <svg className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-teal-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
                  </svg>
                </button>
                <button
                  className="relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group transform translate-x-2 md:translate-x-1/2 bg-teal-500 hover:bg-teal-400 dark:bg-gray-800 dark:hover:bg-teal-500 dark:hover:bg-opacity-25 transition duration-150 ease-in-out"
                  onClick={() => { setActive(active === items.length - 1 ? 0 : active + 1); stopAutorotate(); }}
                >
                  <span className="sr-only">Next</span>
                  <svg className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-teal-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
                  </svg>
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
      <h2 className='h3 text-black text-center'>Customer reviews</h2>
    </section>
  );
}

export default TestimonialsCarousel;