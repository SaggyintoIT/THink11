import React, { useEffect, useRef, useState } from 'react';
import user from '../../assets/images/user.svg';
import follower from '../../assets/images/Followers.svg';
import winning from '../../assets/images/Winnings.svg';
import city from '../../assets/images/Cities.svg';
import gplay from '../../assets/images/googleplay.png';
import aplay from '../../assets/images/appplay.svg';
import IntlTelInput from 'react-intl-tel-input'; // Import the IntlTelInput component
import 'react-intl-tel-input/dist/main.css'; // Import the CSS for the IntlTelInput component

import './HeroLower.css';

const HeroLower = () => {
    const counterRef = useRef(null);
    const [isCounted, setIsCounted] = useState(false);
    const [counts, setCounts] = useState({ users: 0, followers: 0, winnings: 0, cities: 0 });

    useEffect(() => {
        const handleScroll = () => {
            if (counterRef.current) {
                const hT = counterRef.current.getBoundingClientRect().top + window.scrollY;
                const hH = counterRef.current.offsetHeight;
                const wH = window.innerHeight;

                if (window.scrollY > hT + hH - wH && !isCounted) {
                    setIsCounted(true);
                    startCounter();
                }
            }
        };

        const startCounter = () => {
            const targets = { users: 200, followers: 4, winnings: 20, cities: 150 };
            const duration = 7000;
            const stepTime = duration / Math.max(...Object.values(targets));

            const interval = setInterval(() => {
                setCounts((prevCounts) => {
                    const newCounts = { ...prevCounts };
                    let completed = true;

                    for (const key in targets) {
                        if (newCounts[key] < targets[key]) {
                            newCounts[key] = Math.min(newCounts[key] + Math.ceil(targets[key] / (duration / stepTime)), targets[key]);
                            completed = false;
                        }
                    }

                    if (completed) {
                        clearInterval(interval);
                    }
                    return newCounts;
                });
            }, stepTime);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isCounted]);

    return (
        <section className="darkblackbg bor_top" ref={counterRef}>
            <div className="bodypx">
                <div className="container-fluid">
                    <div className="row py-4">
                        <div className="col-md-7 pb-md-0 pb-4">
                            <ul className="left-counter counter-list list-unstyled mb-0 text-white">
                                <li>
                                    <div className="number_counter d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                                        <div className="me-sm-3 me-2">
                                            <img src={user} alt="Users" />
                                        </div>
                                        <div>
                                            <div className="counter-text">
                                                <span className="num_count">{counts.users}</span>M+
                                            </div>
                                            <p className="mb-0">Trusted Users</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="number_counter d-flex align-items-center" data-aos="fade-up" data-aos-delay="250">
                                        <div className="me-sm-3 me-2">
                                            <img src={follower} alt="Followers" />
                                        </div>
                                        <div>
                                            <div className="counter-text">
                                                <span className="num_count">{counts.followers}</span>K+
                                            </div>
                                            <p className="mb-0">Followers</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="number_counter d-flex align-items-center" data-aos="fade-up" data-aos-delay="300">
                                        <div className="me-sm-3 me-2">
                                            <img src={winning} alt="Winnings" />
                                        </div>
                                        <div>
                                            <div className="counter-text">₹ <span className="num_count">{counts.winnings}</span> crore+</div>
                                            <p className="mb-0">Daily Winnings</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="number_counter d-flex align-items-center" data-aos="fade-up" data-aos-delay="400">
                                        <div className="me-sm-3 me-2">
                                            <img src={city} alt="Cities" />
                                        </div>
                                        <div>
                                            <div className="counter-text">
                                                <span className="num_count">{counts.cities}</span>+
                                            </div>
                                            <p className="mb-0">Cities</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-5">
                            <div className="d-md-none d-flex align-items-center justify-content-between">
                                <a href="#" className="d-flex playbtn btn-btnwhite mt-2 mt-xl-3 fw-600" data-aos="fade-up" data-aos-delay="450">
                                    <img className="m-auto" src={gplay} alt="Google Play" />
                                </a>
                                <a href="#" className="d-flex playbtn btn-btnwhite mt-2 mt-xl-3 fw-600 ms-sm-4 ms-2" data-aos="fade-up" data-aos-delay="550">
                                    <img className="m-auto" src={aplay} alt="App Play" />
                                </a>
                            </div>
                            <div className="d-xl-flex topph align-items-center text-xl-start text-center">
                                <div className="text-white ms-xl-auto">
                                    <span className="fw-600 fn-18" data-aos="fade-up" data-aos-delay="50">Download official
                                        <p className="fw-600 fn-18 d-xl-block mb-0 d-inline" data-aos="fade-up" data-aos-delay="150">Think11 app</p>
                                    </span>
                                </div>

                                <div className="country-wrap">
                                <IntlTelInput
                                placeholder='Enter your number'
                preferredCountries={['in']} // Set primary flag as India
                containerClassName="intl-tel-input"
                inputClassName="form-control font-16 oval-input"
                buttonClassName="btn"
                onPhoneNumberChange={(isValid, value, countryData) => {
                    console.log('Valid:', isValid, 'Value:', value, 'Country Data:', countryData);
                }}
                inputProps={{
                    placeholder: "Enter your phone number", // Placeholder for the input field
                }}
            />
                                </div>

                                <div>
                                    <a href="#" className="btn-darkblack  text-white  fw-600 d-flex"><span>Get app link</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroLower;
