import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primeicons/primeicons.css';
import './App.css';
import './assets/css/aos.css';
import './assets/css/bootstrap.min.css';
import './assets/css/fontawesome/css/font-awesome.min.css';
import './assets/css/intlTelInput.css';
import './assets/css/lightgallery-bundle.min.css';
import './assets/css/lightpick.css';
import './assets/css/style.css';
import './assets/css/responsive.css';

import Navbar from './Homepage/Navbar/Navbar';
import HomePagemain from './Homepage/HomePagemain';
import FantasyCricket from './FantasyCricket/FantasyCricket';
import FantasyFootball from './FantasyFootball/FantasyFootball';
import FantasyKabbadi from './FantasyKabaddi/FantasyKabbadi';
import Contact from './ContactUs/Contact';
import About from './Aboutus/About';
import DownloadApp from './DownloadApp/DownloadApp';
import FairPlay from './Small_SUB_Pages/FairPlay';
import Legalities from './Small_SUB_Pages/Legalities';
import Privacy from './Small_SUB_Pages/Privacy';
import ResponsibleGaming from './Small_SUB_Pages/ResponsibleGaming';
import FaqMain from './Small_SUB_Pages/FaqMain';
import ChatSupport from './Small_SUB_Pages/ChatSupport';
import PointSystem from './Small_SUB_Pages/PointSystem';
import Terms from './Small_SUB_Pages/Terms';
import HowToPlay from './Small_SUB_Pages/HowToPlay';
import Withdrawal from './Small_SUB_Pages/Withdrawal';

// ScrollToTop component defined inline
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Scroll to top on route change */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePagemain />} />

        {/* Fantasy Sports Pages */}
        <Route path="/fantasy-cricket" element={<FantasyCricket />} />
        <Route path="/fantasy-football" element={<FantasyFootball />} />
        <Route path="/fantasy-kabbadi" element={<FantasyKabbadi />} />

        {/* Other Pages */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/download-app" element={<DownloadApp />} />
        <Route path="/fair-play" element={<FairPlay />} />
        <Route path="/legalities" element={<Legalities />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/responsible-gaming" element={<ResponsibleGaming />} />
        <Route path="/faq" element={<FaqMain />} />
        <Route path="/chat-support" element={<ChatSupport />} />
        <Route path="/point-system" element={<PointSystem />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/how-to-play" element={<HowToPlay />} />
        <Route path="/withdrawal" element={<Withdrawal />} />
      </Routes>
    </Router>
  );
}

export default App;
