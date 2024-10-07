import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import media1 from '../../assets/images/MediaCoverage1.jpg';
import media2 from '../../assets/images/MediaCoverage2.jpg';
import media3 from '../../assets/images/MediaCoverage3.jpg';

const MediaCoverageSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust duration based on preference
      once: true, // Animation will happen only once
    });
  }, []);

  return (
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

        {/* Media Coverage Row */}
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
  );
};

export default MediaCoverageSection;
