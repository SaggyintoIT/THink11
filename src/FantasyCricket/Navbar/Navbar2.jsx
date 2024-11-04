import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import logo from '../../assets/images/logo.svg';
import { Link as RouterLink } from 'react-router-dom'; // Import with alias
const Navbar2 = () => {
  useEffect(() => {
    AOS.init({ duration: 500 }); // Initialize AOS
  }, []);

  return (
    <header className="my_header w-100" id="header">
      <div className="w-100 header_container d-flex align-items-center">
        <div className="logo_container" data-aos="fade-down">
          <a href="index.html" className="d-block">
          <RouterLink to="/">  <img src={logo} className="w-100 default_logo" alt="Logo" /></RouterLink> 
          </a>
        </div>
        <div className="menu_container">
          <ul className="menu_list" id="menulist">
            <li data-aos="fade-up" data-aos-delay="100">
            <RouterLink to="/">Home</RouterLink>
            </li>
            <li className="drop DropN2" data-aos="fade-up" data-aos-delay="300">
              <a href="#fantasy" title="Fantasy Sports">
                Fantasy Sports
                <span className="material-symbols-outlined arrow-icon Arrow_n2">keyboard_arrow_down</span>
                
              </a>
              <span className="sub_menu" data-index="0"></span>
              <div className="menu_dropdown px-3">
                <ul className="sub-menu">
                <li><RouterLink to="/fantasy-cricket">Fantasy Cricket</RouterLink></li>
                                    <li><RouterLink to="/fantasy-football">Fantasy Football</RouterLink></li>
                                    <li><RouterLink to="/fantasy-kabbadi">Fantasy Kabbadi</RouterLink></li>
                </ul>
              </div>
            </li>
            <li data-aos="fade-up blog_nav2" data-aos-delay="450">
              <a href="https://blog.think11.in/" className='blog_nav2' title="Blog">Blog</a>
            </li>
            <li data-aos="fade-up" data-aos-delay="500">
            <RouterLink to="/contact">Contact</RouterLink>
            </li>
            <li data-aos="fade-up" data-aos-delay="550">
            <a href='https://think11.app/signup/?referral=AE6D6A' className="btn-darkblack px-2 fs-14 text-white py-1 me-3">
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
