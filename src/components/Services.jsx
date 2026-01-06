import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsGear, BsLightning, BsRobot, BsChatDots } from "react-icons/bs";

// צבעי המיתוג המדויקים שלך
const BRAND_BLUE = "#000ab9";
const BRAND_GREEN = "#52de4a";
const BRAND_CYAN = "#7cd6de";

function Services() {
  const featuredService = {
    icon: <BsChatDots className="w-10 h-10" />,
    title: "השקבוט - המומחיות שלנו",
    description: `
לא עוד סתם צ'אטבוט. השקבוט הוא העובד המצטיין החדש שלך: הוא זמין 24/7, מטפל במכירות, תומך בלקוחות ומנהל תורים — הכל באוטומציה מלאה. 
עם ניתוב חכם ובינה מלאכותית, הוא מקצר את זמני המתנה לאפס ומשחרר אותך להתעסק במה שחשוב באמת. 
השקבוט מתחבר בקלות לוואטסאפ, לאתר ולמערכות ה-CRM שלך.
    `,
  };

  const chatbotExamples = [
    { label: "שקבוט לניהול תורים", link: "#" },
    { label: "שקבוט למכירות (E-com)", link: "#" },
    { label: "שקבוט תמיכה ושירות", link: "#" },
  ];

  const otherServices = [
    {
      icon: <BsGear className="w-8 h-8" />,
      title: "מערכות שליטה וניהול",
      description: "בניית מערכות חכמות שמרכזות את כל המידע של העסק במקום אחד. סדר, ארגון ושליטה מלאה בסטטוס של כל לקוח.",
    },
    {
      icon: <BsLightning className="w-8 h-8" />,
      title: "אוטומציות ודיגיטל",
      description: "חיבור בין מערכות, טפסים חכמים ופתרונות טכנולוגיים שחוסכים עבודה ידנית מיותרת ומייעלים את העסק.",
    },
    {
      icon: <BsRobot className="w-8 h-8" />,
      title: "AI מעשי לעסקים",
      description: "הטמעת כלי בינה מלאכותית לסיכום פגישות, ניסוח מסמכים וניהול משימות אוטומטי — פשוט וחכם.",
    },
  ];

  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="services" className="py-28" style={{ background: "#fcfcfc" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right" dir="rtl">
        
        {/* כותרת העמוד */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            פתרונות חכמים ל<span style={{ color: BRAND_BLUE }}>שקט תפעולי</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            טכנולוגיה מתקדמת שמתלבשת בדיוק על הצרכים של העסק שלך.
          </p>
        </motion.div>

        {/* גריד השירותים */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* הכרטיס המרכזי - שקבוט */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="md:col-span-3 rounded-[2.5rem] p-8 md:p-12 flex flex-col border transition-all"
            style={{
              backgroundColor: "white",
              borderColor: "rgba(0,10,185,0.1)",
              boxShadow: "0 30px 60px rgba(0,0,0,0.05)",
            }}
          >
            <div style={{ color: BRAND_BLUE }} className="mb-6">{featuredService.icon}</div>
            <h3 className="text-3xl font-black mb-4 text-slate-900">{featuredService.title}</h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-4xl whitespace-pre-line">
              {featuredService.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {chatbotExamples.map((ex, idx) => (
                <button key={idx} className="py-4 rounded-2xl font-bold transition-all hover:scale-[1.03]"
                        style={{ backgroundColor: BRAND_GREEN, color: "#06233a" }}>
                  {ex.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* כרטיסים משניים */}
          {otherServices.map((service, idx) => (
            <motion.div
              key={idx}
              className="rounded-[2rem] p-8 flex flex-col border bg-white hover:shadow-xl transition-all"
              style={{ borderColor: "rgba(124,214,222,0.3)" }}
            >
              <div style={{ color: BRAND_BLUE }} className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-black mb-3 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">{service.description}</p>
              <button className="mt-auto py-3 rounded-xl font-bold border transition-all"
                      style={{ borderColor: BRAND_BLUE, color: BRAND_BLUE }}>
                לפרטים ודוגמאות
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
