import React from 'react'
import fp from '../../assets/images/fp-logo.png'
import fifa from '../../assets/images/fifa.png'
import call from '../../assets/images/call.svg'
import map from '../../assets/images/map_pin.svg'
import { Link } from 'react-router-dom'
import email from '../../assets/images/email_2.svg'
const Footer = () => {
  return (
    <>
    <footer className="bodypx">
  <div className="container-fluid">
    <div className="row">
      <div data-aos="fade-up" className="col-sm-12 col-md-3 aos-init p-0 aos-animate">
        <div className="bor_right paddingtop55 text-center text-md-start">
          <div className="col-md-12 pb-4">
            <img className="footerlogo" src="images/logo.svg" alt="" />
          </div>

          <div className="d-flex align-items-baseline pe-2">
            <div className="me-1">
              <img src={map} alt="Address" title="" width="21" height="20" className="pe-1" />
            </div>
            <p className="font-18 text-white poppins-regular my-2">
              Think11 Headquarter, Shiv Shakti Tech Hub, Shishwachak, Punpun, Patna (804453)
            </p>
          </div>

          <div className="d-flex align-items-baseline">
            <div className="me-1">
              <img src={email} alt="Email" title="" width="21" height="20" className="pe-1" />
            </div>
            <a className="fn-16 text-white" href="mailto:support@think11.in" title="support@think11.in">
              support@think11.in
            </a>
          </div>

          <div className="d-flex align-items-baseline">
            <div className="me-1">
              <img src={call} alt="call" title="" width="21" height="20" className="pe-1" />
            </div>
            <a className="fn-16 text-white" href="tel:+917477744413" title="+91 7477744413">
              +91 7477744413
            </a>
          </div>

          <div className="socialLink">
            <a href="https://www.facebook.com/think11app/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="19px" height="23px" fill="#fff">
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
              </svg>
            </a>
            <a href="https://twitter.com/Think11app" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="19px" height="23px" fill="#fff">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
              </svg>
            </a>
            <a href="javascript:void(0);" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="19px" height="23px" fill="#fff">
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path>
              </svg>
            </a>
            <a href="https://www.youtube.com/@THINK11" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="19px" height="23px" fill="#fff">
                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="col-sm-12 col-md-9 aos-init p-0 aos-animate">
        <div className="d-flex justify-content-between h-100">
          <div className="bor_right pl-70 paddingtop55">
            <h4 className="fn-18 text-lgray3 pb-4">Useful Links</h4>
            <ul className="f_link pb-0">
              <li><a href="about">About Us</a></li>
              <li><a href="download-app">Download App</a></li>
              <li><a href="fair-play">Fair Play</a></li>
              <li><a href="legalities">Legalities</a></li>
              <li><a href="privacy">Privacy Policy</a></li>
              <li><a href="responsible-gaming">Responsible Gaming</a></li>
            </ul>
          </div>

          <div className="bor_right pl-70 paddingtop55">
            <h4 className="fn-18 text-lgray3 pb-4">Help &amp; Support</h4>
            <ul className="f_link pb-0">
              <li><Link to="faq">Faqs</Link></li>
              <li><a href="chat-support">Chat Support</a></li>
              <li><a href="point-system">Fantasy Point System</a></li>
              <li><a href="terms.html">Term &amp; Conditions</a></li>
              <li><a href="terms">How to Play</a></li>
              <li><a href="withdrawal">Withdraw Policy</a></li>
            </ul>
          </div>

          <div className="text-center paddingtop55 d-md-block d-none col-md-4">
            <h4 className="fn-18 text-lgray3">Fifs Member</h4>
            <div className="mt-3">
              <img width="90" src={fifa} alt="FIFA" />
            </div>
            <h4 className="fn-18 text-lgray3 mt-4">Fairplay Policy</h4>
            <div className="mt-3">
              <img width="90" src={fp} alt="Fairplay Policy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
<div className="bodypx copyRright">
    <div className="container-fluid"> 
  <div className="row">
    <div className="py-md-4 py-3">
      <div className="row">
      <div className="col-md-6 order-md-1 order-2">
        <p className="mb-0 font-primary fn-16 text-md-start">© Copyright 2024 Think11. All Rights Reserved.</p>
      </div>
       <div className="col-md-6 order-md-2 order-1 d-md-flex d-none">
        <p className="mb-0 font-primary fn-16 text-md-end ms-auto">Design & developed by <a class="custom-link font-primary" href="https://indtechmark.com">IND Tech Mark</a></p>
       </div>
      </div>
    
    </div>
    </div>
  </div>
  </div>
  
  </>
  )
}

export default Footer

