import React from 'react'
import Navbar2 from '../FantasyCricket/Navbar/Navbar2'
import FootballHero from './FootballHero'
import HeroLower from '../Homepage/Hero/HeroLower'
import FootballMid from './FootballMid'
import Footer from '../Homepage/Footer/Footer'
import FaqSection from '../Homepage/FAQ/Faq'
import DownloadAppSection from '../Homepage/DownloadAPP/DownloadAPp'

const FantasyFootball = () => {
  return (
    <>
    <Navbar2/>
    <FootballHero/>
    <HeroLower/>
    <FootballMid/>
    <FaqSection/>
    <DownloadAppSection/>
    <Footer/>
    </>
  )
}

export default FantasyFootball