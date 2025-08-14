import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { BsChatDots } from 'react-icons/bs';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import ConsultationCard from './components/ConsultationCard';
import Contact from './components/Contact';
import HomeButton from './components/HomeButton';
import Footer from './components/Footer';
import VisitorTracker from './components/VisitorTracker';

function MainLayout() {
  const location = useLocation();
  const showHomeButton = location.pathname !== '/';

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const openChatInNewTab = () => {
    window.open('https://chatrace.com/webchat/?p=1249354&id=kX8n4IR4DP27PkpEo2', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      {showHomeButton && <HomeButton />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/consultation" element={<ConsultationCard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      <div className="chatbot-container">
        <div className="chat-button" onClick={openChatInNewTab}>
          <BsChatDots size={24} />
        </div>
      </div>
      <VisitorTracker />
    </div>
  );
}

function App() {
  return (
    <Router basename="/4U">
      <MainLayout />
    </Router>
  );
}

export default App;
