import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import sporticon from '../../assets/images/sporticon_1.svg';
import sporticon2 from '../../assets/images/sporticon_2.svg';
import sporticon3 from '../../assets/images/sporticon_3.svg';

const Popular = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1000);

  // Check screen size on resize
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 1000);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1,
    arrows: false, // No arrows (buttons)
    draggable: true, // Allow dragging
  };

  return (
    <>
      {/* Section for screens above 1000px */}
      {!isSmallScreen && (
        <section className="sec-we-serve bodypx blackbg py-80" id="fantasy">
          <div className="we-serve">
            <div className="container text-white text-center mb-5">
              <h2 className="font-48 text-white mb-0" data-aos="fade-up" data-aos-delay="100">
                Popular Fantasy Sports in India
              </h2>
              <p className="font-18 poppins-regular my-2 px-ms-5" data-aos="fade-up" data-aos-delay="200">
                Fantasy sports allow fans and enthusiasts to experience their favourite game by participating in various leagues and contests. A manager creates a team of real-life players and competes with other teams. Think11 is a popular fantasy sports platform that enables you to create your own dream team for the sport you like. Here are some of the most popular fantasy sports:
              </p>
            </div>

            <div className="container-fluid custom-ind-slider">
              <div className="we-serve__inner bg-black-slider">
                <div className="swiper we-serve__slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="we-serve__item br-24">
                        <div className="ourfeaturesitem rounded-16">
                          <div className="mb-3 iphone_w68" data-aos="fade-up" data-aos-delay="200">
                            <img src={sporticon} alt="Fantasy Cricket" />
                          </div>
                          <div>
                            <div className="fn-30 text-white mb-1 fw-600" data-aos="fade-up" data-aos-delay="300">
                              Fantasy Cricket
                            </div>
                            <p className="font-18 text-white mb-0" data-aos="fade-up" data-aos-delay="400">
                              Undoubtedly, cricket is the most favourite fantasy sport in India, as well as on Think11. A user can easily participate in cricket contests and leagues, including the Indian Premier League, T20s, ODIs, or any other cricket fixtures. You just need to put your cricket knowledge and skills into the game and win amazing cash prizes.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="we-serve__item br-24">
                        <div className="ourfeaturesitem rounded-16">
                          <div className="mb-3 iphone_w68" data-aos="fade-up" data-aos-delay="500">
                            <img src={sporticon2} alt="Fantasy Football" />
                          </div>
                          <div>
                            <div className="fn-30 text-white mb-1 fw-600" data-aos="fade-up" data-aos-delay="600">
                              Fantasy Football
                            </div>
                            <p className="font-18 text-white mb-0" data-aos="fade-up" data-aos-delay="700">
                              Fantasy football allows fans and enthusiasts to create a virtual squad of real-life football players. Think11 offers all the major football tournaments that take place around the world. And, based on the performance of the players, you can earn exciting prizes and rewards.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="we-serve__item br-24">
                        <div className="ourfeaturesitem rounded-16">
                          <div className="mb-3 iphone_w68" data-aos="fade-up" data-aos-delay="400">
                            <img src={sporticon3} alt="Fantasy Kabaddi" />
                          </div>
                          <div>
                            <div className="fn-30 text-white mb-1 fw-600" data-aos="fade-up" data-aos-delay="500">
                              Fantasy Kabaddi
                            </div>
                            <p className="font-18 text-white mb-0" data-aos="fade-up" data-aos-delay="600">
                              Undoubtedly, kabaddi is also a favorite fantasy sport in India, as well as on Think11. A user can easily participate in kabaddi contests and leagues, putting their skills to the test and winning fantastic prizes.
                            </p>
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
      )}

      {/* Section for screens below 1000px */}
      {isSmallScreen && (
        <section className="sec-we-serve bodypx blackbg py-80" id="fantasy">
          <div className="we-serve">
            <div className="container text-white text-center mb-5">
              <h2 className="font-48 text-white mb-0" data-aos="fade-up" data-aos-delay="100">
                Popular Fantasy Sports in India
              </h2>
              <p className="font-18 poppins-regular my-2 px-ms-5" data-aos="fade-up" data-aos-delay="200">
                Fantasy sports allow fans and enthusiasts to experience their favourite game by participating in various leagues and contests. A manager creates a team of real-life players and competes with other teams. Think11 is a popular fantasy sports platform that enables you to create your own dream team for the sport you like. Here are some of the most popular fantasy sports:
              </p>
            </div>

            {/* Only show carousel if screen size is less than 1000px */}
            <div className="container-fluid custom-ind-slider">
              <div className="we-serve__inner bg-black-slider">
                <Slider {...settings}>
                  <div className="we-serve__item br-24">
                    <div className="ourfeaturesitem rounded-16">
                      <div className="mb-3 iphone_w68" data-aos="fade-up" data-aos-delay="200">
                        <img src={sporticon} alt="Fantasy Cricket" />
                      </div>
                      <div>
                        <div className="fn-30 text-white mb-1 fw-600" data-aos="fade-up" data-aos-delay="300">
                          Fantasy Cricket
                        </div>
                        <p className="font-18 text-white mb-0" data-aos="fade-up" data-aos-delay="400">
                          Undoubtedly, cricket is the most favourite fantasy sport in India, as well as on Think11. A user can easily participate in cricket contests and leagues, including the Indian Premier League, T20s, ODIs, or any other cricket fixtures. You just need to put your cricket knowledge and skills into the game and win amazing cash prizes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="we-serve__item br-24">
                    <div className="ourfeaturesitem rounded-16">
                      <div className="mb-3 iphone_w68" data-aos="fade-up" data-aos-delay="500">
                        <img src={sporticon2} alt="Fantasy Football" />
                      </div>
                      <div>
                        <div className="fn-30 text-white mb-1 fw-600" data-aos="fade-up" data-aos-delay="600">
                          Fantasy Football
                        </div>
                        <p className="font-18 text-white mb-0" data-aos="fade-up" data-aos-delay="700">
                          Fantasy football allows fans and enthusiasts to create a virtual squad of real-life football players. Think11 offers all the major football tournaments that take place around the world. And, based on the performance of the players, you can earn exciting prizes and rewards.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="we-serve__item br-24">
                    <div className="ourfeaturesitem rounded-16">
                      <div className="mb-3 iphone_w68" data-aos="fade-up" data-aos-delay="400">
                        <img src={sporticon3} alt="Fantasy Kabaddi" />
                      </div>
                      <div>
                        <div className="fn-30 text-white mb-1 fw-600" data-aos="fade-up" data-aos-delay="500">
                          Fantasy Kabaddi
                        </div>
                        <p className="font-18 text-white mb-0" data-aos="fade-up" data-aos-delay="600">
                          Undoubtedly, kabaddi is also a favorite fantasy sport in India, as well as on Think11. A user can easily participate in kabaddi contests and leagues, putting their skills to the test and winning fantastic prizes.
                        </p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Popular;
