import React from 'react'
import gplay from '../../assets/images/googleplay.png';

import aplay from '../../assets/images/appplay.svg';
import client1 from '../../assets/images/client_1.svg'
import client3 from '../../assets/images/client_3.svg'
import client2 from '../../assets/images/client_2.svg'
import HeroBanner from '../../assets/images/homebanner.svg'
import HeroLower from './HeroLower';
const Hero = () => {
  return (
    <>
<section className="bodypx homebanner text-white">
  <div className="container-fluid pt-77">
    <div className="row align-items-center mt-md-5 mt-4">
      <div className="col-md-6">
        <div className="text-white text-center text-md-start tracking-in-expand">
          <span className="fs-60 fw-600" data-aos="fade-up" data-aos-delay="400">Let's Play Fantasy </span>
          <span className="fs-60 fw-600 d-block" data-aos="fade-up" data-aos-delay="250">Sports </span>
          <p className="fn-18 fw-600 pt-3" data-aos="fade-up" data-aos-delay="300">Fantasy Football, Cricket and Kabaddi App.</p>

          <div className="d-md-flex d-none align-items-center">
            <a href="#" className="d-flex btn-btnwhite mt-2 mt-xl-3 fw-600" data-aos="fade-up" data-aos-delay="450">
              <img className="m-auto" src={gplay} alt="Google Play" />
            </a>
            <a href="#" className="d-flex playbtn btn-btnwhite mt-2 mt-xl-3 fw-600 ms-sm-4 ms-2" data-aos="fade-up" data-aos-delay="550">
              <img className="m-auto" src={aplay} alt="App Play" />
            </a>
          </div>

          <div className="d-flex align-items-center pt-3 sm-pt-2 mt-md-3 ipadw-100" data-aos="fade-up" data-aos-delay="650">
            <div className="about-client-box style2 mb-sm-0">
              <div className="client-thumb-group d-flex">
                <div className="thumb zindex">
                  <img alt="home" decoding="async" height="50" width="50" src={client1} />
                </div>
                <div className="thumb client_two">
                  <img alt="home" decoding="async" height="50" width="50" src={client2}/>
                </div>
                <div className="thumb client_three">
                  <img alt="home" decoding="async" height="50" width="50" src={client3} />
                </div>
              </div>
            </div>
            <div className="cilent-box fn-18 ps-3">
              <span className="counter-number fn-18 fw-600">12k</span><br />
              <span className="since fw-300">used this app</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 text-md-end text-center pt-5 about_img">
        <img className="imgph-w moving_position_animatin-no" src={HeroBanner} alt="Home Banner" />
      </div>
    </div>
  </div>
</section>
<HeroLower/>
</>
  )
}

export default Hero