import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import Slider from 'react-slick'; // Import React Slick
import media1 from '../../assets/images/MediaCoverage1.jpg';
import media2 from '../../assets/images/MediaCoverage2.jpg';
import media3 from '../../assets/images/MediaCoverage3.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const MediaCoverageSection = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1000);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust duration based on preference
      once: true, // Animation will happen only once
    });
  }, []);

  // Check screen size on resize
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 1000);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Settings for the Slick carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1,
  };

  return (
    <>
      {/* Section for screens above 1000px */}
      {!isSmallScreen && (
        <section className="bodypx ourworksection bg-white py-80" data-aos="fade-up">
          <div className="container-fluid px-md-0">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="font-48 mb-0 fw-600" data-aos="fade-up" data-aos-delay="100">
                  Media Coverage
                </h2>
                <p className="font-18 poppins-regular my-2" data-aos="fade-up" data-aos-delay="200">
                  There has been coverage of our company in the press
                </p>
              </div>
            </div>

            {/* Media Coverage Row for larger screens */}
            <div className="row pt-md-5 pt-3 px-0">
              {/* Media Item 1 */}
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="150">
                <div className="img-hover">
                  <img className="w-100 inner-img media-img" src={media1} alt="Media Coverage 1" />
                </div>
                <div className="Insights-text">
                  <span className="fn-18 text-lgray3">March 25, 2024</span>
                  <a href="/" className="d-block fn-30 fw-midem my-1 text-dgray hoverunderline">
                    Show your cricket knowledge
                  </a>
                  <p className="pe-md-4">
                    Sports fantasy are so much fun! The participants of the game create their virtual teams with actual players from a professional sport in the game Think11.
                  </p>
                </div>
                <div className="d-flex">
                  <a href="/" className="btn-white fw-600 d-flex">
                    <span>Read More</span>
                  </a>
                </div>
              </div>

              {/* Media Item 2 */}
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div className="img-hover">
                  <img className="w-100 inner-img media-img" src={media2} alt="Media Coverage 2" />
                </div>
                <div className="Insights-text">
                  <span className="fn-18 text-lgray3">March 25, 2024</span>
                  <a href="/" className="d-block fn-30 fw-midem my-1 text-dgray hoverunderline">
                    Show your cricket knowledge
                  </a>
                  <p className="pe-md-4">
                    Sports fantasy are so much fun! The participants of the game create their virtual teams with actual players from a professional sport in the game Think11.
                  </p>
                </div>
                <div className="d-flex">
                  <a href="/" className="btn-white fw-600 d-flex">
                    <span>Read More</span>
                  </a>
                </div>
              </div>

              {/* Media Item 3 */}
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="250">
                <div className="img-hover">
                  <img className="w-100 inner-img media-img" src={media3} alt="Media Coverage 3" />
                </div>
                <div className="Insights-text">
                  <span className="fn-18 text-lgray3">March 25, 2024</span>
                  <a href="/" className="d-block fn-30 fw-midem my-1 text-dgray hoverunderline">
                    Show your cricket knowledge
                  </a>
                  <p className="pe-md-4">
                    Sports fantasy are so much fun! The participants of the game create their virtual teams with actual players from a professional sport in the game Think11.
                  </p>
                </div>
                <div className="d-flex">
                  <a href="/" className="btn-white fw-600 d-flex">
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section for screens below 1000px with React Slick carousel */}
      {isSmallScreen && (
        <section className="bodypx ourworksection bg-white py-80" data-aos="fade-up">
          <div className="container-fluid px-md-0">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="font-48 mb-0 fw-600" data-aos="fade-up" data-aos-delay="100">
                  Media Coverage
                </h2>
                <p className="font-18 poppins-regular my-2" data-aos="fade-up" data-aos-delay="200">
                  There has been coverage of our company in the press
                </p>
              </div>
            </div>

            {/* React Slick Carousel for smaller screens */}
            <Slider {...settings}>
              {/* Media Item 1 */}
              <div data-aos="fade-up" data-aos-delay="150">
                <div className="img-hover">
                  <img className="w-100 inner-img media-img" src={media1} alt="Media Coverage 1" />
                </div>
                <div className="Insights-text">
                  <span className="fn-18 text-lgray3">March 25, 2024</span>
                  <a href="/" className="d-block fn-30 fw-midem my-1 text-dgray hoverunderline">
                    Show your cricket knowledge
                  </a>
                  <p className="pe-md-4">
                    Sports fantasy are so much fun! The participants of the game create their virtual teams with actual players from a professional sport in the game Think11.
                  </p>
                </div>
                <div className="d-flex">
                  <a href="/" className="btn-white fw-600 d-flex">
                    <span>Read More</span>
                  </a>
                </div>
              </div>

              {/* Media Item 2 */}
              <div data-aos="fade-up" data-aos-delay="200">
                <div className="img-hover">
                  <img className="w-100 inner-img media-img" src={media2} alt="Media Coverage 2" />
                </div>
                <div className="Insights-text">
                  <span className="fn-18 text-lgray3">March 25, 2024</span>
                  <a href="/" className="d-block fn-30 fw-midem my-1 text-dgray hoverunderline">
                    Show your cricket knowledge
                  </a>
                  <p className="pe-md-4">
                    Sports fantasy are so much fun! The participants of the game create their virtual teams with actual players from a professional sport in the game Think11.
                  </p>
                </div>
                <div className="d-flex">
                  <a href="/" className="btn-white fw-600 d-flex">
                    <span>Read More</span>
                  </a>
                </div>
              </div>

              {/* Media Item 3 */}
              <div data-aos="fade-up" data-aos-delay="250">
                <div className="img-hover">
                  <img className="w-100 inner-img media-img" src={media3} alt="Media Coverage 3" />
                </div>
                <div className="Insights-text">
                  <span className="fn-18 text-lgray3">March 25, 2024</span>
                  <a href="/" className="d-block fn-30 fw-midem my-1 text-dgray hoverunderline">
                    Show your cricket knowledge
                  </a>
                  <p className="pe-md-4">
                    Sports fantasy are so much fun! The participants of the game create their virtual teams with actual players from a professional sport in the game Think11.
                  </p>
                </div>
                <div className="d-flex">
                  <a href="/" className="btn-white fw-600 d-flex">
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </Slider>
          </div>
        </section>
      )}
    </>
  );
};

export default MediaCoverageSection;
