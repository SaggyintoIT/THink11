import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import aman from '../../assets/images/Dhirendra.svg';
import left from '../../assets/images/left.svg';
import right from '../../assets/images/slickrightarrow.svg';

const testimonials = [
  {
    text: "Think11 is a great platform that focuses on offering the best facilities to their customers. The customer support staff is very cooperative. I am happy that there are such platforms in India.",
    name: "Aman Singh",
    location: "Jaipur, Rajasthan",
    imgSrc: aman,
  },
  {
    text: "Excellent platform with superb features! Their support team is fantastic.",
    name: "Raj Kumar",
    location: "Delhi, India",
    imgSrc: aman,
  },
  {
    text: "I love using Think11! The user experience is top-notch, and I always feel supported.",
    name: "Sita Devi",
    location: "Mumbai, India",
    imgSrc: aman,
  },
  // Add more testimonials as needed
];

const TestimonialSection = () => {
  return (
    <section className="bodypx Testimonial bg-white py-80 pb-1">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center" data-aos="fade-up" data-aos-delay="200">
            <h2>What our customers say</h2>
            <p>Customer satisfaction is very important to us.</p>
          </div>

          <div className="pt-3 pb-5 px-md-3 px-0 d-flex">
            <div className="testimonial">
              <AliceCarousel
                items={testimonials.map((testimonial, index) => (
                  <div className="testimonial-slide" key={index}>
                    <div className="testimonial_box">
                      <div className="testimonial_box-inner">
                        <div className="testimonial_box-top">
                          <div className="testimonial_box-text">
                            <p>{testimonial.text}</p>
                          </div>
                          <div className="testimonial_box-shape"></div>
                          <div className="testimonial_box-bottom">
                            <div className="testimonial_box-profile align-items-center">
                              <div className="testimonial_box-img">
                                <img src={testimonial.imgSrc} alt={testimonial.name} />
                              </div>
                              <div className="testimonial_box-info">
                                <div className="testimonial_box-name">
                                  <h3 className="mb-0">{testimonial.name}</h3>
                                  <p className="mb-1">{testimonial.location}</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center ps-3">
                                <div className="rate ms-auto">
                                  <input type="radio" id={`star5-${index}`} name={`rate-${index}`} value="5" />
                                  <label htmlFor={`star5-${index}`} title="text">5 stars</label>
                                  <input type="radio" id={`star4-${index}`} name={`rate-${index}`} value="4" />
                                  <label htmlFor={`star4-${index}`} title="text">4 stars</label>
                                  <input type="radio" id={`star3-${index}`} defaultChecked name={`rate-${index}`} value="3" />
                                  <label htmlFor={`star3-${index}`} title="text">3 stars</label>
                                  <input type="radio" id={`star2-${index}`} name={`rate-${index}`} value="2" />
                                  <label htmlFor={`star2-${index}`} title="text">2 stars</label>
                                  <input type="radio" id={`star1-${index}`} name={`rate-${index}`} value="1" />
                                  <label htmlFor={`star1-${index}`} title="text">1 star</label>
                                </div>
                                <span className="fw-bold fn-18">3.0 / 3.0</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                responsive={{
                  0: { items: 1 },   // Show 1 item on small screens
                  768: { items: 2 }, // Show 2 items on tablets
                  1024: { items: 3 }, // Show 3 items on laptops/desktops
                }}
                autoPlay
                autoPlayInterval={4000}
                infinite // Enable infinite scrolling
                disableButtonsControls // Disable default button controls
                renderPrevButton={({ isEnabled }) => (
                  <button
                    className="custom-button"
                    disabled={!isEnabled}
                    style={{ backgroundImage: `url(${left})`, border: 'none' }} // Adjust button styling as needed
                  />
                )}
                renderNextButton={({ isDisabled }) => (
                  <button
                    className="custom-button"
                    disabled={isDisabled}
                    style={{ backgroundImage: `url(${right})`, border: 'none' }} // Adjust button styling as needed
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
