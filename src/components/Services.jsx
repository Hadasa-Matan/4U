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
const BRAND_GREEN = "#52de4a";
const BRAND_CYAN = "#7cd6de";
const BRAND_BLUE = "#000ab9";

const Services = () => {
  // הגדרות פונטים זהות ל-About
  const fontBold = { fontFamily: "FbAsparagosBold, sans-serif", fontWeight: "bold" };
  const fontRegular = { fontFamily: "FbAsparagos, sans-serif" };
  const fontEng = { fontFamily: "FbRimonaEng, sans-serif" };

  const fontFaceStyle = `
    @font-face { font-family: 'FbAsparagosBold'; src: url('/4U/fonts/FbAsparagos-Bold.otf') format('opentype'); }
    @font-face { font-family: 'FbAsparagos'; src: url('/4U/fonts/FbAsparagos-Regular.otf') format('opentype'); }
    @font-face { font-family: 'FbRimonaEng'; src: url('/4U/fonts/FbRimonaEng-Regular.otf') format('opentype'); }
  `;

  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const chatbotExamples = [
    { label: "שקבוט ניהול תורים", link: "https://drive.google.com/file/d/1j40VZjj1TLtvokKUPsXepMadL6beAmQR/view?usp=sharing" },
    { label: "שקבוט מכירות (E-com)", link: "https://drive.google.com/file/d/1TrcUi_U-TyjDjaG5R0gJy1mrZy5Ijp5L/view?usp=sharing" },
    { label: "שקבוט תמיכה ושירות", link: "https://drive.google.com/file/d/1YJaNj6uWyU4IczBh7ufpHKIfmmvHDx01/view?usp=sharing" },
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
      btnText: "לצפייה באוטומציה בפעולה"
    },
    {
      icon: <BsRobot className="w-8 h-8" />,
      title: "שילוב AI בעסק",
      description: "הטמעת כלי בינה מלאכותית לסיכום פגישות, ניסוח מסמכים וניהול משימות חכם. פשוט, פרקטי וחוסך שעות של עבודה.",
      link: "https://drive.google.com/file/d/1nsEMxi8_btHp6ZFlQW2lWwn4VUukrkSV/view?usp=sharing",
      btnText: "דוגמא לאוטומציה בשילוב AI"
    },
  ];

  return (
    <div className="min-h-screen bg-white" dir="rtl" style={fontRegular}>
      <style>{fontFaceStyle}</style>

      {/* --- HERO SECTION - זהה לחלוטין ל-About מבחינת מרווחים --- */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 px-6 bg-slate-50/50 border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl text-slate-900 mb-4" style={fontBold}>
            הפתרונות החכמים ל<span style={{ color: BRAND_BLUE }}>עסק שלך</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            כל מה שנבנה כאן נועד לייצר לך מקום לצמוח מתוכו. פחות עומס, יותר סדר.
          </p>
        </div>
      </section>

      {/* --- MAIN CONTENT SECTION --- */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 gap-12">
            
            {/* כרטיס שקבוט (Featured) */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="rounded-[2.5rem] p-8 md:p-12 border-[3px] bg-white relative overflow-hidden"
              style={{ borderColor: BRAND_BLUE }}
            >
              <div style={{ color: BRAND_BLUE }} className="mb-6"><BsChatDots className="w-10 h-10" /></div>
              <h2 className="text-2xl md:text-4xl mb-6 text-slate-900" style={fontBold}>
                שקבוט - המוצר המבוקש לשקט תפעולי
              </h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-5xl whitespace-pre-line">
                השקבוט הוא מוצר חכם ומוכן להטמעה שחוסך לך זמן יקר. הוא העובד הדיגיטלי שתמיד זמין עבור הלקוחות שלך: עונה מיידית, מנהל תורים, סוגר מכירות ומנתב פניות – הכל באוטומציה מלאה שמורידה ממך את העומס.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {chatbotExamples.map((ex, idx) => (
                  <button
                    key={idx}
                    onClick={() => window.open(ex.link, "_blank")}
                    className="py-4 px-4 rounded-2xl font-bold transition-all hover:scale-[1.03] shadow-md flex items-center justify-center gap-2"
                    style={{ backgroundColor: BRAND_GREEN, color: "#06233a", ...fontBold }}
                  >
                    {ex.label}
                    <BsArrowLeft className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* גריד שירותים נוספים */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherServices.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * idx }}
                  className="rounded-[2rem] p-8 flex flex-col border bg-white hover:shadow-xl transition-all"
                  style={{ borderColor: `${BRAND_BLUE}25`, borderWidth: "1px" }}
                >
                  <div className="mb-6 flex justify-start" style={{ color: BRAND_BLUE }}>
                    <div className="p-3 rounded-xl" style={{ backgroundColor: "rgba(124,214,222,0.1)" }}>
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl mb-3 text-slate-900" style={fontBold}>
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-8 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                  <button
                    onClick={() => window.open(service.link, "_blank")}
                    className="mt-auto py-3 rounded-xl font-bold border transition-all flex items-center justify-center gap-2 group hover:bg-slate-50 shadow-sm"
                    style={{ borderColor: BRAND_BLUE, color: BRAND_BLUE, ...fontBold }}
                  >
                    {service.btnText}
                    <BsArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* הנעה לפעולה - סיכום דף */}
            <motion.div 
              className="mt-8 text-center bg-white border-[3px] p-10 rounded-[3rem]"
              style={{ borderColor: `${BRAND_BLUE}20` }}
            >
              <h4 className="text-2xl md:text-3xl text-slate-900 mb-6" style={fontBold}>
                רוצה שנבחר יחד את הפתרון שיביא <span style={{ color: BRAND_BLUE }}>שקט ושליטה</span> לעסק?
              </h4>
              <a
                href="https://cal.com/hadasa-matan/4u"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
                style={{ backgroundColor: BRAND_GREEN, color: "#06233a", ...fontBold }}
              >
                <BsCalendarCheck className="w-6 h-6" />
                שיחת הצעה ללא עלות
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
