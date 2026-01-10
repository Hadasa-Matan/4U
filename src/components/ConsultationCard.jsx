import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BsClipboardCheck, BsCalendarCheck, BsGear, BsCheckCircle, BsArrowLeft, BsLightningCharge } from 'react-icons/bs';

const BRAND_BLUE = "#000ab9";
const BRAND_GREEN = "#52de4a";
const BRAND_CYAN = "#7cd6de";

function ConsultationCard() {
  const fontBold = { fontFamily: "FbAsparagosBold, sans-serif", fontWeight: "bold" };
  const fontRegular = { fontFamily: "FbAsparagos, sans-serif" };

  const fontFaceStyle = `
    @font-face { font-family: 'FbAsparagosBold'; src: url('/fonts/FbAsparagos-Bold.otf') format('opentype'); }
    @font-face { font-family: 'FbAsparagos'; src: url('/fonts/FbAsparagos-Regular.otf') format('opentype'); }
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
        timestamp: new Date().toISOString()
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
      title: "אבחון צרכים מעמיק",
      description: "מילוי שאלון מקיף (כ-10 דק') שיאפשר לנו לנתח לעומק את תהליכי העבודה הקיימים אצלכם בעסק."
    },
    {
      number: 2,
      icon: <BsLightningCharge className="w-8 h-8" />,
      title: "ניתוח טכנולוגי",
      description: "תוך 24 שעות תקבלו למייל סקירה מותאמת אישית של פתרונות האוטומציה המדויקים עבורכם."
    },
    {
      number: 3,
      icon: <BsCalendarCheck className="w-8 h-8" />,
      title: "שיחת ייעוץ אסטרטגית",
      description: "תיאום פגישה לבחינת המלצות הדו\"ח ובניית מפת דרכים ליישום האוטומציות בעסק."
    },
    {
      number: 4,
      icon: <BsCheckCircle className="w-8 h-8" />,
      title: "יציאה לדרך",
      description: "הטמעת המערכות החדשות וליווי צמוד עד ליצירת שקט תפעולי ושליטה מלאה בעסק."
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
            הצעד הראשון ל<span style={{ color: BRAND_BLUE }}>שקט תפעולי</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            אנחנו לא מאמינים בפתרונות "פס נע". תהליך האבחון שלנו נועד לדייק את הטכנולוגיה לצרכים האמיתיים שלכם.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-right">
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
                <div className="mb-6 inline-flex p-3 rounded-2xl bg-white shadow-sm" style={{ color: BRAND_BLUE }}>
                  {step.icon}
                </div>
                <h3 className="text-xl mb-3 text-slate-900 leading-tight" style={fontBold}>
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          <div className="inline-block relative">
            <button
              onClick={handleFormClick}
              className="group relative inline-flex flex-col items-center justify-center px-10 py-6 rounded-full font-bold transition-all hover:scale-105 shadow-xl"
              style={{ backgroundColor: BRAND_GREEN, color: "#06233a" }}
            >
              <span className="text-xl md:text-2xl flex items-center gap-3" style={fontBold}>
                אני רוצה להתחיל באבחון העסקי
                <BsArrowLeft className="group-hover:-translate-x-2 transition-transform" />
              </span>
            </button>
            
            <div className="absolute -top-4 -right-4 bg-[#000ab9] text-white text-xs py-1.5 px-4 rounded-full shadow-lg flex items-center gap-1" style={fontBold}>
              מקיף ומקצועי
            </div>
          </div>
          
          <div className="mt-8 space-y-3">
            <p className="text-slate-800 font-medium text-lg leading-relaxed" style={fontBold}>
              השקעה של 10 דקות שתחסוך לכם מאות שעות עבודה בשנה.
            </p>
            <p className="text-slate-500 text-md max-w-xl mx-auto italic">
              דו"ח אופציות טכנולוגיות מותאם אישית ישלח אליכם למייל תוך 24 שעות מסיום המילוי.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ConsultationCard;
