import React from 'react'
import Navbar2 from '../FantasyCricket/Navbar/Navbar2'
import loc from '../assets/images/loc.svg'
import tel from '../assets/images/tel.svg'
import email from '../assets/images/email.svg'
import DownloadAppSection from '../Homepage/DownloadAPP/DownloadAPp'
import Footer from '../Homepage/Footer/Footer'
const Contact = () => {
  return (
    <>
    <Navbar2/>
    <section className="bodypx banner aboutbanner text-white d-flex">
    <div className="container-fluid pt-77 m-auto w-100">
      <div className="row align-items-center mt-md-0 mt-3">   
     <div className="col-md-12">   
      <div className="text-white text-center tracking-in-expand" >
        <span className="fs-60 fw-300" data-aos="fade-up" data-aos-delay="400">Contact us </span>      
          </div>
          </div>    
        </div>
    </div>
    </section>
    <section className="bodypx bg-white py-80">
      <div className="container-fluid">    
        <div className="row about-text align-self-center">
          <div className="col-lg-6 contectform">
            <h3 className="color-1 fn-40 fw-300">Leave a message</h3>
            <p className="pt-1 pb-3">Fill up the form below, our team will get back soon</p>

            <div className="form-floating mb-3 mt-3">
              <input type="text" className="form-control" id="YourName" placeholder="Enter Your Name*" name="Name*" />
              <label htmlFor="YourName">Name</label>
            </div>

            <div className="form-floating mb-3 mt-3">
              <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
              <label htmlFor="email">Email</label>
            </div>

            <div className="form-floating mb-3 mt-3">
              <input type="text" className="form-control" id="CompanyName" placeholder="Enter Company Name" name="Company Name" />
              <label htmlFor="CompanyName">Company Name</label>
            </div>

            <div className="form-floating mb-3 mt-3">
              <input type="text" className="form-control" id="India" placeholder="Enter Your Location*" name="India*" />
              <label htmlFor="India">Location</label>
            </div>

            <div className="form-floating mb-3 mt-3">
              <input type="tel" className="form-control" id="Phone" placeholder="Enter Phone Number" name="Phone Number" />
              <label htmlFor="Phone">Phone Number</label>
            </div>

            <div className="form-floating mb-3 mt-3">
              <input type="url" className="form-control" id="Website" placeholder="Enter Website" name="Website" />
              <label htmlFor="Website">Website</label>
            </div>

            <div className="form-floating h_auto">
              <textarea className="form-control" rows="4" id="Message" style={{ minHeight: '150px', resize: 'none' }} name="text" placeholder="Message goes here"></textarea>
              <label htmlFor="Message">Message*</label>
            </div>

            <div className="form-check d-flex pt-4 align-items-center">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label className="form-check-label ms-2" htmlFor="defaultCheck1">
                I agree to receive emails, newsletters, and promotional messages
              </label>
            </div>

            <div className="mt-4 d-flex">
              <a href="javascript:void(0);" className="btn-darkblack text-white fw-600 d-flex">
                <span>Send Message</span>
              </a>
            </div>
          </div>

          <div className="col-lg-6 ms-auto d-flex">
            <div className="process-desc m-auto text-start">
              <div className="con-address mt-3">
                <div className="foo-address pb-2">   
                  <h3 className="color-1 fn-40 fw-300">Have any questions?</h3>
                  <p>If you have any questions about our product, service, payment, or company, visit our FAQs page.</p>

                  <div className="mt-4 d-flex">
                    <a href="javascript:void(0);" className="btn-darkblack text-white fw-600 d-flex">
                      <span>Read FAQ</span>
                    </a>
                  </div>

                  <div className="d-flex mt-5">
                    <div className="me-2 boxiconcheckmark"> 
                      <img src={email} alt="Email" /> 
                    </div>
                    <div>
                      <span className="text-lgray3 d-block">Email</span>
                      <a className="color-1 text-decoration-none" href="mailto:support@think11.in" title="support@think11.in">support@think11.in</a>
                    </div>
                  </div>

                  <div className="d-flex py-4">
                    <div className="me-2 boxiconcheckmark"> 
                      <img src={tel} alt="Phone" /> 
                    </div>
                    <div>
                      <span className="text-lgray3 d-block">Phone Number</span>
                      <a className="color-1 text-decoration-none" href="tel:+917477744413" title="+91 7477744413">+91 7477744413</a>
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className="me-2 boxiconcheckmark"> 
                      <img src={loc} alt="Location" /> 
                    </div>
                    <div>
                      <span className="text-lgray3 d-block">Visit Us</span>
                      <p className="fw-400">Think 11 Headquarter, Shishwachak, Punpun, Patna (804453)</p>
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
  )
}

export default Contact