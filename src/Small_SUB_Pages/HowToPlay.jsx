import React, { useState, useEffect } from 'react';
import Navbar2 from '../FantasyCricket/Navbar/Navbar2';
import ytthmb from '../assets/images/youtube-Thumbnail.svg';
import play from '../assets/images/play.svg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import Video from '../assets/images/video.mp4';
import DownloadAppSection from '../Homepage/DownloadAPP/DownloadAPp';
import Footer from '../Homepage/Footer/Footer';

const HowToPlay = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: 'ease-in-out', // Animation easing
            once: true, // Whether animation should happen only once
        });
    }, []);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleThumbnailClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <>
      <Navbar2 />

      <section className="bodypx banner aboutbanner text-white d-flex">
        <div className="container-fluid pt-77 m-auto w-100">
          <div className="row align-items-center mt-md-0 mt-3">
            <div className="col-md-12">
              <div className="text-white text-center tracking-in-expand">
                <span className="fs-60 fw-300" data-aos="fade-up" data-aos-delay="400">
                  Fantasy Sports How to Play
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bodypx py-80 bg-white">
        <div className="container-fluid mi-container">
          <div className="row align-items-md-center">
            <div className="col-md-6">
              <div className="col-lg-11">
                <h2 className="font-40 fw-300" data-aos="fade-up" data-aos-delay="50">
                  Introduction
                </h2>
                <p data-aos="fade-up" data-aos-delay="150">
                  You deserve the most stable and reliable platform to play the game you are so passionate about. Think 11 is one of
                  the most popular fantasy sports platforms. This unique fantasy app allows Cricket, Football & Kabaddi fans to test
                  their knowledge, insights, and know-how. It is a skill-based platform where you earn money when you play. This app
                  takes your passion for the spot to a whole new level by giving you a fantasy cricket, football & kabaddi experience
                  just on your mobile. Our focus is on creating games that are easy to play, rewarding, and filled with fun elements.
                  Hence, you will find that Think 11 is available at its finest. This is the reason why, in just a short period, the
                  app enjoys immense popularity and has become one of the fastest-growing fantasy cricket app platforms.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
              <div>
                {isVideoPlaying ? (
                  <video width="100%" controls autoPlay>
                    <source src={Video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div id="gallery-videos-demo" onClick={handleThumbnailClick} style={{ cursor: 'pointer' }}>
                    <a>
                      <picture>
                        <source media="(max-width:767px)" srcSet={ytthmb} />
                        <img width="100%" className="img-responsive" src={ytthmb} alt="YouTube Thumbnail" />
                      </picture>
                      <span className="playBtn bi bi-play">
                        <img width="60" className="" src={play} alt="Play Button" />
                        <p className="fn-24 mb-1">Let's see virtually how it works</p>
                        <h3 className="fn-30 text-white fw-600">Watch video</h3>
                      </span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bodypx services blackbg py-80" data-aos="fade-up" data-aos-delay="100">
  <div className="container-fluid">
    <div className="row">
      <div className="container faqs text_g">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" data-aos="fade-up" data-aos-delay="200">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Registration
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <h3 className="fn-18 fw-600 text-white">How do I sign up?</h3>
                <p>
                  Easy! Once you are on Think 11, choose your sport, register by filling out a short form.
                </p>
                <h3 className="fn-18 fw-600 text-white mt-4">Why can’t I login to my account?</h3>
                <p>
                  Oops! Please check whether your registered email address and password are entered correctly and try again. If you've forgotten your password, click on 'Forgot Password', enter your registered email ID and we’ll send you a link to reset your password through an email within a few minutes. If you've forgotten your registered email id, reach out to us via the Contact Us page.
                </p>
                <h3 className="fn-18 fw-600 text-white mt-4">How do I change my password?</h3>
                <p>
                  When you are logged in, click on your team name on the top right of the page and click on 'Change Password'.
                </p>
                <h3 className="fn-18 fw-600 text-white mt-4">How many accounts can I create with the same email id on Think 11?</h3>
                <p>
                  You can create only one account with one email id on Think 11. Creation of multiple accounts by a single user is strictly prohibited and violates our Fair Play policy.
                </p>
                <h3 className="fn-18 fw-600 text-white mt-4">Can I update / edit my information?</h3>
                <p>
                  Sure! Simply log into Think 11 and click on ‘Edit details’ on the top right of the page. You will be able to update/edit your full name and mobile number. You can also edit your date of birth, address and state if your Think 11 account is ‘Unverified’. Remember, the team name chosen by you and the email id registered once cannot be changed.
                </p>
                <p>
                  I’m sure I've got the right username and password but I still can't log in. That’s strange! If you are a registered user on Think 11 and are entering the correct details, please reach out to us via our Contact Us page. Our Customer Success team will be happy to assist you.
                </p>
                <h3 className="fn-18 fw-600 text-white mt-4">I did not get any confirmation email after I signed up.</h3>
                <p className="mb-1">
                  a) It could have been marked as ‘Spam’ by your mailbox. Please check your spam mail and mark the email from Think 11 as ‘Not Spam’.
                </p>
                <p>
                  b) You may not have entered the correct email address during registration. For any assistance, please reach out to us via our Contact Us page.
                </p>
                <h3 className="fn-18 fw-600 text-white mt-4">I don't know much about fantasy cricket – can I still play?</h3>
                <p>Don’t worry! You can visit our ‘Help’ section on the site.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item" data-aos="fade-up" data-aos-delay="300">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Playing the Game
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>
                  The choice between cross-platform and native app development depends on your business requirements. Native apps are recommended for businesses needing long-term growth, a seamless user experience, high performance, and responsiveness. Cross-platform apps are suitable when targeting both iOS and Android platforms to reach a broader audience. As the top app development company, we provide expert recommendations tailored to your business’s needs for success.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item" data-aos="fade-up" data-aos-delay="400">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Scores & Points
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>
                  The choice between cross-platform and native app development depends on your business requirements. Native apps are recommended for businesses needing long-term growth, a seamless user experience, high performance, and responsiveness. Cross-platform apps are suitable when targeting both iOS and Android platforms to reach a broader audience. As the top app development company, we provide expert recommendations tailored to your business’s needs for success.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item" data-aos="fade-up" data-aos-delay="500">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefour"
                aria-expanded="false"
                aria-controls="collapsefour"
              >
                Contests
              </button>
            </h2>
            <div id="collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>
                  The choice between cross-platform and native app development depends on your business requirements. Native apps are recommended for businesses needing long-term growth, a seamless user experience, high performance, and responsiveness. Cross-platform apps are suitable when targeting both iOS and Android platforms to reach a broader audience. As the top app development company, we provide expert recommendations tailored to your business’s needs for success.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item" data-aos="fade-up" data-aos-delay="600">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefive"
                aria-expanded="false"
                aria-controls="collapsefive"
              >
                Account Balance
              </button>
            </h2>
            <div id="collapsefive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>
                  The choice between cross-platform and native app development depends on your business requirements. Native apps are recommended for businesses needing long-term growth, a seamless user experience, high performance, and responsiveness. Cross-platform apps are suitable when targeting both iOS and Android platforms to reach a broader audience. As the top app development company, we provide expert recommendations tailored to your business’s needs for success.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item" data-aos="fade-up" data-aos-delay="700">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsesix"
                aria-expanded="false"
                aria-controls="collapsesix"
              >
                Verification
              </button>
            </h2>
            <div id="collapsesix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>
                  The choice between cross-platform and native app development depends on your business requirements. Native apps are recommended for businesses needing long-term growth, a seamless user experience, high performance, and responsiveness. Cross-platform apps are suitable when targeting both iOS and Android platforms to reach a broader audience. As the top app development company, we provide expert recommendations tailored to your business’s needs for success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
                    <DownloadAppSection/>
                    <Footer/>
    </>
  );
};

export default HowToPlay;
