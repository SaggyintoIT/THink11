import React from 'react'
import sporticon from '../../assets/images/sporticon_1.svg'
import sporticon2 from '../../assets/images/sporticon_2.svg'
import sporticon3 from '../../assets/images/sporticon_3.svg'
import left from '../../assets/images/left.svg'
import right from '../../assets/images/right.svg'
const Popular = () => {
  return (
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
                      Undoubtedly, cricket is the most favourite fantasy sport in India, as well as on Think11. A user can easily participate in cricket contests and leagues, including the Indian Premier League, T20s, ODIs, or any other cricket fixtures. You just need to put your cricket knowledge and skills into the game and win amazing cash prizes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-pagination"></div>

          <div className="we-serve__nav d-sm-none d-none mt-5 justify-content-between">
            <div className="d-flex gap-3 ms-auto">
              <div
                className="we-serve__slider-button-prev swiper-button-disabled"
                tabIndex="-1"
                role="button"
                aria-label="Previous slide"
                aria-controls="swiper-wrapper-8c67d8cea9a062c7"
                aria-disabled="true"
              >
                <span>
                  <img src={left} alt="Previous" />
                </span>
              </div>

              <div
                className="we-serve__slider-button-next"
                tabIndex="0"
                role="button"
                aria-label="Next slide"
                aria-controls="swiper-wrapper-8c67d8cea9a062c7"
                aria-disabled="false"
              >
                <span>
                  <img src={right} alt="Next" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Popular