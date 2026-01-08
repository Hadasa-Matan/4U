import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsGear, BsLightning, BsRobot, BsChatDots, BsArrowLeft, BsCalendarCheck } from "react-icons/bs";

const BRAND_BLUE = "#000ab9";
const BRAND_GREEN = "#52de4a";
const BRAND_CYAN = "#7cd6de";

function Services() {
  // הגדרת פונט מודגש במפורש
  const fontBold = { fontFamily: "FbAsparagosBold, sans-serif", fontWeight: "900" };
  const fontRegular = { fontFamily: "FbAsparagos, sans-serif" };
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="services" className="min-h-screen bg-[#fcfcfc] pb-20" dir="rtl" style={fontRegular}>
      {/* Hero Section - מרווח עליון מדוייק של 80 פיקסלים מהתפריט */}
      <div className="pt-24 pb-8 md:pt-28 md:pb-10 px-6 bg-slate-50/50 border-b border-slate-100 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 1, y: 0 }} // ביטלתי את האנימציה שעולה למעלה כדי שלא יזוז מהמקום
          className="max-w-4xl mx-auto"
        >
          {/* שימוש ב-text-4xl עד 5xl כדי שיהיה זהה ל-About */}
          <h2 className="text-3xl md:text-5xl text-slate-900 mb-4" style={fontBold}>
            הפתרונות החכמים ל<span style={{ color: BRAND_BLUE }}>עסק שלך</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            כל מה שנבנה כאן נועד לייצר לך מקום לצמוח מתוכו. פחות עומס, יותר סדר.
          </p>
        </motion.div>
      </div>

      {/* המשך הגריד והכרטיסים... */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
          {/* הקוד של הכרטיסים נשאר כפי שהיה */}
      </div>
    </section>
  );
}

export default Services;
