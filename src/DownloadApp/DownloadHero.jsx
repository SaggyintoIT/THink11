import React from 'react'
import HeroLower from '../Homepage/Hero/HeroLower'
import influence from '../assets/images/insurance.svg'
import pot1 from '../assets/images/01-portrait.png'
import pot2 from '../assets/images/02-portrait.png'
import pot3 from '../assets/images/03-portrait.png'
import TestimonialSection from '../Homepage/Testimonial/Testimonial'
import FaqSection from '../Homepage/FAQ/Faq'
import DownloadAppSection from '../Homepage/DownloadAPP/DownloadAPp'
import Footer from '../Homepage/Footer/Footer'
const DownloadHero = () => {
  return (
    <>
    
<section className="bodypx downloadbg text-white slidoverlay h-66">
</section>
<HeroLower/>
<section className="bodypx py-80" id="how-it-works">
  <div className="container">
    <div className="col-md-12 text-center mb-4">
      <h2 className="fs-40 fw-300" data-aos="fade-up" data-aos-delay="350">
        Think11 makes playing Fantasy Cricket easy.
      </h2>
      <p className="font-18 poppins-regular my-3" data-aos="fade-up" data-aos-delay="450">
        Follow these steps to install the Think11 Android App
      </p>
    </div>
  </div>
  <div className="container mi-container mt-5 pt-4">
    <div className="bg-white rounded20">
      <div className="d-flex">
        <div className="plyresponsible d-flex align-items-center darkblackbg">
          <img className="" width="" src={influence} alt="Insurance" />
          <h3 className="fn-18 mb-0 fw-500 px-2 ms-1 text-white">100% Safe and Secure</h3>
        </div>
      </div>
      <div className="d-md-flex mb-4 gap-5 justify-content-between paddingtopfantasy mt-md-4 pt-5">
        <div className="w-100">
          <div className="safeSecure">
            <div className="toptext">
              <span className="topnumber">
                <p className="num fn-24 fw-500">1</p>
              </span>
              <span className="py-3 d-block fn-18">
                Open think11 & click on “ <a className="fw-600" href="#">Download <br /> for Android</a> ” button
              </span>
            </div>
            <div className="safeSecureimg">
              <img className="w-100" src={pot1} alt="Step 1" />
            </div>
          </div>
        </div>
        <div className="w-100 my-md-0 my-5">
          <div className="safeSecure">
            <div className="toptext">
              <span className="topnumber">
                <p className="num fn-24 fw-500">2</p>
              </span>
              <span className="py-3 d-block fn-18">
                Wait for the apk to download & click on <br />“<a className="fw-600" href="#">Open </a>”
              </span>
            </div>
            <div className="safeSecureimg">
              <img className="w-100" src={pot2} alt="Step 2" />
            </div>
          </div>
        </div>

        <div className="w-100">
          <div className="safeSecure">
            <div className="toptext">
              <span className="topnumber">
                <p className="num fn-24 fw-500">3</p>
              </span>
              <span className="py-3 d-block fn-18">
                Click “<a className="fw-600" href="#">Allow for this Source </a>” when <br /> prompted & then click on Install button
              </span>
            </div>
            <div className="safeSecureimg">
              <img className="w-100" src={pot3} alt="Step 3" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pb-5">
        <p className="fw-600">
          Visit our website to download the Think11 Android app. There are no fantasy sports apps on Google Play Store that allow you to win money.
        </p>
      </div>
    </div>
  </div>
</section>
<TestimonialSection/>
<FaqSection/>
<DownloadAppSection/>
<Footer/>


    </>
  )
}

export default DownloadHero