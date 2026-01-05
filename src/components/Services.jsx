import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsGear, BsLightning, BsRobot, BsChatDots } from "react-icons/bs";

const BRAND_GREEN = "#52de4a";
const BRAND_CYAN = "#7cd6de";

function Services() {
  const featuredService = {
    icon: <BsChatDots className="w-10 h-10" />,
    title: "צ'אטבוטים חכמים – ההתמחות שלנו",
    description: `
הצ'אטבוט יעבוד עבורך 24 שעות ביממה ויטפל במגוון רחב של צרכי העסק: שירות, מכירות, תמיכה טכנית, ניהול תורים, מעקב הזמנות ומשלוחים, איסוף נתונים ועוד.
הכול עם מענה מיידי וניתוב חכם שמקצר זמני המתנה ומשפר משמעותית את חוויית הלקוח.
ניתן לשלב בינה מלאכותית ליצירת מענה מותאם אישית, ולחבר את הצ'אטבוט למגוון רחב של ערוצים: וואצאפ, אתר, בוט קולי ועוד.
    `,
    link: "https://drive.google.com/file/d/1j40VZjj1TLtvokKUPsXepMadL6beAmQR/view?usp=sharing",
  };

  const chatbotExamples = [
    { label: "צ'אטבוט לניהול תורים", link: featuredService.link },
    {
      label: "צ'אטבוט למסחר אלקטרוני",
      link: "https://drive.google.com/file/d/1TrcUi_U-TyjDjaG5R0gJy1mrZy5Ijp5L/view?usp=sharing",
    },
    {
      label: "צ'אטבוט לתמיכה טכנית",
      link: "https://drive.google.com/file/d/1YJaNj6uWyU4IczBh7ufpHKIfmmvHDx01/view?usp=sharing",
    },
  ];

  const otherServices = [
    {
      icon: <BsGear className="w-8 h-8" />,
      title: "מערכות ניהול מידע",
      description:
        "בנייה והטמעת מערכת ניהול מידע מותאמת אישית לעסק שלך - לייעול תהליכים, חיסכון בזמן והגדלת הרווחיות.",
      link: "https://drive.google.com/file/d/1SJEK5zrWtqaRAP-3JGDAHiTnlmSxYa0X/view?usp=drive_link",
    },
    {
      icon: <BsLightning className="w-8 h-8" />,
      title: "פתרונות דיגיטליים",
      description:
        "פיתוח פתרונות דיגיטליים מותאמים אישית: טפסים חכמים, קטלוגים דיגיטליים, דפי נחיתה מתקדמים ועוד.",
      link: "https://drive.google.com/file/d/1eZ3d7-rxxk9KfZNyrd_gYxPFPb_rtJlJ/view?usp=drive_link",
    },
    {
      icon: <BsRobot className="w-8 h-8" />,
      title: "פתרונות באמצעות בינה מלאכותית",
      description:
        "שילוב טכנולוגיות AI לייעול תהליכים: תמלול שיחות, סיכום פגישות, שליחת הצעות מחיר, ניהול חשבוניות ועוד.",
      link: "https://drive.google.com/file/d/1nsEMxi8_btHp6ZFlQW2lWwn4VUukrkSV/view?usp=sharing",
    },
  ];

  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="services"
      className="py-28"
      style={{
        background:
          "linear-gradient(180deg, #050B2A 0%, #07124A 45%, #050B2A 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TITLE */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-extrabold text-white mb-3">
            הפתרונות החכמים שלנו
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            הכל באותה שפה עיצובית של העמוד הראשי — נקי, טכנולוגי ומותגי.
          </p>
        </motion.div>

        {/* GRID */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* FEATURED */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 rounded-3xl p-8 flex flex-col
                       border shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
            style={{
              backgroundColor: "rgba(255,255,255,0.06)",
              borderColor: "rgba(124,214,222,0.35)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              className="mb-6 flex justify-center md:justify-start"
              style={{ color: BRAND_CYAN }}
            >
              {featuredService.icon}
            </div>

            <h3 className="text-2xl font-extrabold mb-4 text-white text-center md:text-right">
              {featuredService.title}
            </h3>

            <p className="text-white/75 whitespace-pre-line mb-8 text-center md:text-right leading-relaxed">
              {featuredService.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-auto">
              {chatbotExamples.map((example, idx) => (
                <button
                  key={idx}
                  onClick={() => window.open(example.link, "_blank")}
                  className="w-full py-3 px-4 rounded-xl font-bold text-sm
                             transition-all duration-300 transform hover:scale-[1.03]"
                  style={{
                    backgroundColor: BRAND_GREEN,
                    color: "#06233a",
                    boxShadow: "0 14px 30px rgba(0,0,0,0.25)",
                  }}
                >
                  {example.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* OTHER CARDS */}
          {otherServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="rounded-3xl p-8 flex flex-col
                         border transition-all duration-300
                         hover:shadow-[0_28px_70px_rgba(0,0,0,0.35)]"
              style={{
                backgroundColor: "rgba(
