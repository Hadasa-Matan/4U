import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BsClipboardCheck, BsCalendarCheck, BsGear, BsCheckCircle, BsArrowLeft, BsStars } from 'react-icons/bs';

const BRAND_BLUE = "#000ab9";
const BRAND_GREEN = "#52de4a";
const BRAND_CYAN = "#7cd6de";

function ConsultationCard() {
  const fontBold = { fontFamily: "FbAsparagosBold, sans-serif", fontWeight: "bold" };
  const fontRegular = { fontFamily: "FbAsparagos, sans-serif" };

  const fontFaceStyle = `
    @font-face { font-family: 'FbAsparagosBold'; src: url('/4U/fonts/FbAsparagos-Bold.otf') format('opentype'); }
    @font-face { font-family: 'FbAsparagos'; src: url('/4U/fonts/FbAsparagos-Regular.otf') format('opentype'); }
  `;

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleFormClick = async () => {
    try {
      const clickData = {
        action: 'consultation_card_click',
        page: '/consultation',
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
      };

      const webhookUrl = 'https://hook.eu2.make.com/1gpuy8jd0zbdih1v5f3rm61jkmtw7l67';      
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(clickData)
      });

      window.open('https://hadasa-matan.github.io/form-4u/', '_blank');
    } catch (error) {
      console.error('Error tracking form click:', error);
      window.open('https://hadasa-matan.github.io/form-4u/', '_blank');
    }
  };

  const steps = [
    {
      number: 1,
      icon: <BsClipboardCheck className="w-8 h-8" />,
      title: "מילוי טופס קצר",
      description: "צעד ראשון פשוט להבנת הצרכים העסקיים שלך שיסייע לך להבין כיצד פתרונות אוטומטיים יכולים לקדם את העסק שלך."
    },
    {
      number: 2,
      icon: <BsCalendarCheck className="w-8 h-8" />,
      title: "תיאום פגישה",
      description: "נקבע זמן נוח לשיחת ייעוץ מעמיקה לבחינת הפתרונות המתאימים לעסק שלך."
    },
    {
      number: 3,
      icon: <BsGear className="w-8 h-8" />,
      title: "פיתוח פתרון מותאם",
      description: "יחד נגבש תכנית פעולה המותאמת במדויק לצרכים ולמטרות העסק שלך."
    },
    {
      number: 4,
      icon: <BsCheckCircle className="w-8 h-8" />,
      title: "יישום והטמעה",
      description: "נלווה אותך לאורך כל הדרך ונוודא שהפתרון האוטומטי משתלב בצורה חלקה בעסק."
    }
  ];

  return (
    <section id="consultation" className="py-24 bg-white relative overflow-hidden" dir="rtl" style={fontRegular}>
      <style>{fontFaceStyle}</style>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl text-slate-900 mb-6" style={fontBold}>
            הצעד הראשון ל<span style={{ color: BRAND_BLUE }}>הצלחת העסק</span> שלך
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            תהליך פשוט וממוקד שיהפוך את המורכבות הטכנולוגית לשקט תפעולי
          </p>
        </motion.div>

        {/* שלבים לחיצים */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={handleFormClick}
              className="bg-slate-50 rounded-3xl p-8 relative overflow-hidden border border-slate-100 shadow-sm group cursor-pointer transition-all duration-300 hover:shadow-md"
            >
              <div 
                className="absolute top-0 right-0 w-1.5 h-full"
                style={{ background: `linear-gradient(180deg, ${BRAND_BLUE} 0%, ${BRAND_CYAN} 50%, ${BRAND_GREEN} 100%)` }} 
              />
              
              <div className="text-slate-200 absolute -left-2 -top-2 text-8xl opacity-10 font-bold select-none" style={fontBold}>
                {step.number}
              </div>

              <div className="relative z-10">
                <div className="mb-6 inline-flex p-3 rounded-2xl bg-white shadow-sm transition-colors group-hover:bg-blue-50" style={{ color: BRAND_BLUE }}>
                  {step.icon}
                </div>
                <h3 className="text-xl mb-3 text-slate-900" style={fontBold}>
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* כפתור הנעה לפעולה עם הבטחה לערך */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          <div className="inline-block relative">
            <button
              onClick={handleFormClick}
              className="group relative inline-flex flex-col items-center justify-center px-12 py-6 rounded-full font-bold transition-all hover:scale-105 shadow-xl"
              style={{ backgroundColor: BRAND_GREEN, color: "#06233a" }}
            >
              <span className="text-xl md:text-2xl flex items-center gap-2" style={fontBold}>
                אני רוצה למלא טופס ולקבל סיכום אוטומטי
                <BsArrowLeft className="group-hover:-translate-x-2 transition-transform" />
              </span>
            </button>
            
            {/* תגית "אוטומטי" מעל הכפתור */}
            <div className="absolute -top-4 -left-4 bg-white border-2 border-blue-600 text-blue-700 text-xs py-1 px-3 rounded-full shadow-sm flex items-center gap-1 animate-bounce" style={fontBold}>
              <BsStars className="text-yellow-500" />
              מתנה בסיום!
            </div>
          </div>
          
          <div className="mt-6 space-y-2">
            <p className="text-slate-700 font-medium text-lg" style={fontBold}>
              בסיום המילוי תקבלו למייל ניתוח של פוטנציאל האוטומציה בעסק שלכם 🚀
            </p>
            <p className="text-slate-400 text-sm">
              * המילוי לוקח פחות מ-60 שניות • הסיכום נשלח באופן מיידי
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ConsultationCard;
