import React, { useEffect, useState, useRef } from 'react';
import logo from '../../assets/images/logo.svg'; // Adjust the path according to your structure
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-scroll';

const Navbar = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: 'ease-in-out', // Animation easing
            once: true, // Whether animation should happen only once
        });
    }, []);

    const [isHeaderFixed, setIsHeaderFixed] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [dropdownIndex, setDropdownIndex] = useState(null);
    const headerRef = useRef(null);

    // Fix header on scroll
    const fixHeader = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsHeaderFixed(scrollTop > 0);
    };

    // Toggle menu visibility
    const handleMenuToggle = () => {
        setMenuActive(!menuActive);
    };

    // Handle dropdown hover
    const handleMouseEnter = (index) => {
        setDropdownIndex(index);
    };

    const handleMouseLeave = () => {
        setDropdownIndex(null);
    };

    // Resize handler
    const handleResize = () => {
        if (window.innerWidth > 999) {
            setDropdownIndex(null);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', fixHeader);
        window.addEventListener('resize', handleResize);
        fixHeader(); // Initial check on load

        return () => {
            window.removeEventListener('scroll', fixHeader);
            window.removeEventListener('resize', handleResize);
        };
    }, [dropdownIndex]);

    return (
        <header className={`my_header w-100 ${isHeaderFixed ? 'fixed' : ''}`} id="header" ref={headerRef}>
            <div className="w-100 header_container d-flex align-items-center">
                <div className="logo_container">
                    <a href="index.html" className="d-block">
                        <img src={logo} className="w-100 default_logo" alt="Logo" />
                    </a>
                </div>
                <div className="menu_container">
                    <ul className={`menu_list ${menuActive ? 'active' : ''}`} id="menulist">
                        <li data-aos="fade-up" data-aos-delay="100">
                            <Link to="hero" smooth={true} duration={0}>Home</Link>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="300">
                            <Link to="features" smooth={true} duration={0}>Features</Link>
                        </li>
                        <li className="drop" data-aos="fade-up" data-aos-delay="300">
                            <Link to="popular" smooth={true} duration={0}>
                                Fantasy Sports
                                <svg className="">
                                    <use xlinkHref="#down_arrow" />
                                </svg>
                            </Link>
                            <span className="sub_menu" data-index="0"></span>
                            <div className="menu_dropdown px-3">
                                <ul className="sub-menu">
                                <li><a href="/fantasy-cricket">Fantasy Cricket</a></li>
                                    <li><a href="/fantasy-football">Fantasy Football</a></li>
                                    <li><a href="/fantasy-kabbadi">Fantasy Kabbadi</a></li>
                                </ul>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="400">
                            <Link to="how-it-works" smooth={true} duration={0}>How It Works</Link>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="450">
                            <a href="https://blog.think11.in/" title="Blog">Blog</a>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="500">
                        <a href="/contact">Contact</a>
                        </li>  
                        <li data-aos="fade-up" data-aos-delay="550">
                            <a href="/contact" className="btn-darkblack px-4 text-white py-3 d-flex">
                                <span>REGISTER/LOGIN</span>
                            </a>
                        </li>
                    </ul>
                    <div className="d-flex d-md-none">
                        <Link to="/contact" className="btn-darkblack px-2 fs-14 text-white py-1 me-3">
                            <span>REGISTER/LOGIN</span>
                        </Link>
                    </div>
                    <div id="navtoggle" className={`open ${menuActive ? 'active' : ''}`} title="Open menu" onClick={handleMenuToggle}>
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

export default Navbar;
