import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// קומפוננטים זמניים כדי שהאתר לא יקרוס אם קובץ חסר
const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
    <img src="/4U/logo.png" alt="Logo" className="h-32 mb-8 object-contain" />
    <h1 className="text-4xl font-bold mb-4">מביאים שקט ושליטה לעסק שלך</h1>
    <p className="text-xl text-gray-600">האתר בשיפוץ קל ומחזור לעבודה בעוד רגע...</p>
    <Link to="/contact" className="mt-8 px-6 py-3 bg-[#7cd6de] text-white rounded-full font-bold">צרו קשר</Link>
  </div>
);

const Placeholder = ({ name }) => (
  <div className="flex items-center justify-center min-h-[60vh] text-2xl font-bold">{name} - בקרוב</div>
);

// ה-App הפשוט ביותר - בלי ייבוא של קבצים שעלולים להיות חסרים
export default function App() {
  return (
    <Router basename="/4U">
      <div className="flex flex-col min-h-screen bg-white text-right" dir="rtl">
        {/* Header פשוט וקבוע */}
        <header className="h-16 shadow-md flex items-center justify-between px-8 bg-white fixed top-0 w-full z-50">
           <Link to="/"><img src="/4U/logo.png" alt="Logo" className="h-10" /></Link>
           <nav className="flex gap-4 font-bold text-sm">
              <Link to="/services">מוצרים</Link>
              <Link to="/about">אודות</Link>
              <Link to="/testimonials">המלצות</Link>
              <Link to="/contact">צור קשר</Link>
           </nav>
        </header>

        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Placeholder name="המוצרים שלנו" />} />
            <Route path="/about" element={<Placeholder name="אודות" />} />
            <Route path="/testimonials" element={<Placeholder name="המלצות" />} />
            <Route path="/contact" element={<Placeholder name="צור קשר" />} />
          </Routes>
        </main>

        <footer className="p-8 bg-gray-50 text-center border-t">
          <p>© כל הזכויות שמורות להדסה מתן - שקט ושליטה בעסק</p>
        </footer>
      </div>
    </Router>
  );
}
