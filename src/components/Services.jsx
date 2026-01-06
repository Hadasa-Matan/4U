import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BsGear,
  BsLightning,
  BsRobot,
  BsChatDots,
  BsShieldCheck,
  BsArrowLeftShort
} from "react-icons/bs";

const BRAND_GREEN = "#52de4a";
const BRAND_CYAN = "#7cd6de";
const BRAND_BLUE = "#000ab9";

function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="services" className="py-24 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER - Sharp & Clean */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <BsShieldCheck style={{ color: BRAND_BLUE }} />
            <span className="text-sm font-bold tracking-wide text-slate-700">מקצוענות • אוטומציה • שקט</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            להפוך עומס ל<span style={{ color: BRAND_BLUE }}>סדר דיגיטלי</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
            אני בונה מערכות שלא רק חוסכות זמן, אלא מייצרות תשתית שמאפשרת לעסק שלך לצמוח מתוך רוגע ושליטה מלאה.
          </motion.p>
        </motion.div>

        {/* MAIN SERVICES GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* FEATURED: SHAKET-BOTS (The "Big" Card) */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-8 bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-blue-900/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32 blur-3xl opacity-50 group-hover:opacity-80 transition-opacity" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-inner" style={{ background: `linear-gradient(135deg, ${BRAND_BLUE}, #2b36ff)`, color: 'white' }}>
                <BsChatDots className="w-8 h-8" />
              </div>
              
              <h3 className="text-3xl font-black text-slate-900 mb-4">שקטבוטים™</h3>
              <p className="text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
                הצ'אטבוט החכם שיוצר לך שקט תפעולי. הוא עובד 24/7, עונה מיידית, מנתב פניות ומחבר בין הלקוח למערכות שלך בצורה מושלמת.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {["תיעוד וסיווג אוטומטי", "חיבור מלא ל-CRM ולוואטסאפ", "קיצור זמני המתנה ב-90%", "איסוף לידים חכם"].map((feat) => (
                  <div key={feat} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: BRAND_GREEN }} />
                    {feat}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 rounded-2xl font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-700/20" style={{ backgroundColor: BRAND_BLUE }}>
                  צפה בדוגמה חיה
                </button>
              </div>
            </div>
          </motion.div>

          {/* SIDE CARD: AI & DATA */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-4 bg-slate-900 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden text-white"
          >
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/20 rounded-full -ml-16 -mb-16 blur-2xl" />
             
             <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
                <BsRobot className="w-7 h-7" style={{ color: BRAND_GREEN }} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">AI לעסק</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                שילוב בינה מלאכותית בתהליכים קיימים: סיכום שיחות, תמלול וניהול משימות חכם.
              </p>
              
              <button className="w-full py-4 rounded-2xl border border-slate-700 font-bold hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-2 group">
                לפרטים נוספים
                <BsArrowLeftShort className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              </button>
          </motion.div>

          {/* BOTTOM CARDS: AUTOMATION & SYSTEMS */}
          {[
            { title: "אוטומציה ודיגיטל", icon: <BsLightning />, desc: "דפי נחיתה וטפסים חכמים שמורידים עבודה ידנית מהצוות.", color: BRAND_CYAN },
            { title: "מערכות ניהול", icon: <BsGear />, desc: "ריכוז נתונים וסטטוסים במקום אחד לשליטה מלאה בכל רגע.", color: BRAND_BLUE }
          ].map((s, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="lg:col-span-6 bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-lg group hover:border-blue-100 transition-all"
            >
              <div className="flex items-center gap-6 text-right">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${s.color}15`, color: s.color }}>
                  {React.cloneElement(s.icon, { className: "w-7 h-7" })}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FINAL CTA */}
        <motion.div variants={itemVariants} className="mt-20 text-center">
             <h4 className="text-2xl font-bold text-slate-900 mb-6">מוכנים להכניס שקט לעסק?</h4>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/consultation" className="px-10 py-4 rounded-full font-black text-lg transition-transform hover:scale-105" style={{ backgroundColor: BRAND_GREEN, color: '#06233a' }}>
                  בואו נדבר, זה משתלם
                </a>
             </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
