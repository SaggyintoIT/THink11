import React, { useEffect, useState } from 'react';
import counterImage from '../assets/images/counter2.png';
import userAboutImage from '../assets/images/userabout.svg';
import winningsImage from '../assets/images/aboutWinnings.svg';
import followersImage from '../assets/images/aboutFollowers.svg';
import citiesImage from '../assets/images/aboutCities.svg';

const WeServeSection = () => {
  const [trustedUsers, setTrustedUsers] = useState(0);
  const [dailyWinnings, setDailyWinnings] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [cities, setCities] = useState(0);

  // Counting function
  const countUp = (target, setter) => {
    let count = 0;
    const duration = 2000; // total duration of counting in ms
    const incrementTime = Math.ceil(duration / target); // time for each increment

    const interval = setInterval(() => {
      if (count < target) {
        count++;
        setter(count);
      } else {
        clearInterval(interval);
      }
    }, incrementTime);
  };

  useEffect(() => {
    countUp(20, setTrustedUsers); // 20 Trusted Users
    countUp(20, setDailyWinnings); // 20 crore Daily Winnings
    countUp(4, setFollowers);       // 4K Followers
    countUp(150, setCities);        // 150 Cities
  }, []);

  return (
    <section className="sec-we-serve overflow-hidden">
      <div className="bodypx we-serve blackbg py-80 pb-200">
        <div className="container-fluid custom-ind-slider">
          <div className="row">
            <div className="col-md-5 mt-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <div className="me-3 boxicon">
                <img src={counterImage} alt="Counter Icon" />
              </div>
            </div>
            <div className="col-md-7 mt-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
              <div className="row align-items-md-center abt-expertise h-100">
                <div className="grid_colm_panel">
                  <div className="grid_colm_item b-bo-none top">
                    <div className="number_counter d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                      <div className="me-2">
                        <img src={userAboutImage} alt="Trusted Users" />
                      </div>
                      <div className="aboutp">
                        <div className="counter-text fs-48 fw-300">
                          <span className="num_count">{trustedUsers}</span>M+
                        </div>
                        <p className="mb-0 fn-24">Trusted Users</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid_colm_item b-bo-none top towfor">
                    <div className="number_counter d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                      <div className="me-2">
                        <img src={winningsImage} alt="Daily Winnings" />
                      </div>
                      <div className="aboutp">
                        <div className="counter-text fs-48 fw-300">
                          ₹ <span className="num_count">{dailyWinnings}</span> crore+
                        </div>
                        <p className="mb-0 fn-24">Daily Winnings</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid_colm_item">
                    <div className="number_counter d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                      <div className="me-2">
                        <img src={followersImage} alt="Followers" />
                      </div>
                      <div className="aboutp">
                        <div className="counter-text fs-48 fw-300">
                          <span className="num_count">{followers}</span>K+
                        </div>
                        <p className="mb-0 fn-24">Followers</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid_colm_item towfor">
                    <div className="number_counter d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                      <div className="me-2">
                        <img src={citiesImage} alt="Cities" />
                      </div>
                      <div className="aboutp">
                        <div className="counter-text fs-48 fw-300">
                          <span className="num_count">{cities}</span>+
                        </div>
                        <p className="mb-0 fn-24">Cities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeServeSection;
