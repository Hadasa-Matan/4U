import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// קומפוננטים זמניים
const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
    {/* כאן מחקתי את התמונה כדי שלא תהיה כפילות עם ה-Header */}
    <h1 className="text-5xl font-bold mb-6 text-slate-800" style={{ fontFamily: "FbAsparagosBold, sans-serif" }}>
      מכניסים <span style={{ color: "#7cd6de" }}>שקט</span> ו<span style={{ color: "#52de4a" }}>שליטה</span> לניהול העסק
    </h1>
    <p className="text-xl text-gray-600 max-w-2xl">
      פתרונות טכנולוגיים חכמים ואוטומציות יציבות שחוסכות לך זמן ומייצרות שקט נפשי.
    </p>
    <Link to="/contact" className="mt-10 px-8 py-3 bg-[#7cd6de] text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
      בואו נדבר
    </Link>
  </div>
);

const Placeholder = ({ name }) => (
  <div className="flex items-center justify-center min-h-[60vh] text-2xl font-bold" style={{ fontFamily: "FbAsparagosBold, sans-serif" }}>
    {name} - בקרוב
  </div>
);

export default function App() {
  return (
    <Router basename="/4U">
      <div className="flex flex-col min-h-screen bg-white text-right" dir="rtl">
        {/* Header - הלוגו מופיע כאן פעם אחת וזה מספיק */}
        <header className="h-20 shadow-sm flex items-center justify-between px-8 bg-white fixed top-0 w-full z-50 border-b border-gray-100">
           <Link to="/" className="flex items-center">
              <img src="/4U/logo.png" alt="Logo" className="h-12 w-auto object-contain" />
           </Link>
           <nav className="hidden md:flex gap-8 font-bold text-gray-700">
              <Link to="/services" className="hover:text-[#7cd6de] transition-colors">מוצרים</Link>
              <Link to="/about" className="hover:text-[#7cd6de] transition-colors">אודות</Link>
              <Link to="/testimonials" className="hover:text-[#7cd6de] transition-colors">המלצות</Link>
              <Link to="/contact" className="hover:text-[#7cd6de] transition-colors">צור קשר</Link>
           </nav>
        </header>

        <main className="flex-grow pt-28">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Placeholder name="המוצרים שלנו" />} />
            <Route path="/about" element={<Placeholder name="אודות" />} />
            <Route path="/testimonials" element={<Placeholder name="המלצות" />} />
            <Route path="/contact" element={<Placeholder name="צור קשר" />} />
          </Routes>
        </main>

        <footer className="p-10 bg-gray-50 text-center border-t border-gray-100 mt-20">
          <p className="text-gray-500">© {new Date().getFullYear()} כל הזכויות שמורות להדסה מתן - שקט ושליטה בעסק</p>
        </footer>
      </div>
    </Router>
  );
}
