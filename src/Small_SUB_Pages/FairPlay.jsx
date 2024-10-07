import React, { useEffect } from 'react';
import AOS from 'aos';
import Navbar2 from '../FantasyCricket/Navbar/Navbar2';
import checkmark from '../assets/images/checkmark.svg';
import DownloadAppSection from '../Homepage/DownloadAPP/DownloadAPp';
import Footer from '../Homepage/Footer/Footer';
import 'aos/dist/aos.css';

const FairPlay = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <Navbar2 />

      <section className="bodypx banner aboutbanner text-white d-flex">
        <div className="container-fluid pt-77 m-auto w-100">
          <div className="row align-items-center mt-md-0 mt-3">
            <div className="col-md-12">
              <div className="text-white text-center tracking-in-expand">
                <span className="fs-60 fw-300" data-aos="fade-up" data-aos-delay="400">Fair Play</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bodypx py-80 bg-white">
        <div className="container-fluid mi-container">
          <div className="row align-items-md-center">
            <div className="col-md-12">
              <h2 className="font-40 fw-300" data-aos="fade-up" data-aos-delay="50">Fair Play</h2>
              <p data-aos="fade-up" data-aos-delay="150">
                Think11 is a Fantasy Sports Gaming Platform where we understand our responsibility towards ensuring the culture of Fair Play in the Fantasy Sports sphere. The Think11 is based on such a mechanism that follows all the guidelines given by the Honourable Supreme Court regarding the ‘Game of Skill’. Think11 includes various aspects of fair play such as the predominance of knowledge, attention, training & experience of the user/player. Think11 never encourages any act prohibited by law such as gambling, betting, cheating or any act that includes fraud in any manner contributing positively to the fantasy sports world that players can enjoy legally and ethically.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bodypx py-80">
        <div className="container-fluid mi-container">
          <div className="row">
            <div className="col-md-12 text-md-start mb-4">
              <span className="fn-40 mb-0 fw-300" data-aos="fade-up" data-aos-delay="100">
                Fair Play Violations at Think11 include
              </span>
            </div>
            {[ // Array of violation descriptions
              "If during the regular platform audits, the team of Think11 found a user who has created or operating multiple accounts through a single electronic device, it would be deemed as a violation of the Fair Play Policy.",
              "If any of the users withdraw their winning amount using any kind of illegal or unlawful means or try to withdraw the amount through any unlawful means, it would be considered a violation of Fair Play.",
              "It would be considered a violation of the Fair Play Policy of Think11 if any of the users create or operate more than one account on Think11.",
              "It is prohibited on this platform to use any fake accounts to gain the cash bonus amount through the 'Refer & Earn' mechanism. Hence, the people to whom you refer Think11 must be having genuine accounts.",
              "If any of the users were found submitting documents belonging to another person or any other fake documents while doing registration on Think11, it would be deemed as a violation of Fair Play Terms.",
              "The PAN card of all your referred should be verified on the Think11 app."
            ].map((violation, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="bg-white p-3 p-md-4 rounded20 h-100" data-aos="fade-up" data-aos-delay="300">
                  <div className="d-flex">
                    <div className="me-2 boxiconcheckmark">
                      <img src={checkmark} alt="Checkmark" />
                    </div>
                    <p className="mb-0">{violation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bodypx py-80 bg-white">
        <div className="container-fluid mi-container">
          <div className="row">
            <div className="col-md-12 text-md-start mb-4">
              <span className="fn-40 mb-0 fw-300" data-aos="fade-up" data-aos-delay="100">
                Consequences of Violating Fair Play Terms of Think11
              </span>
            </div>
            {[ // Array of consequences
              "It can be a possible consequence that for violating the terms of Fair Play at Think11, we can either temporarily or permanently block your account on our application.",
              "Further, the winning as well as another amount will be reduced to zero if any user is found to be violating the Fair Play Terms of Think11.",
              "The decision of the admin panel of Think11 will be final in case of any dispute regarding the question of whether a certain action of the user comes under the ambit of violation of the Fair Terms Policy or not."
            ].map((consequence, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="clientSwiper p-3 p-md-4 rounded20 h-100" data-aos="fade-up" data-aos-delay="300">
                  <div className="d-flex">
                    <div className="me-2 boxiconcheckmark">
                      <img src={checkmark} alt="Checkmark" />
                    </div>
                    <p className="mb-0">{consequence}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <DownloadAppSection />
      <Footer />
    </>
  );
}

export default FairPlay;
