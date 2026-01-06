import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsGear, BsLightning, BsRobot, BsChatDots } from "react-icons/bs";
import { Link } from "react-router-dom";

const BRAND_GREEN = "#52de4a";
const BRAND_CYAN = "#7cd6de";

function Services() {
  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: true });

  const featuredService = {
    icon: <BsChatDots className="w-10 h-10" />,
    title: "צ'אטבוטים חכמים – ההתמחות שלנו",
    subtitle: "שקט תפעולי 24/7: פחות עומס על הצוות, יותר סדר בתהליכים.",
    bullets: [
      "מענה מיידי ללקוחות: שאלות נפוצות, תיאומים, תזכורות וסטטוסים",
      "ניתוב חכם: שירות / מכירות / תמיכה – בלי להתבלבל ובלי לפספס",
      "חיבור לערוצים: וואטסאפ, אתר, מייל, בוט קולי ועוד",
    ],
    outcome: "התוצאה: פחות התעסקות, יותר שליטה, ועסק שעובד חלק.",
    examples: [
      {
        label: "דוגמה: ניהול תורים",
        link: "https://drive.google.com/file/d/1j40VZjj1TLtvokKUPsXepMadL6beAmQR/view?usp=sharing",
      },
      {
        label: "דוגמה: מסחר אלקטרוני",
        link: "https://drive.google.com/file/d/1TrcUi_U-TyjDjaG5R0gJy1mrZy5Ijp5L/view?usp=sharing",
      },
      {
        label: "דוגמה: תמיכה טכנית",
        link: "https://drive.google.com/file/d/1YJaNj6uWyU4IczBh7ufpHKIfmmvHDx01/view?usp=sharing",
      },
    ],
  };

  const otherServices = [
    {
      icon: <BsGear className="w-8 h-8" />,
      title: "מערכות ניהול מידע",
      description:
        "מערכת שמרכזת את כל המידע במקום אחד: לידים, לקוחות, סטטוסים, משימות והיסטוריה — כדי שתהיה שליטה ושקט תפעולי.",
      link: "https://drive.google.com/file/d/1SJEK5zrWtqaRAP-3JGDAHiTnlmSxYa0X/view?usp=drive_link",
    },
    {
      icon: <BsLightning className="w-8 h-8" />,
      title: "פתרונות דיגיטליים",
      description:
        "טפסים חכמים, קטלוגים דיגיטליים, דפי נחיתה ותהליכי הרשמה — בנויים כדי לעבוד אוטומטית ולהוריד עומס מהיום-יום.",
      link: "https://drive.google.com/file/d/1eZ3d7-rxxk9KfZNyrd_gYxPFPb_rtJlJ/view?usp=drive_link",
    },
    {
      icon: <BsRobot className="w-8 h-8" />,
      title: "אוטומציות ו-AI בעסק",
      description:
        "חיבורים חכמים בין מערכות + AI: סיכומי שיחות, שליחת הצעות מחיר, ניהול חשבוניות, תהליכי Follow-up — כדי שהטכנולוגיה תעבוד בשבילך.",
      link: "https://drive.google.com/file/d/1nsEMxi8_btHp6ZFlQW2lWwn4VUukrkSV/view?usp=sharing",
    },
  ];

  const open = (url) => window.open(url, "_blank", "noopener,noreferrer");

  return (
    <section
      id="services"
      className="pt-28 pb-24"
      style={{
        background:
          "radial-gradient(900px 420px at 50% 0%, rgba(124,214,222,0.18), transparent 60%)," +
          "linear-gradient(180deg, #050B2A 0%, #07124A 45%, #050B2A 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP TITLE */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            השירותים שלנו
          </h1>
          <p className="text-white/75 max-w-3xl mx-auto leading-relaxed">
            כל פתרון כאן בנוי כדי לייצר <span style={{ color: BRAND_CYAN, fontWeight: 800 }}>שקט תפעולי</span>:
            פחות התעסקות, יותר סדר, יותר שליטה — ותהליכים שעובדים גם כשאת לא זמינה.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              to="/consultation"
              className="px-7 py-3 rounded-full font-bold text-base transition-transform duration-300 hover:scale-[1.03]"
              style={{
                border: `2px solid ${BRAND_CYAN}`,
                color: "white",
                backgroundColor: "rgba(124,214,222,0.12)",
              }}
            >
              שיחת ייעוץ ללא עלות
            </Link>

            <a
              href="#cards"
              className="px-7 py-3 rounded-full font-extrabold text-base transition-transform duration-300 hover:scale-[1.03]"
              style={{
                backgroundColor: BRAND_GREEN,
                color: "#06233a",
                boxShadow: "0 16px 36px rgba(0,0,0,0.25)",
              }}
            >
              לראות את השירותים ↓
            </a>
          </div>
        </motion.div>

        {/* FEATURED CARD */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-7 sm:p-9 border shadow-[0_30px_80px_rgba(0,0,0,0.35)] mb-10"
          style={{
            backgroundColor: "rgba(255,255,255,0.06)",
            borderColor: "rgba(124,214,222,0.35)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
            <div className="flex-1 w-full">
              <div className="flex items-center justify-end gap-3 mb-3">
                <div style={{ color: BRAND_CYAN }}>{featuredService.icon}</div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-right">
                  {featuredService.title}
                </h2>
              </div>

              <p className="text-white/80 text-right mb-5 leading-relaxed">
                {featuredService.subtitle}
              </p>

              {/* bullets - מיושרים לימין, בלי אלכסון */}
              <ul className="space-y-3 text-white/75 text-right">
                {featuredService.bullets.map((b, i) => (
                  <li key={i} className="flex flex-row-reverse items-start gap-3">
                    <span
                      className="mt-2 h-2.5 w-2.5 rounded-full flex-none"
                      style={{ backgroundColor: BRAND_GREEN }}
                    />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              <p className="text-white/85 text-right mt-5 font-semibold">
                {featuredService.outcome}
              </p>
            </div>

            {/* examples buttons */}
            <div className="w-full md:w-[360px]">
              <div
                className="rounded-2xl p-5 border"
                style={{
                  backgroundColor: "rgba(0,0,0,0.18)",
                  borderColor: "rgba(124,214,222,0.28)",
                }}
              >
                <div className="text-right text-white font-extrabold mb-4">
                  דוגמאות לצפייה
                </div>

                <div className="grid gap-3">
                  {featuredService.examples.map((ex, idx) => (
                    <button
                      key={idx}
                      onClick={() => open(ex.link)}
                      className="w-full px-4 py-3 rounded-xl font-bold text-sm transition-transform duration-300 hover:scale-[1.02]"
                      style={{
                        backgroundColor: BRAND_GREEN,
                        color: "#06233a",
                        boxShadow: "0 14px 30px rgba(0,0,0,0.25)",
                      }}
                    >
                      {ex.label}
                    </button>
                  ))}
                </div>

                <div
                  className="mt-4 h-px w-full"
                  style={{ backgroundColor: "rgba(124,214,222,0.22)" }}
                />

                <button
                  onClick={() => open(featuredService.examples[0].link)}
                  className="mt-4 w-full px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
                  style={{
                    border: `2px solid ${BRAND_CYAN}`,
                    color: "white",
                    backgroundColor: "rgba(124,214,222,0.10)",
                  }}
                >
                  רוצה שנבנה משהו דומה לעסק שלך?
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CARDS */}
        <div id="cards" className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {otherServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0,
