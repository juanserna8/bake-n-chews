import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import cakes from '../assets/json/cakes.json'
import NewsImage01 from '../images/news-01.jpg';
import NewsImage02 from '../images/news-02.jpg';
import NewsImage03 from '../images/news-03.jpg';
import NewsImage04 from '../images/news-04.jpg';
import NewsImage05 from '../images/news-05.jpg';
import NewsImage06 from '../images/news-06.jpg';
import NewsAuthor01 from '../images/news-author-01.jpg';
import NewsAuthor03 from '../images/news-author-03.jpg';
import NewsAuthor04 from '../images/news-author-04.jpg';
import NewsAuthor05 from '../images/news-author-05.jpg';
import NewsAuthor06 from '../images/news-author-06.jpg';
import CakeCard from './CakeCard';

function CakeList() {
  
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="lg:flex lg:justify-between">

            {/* Main content */}
            <div className="lg:grow" data-aos="fade-down" data-aos-delay="200">

              {/* Articles container */}
              <div className="">

                {/* 1st article */}
                
                  <header>
                    {
                      cakes && cakes.map((cake, index) => {
                        return(
                          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 sm:mx-auto" key={index}>
                            <CakeCard key={index} cake={cake} className="" />
                          </div>
                        )
                      })
                    }
                   
                  </header>
            
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default CakeList;