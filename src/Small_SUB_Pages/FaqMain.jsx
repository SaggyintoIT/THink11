import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import Navbar2 from '../FantasyCricket/Navbar/Navbar2';
import DownloadAppSection from '../Homepage/DownloadAPP/DownloadAPp';
import Footer from '../Homepage/Footer/Footer';

const FaqMain = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation should happen only once - while scrolling down
    });
    AOS.refresh(); // Refresh on component mount
  }, []);

  return (
    <>
      <Navbar2 />

      <section className="bodypx banner aboutbanner text-white d-flex">
        <div className="container-fluid pt-77 m-auto w-100">
          <div className="row align-items-center mt-md-0 mt-3">
            <div className="col-md-12">
              <div className="text-white text-center tracking-in-expand">
                <span className="fs-60 fw-300" data-aos="fade-up" data-aos-delay="400">
                  Have questions? Look here
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bodypx services py-80" data-aos="fade-up" data-aos-delay="100">
        <div className="container-fluid">
          <div className="row">
            <div className="container bg-white rounded20 faq textcolortext px-0">
              <div className="accordion py-md-5 py-2" id="accordionExample">
                <div className="accordion-item" data-aos="fade-up" data-aos-delay="200">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      What is Fantasy Cricket?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Fantasy cricket is an online game where a user creates a virtual team
                        consisting of real cricket players. Users can choose players from the
                        upcoming match. Points are scored depending on how your selected players
                        perform in that real-life match. The better your team plays, the better
                        your chances of winning.
                      </p>
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
                      Why is Thik11 Best?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        The choice between cross-platform and native app development depends on
                        your business requirements. Native apps are recommended for businesses
                        needing long-term growth, a seamless user experience, high performance, and
                        responsiveness. Cross-platform apps are suitable when targeting both iOS
                        and Android platforms to reach a broader audience. As the top app
                        development company, we provide expert recommendations tailored to your
                        business’s needs for success.
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
                      How to Play Fantasy Cricket and Win Real Cash Daily?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        The choice between cross-platform and native app development depends on
                        your business requirements. Native apps are recommended for businesses
                        needing long-term growth, a seamless user experience, high performance, and
                        responsiveness. Cross-platform apps are suitable when targeting both iOS
                        and Android platforms to reach a broader audience. As the top app
                        development company, we provide expert recommendations tailored to your
                        business’s needs for success.
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
                      How does fantasy cricket work?
                    </button>
                  </h2>
                  <div
                    id="collapsefour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        The choice between cross-platform and native app development depends on
                        your business requirements. Native apps are recommended for businesses
                        needing long-term growth, a seamless user experience, high performance, and
                        responsiveness. Cross-platform apps are suitable when targeting both iOS
                        and Android platforms to reach a broader audience. As the top app
                        development company, we provide expert recommendations tailored to your
                        business’s needs for success.
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
                      Which players to select?
                    </button>
                  </h2>
                  <div
                    id="collapsefive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        The choice between cross-platform and native app development depends on
                        your business requirements. Native apps are recommended for businesses
                        needing long-term growth, a seamless user experience, high performance, and
                        responsiveness. Cross-platform apps are suitable when targeting both iOS
                        and Android platforms to reach a broader audience. As the top app
                        development company, we provide expert recommendations tailored to your
                        business’s needs for success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DownloadAppSection />
      <Footer />
    </>
  );
};

export default FaqMain;
