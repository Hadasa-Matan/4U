import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BRAND_GREEN = "#52de4a";
const BRAND_CYAN = "#7cd6de";

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

      {/* Buttons container */}
      <div className="relative z-10 min-h-screen flex items-end pb-24 sm:pb-28">
        <div className="w-full flex justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            {/* Secondary CTA - המוצרים שלנו (עכשיו עם מסגרת) */}
            <Link
              to="/services"
              style={{
                borderColor: BRAND_CYAN,
                color: "#ffffff",
                backgroundColor: "rgba(124, 214, 222, 0.10)",
              }}
              className="w-72 sm:w-auto px-9 py-4 rounded-full font-semibold text-lg
                         border-2
                         transition-all duration-300
                         hover:bg-[rgba(124,214,222,0.18)]
                         inline-flex items-center justify-center"
            >
              המוצרים שלנו
            </Link>

            {/* Primary CTA - שיחת ייעוץ (עכשיו הירוק הבולט) */}
            <Link
              to="/consultation"
              style={{
                backgroundColor: BRAND_GREEN,
                color: "#06233a",
                boxShadow: "0 16px 36px rgba(0,0,0,0.25)",
              }}
              className="w-72 sm:w-auto px-10 py-4 rounded-full font-extrabold text-lg
                         transition-transform duration-300 hover:scale-[1.04]
                         inline-flex items-center justify-center"
            >
              🎁 לאבחון עסקי ומפת דרכים טכנולוגית<span className="mr-2">←</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;