import React from 'react';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import HowItWorks from './HowItWorks/HowItWorks';
import Features from './Features/Features';
import Popular from './Popular/Popular';
import LogoSlider from './Logo/LogoSlide';
import TestimonialSection from './Testimonial/Testimonial';
import FaqSection from './FAQ/Faq';
import MediaCoverageSection from './Media/Media';
import DownloadAppSection from './DownloadAPP/DownloadAPp';
import Footer from './Footer/Footer';

const HomePagemain = () => {
  return (
    <>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="popular">
        <Popular />
      </section>
      <section id="logo-slider">
        <LogoSlider />
      </section>
      <section id="testimonials">
        <TestimonialSection />
      </section>
      <section id="faq">
        <FaqSection />
      </section>
      <section id="media">
        <MediaCoverageSection />
      </section>
      <section id="download-app">
        <DownloadAppSection />
      </section>
      <Footer />
    </>
  );
};

export default HomePagemain;
