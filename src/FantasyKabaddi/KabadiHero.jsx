import React, { useEffect } from 'react';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import kabaddi from '../assets/images/kabaddicasewinnings.svg';
import HeroLower from '../Homepage/Hero/HeroLower';

const KabadiHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <>
      <section className="bodypx homebanner text-white">
        <div className="container-fluid pt-77">
          <div className="row align-items-center mt-md-5 mt-4">
            <div className="col-md-6">
              <div className="text-white text-center text-md-start tracking-in-expand">
                <span className="fs-48 fw-400 d-block" data-aos="fade-up" data-aos-delay="400">
                  PLAY & GET
                </span>
                <span className="fs-48 fw-600 text-uppercase" data-aos="fade-up" data-aos-delay="400">
                  cash winnings<br />
                  +
                </span>
                <span className="fs-48 fw-600 d-block" data-aos="fade-up" data-aos-delay="250">
                  GUARANTEED<br />
                  REWARDS
                </span>
              </div>
            </div>
            <div className="col-md-6 text-md-end text-center pt-5 about_img d-flex">
              <div className="position-relative ms-auto">
                <img className="imgph-w moving_position_animatin-no" src={kabaddi} alt="Fantasy Kabaddi Case Winnings" />
                <div className="imgovrlay">
                  <span className="fn-30 fw-600 py-2">
                    Fantasy <br />
                    Kabaddi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HeroLower />
    </>
  );
}

export default KabadiHero;
