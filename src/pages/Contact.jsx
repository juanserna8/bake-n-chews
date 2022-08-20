import React from 'react';

import Header from '../partials/Header';
import CustomizedCakes from '../partials/CustomizedCakes';
import TestimonialsCarousel from '../partials/TestimonialsCarousel';
import Cta from '../partials/Cta';
import Footer from '../partials/Footer';

function Contact() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-generalYellow-100 font-marcellus text-black">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow mb-8">

        {/*  Page sections */}
        <CustomizedCakes />
        <Cta />
        <TestimonialsCarousel />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Contact;