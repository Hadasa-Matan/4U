import React from "react";
import { Link, useLocation } from "react-router-dom";

const BRAND_GREEN = "#52de4a";
const BRAND_CYAN = "#7cd6de";

function Header() {
  const location = useLocation();

  const fontBoldStyle = { 
    fontFamily: "'FbAsparagosBold', sans-serif",
    fontWeight: "bold" 
  };

  const navItems = [
    { name: "המוצרים שלנו", path: "/services" },
    { name: "אודות", path: "/about" },
    { name: "המלצות", path: "/testimonials" },
    { name: "ייעוץ", path: "/consultation" },
    { name: "צור קשר", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[100] bg-white shadow-md h-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 w-full flex flex-row-reverse justify-between items-center">
        
        {/* LOGO - הגדרת גובה קשיחה למניעת הלוגו הענק שראית */}
        <Link to="/" className="flex-none block" style={{ height: '40px' }}>
          <img 
            src="/4U/logo.png" 
            alt="Logo" 
            className="h-10 w-auto object-contain" 
            style={{ height: '40px', maxWidth: 'none' }}
          />
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex flex-row-reverse items-center gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-lg transition-colors whitespace-nowrap"
                style={{
                  ...fontBoldStyle,
                  color: isActive ? BRAND_GREEN : "#1f2937",
                }}
              >
                {item.name}
                {isActive && (
                  <span 
                    className="absolute -bottom-1 right-0 w-full h-1 rounded-full" 
                    style={{ backgroundColor: BRAND_CYAN }} 
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default Header;
