import React from 'react';
import { motion } from 'framer-motion';

import Header from '../partials/Header';
import EverAbout from '../partials/EverAbout';
import BusinessDescription from '../partials/BusinessDescription';
//import CtaContact from '../partials/CtaContact';
import Footer from '../partials/Footer';

function About() {
  return (
    <motion.div 
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen overflow-hidden bg-generalYellow-100 font-marcellus"
    >

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow mb-8">

        {/*  Page sections */}
        <EverAbout />
        <BusinessDescription />

      </main>

      {/*  Site footer */}
      <Footer />

    </motion.div>
  );
}

export default About;