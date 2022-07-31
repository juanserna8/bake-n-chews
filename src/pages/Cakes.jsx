import React from 'react';

import Header from '../partials/Header';
import CakesIntro from '../partials/CakesIntro';
import CakeList from '../partials/CakeList';
import Footer from '../partials/Footer';

function Cakes() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-generalYellow-100 font-marcellus">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow mb-8">

        {/*  Page sections */}
        
        <CakeList />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Cakes;