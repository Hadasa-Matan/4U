import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const BRAND_GREEN = "#52de4a";
const BRAND_CYAN = "#7cd6de";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // הגדרת הסטייל לפונט העבה (Bold) מה-CSS
  const fontBoldStyle = { 
    fontFamily: "FbAsparagosBold, sans-serif",
    fontWeight: "bold" 
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "המוצרים שלנו", path: "/services" },
    { name: "אודות", path: "/about" },
    { name: "המלצות", path: "/testimonials" },
    { name: "אבחון עסקי במתנה", path: "/consultation" },
    { name: "צור קשר", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.35 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          
          {/* LOGO - לחיצה עליו היא החזרה לדף הבית */}
          <Link to="/" className="flex items-center flex-none">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative text-[17px] transition-colors duration-300 py-1"
                  style={{
                    ...fontBoldStyle,
                    color: isActive ? BRAND_GREEN : "#1f2937",
                  }}
                >
                  {item.name}
                  {/* Underline indicator */}
                  <span
                    className="absolute bottom-0 right-0 h-[3px] rounded-full transition-all duration-300"
                    style={{
                      width: isActive ? "100%" : "0%",
                      backgroundColor: BRAND_CYAN,
                    }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button className="p-2 text-slate-800">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
