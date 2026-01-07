import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BsArrowLeft, BsShieldCheck, BsLightningCharge, BsClockHistory } from 'react-icons/bs';

// ייבוא קומפוננטים - וידאתי שהנתיבים מתאימים לתיקיות שלך בגיטהאב
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './pages/Services';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Consultation from './pages/Consultation';
import Contact from './pages/Contact';

// הגדרת דף הבית (Home) כחלק מהקובץ כדי שלא יחסרו קבצים
const Home = () => {
  const fontBold = { fontFamily: "FbAsparagosBold, sans-serif" };
  const fontRegular = { fontFamily: "FbAsparagos, sans-serif" };

  return (
    <div className="flex flex-col min-h-screen" style={fontRegular}>
      <section className="relative pt-20 pb-32 flex items-center justify-center overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-12"
          >
            {/* שימי לב לנתיב הלוגו - הוספתי /4U/ כדי שיעבוד בגיטהאב */}
            <img 
              src="/4U/images/logo.png" 
              alt="Logo" 
              className="h-32 md:h-40 w-auto mx-auto object-contain" 
              onError={(e) => e.target.src = "/4U/logo.png"} // גיבוי אם התמונה במיקום אחר
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6" style={fontBold}>
              מכניסים <span className="text-[#7cd6de]">שקט</span> ו<span className="text-[#52de4a]">שליטה</span><br />
              לניהול העסק שלך
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
              פתרונות טכנולוגיים חכמים ואוטומציות יציבות שחוסכות לך זמן ומייצרות שקט נפשי.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="px-8 py-3 bg-[#7cd6de] text-white rounded-full font-bold text-lg shadow-lg" style={fontBold}>
                לפתרונות שלנו
              </Link>
              <Link to="/contact" className="px-8 py-3 border-2 border-slate-200 text-slate-700 rounded-full font-bold text-lg" style={fontBold}>
                בואו נדבר
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <BsClockHistory className="text-[#7cd6de] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2" style={fontBold}>חיסכון בזמן</h3>
            <p className="text-slate-600 text-sm">שעות עבודה שמתפנות למשימות הליבה שלך.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <BsShieldCheck className="text-[#52de4a] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2" style={fontBold}>מינימום תקלות</h3>
            <p className="text-slate-600 text-sm">מערכות בדוקות בסטנדרט QA מקצועי.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <BsLightningCharge className="text-[#7cd6de] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2" style={fontBold}>מקסימום יעילות</h3>
            <p className="text-slate-600 text-sm">זרימת עבודה אוטומטית וחכמה.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default function App() {
  return (
    <Router basename="/4U">
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
