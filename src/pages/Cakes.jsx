import React from 'react';

import Header from '../partials/Header';
import CakesIntro from '../partials/CakesIntro';
import FeaturedPosts from '../partials/FeaturedPosts';
import CakeList from '../partials/CakeList';
import Footer from '../partials/Footer';

function Cakes() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <CakesIntro />
        <FeaturedPosts />
        <CakeList />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Cakes;