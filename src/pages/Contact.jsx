import React from 'react';

import Header from '../partials/Header';
import CustomizedCakes from '../partials/CustomizedCakes';
import TestimonialsCarousel from '../partials/TestimonialsCarousel';
import Cta from '../partials/Cta';
import Footer from '../partials/Footer';

function Contact() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <CustomizedCakes />
        <TestimonialsCarousel />
        <Cta />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Contact;