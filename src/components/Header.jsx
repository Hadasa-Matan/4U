import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const BRAND_GREEN = "#52de4a";
const BRAND_CYAN = "#7cd6de";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "פתרונות חכמים", path: "/services" },
    { name: "אודות", path: "/about" },
    { name: "המלצות", path: "/testimonials" },
    { name: "ייעוץ", path: "/consultation" },
    { name: "צור קשר", path: "/contact" },
  ];

  const isSolid = isScrolled || location.pathname !== "/";

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isSolid
          ? "bg-white/95 backdrop-blur-md shadow-[0_6px_30px_rgba(0,0,0,0.08)]"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center">
          {/* LOGO */}
          <Link to="/" className="flex items-center flex-none">
            <img
              src="/4U/logo.png"
              alt="Logo"
              className="h-11 w-auto"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex md:flex-1 md:justify-end md:items-center gap-8">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    className="relative text-[17px] font-medium transition-colors duration-300"
                    style={{
                      color: isActive ? BRAND_GREEN : "#1f2937",
                    }}
                  >
                    {item.name}

                    {/* underline */}
                    <span
                      className="absolute -bottom-2 right-0 h-[2px] rounded-full transition-all duration-300"
                      style={{
                        width: isActive ? "100%" : "0%",
                        backgroundColor: BRAND_CYAN,
                      }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* MOBILE MENU ICON */}
          <div className="md:hidden flex flex-1 justify-end">
            <button
              className="p-2 rounded-lg transition-colors"
              style={{ color: "#1f2937" }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
