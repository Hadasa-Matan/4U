import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsGear, BsLightning, BsRobot, BsChatDots } from "react-icons/bs";

const BRAND_GREEN = "#52de4a";
const BRAND_CYAN = "#7cd6de";

function Services() {
  const featuredService = {
    icon: <BsChatDots className="w-10 h-10" />,
    title: "צ׳אטבוטים חכמים — שקט תפעולי 24/7",
    intro:
      "הצ׳אטבוט מטפל בפניות החוזרות, מנתב בקשות ומייצר סדר בתהליך — כדי שהעסק ימשיך לעבוד גם כשאת לא זמינה.",
    bullets: [
      "מענה מיידי ושירות רציף: מכירות, תמיכה, תיאומים ושאלות נפוצות",
      "ניתוב חכם ואיסוף פרטים — פחות עומס, פחות פספוסים",
      "חיבור לערוצים: וואטסאפ, אתר, ובוט קולי (לפי הצורך)",
    ],
    outcome: "התוצאה: פחות התעסקות, יותר שליטה ושקט תפעולי בעסק.",
    link: "https://drive.google.com/file/d/1j40VZjj1TLtvokKUPsXepMadL6beAmQR/view?usp=sharing",
  };

  const chatbotExamples = [
    { label: "דוגמה: ניהול תורים", link: featuredService.link },
    {
      label: "דוגמה: מסחר אלקטרוני",
      link: "https://drive.google.com/file/d/1TrcUi_U-TyjDjaG5R0gJy1mrZy5Ijp5L/view?usp=sharing",
    },
    {
      label: "דוגמה: תמיכה טכנית",
      link: "https://drive.google.com/file/d/1YJaNj6uWyU4IczBh7ufpHKIfmmvHDx01/view?usp=sharing",
    },
  ];

  const otherServices = [
    {
      icon: <BsGear className="w-8 h-8" />,
      title: "מערכות ניהול מידע",
      description:
        "מערכת אחת שמרכזת נתונים, סטטוסים ותהליכים במקום ברור. פחות חיפושים, פחות טעויות, יותר סדר ושליטה.",
      link: "https://drive.google.com/file/d/1SJEK5zrWtqaRAP-3JGDAHiTnlmSxYa0X/view?usp=drive_link",
      cta: "אני רוצה לראות דוגמה",
    },
    {
      icon: <BsLightning className="w-8 h-8" />,
      title: "פתרונות דיגיטליים",
      description:
        "טפסים חכמים, דפי נחיתה וקטלוגים + אוטומציות שמחליפות עבודה ידנית. התהליך זורם לבד, ואת לא רודפת אחרי זה.",
      link: "https://drive.google.com/file/d/1eZ3d7-rxxk9KfZNyrd_gYxPFPb_rtJlJ/view?usp=drive_link",
      cta: "אני רוצה לראות דוגמה",
    },
    {
      icon: <BsRobot className="w-8 h-8" />,
      title: "פתרונות AI",
      description:
        "AI שמקצר זמן ומוריד עומס: סיכומים, תמלולים, ניסוח הודעות/מיילים, והפקת מסמכים — בצורה חכמה ומסודרת.",
      link: "https://drive.google.com/file/d/1nsEMxi8_btHp6ZFlQW2lWwn4VUukrkSV/view?usp=sharing",
      cta: "אני רוצה לראות דוגמה",
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
          <p className="text-white/75 max-w-2xl mx-auto leading-relaxed">
            כל פתרון נבנה כדי לייצר לך <b>שקט תפעולי</b>: פחות התעסקות, יותר סדר,
            יותר שליטה בעסק.
          </p>
        </motion.div>

        {/* GRID */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* FEATURED */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 rounded-3xl p-8 flex flex-col border
                       shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
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

            <h3 className="text-2xl font-extrabold mb-3 text-white text-center md:text-right">
              {featuredService.title}
            </h3>

            <p className="text-white/75 mb-6 text-center md:text-right leading-relaxed">
              {featuredService.intro}
            </p>

            {/* BULLETS */}
            <ul className="text-white/75 mb-6 text-right space-y-2 leading-relaxed">
              {featuredService.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 justify-end">
                  <span
                    className="mt-2 w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: BRAND_GREEN }}
                  />
                  <span className="text-center md:text-right">{b}</span>
                </li>
              ))}
            </ul>

            <p
              className="text-white/85 font-semibold text-center md:text-right mb-8"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              {featuredService.outcome}
            </p>

            {/* CTA BUTTONS */}
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
              className="rounded-3xl p-8 flex flex-col border transition-all duration-300
                         hover:shadow-[0_28px_70px_rgba(0,0,0,0.35)]"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                borderColor: "rgba(124,214,222,0.22)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                className="mb-6 flex justify-center"
                style={{ color: BRAND_CYAN }}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-extrabold mb-3 text-white text-center md:text-right">
                {service.title}
              </h3>

              <p className="text-white/70 mb-6 text-center md:text-right leading-relaxed">
                {service.description}
              </p>

              <div className="mt-auto">
                <button
                  onClick={() => window.open(service.link, "_blank")}
                  className="w-full py-3 px-4 rounded-xl font-bold text-sm
                             transition-all duration-300 transform hover:scale-[1.03]"
                  style={{
                    border: `2px solid ${BRAND_CYAN}`,
                    color: "white",
                    backgroundColor: "rgba(124,214,222,0.10)",
                  }}
                >
                  {service.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOT NOTE */}
        <div className="text-center mt-12 text-white/70">
          לא בטוחה מה מתאים? נבנה יחד פתרון מדויק לתהליך שלך — כדי שתעבדי עם שקט
          תפעולי ושליטה.
        </div>
      </div>
    </section>
  );
}

export default Services;
