import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/background.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-end pb-40">
        <div className="w-full flex justify-center px-4">
          
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md border border-white/20
                       rounded-3xl px-6 py-6 sm:px-10 sm:py-8
                       shadow-[0_25px_70px_rgba(0,0,0,0.25)]"
          >
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              
              {/* Primary CTA */}
              <Link
                to="/services"
                className="w-64 sm:w-auto px-10 py-4 rounded-full
                           font-extrabold text-lg text-blue-950
                           bg-gradient-to-r from-cyan-300 via-teal-300 to-green-300
                           hover:from-cyan-200 hover:via-teal-200 hover:to-green-200
                           transition-all duration-300 transform hover:scale-[1.04]
                           shadow-[0_16px_36px_rgba(0,0,0,0.25)]
                           inline-flex items-center justify-center"
              >
                הפתרונות שלנו <span className="mr-2">←</span>
              </Link>

              {/* Secondary CTA */}
              <Link
                to="/consultation"
                className="w-64 sm:w-auto px-9 py-4 rounded-full
                           font-semibold text-lg text-white
                           bg-white/10 border border-white/40
                           hover:bg-white/20 hover:border-white/60
                           transition-all duration-300
                           inline-flex items-center justify-center"
              >
                שיחת יעוץ ללא עלות
              </Link>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Hero;
