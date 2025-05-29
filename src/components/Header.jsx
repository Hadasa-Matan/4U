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
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Link to="/">
            <img 
              src="/4U/logo.png"
              alt="Logo" 
              className="h-12 w-auto"
            />
          </Link>
        </motion.div>
        <div className="flex space-x-8 space-x-reverse">
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
      </nav>
    </motion.header>
  );
}

export default Header;
