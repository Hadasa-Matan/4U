import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const BRAND_GREEN = "#52de4a";
const BRAND_CYAN = "#7cd6de";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // הפניה לשם הפונט העבה שהגדרנו ב-CSS
  const fontBoldStyle = { fontFamily: "FbAsparagosBold, sans-serif" };

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
    { name: "ייעוץ", path: "/consultation" },
    { name: "צור קשר", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed top-0 w-full z-50 bg-white shadow-[0_6px_24px_rgba(0,0,0,0.06)]"
    >
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-14 flex items-center">
          
          {/* LOGO - לחיצה עליו מחזירה הביתה */}
          <Link to="/" className="flex items-center flex-none">
            <img
              src="/4U/logo.png"
              alt="Logo"
              className="h-11 w-auto"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex flex-1 justify-end items-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative text-[17px] transition-colors duration-300"
                  style={{
                    ...fontBoldStyle,
                    color: isActive ? BRAND_GREEN : "#1f2937",
                  }}
                >
                  {item.name}
                  {/* underline */}
                  <span
                    className="absolute -bottom-1 right-0 h-[2px] rounded-full transition-all duration-300"
                    style={{
                      width: isActive ? "100%" : "0%",
                      backgroundColor: BRAND_CYAN,
                    }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* MOBILE MENU */}
          <div className="md:hidden flex flex-1 justify-end">
            <button className="p-2 rounded-lg" style={{ color: "#1f2937" }}>
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
