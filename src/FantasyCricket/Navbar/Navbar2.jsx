import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import logo from '../../assets/images/logo.svg';

const Navbar2 = () => {
  useEffect(() => {
    AOS.init({ duration: 500 }); // Initialize AOS
  }, []);

  return (
    <header className="my_header w-100" id="header">
      <div className="w-100 header_container d-flex align-items-center">
        <div className="logo_container" data-aos="fade-down">
          <a href="index.html" className="d-block">
            <img src={logo} className="w-100 default_logo" alt="Logo" />
          </a>
        </div>
        <div className="menu_container">
          <ul className="menu_list" id="menulist">
            <li data-aos="fade-up" data-aos-delay="100">
              <a href="index.html" title="Home">Home</a>
            </li>
            <li className="drop" data-aos="fade-up" data-aos-delay="300">
              <a href="#fantasy" title="Fantasy Sports">
                Fantasy Sports
                <svg className="">
                  <use xlinkHref="#down_arrow" />
                </svg>
              </a>
              <span className="sub_menu" data-index="0"></span>
              <div className="menu_dropdown px-3">
                <ul className="sub-menu">
                  <li data-aos="fade-up" data-aos-delay="400"><a href="fantasy-cricket.html">Fantasy Cricket</a></li>
                  <li data-aos="fade-up" data-aos-delay="450"><a href="fantasy-football.html">Fantasy Football</a></li>
                  <li data-aos="fade-up" data-aos-delay="500"><a href="fantasy-kabaddi.html">Fantasy Kabaddi</a></li>
                </ul>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="450">
              <a href="https://blog.think11.in/" title="Blog">Blog</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="500">
              <a href="contact-us.html" title="Contact">Contact Us</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="550">
              <a href="contact-us.html" className="btn-darkblack px-4 text-white py-3 d-flex">
                <span>REGISTER/LOGIN</span>
              </a>
            </li>
          </ul>
          <div className="d-flex d-md-none">
            <a href="javascript:void(0)" className="btn-darkblack px-2 fs-14 text-white py-1 me-3">
              <span>REGISTER/LOGIN</span>
            </a>
          </div>
          <div id="navtoggle" className="open" title="Open menu" onClick={() => menuToggle()}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar2;
