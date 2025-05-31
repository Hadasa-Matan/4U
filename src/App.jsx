import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { BsChatDots } from 'react-icons/bs';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import ConsultationCard from './components/ConsultationCard';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import HomeButton from './components/HomeButton';
import Footer from './components/Footer';
import VisitorTracker from './components/VisitorTracker';

function MainLayout() {
  const [showChat, setShowChat] = useState(false);
  const location = useLocation();
  const showHomeButton = location.pathname !== '/';

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
        <div className="chat-button" onClick={() => setShowChat(!showChat)}>
          <BsChatDots size={24} />
        </div>
        {showChat && (
          <div className="chat-window">
            <ChatBot setShowChat={setShowChat} />
          </div>
        )}
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
