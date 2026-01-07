import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  BsGear, 
  BsLightning, 
  BsRobot, 
  BsChatDots, 
  BsArrowLeft,
  BsCalendarCheck 
} from "react-icons/bs";

// צבעי המיתוג שלך
const BRAND_BLUE = "#000ab9";
const BRAND_GREEN = "#52de4a";
const BRAND_CYAN = "#7cd6de";

function Services() {
  const featuredService = {
    icon: <BsChatDots className="w-10 h-10" />,
    title: "שקבוט — המוצר המבוקש לשקט תפעולי",
    description: `השקבוט הוא מוצר חכם ומוכן להטמעה שחוסך לך זמן יקר. הוא העובד הדיגיטלי שתמיד זמין עבור הלקוחות שלך: עונה מיידית, מנהל תורים, סוגר מכירות ומנתב פניות – הכל באוטומציה מלאה שמורידה ממך את העומס. הוא מתממשק בקלות לוואטסאפ, לאתר ול-CRM שלך.`,
  };

  const chatbotExamples = [
    { 
      label: "איך עובד ניהול תורים?", 
      link: "https://drive.google.com/file/d/1j40VZjj1TLtvokKUPsXepMadL6beAmQR/view?usp=sharing" 
    },
    { 
      label: "צפייה בבוט מכירות (E-com)", 
      link: "https://drive.google.com/file/d/1TrcUi_U-TyjDjaG5R0gJy1mrZy5Ijp5L/view?usp=sharing" 
    },
    { 
      label: "דמו: תמיכה ושירות לקוחות", 
      link: "https://drive.google.com/file/d/1YJaNj6uWyU4IczBh7ufpHKIfmmvHDx01/view?usp=sharing" 
    },
  ];

  const otherServices = [
    {
      icon: <BsGear className="w-8 h-8" />,
      title: "מערכות שליטה וסדר",
      description: "בניית תשתית שמרכזת את כל המידע והסטטוסים במקום אחד. במקום בלגן של הודעות וקבצים — הכל מסודר במערכת שנותנת לך שליטה מלאה.",
      link: "https://drive.google.com/file/d/1SJEK5zrWtqaRAP-3JGDAHiTnlmSxYa0X/view?usp=drive_link",
      btnText: "לראות איך הסדר נראה"
    },
    {
      icon: <BsLightning className="w-8 h-8" />,
      title: "אוטומציות ודיגיטל",
      description: "חיבור בין מערכות, טפסים חכמים ודפי נחיתה שמבצעים פעולות חוזרות במקומך. פחות עבודה ידנית — הרבה יותר זמן פנוי לצמוח.",
      link: "https://drive.google.com/file/d/1eZ3d7-rxxk9KfZNyrd_gYxPFPb_rtJlJ/view?usp=drive_link",
      btnText: "לצפייה באוטומציה בפעולה"
    },
    {
      icon: <BsRobot className="w-8 h-8" />,
      title: "AI מעשי לעסק",
      description: "הטמעת כלי בינה מלאכותית לסיכום פגישות, ניסוח מסמכים וניהול משימות חכם. פשוט, פרקטי וחוסך שעות של עבודה.",
      link: "https://drive.google.com/file/d/1nsEMxi8_btHp6ZFlQW2lWwn4VUukrkSV/view?usp=sharing",
      btnText: "בואו נראה מה ה-AI יודע"
    },
  ];

  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="services" className="py-24 bg-[#fcfcfc]" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        
        {/* כותרת עמוד */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">
            הפתרונות החכמים ל<span style={{ color: BRAND_BLUE }}>עסק שלך</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            כל מה שנבנה כאן נועד לייצר לך מקום לצמוח מתוכו. פחות עומס, יותר סדר.
          </p>
        </motion.div>

        {/* גריד שירותים */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* כרטיס שקבוט */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="md:col-span-3 rounded-[2.5rem] p-8 md:p-12 flex flex-col border transition-all relative overflow-hidden group"
            style={{
              backgroundColor: "white",
              borderColor: "rgba(0,10,185,0.12)",
              boxShadow: "0 30px 60px rgba(0,10,185,0.04)",
            }}
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-50 rounded-full -ml-16 -mt-16 blur-3xl opacity-50" />
            
            <div style={{ color: BRAND_BLUE }} className="mb-6 relative z-10">{featuredService.icon}</div>
            <h3 className="text-3xl font-black mb-4 text-slate-900 relative z-10">{featuredService.title}</h3>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-4xl relative z-10 whitespace-pre-line">
              {featuredService.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
              {chatbotExamples.map((ex, idx) => (
                <button
                  key={idx}
                  onClick={() => window.open(ex.link, "_blank")}
                  className="py-4 px-4 rounded-2xl font-bold transition-all hover:scale-[1.03] shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  style={{ backgroundColor: BRAND_GREEN, color: "#06233a" }}
                >
                  {ex.label}
                  <BsArrowLeft className="w-4 h-4" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* שירותים נוספים */}
          {otherServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="rounded-[2rem] p-8 flex flex-col border bg-white hover:shadow-xl transition-all duration-300"
              style={{ borderColor: "rgba(124,214,222,0.3)" }}
            >
              <div className="mb-6 flex justify-start" style={{ color: BRAND_BLUE }}>
                <div className="p-3 rounded-xl shadow-inner" style={{ backgroundColor: "rgba(124,214,222,0.1)" }}>
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-black mb-3 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              <button
                onClick={() => window.open(service.link, "_blank")}
                className="mt-auto py-3 rounded-xl font-bold border transition-all flex items-center justify-center gap-2 group hover:bg-slate-50 shadow-sm"
                style={{ borderColor: BRAND_BLUE, color: BRAND_BLUE }}
              >
                {service.btnText}
                <BsArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* הנעה לפעולה - שיחת הצעה */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center bg-white border border-slate-100 p-10 rounded-[3rem] shadow-sm"
        >
          <h4 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
            רוצה שנבחר יחד את הפתרון שיביא <span style={{ color: BRAND_BLUE }}>שקט ושליטה</span> לעסק?
          </h4>
          <p className="text-slate-600 mb-8 text-lg">
            שיחת אפיון קצרה שתעזור לנו להבין בדיוק מה יעבוד הכי טוב עבורך.
          </p>
          <a
            href="https://cal.com/hadasa-matan/4u"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-black text-xl transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
            style={{ backgroundColor: BRAND_GREEN, color: "#06233a" }}
          >
            <BsCalendarCheck className="w-6 h-6" />
            שיחת הצעה ללא עלות
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Services;
