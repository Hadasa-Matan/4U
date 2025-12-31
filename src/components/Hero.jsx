import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image (NO overlay) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/background.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Buttons only - pushed lower */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-end pb-24">
        <div className="text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/consultation"
              className="bg-blue-500 text-white px-8 py-4 rounded-full font-medium text-lg inline-block hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              שיחת יעוץ ללא עלות
            </Link>

            <Link
              to="/services"
              className="bg-transparent border-2 border-blue-300 text-blue-300 px-8 py-4 rounded-full font-medium text-lg inline-block hover:bg-blue-300 hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
            >
              הפתרונות שלנו
            </Link>
          </motion.div>
        </div>
