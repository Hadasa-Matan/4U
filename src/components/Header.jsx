import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'פתרונות חכמים', path: '/services' },
    { name: 'אודות', path: '/about' },
    { name: 'המלצות', path: '/testimonials' },
    { name: 'ייעוץ', path: '/consultation' },
    { name: 'צור קשר', path: '/contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-none"
          >
            <Link to="/">
              <img 
                src="/logo.png"
                alt="Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </motion.div>
          
          <div className="hidden md:flex md:items-center md:justify-end md:flex-1 md:space-x-8 md:space-x-reverse">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`${
                    isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white'
                  } hover:text-indigo-600 transition-all duration-300 text-lg font-medium`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex flex-1 justify-end">
            <button
              className={`${
                isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white'
              } p-2 rounded-md hover:bg-gray-100/20`}
            >
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
