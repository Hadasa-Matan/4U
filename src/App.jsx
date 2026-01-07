import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// טעינה "עדינה" - אם הקובץ שבור, הוא לא יפיל את כל האתר מיד
const About = lazy(() => import('./components/About').catch(() => ({ default: () => <div className="p-20 text-center text-red-500 font-bold text-2xl">שגיאה בטעינת דף אודות - ודאו שהקובץ קיים ב-components</div> })));
const Testimonials = lazy(() => import('./components/Testimonials').catch(() => ({ default: () => <div className="p-20 text-center text-red-500 font-bold text-2xl">שגיאה בטעינת דף המלצות</div> })));

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
    <h1 className="text-5xl font-bold mb-6 text-slate-800" style={{ fontFamily: "FbAsparagosBold, sans-serif" }}>
      מכניסים <span style={{ color: "#7cd6de" }}>שקט</span> ו<span style={{ color: "#52de4a" }}>שליטה</span> לניהול העסק
    </h1>
    <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
      פתרונות טכנולוגיים חכמים ואוטומציות יציבות שחוסכות לך זמן ומייצרות שקט נפשי.
    </p>
    <Link to="/contact" className="mt-10 px-10 py-4 bg-[#7cd6de] text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform" style={{ fontFamily: "FbAsparagosBold, sans-serif" }}>
      בואו נדבר
    </Link>
  </div>
);

export default function App() {
  return (
    <Router basename="/4U">
      <div className="flex flex-col min-h-screen bg-white text-right" dir="rtl">
        
        {/* Header */}
        <header className="h-20 shadow-sm flex items-center justify-between px-8 bg-white fixed top-0 w-full z-50 border-b border-gray-100">
           <Link to="/" className="flex items-center">
              <img src="/4U/logo.png" alt="Logo" className="h-12 w-auto object-contain" />
           </Link>
           <nav className="hidden md:flex gap-8 font-bold text-gray-700" style={{ fontFamily: "FbAsparagosBold, sans-serif" }}>
              <Link to="/" className="hover:text-[#7cd6de] transition-colors">בית</Link>
              <Link to="/about" className="hover:text-[#7cd6de] transition-colors">אודות</Link>
              <Link to="/testimonials" className="hover:text-[#7cd6de] transition-colors">המלצות</Link>
           </nav>
        </header>

        {/* Content */}
        <main className="flex-grow pt-28">
          <Suspense fallback={<div className="text-center p-20">טוען...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="*" element={<Home />} /> {/* הגנה: כל דף לא מוכר יחזור לבית */}
            </Routes>
          </Suspense>
        </main>

        {/* Footer */}
        <footer className="p-10 bg-gray-50 text-center border-t border-gray-100 mt-20">
          <p className="text-gray-500">© {new Date().getFullYear()} כל הזכויות שמורות להדסה מתן - שקט ושליטה בעסק</p>
        </footer>
      </div>
    </Router>
  );
}
