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

// צבעי המיתוג
const BRAND_BLUE = "#000ab9";
const BRAND_GREEN = "#52de4a";
const BRAND_CYAN = "#7cd6de";

function Services() {
  const customFontStyle = { fontFamily: "FbAsparagos, sans-serif" };
  const fontBold = { fontFamily: "FbAsparagosBold, sans-serif", fontWeight: "bold" };

  const featuredService = {
    icon: <BsChatDots className="w-10 h-10" />,
    title: "שקבוט - המוצר המבוקש לשקט תפעולי",
    description: `השקבוט הוא מוצר חכם ומוכן להטמעה שחוסך לך זמן יקר. הוא העובד הדיגיטלי שתמיד זמין עבור הלקוחות שלך: עונה מיידית, מנהל תורים, סוגר מכירות ומנתב פניות – הכל באוטומציה מלאה שמורידה ממך את העומס.`,
  };

  const chatbotExamples = [
    { label: "שקבוט ניהול תורים", link: "https://drive.google.com/file/d/1j40VZjj1TLtvokKUPsXepMadL6beAmQR/view?usp=sharing" },
    { label: "שקבוט מכירות (E-com)", link: "https://drive.google.com/file/d/1TrcUi_U-TyjDjaG5R0gJy1mrZy5Ijp5L/view?usp=sharing" },
    { label: "שקבוט תמיכה", link: "https://drive.google.com/file/d/1YJaNj6uWyU4IczBh7ufpHKIfmmvHDx01/view?usp=sharing" },
  ];

  const otherServices = [
    {
      icon: <BsGear className="w-8 h-8" />,
      title: "מערכות שליטה וסדר",
      description: "בניית תשתית שמרכזת את כל המידע והסטטוסים במקום אחד. במקום בלגן של הודעות וקבצים - הכל מסודר במערכת שנותנת לך שליטה מלאה.",
      link: "https://drive.google.com/file/d/1SJEK5zrWtqaRAP-3JGDAHiTnlmSxYa0X/view?usp=drive_link",
      btnText: "לראות איך הסדר נראה"
    },
    {
      icon: <BsLightning className="w-8 h-8" />,
      title: "אוטומציות ודיגיטל",
      description: "חיבור בין מערכות, טפסים חכמים ודפי נחיתה שמבצעים פעולות חוזרות במקומך. פחות עבודה ידנית - הרבה יותר זמן פנוי לצמוח.",
      link: "https://drive.google.com/file/d/1eZ3d7-rxxk9KfZNyrd_gYxPFPb_rtJlJ/view?usp=drive_link",
      btnText: "לצפייה באוטומציה"
    },
    {
      icon: <BsRobot className="w-8 h-8" />,
      title: "שילוב AI בעסק",
      description: "הטמעת כלי בינה מלאכותית לסיכום פגישות וניהול משימות חכם. פשוט, פרקטי וחוסך שעות של עבודה.",
      link: "https://drive.google.com/file/d/1nsEMxi8_btHp6ZFlQW2lWwn4VUukrkSV/view?usp=sharing",
      btnText: "דוגמא לשילוב AI"
    },
  ];

  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    /* mt-24 ו-pt-16 לסנכרון מלא עם עמוד About */
    <section id="services" className="min-h-screen bg-[#fcfcfc] mt-16 md:mt-24 pb-20" dir="rtl" style={customFontStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        
        {/* כותרת עמוד - מוקטנת ל-5xl לסנכרון */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center pt-12 mb-12 md:pt-16 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4" style={fontBold}>
            הפתרונות החכמים ל<span style={{ color: BRAND_BLUE }}>עסק שלך</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            כל מה שנבנה כאן נועד לייצר לך מקום לצמוח מתוכו. פחות עומס, יותר סדר.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* כרטיס שקבוט */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="md:col-span-3 rounded-[2.5rem] p-8 md:p-12 border bg-white relative overflow-hidden shadow-xl shadow-blue-900/5"
            style={{ borderColor: `${BRAND_BLUE}30` }}
          >
            <div style={{ color: BRAND_BLUE }} className="mb-6">{featuredService.icon}</div>
            <h3 className="text-2xl md:text-3xl font-black mb-4 text-slate-900" style={fontBold}>
              {featuredService.title}
            </h3>
            <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed max-w-4xl">
              {featuredService.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {chatbotExamples.map((ex, idx) => (
                <button
                  key={idx}
                  onClick={() => window.open(ex.link, "_blank")}
                  className="py-3 px-4 rounded-xl font-bold transition-all hover:scale-[1.02] shadow-md flex items-center justify-center gap-2 text-sm md:text-base"
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
              transition={{ delay: 0.1 * idx }}
              className="rounded-[2rem] p-8 flex flex-col border bg-white hover:shadow-lg transition-all"
              style={{ borderColor: `${BRAND_BLUE}15` }}
            >
              <div className="mb-6 flex justify-start" style={{ color: BRAND_BLUE }}>
                <div className="p-3 rounded-xl bg-cyan-50">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-black mb-3 text-slate-900" style={fontBold}>
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-slate-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              <button
                onClick={() => window.open(service.link, "_blank")}
                className="mt-auto py-3 rounded-xl font-bold border transition-all flex items-center justify-center gap-2 group text-sm"
                style={{ borderColor: BRAND_BLUE, color: BRAND_BLUE }}
              >
                {service.btnText}
                <BsArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* הנעה לפעולה */}
        <motion.div 
          className="mt-16 text-center bg-white border p-8 md:p-12 rounded-[2.5rem] shadow-sm"
          style={{ borderColor: `${BRAND_BLUE}10` }}
        >
          <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-4" style={fontBold}>
            רוצה שנבחר יחד את הפתרון שיביא <span style={{ color: BRAND_BLUE }}>שקט ושליטה</span> לעסק?
          </h4>
          <a
            href="https://cal.com/hadasa-matan/4u"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-black text-lg transition-all hover:scale-105 shadow-lg"
            style={{ backgroundColor: BRAND_GREEN, color: "#06233a" }}
          >
            <BsCalendarCheck className="w-5 h-5" />
            שיחת הצעה ללא עלות
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
