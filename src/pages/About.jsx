import React from 'react';

import Header from '../partials/Header';
import EverAbout from '../partials/EverAbout';
import BusinessDescription from '../partials/BusinessDescription';
//import CtaContact from '../partials/CtaContact';
import Footer from '../partials/Footer';

function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-generalYellow-100 font-marcellus">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <EverAbout />
        <BusinessDescription />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default About;