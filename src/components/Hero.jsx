import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image (NO overlay, NO extra layers) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/background.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Buttons only - pushed lower */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-end pb-32">
        <div className="w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/consultation"
              className="bg-indigo-600 text-white px-8 py-4 rounded-full font-medium text-lg inline-block hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              שיחת יעוץ ללא עלות
            </Link>

            <Link
              to="/services"
              className="bg-white/10 backdrop-blur border-2 border-white/40 text-white px-8 py-4 rounded-full font-medium text-lg inline-block hover:bg-white hover:text-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              הפתרונות שלנו
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
