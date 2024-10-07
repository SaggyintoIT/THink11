import React from 'react';
import Slider from 'react-slick'; // Import Slick Slider
import 'slick-carousel/slick/slick.css'; // Import Slick styles
import 'slick-carousel/slick/slick-theme.css'; // Import Slick theme styles

import client1 from '../../assets/images/client_1.png';
import client2 from '../../assets/images/client_2.png';
import client3 from '../../assets/images/client_3.png';
import client4 from '../../assets/images/client_4.png';
import client5 from '../../assets/images/client_5.png';

const LogoSlider = () => {
  // Slick settings configuration
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: false,
    autoplaySpeed: 0,
    speed: 4000,
    pauseOnHover: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bodypx py-80">
      <div className="container mb-2">
        <div className="col-md-12 text-center mb-4">
          <h2 className="fs-48" data-aos="fade-up" data-aos-delay="100">
            Our Payment Partners
          </h2>
          <p className="font-18 poppins-regular my-3" data-aos="fade-up" data-aos-delay="250">
            Partner Payments offers a full suite of non-cash payment solutions.
          </p>
        </div>
      </div>
      <div className="container-fluid">
        <div className="bg-white rounded20 py-4 text-center">
          {/* Slider component */}
          <Slider {...settings} className="clientSwipera" id="clientSwipera">
            {/* Slides */}
            <div>
              <img src={client1} alt="Client 1" />
            </div>
            <div>
              <img src={client2} alt="Client 2" />
            </div>
            <div>
              <img src={client3} alt="Client 3" />
            </div>
            <div>
              <img src={client4} alt="Client 4" />
            </div>
            <div>
              <img src={client5} alt="Client 5" />
            </div>
            <div>
              <img src={client1} alt="Client 1" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
