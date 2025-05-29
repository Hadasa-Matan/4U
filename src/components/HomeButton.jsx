import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsHouseFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

function HomeButton() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a href="/" onClick={handleClick}>
      <motion.div
        className="fixed top-24 left-4 z-40 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-3 flex items-center gap-2 hover:bg-indigo-50 transition-all duration-300 group"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <BsHouseFill className="text-indigo-600 w-5 h-5" />
        <span className="text-gray-700 font-medium text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1">
          חזרה לדף הבית
        </span>
      </motion.div>
    </a>
  );
}

export default HomeButton;