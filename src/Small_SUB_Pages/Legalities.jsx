import React, { useEffect } from 'react';
import Navbar2 from '../FantasyCricket/Navbar/Navbar2';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library
import DownloadAppSection from '../Homepage/DownloadAPP/DownloadAPp';
import Footer from '../Homepage/Footer/Footer';

const Legalities = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration
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
                                <span className="fs-60 fw-300" data-aos="fade-up" data-aos-delay="400">Legalities</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bodypx py-80 bg-white">
                <div className="container-fluid mi-container">
                    <div className="row align-items-md-center">
                        <div className="col-md-12">
                            <div className="col-lg-12">
                                <h2 className="font-40 fw-300" data-aos="fade-up" data-aos-delay="50">Legalities</h2>
                                <p data-aos="fade-up" data-aos-delay="150">GAME OF SKILLS</p>
                                <p data-aos="fade-up" data-aos-delay="200">
                                    Think 11 is considered as a “Game of Skill.” The game of skills can be defined as a game wherein the skills of the individuals participating in any online fantasy sports gaming play a dominant role rather than the mere luck of the individuals. The individuals in the game of skills use their knowledge, skills, training, and attention for participation and winning.
                                </p>
                                <p data-aos="fade-up" data-aos-delay="300">
                                    Online fantasy sports gaming is considered to be a legal practice around the world with certain states being an exception. Online fantasy sports gaming is entirely based on the concept of the Game of Skills, wherein the users form their own teams and are allocated points on the basis of the on-field performance of their chosen players.
                                </p>
                                <p data-aos="fade-up" data-aos-delay="400">
                                    Think 11 is completely legal as it offers services, Fun Features, Program(s), and Contest(s) related to fantasy cricket, fantasy football, & fantasy kabaddi. The services, contest(s), and program(s) related to online fantasy sports gaming offered by Think 11 enable its users to create their own team prior to the match begins, and then the teams are awarded points on the basis of the real-life performance of the players chosen by the users in the team. The individual whose team scores the highest aggregate of points is announced as the winner. The formation of the team by the users of Think 11 is entirely dependent on the skills, knowledge, and attention of the users which makes online fantasy sports gaming offered at Think 11 a game of skills and 100% legal.
                                </p>
                                <p data-aos="fade-up" data-aos-delay="500"><strong>ALIGNMENT WITH THE INDIAN LAWS</strong></p>
                                <p data-aos="fade-up" data-aos-delay="600">
                                    The game of skills such as online fantasy sports gaming is considered to be legal all over India, except certain states such as Sikkim, Assam, Odisha, Telangana, Nagaland, and Andhra Pradesh. The Public Gambling Act, of 1867 (“PGA, 1867”) is recognized as the primary legality driving the prevalence of gambling in India.
                                </p>
                                <p data-aos="fade-up" data-aos-delay="700">
                                    The PGA defines the act of “public gambling” and the keeping of a common gaming house as a criminal and punishable act in India. However, online fantasy sports gaming is considered to be an exception under the PGA, wherein the provisions and punishments of the PGA shall not be applicable to games played by the user using their skills and knowledge as primary tools. 
                                    <strong>Sikkim, Assam, Odisha, Telangana, Nagaland & Andhra Pradesh</strong>
                                </p>
                                <p data-aos="fade-up" data-aos-delay="800">
                                    There are various states in India wherein the laws related to the game of skills are unclear. In this regard, for the websites offering online fantasy sports gaming, it remains unclear whether to offer the services for free or not. The Indian states with no clearance regarding the offering of pay-to-play contests include Sikkim, Assam, Odisha, Telangana, Nagaland, and Andhra Pradesh.
                                </p>
                                <p data-aos="fade-up" data-aos-delay="900">
                                    In this context, Think 11 does not permit the users identified as residents of Sikkim, Odisha, Telangana, Assam, Nagaland, and Andhra Pradesh to participate in the pay-to-play contest(s) organized by Think 11.
                                </p>
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

export default Legalities;
