import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FaqSection = () => {
  return (
    <section className="bodypx services blackbg py-80" data-aos="fade-up" data-aos-delay="100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 pb-md-4 text-center">
            <h2 className="font-48 mb-0 fw-500 text-white" data-aos="fade-up" data-aos-delay="200">
              Frequently Asked Questions
            </h2>
            <p className="font-18 poppins-regular my-2 text-white" data-aos="fade-up" data-aos-delay="300">
              We're here to help you
            </p>
          </div>

          <div className="container faqs">
            <div className="accordion" id="accordionExample">
              {/* FAQ 1 */}
              <div className="accordion-item" data-aos="fade-up" data-aos-delay="200">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    How do you create your fantasy team on Think11?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>To create your team for any fantasy sport on Think11, follow the below-mentioned steps:</p>
                    <ul className="text-white pb-3 ps-0">
                      <li className="mb-2">Step 1: Register or log in to your account at Think11.</li>
                      <li className="mb-2">Step 2: Choose the fantasy sports match that you want to play.</li>
                      <li className="mb-2">Step 3: Join any contest of your choice.</li>
                      <li className="mb-2">Step 4: Choose players for your dream team.</li>
                      <li className="mb-2">Step 5: Win cash rewards and withdraw instantly from your account.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ 2 */}
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
                    Can I withdraw my winnings from my account?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      The choice between cross-platform and native app development depends on your business
                      requirements. Native apps are recommended for businesses needing long-term growth, a
                      seamless user experience, high performance, and responsiveness.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 3 */}
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
                    Which is the best fantasy sports app in India?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Native apps are recommended for businesses needing long-term growth, a seamless user
                      experience, high performance, and responsiveness.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="accordion-item" data-aos="fade-up" data-aos-delay="500">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Is it legal to play fantasy sports in India?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Cross-platform apps are suitable when targeting both iOS and Android platforms to reach a
                      broader audience.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 5 */}
              <div className="accordion-item" data-aos="fade-up" data-aos-delay="600">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Is it legal to play fantasy sports in India?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Cross-platform apps are suitable when targeting both iOS and Android platforms to reach a
                      broader audience.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 6 */}
              <div className="accordion-item" data-aos="fade-up" data-aos-delay="700">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    Is it safe to play fantasy sports?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Native apps are recommended for businesses needing long-term growth, a seamless user
                      experience, high performance, and responsiveness.
                    </p>
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

export default FaqSection;
