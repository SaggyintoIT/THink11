import React from "react";
import Slider from "react-slick";
import aman from '../../assets/images/Dhirendra.svg';
import left from '../../assets/images/left.svg';
import right from '../../assets/images/slickrightarrow.svg';
import '../../assets/css/slick-theme.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: "Think11 is a great platform that focuses on offering the best facilities to their customers. The customer support staff is very cooperative. I am happy that there are such platforms in India.",
    name: "Aman Singh",
    location: "Jaipur, Rajasthan",
    imgSrc: aman, // Use the imported image directly
  },
  // Add more testimonials as needed
];

const TestimonialSection = () => {
  const settings = {
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2.5,
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
    <section className="bodypx Testimonial bg-white py-80 pb-1">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center" data-aos="fade-up" data-aos-delay="200">
            <h2 className="">What our customers say</h2>
            <p>Customer satisfaction is very important to us..</p>
          </div>

          <div className="pt-3 pb-5 px-md-3 px-0 d-flex">
            <div className="testimonial">
              <Slider {...settings} className="testimonial-slider">
                {testimonials.map((testimonial, index) => (
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
              </Slider>

              <div className="btn-wrap">
                <button className="prev-btn com-btn mr-3" onClick={() => this.slider.slickPrev()}>
                  <span><img src={left} alt="Previous" /></span>
                </button>
                <button className="next-btn com-btn" onClick={() => this.slider.slickNext()}>
                  <span><img src={right} alt="Next" /></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
