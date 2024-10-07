import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar2 from '../FantasyCricket/Navbar/Navbar2';
import dham from '../assets/images/Dhirendra.svg'
import insta from '../assets/images/instagramicon.svg'
import whatsapp from '../assets/images/watts-icon.svg'
import teli from '../assets/images/Telegram-icon.svg'
import fb from '../assets/images/facebookicon.svg'
import DownloadAppSection from '../Homepage/DownloadAPP/DownloadAPp';
import Footer from '../Homepage/Footer/Footer';
const ChatSupport = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <Navbar2 />

      <section className="bodypx banner aboutbanner text-white d-flex">
        <div className="container-fluid pt-77 m-auto w-100">
          <div className="row align-items-center mt-md-0 mt-3">
            <div className="col-md-12">
              <div className="text-white text-center tracking-in-expand">
                <span className="fs-60 fw-300" data-aos="fade-up" data-aos-delay="400">Chat Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bodypx chatsupport py-80" data-aos="fade-up" data-aos-delay="100">
        <div className="bg-white rounded20 p-md-5 py-80">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 text-center mb-4">
                <strong className="fn-40 mb-0 fw-300" data-aos="fade-up" data-aos-delay="100">Think 11 Social Chat Support!</strong>
              </div>

              <div className="col-sm-3 outer-col-1 py-3">
                <div className="lightgraybg-30 py-5 rounded-16">
                  <div className="align-items-center text-center">
                    <div className="d-flex mb-3">
                      <span className="iconshownew">
                        <img src={whatsapp} alt="whatsapp" />
                      </span>
                    </div>
                    <div className="line-h">
                      <p className="mb-3 text-uppercase text-lgray3 fn-18">our WhatsApp number</p>
                      <a href="tel:+91-7482895747" className="fn-24 fw-400" title="+91-7482895747">+91-7482895747</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-3 outer-col-1 py-3">
                <div className="lightgraybg-30 py-5 rounded-16">
                  <div className="align-items-center text-center">
                    <div className="d-flex mb-3">
                      <span className="iconshownew">
                        <img src={fb} alt="facebook" />
                      </span>
                    </div>
                    <div className="line-h">
                      <p className="mb-3 text-uppercase text-lgray3 fn-18">our Facebook ID</p>
                      <a href="#" className="fn-24 fw-400" title="facebook.com/think11app">facebook.com/think11app</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-3 outer-col-1 py-3">
                <div className="lightgraybg-30 py-5 rounded-16">
                  <div className="align-items-center text-center">
                    <div className="d-flex mb-3">
                      <span className="iconshownew">
                        <img src={teli} alt="telegram" />
                      </span>
                    </div>
                    <div className="line-h">
                      <p className="mb-3 text-uppercase text-lgray3 fn-18">our Telegram number</p>
                      <a href="#" className="fn-24 fw-400" title="t.me/think11app">t.me/think11app</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-3 outer-col-1 py-3">
                <div className="lightgraybg-30 py-5 rounded-16">
                  <div className="align-items-center text-center">
                    <div className="d-flex mb-3">
                      <span className="iconshownew">
                        <img src={insta} alt="instagram" />
                      </span>
                    </div>
                    <div className="line-h">
                      <p className="mb-3 text-uppercase text-lgray3 fn-18">our Instagram ID</p>
                      <a href="#" className="fn-24 fw-400" title="instagram.com/think11app">instagram.com/think11app</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="bodypx chatsupport py-80" data-aos="fade-up" data-aos-delay="100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="testimonial_box-top bg-white">
                <div className="pb-1 pt-4">
                  <p>Think11 is a great platform that focuses on offering the best facilities to their customers. The customer support staff is very cooperative. I am happy that there are such platforms in India.</p>
                </div>
                <div className="testimonial_box-shape right-in"></div>
                <div className="testimonial_box-bottom">
                  <div className="testimonial_box-profile align-items-center">
                    <div className="testimonial_box-img">
                      <img src={dham} alt="Aman Singh" />
                    </div>
                    <div className="testimonial_box-info">
                      <div className="testimonial_box-name">
                        <h3 className="mb-0">Aman Singh</h3>
                        <p className="mb-1">Jaipur, Rajasthan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DownloadAppSection/>
      <Footer/>
    </>
  );
};

export default ChatSupport;
