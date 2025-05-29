import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsTelephone, BsEnvelope, BsClock } from 'react-icons/bs';

function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">יצירת קשר</h3>
            <div className="space-y-3">
              <a href="tel:0504133408" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <BsTelephone className="flex-shrink-0" />
                <span>050-413-3408</span>
              </a>
              <a href="mailto:hadasamatan@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <BsEnvelope className="flex-shrink-0" />
                <span>hadasamatan@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <BsClock className="flex-shrink-0" />
                <span>א'-ה': 10:00-16:00, 20:00-23:00</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">ניווט מהיר</h3>
            <nav className="space-y-2">
              <button onClick={() => handleNavigation('/services')} className="block text-right w-full text-gray-300 hover:text-white transition-colors">פתרונות חכמים</button>
              <button onClick={() => handleNavigation('/about')} className="block text-right w-full text-gray-300 hover:text-white transition-colors">אודות</button>
              <button onClick={() => handleNavigation('/testimonials')} className="block text-right w-full text-gray-300 hover:text-white transition-colors">המלצות</button>
              <button onClick={() => handleNavigation('/consultation')} className="block text-right w-full text-gray-300 hover:text-white transition-colors">ייעוץ</button>
              <button onClick={() => handleNavigation('/contact')} className="block text-right w-full text-gray-300 hover:text-white transition-colors">צור קשר</button>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-lg text-gray-300">© {currentYear} הדסה מתן. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;