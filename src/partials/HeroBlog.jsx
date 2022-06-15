import React from 'react';
import { Link } from 'react-router-dom';

import bake from '../images/bake.jpg'
import HeroBg from '../images/hero-bg.jpg';
import AuthorImage01 from '../images/news-author-01.jpg';

function HeroBlog() {
  return (
    <section className="relative">

      {/* Background image */}
      <div className="absolute inset-0 h-128 pt-16 box-content -z-1">
        <img className="absolute inset-0 w-full h-full object-cover opacity-25" src={bake} width="1440" height="577" alt="About" />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-16">

          {/* Featured article */}
          <div className="max-w-3xl" data-aos="fade-down">
            <article>
              <header>
                {/* Title and excerpt */}
                <div className="text-center md:text-left">
                  <Link to="/blog-post">
                    <h1 className="h1 font-red-hat-display mb-4">Our Cakes</h1>
                  </Link>
                  <p className="text-xl text-gray-600 dark:text-gray-400">Hand made cakes baked with love for your celebrations, events and special dates!</p>
                  <p className="text-xl text-gray-600 dark:text-gray-400">Deliveries in Hobart and Surrounds.</p>
                </div>
                {/* Article meta */}
                <div className="md:flex md:items-center md:justify-between mt-5">
                  {/* Author meta */}
                  <div className="flex items-center justify-center">
                    
                  </div>
                </div>
              </header>
            </article>
          </div>

        </div>
      </div>

    </section>
  );
}

export default HeroBlog;