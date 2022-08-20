import React from 'react';
import { Link } from 'react-router-dom';

function CakesIntro() {
  return (
    <section className="relative">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-16">

          {/* Featured article */}
          <div className="w-full mt-[8rem]" data-aos="fade-down">
            <article>
              <header>
                {/* Title and excerpt */}
                <div className="text-center">
                  <Link to="/blog-post">
                    <h1 className="h1 font-red-hat-display mb-4">Our Cakes</h1>
                  </Link>
                </div>
              </header>
            </article>
          </div>

        </div>
      </div>

    </section>
  );
}

export default CakesIntro;