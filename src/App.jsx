import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// טעינה בטוחה של הקומפוננטים
const About = lazy(() => import('./components/About').catch(() => ({ default: () => <div className="p-20 text-center">דף אודות זמנית לא זמין</div> })));
const Testimonials = lazy(() => import('./components/Testimonials').catch(() => ({ default: () => <div className="p-20 text-center">דף המלצות זמנית לא זמין</div> })));

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-800" style={{ fontFamily: "FbAsparagosBold, sans-serif" }}>
      מכניסים <span className="text-[#7cd6de]">שקט</span> ו<span className="text-[#52de4a]">שליטה</span> לניהול העסק
    </h1>
    <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
      פתרונות טכנולוגיים חכמים ואוטומציות יציבות שחוסכות לך זמן ומייצרות שקט נפשי.
    </p>
    <Link to="/about" className="mt-10 px-10 py-4 bg-[#7cd6de] text-white rounded-full font-bold shadow-lg hover:bg-[#6bc5cd] transition-all">
      בואו נכיר
    </Link>
  </div>
);

export default function App() {
  return (
    <Router basename="/4U">
      {/* Container ראשי עם הגדרת כיוון RTL ברורה */}
      <div className="flex flex-col min-h-screen bg-white" dir="rtl">
        
        {/* Header מתוקן - עם גובה קבוע ומניעת התפרסות לוגו */}
        <header className="h-20 shadow-sm flex items-center bg-white fixed top-0 w-full z-[100] border-b border-gray-100">
           <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
             <Link to="/" className="flex items-center">
                <img 
                  src="/4U/logo.png" 
                  alt="Logo" 
                  className="h-12 w-auto object-contain" 
                  style={{ maxHeight: '48px' }} // חסימה סופית ללוגו הענק
                />
             </Link>
             <nav className="flex gap-6 font-bold text-gray-700">
                <Link to="/about" className="hover:text-[#7cd6de]">אודות</Link>
                <Link to="/testimonials" className="hover:text-[#7cd6de]">המלצות</Link>
             </nav>
           </div>
        </header>

        {/* גוף האתר - עם Padding עליון כדי שלא יתחבא תחת ה-Header */}
        <main className="flex-grow pt-32">
          <Suspense fallback={<div className="text-center p-20">טוען...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/testimonials" element={<Testimonials />} />
            </Routes>
          </Suspense>
        </main>

        <footer className="p-10 bg-gray-50 text-center border-t mt-auto">
          <p className="text-gray-500 font-bold">© 2026 כל הזכויות שמורות להדסה מתן</p>
        </footer>
      </div>
    </Router>
  );
}
