import React from 'react'
import Navbar2 from '../FantasyCricket/Navbar/Navbar2'
import logothumb from '../assets/images/logothamb.jpg'
import shaf from '../assets/images/shaf.svg'
import withdral from '../assets/images/Withdrawals.svg'
import compe from '../assets/images/competition.svg'
import support from '../assets/images/Support.svg'
import expert1 from '../assets/images/experts_1.jpg'
import expert2 from '../assets/images/experts_2.jpg'
import expert3 from '../assets/images/experts_3.jpg'
import expert4 from '../assets/images/experts_4.jpg'
import { useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import WeServeSection from './AboutusCounter'
import TestimonialSection from '../Homepage/Testimonial/Testimonial'
import FaqSection from '../Homepage/FAQ/Faq'
import DownloadAppSection from '../Homepage/DownloadAPP/DownloadAPp'
import Footer from '../Homepage/Footer/Footer'


const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: 'ease-in-out', // Animation easing
            once: true, // Whether animation should happen only once
        });
    }, []);
  return (
   <>
   <Navbar2/>

   <section className="bodypx banner aboutbanner text-white d-flex">
    <div className="container-fluid pt-77 m-auto w-100">
      <div className="row align-items-center mt-md-0 mt-3">   
     <div className="col-md-12">   
      <div className="text-white text-center tracking-in-expand" >
        <span className="fs-60 fw-300" data-aos="fade-up" data-aos-delay="400">About Us </span>      
          </div>
          </div>    
        </div>
    </div>
    </section>
    <section className="bodypx py-80 bg-white">
  <div className="container-fluid mi-container">
    <div className="row align-items-md-center">
      <div className="col-md-9">
        <div className="col-lg-11">
          <h2 className="fn-40 fw-300" data-aos="fade-up" data-aos-delay="50">
            About Us
          </h2>
          <p data-aos="fade-up" data-aos-delay="150">
            You deserve the most stable and reliable platform to play the game you are so passionate about. Think 11 is one of the most popular fantasy sports platforms. This unique fantasy app allows Cricket, Football & Kabaddi fans to test their knowledge, insights, and know-how. It is a skill-based platform where you earn money when you play. This app takes your passion for the sport to a whole new level by giving you a fantasy cricket, football & kabaddi experience just on your mobile. Our focus is on creating games that are easy to play, rewarding, and filled with fun elements. Hence, you will find that Think 11 is available at its finest. This is the reason why, in just a short period, the app enjoys immense popularity and has become one of the fastest-growing fantasy cricket app platforms.
          </p>
          <p data-aos="fade-up" data-aos-delay="250">
            Here, you can create your own fantasy cricket, football & kabaddi team of real-life players from upcoming matches and score points according to their on-field performances. As a fan, you compete with other fans to win every match. Experience a real cricket match as the team plays along. This is the strategy that can make you win a game. Whether you're a novice or an expert, Think 11 has something for everyone. Start with real cash fantasy sports or practice matches. With the wide and varying range of games at a single portal, coupled with features of, we believe makes Think 11 a portal of choice for you.
          </p>
        </div>
      </div>
      <div className="col-md-3 mb-4" data-aos="fade-up" data-aos-delay="300">
        <div className="padding30">
          <img className="d-block w-100 m-auto" src={logothumb} alt="Logo Thumbnail" />
        </div>
      </div>
    </div>
  </div>



  <section className="bodypx py-80">
  <div className="container-fluid mi-container">
    <div className="row">
      <div className="col-md-12 text-center mb-4">
        <h2 className="fn-40 mb-0 fw-300" data-aos="fade-up" data-aos-delay="100">
          Why we are different from others!
        </h2>
        <p className="font-18 poppins-regular my-2" data-aos="fade-up" data-aos-delay="200">
          Think 11 - India's Best Fantasy Sports Platform.
        </p>
      </div>

      <div className="col-md-3 mb-4">
        <div className="appdevbg padding30 rounded20 h-100" data-aos="fade-up" data-aos-delay="300">
          <img className="d-block" src={shaf} alt="Safe & Secure" />
          <span className="fn-24 fw-500 pt-3 pb-2 d-block">Safe & Secure</span>
          <p>We offer a safe and secured platform to enjoy fantasy sports at your leisure on your device.</p>
        </div>
      </div>

      <div className="col-md-3 mb-4">
        <div className="appdevbg padding30 rounded20 h-100" data-aos="fade-up" data-aos-delay="400">
          <img className="d-block" src={compe} alt="Low Competition" />
          <span className="fn-24 fw-500 pt-3 pb-2 d-block">Low Competition</span>
          <p>Your chances of winning will increase against less competition.</p>
        </div>
      </div>

      <div className="col-md-3 mb-4">
        <div className="appdevbg padding30 rounded20 h-100" data-aos="fade-up" data-aos-delay="500">
          <img className="d-block" src={withdral} alt="Instant Withdrawals" />
          <span className="fn-24 fw-500 pt-3 pb-2 d-block">Instant Withdrawals</span>
          <p>Enjoy instant cash withdrawals after one-time account verification.</p>
        </div>
      </div>

      <div className="col-md-3 mb-4">
        <div className="appdevbg padding30 rounded20 h-100" data-aos="fade-up" data-aos-delay="600">
          <img className="d-block" src={support} alt="24x7 Support" />
          <span className="fn-24 fw-500 pt-3 pb-2 d-block">24x7 Support</span>
          <p>We have 24x7 Active Customer Support.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="bodypx ourworksection bg-white py-80" data-aos="fade-up">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12 text-center">
        <h2 className="fn-40 fw-300" data-aos="fade-up" data-aos-delay="150">
          Meet our experts
        </h2>
        <p className="font-18 poppins-regular my-2" data-aos="fade-up" data-aos-delay="200">
          Meet the faces behind our success!
        </p>
      </div>

      <div className="pt-md-5 pt-10 px-0 d-fl">
        <div className="wrapper d-flex justify-content-center">
          <div className="talentedteam-slider d-flex" >
            <div className="text-center mx-3" data-aos="fade-up" data-aos-delay="50">
              <img className="ph-w" src={expert1} alt="Aman Singh" />
              <span className="d-block fn-24 fw-500 mt-3">Aman Singh</span>
              <p className="opc text-dgray">CEO & Co-Founder</p>
            </div>

            <div className="text-center mx-3" data-aos="fade-up" data-aos-delay="150">
              <img className="ph-w" src={expert2} alt="Robert Abbondandolo" />
              <span className="d-block fn-24 fw-500 mt-3">Robert Abbondandolo</span>
              <p className="opc text-dgray">CEO & Co-Founder</p>
            </div>

            <div className="text-center mx-3" data-aos="fade-up" data-aos-delay="250">
              <img className="ph-w" src={expert3} alt="Monika Soni" />
              <span className="d-block fn-24 fw-500 mt-3">Monika Soni</span>
              <p className="opc text-dgray">HR Executive</p>
            </div>

            <div className="text-center mx-3" data-aos="fade-up" data-aos-delay="300">
              <img className="ph-w" src={expert4} alt="Sayon Mondal" />
              <span className="d-block fn-24 fw-500 mt-3">Sayon Mondal</span>
              <p className="opc text-dgray">Marketing & Sales</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</section>
<WeServeSection/>
<TestimonialSection/>
<FaqSection/>
<DownloadAppSection/>
<Footer/>

   </>
  )
}

export default About