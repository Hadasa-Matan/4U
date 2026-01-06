import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsGear, BsLightning, BsRobot, BsChatDots } from "react-icons/bs";

const BRAND_GREEN = "#52de4a";
const BRAND_CYAN = "#7cd6de";
const BRAND_BLUE = "#000ab9";

function Services() {
  const featuredService = {
    icon: <BsChatDots className="w-10 h-10" />,
    title: "בוטים חכמים שמביאים שקט תפעולי",
    subtitle:
      "מענה, סדר וזרימה — כך שהעסק/הארגון ממשיך לעבוד גם כשאת/ה לא זמין/ה.",
    highlights: [
      "מענה מיידי ושירות רציף: תיאומים, שאלות נפוצות, מכירות ותמיכה",
      "ניתוב חכם ואיסוף נתונים: פחות עומס, פחות פספוסים, יותר שליטה",
      "חיבור לערוצים ולמערכות: אתר, וואטסאפ, אימייל, טפסים, CRM ועוד (לפי הצורך)",
    ],
    note:
      "התוצאה: פחות התעסקות, יותר שקט — ויכולת לקבל החלטות על בסיס מידע מסודר.",
    links: [
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
        "בנייה והטמעה של מערכת שמרכזת נתונים, סטטוסים ותהליכים במקום אחד — כדי שתדעו בכל רגע מה קורה, מה חסר, ומה השלב הבא.",
      link: "https://drive.google.com/file/d/1SJEK5zrWtqaRAP-3JGDAHiTnlmSxYa0X/view?usp=drive_link",
      badge: "שליטה וסדר",
    },
    {
      icon: <BsLightning className="w-8 h-8" />,
      title: "פתרונות דיגיטליים",
      description:
        "טפסים חכמים, קטלוגים, דפי נחיתה ותהליכי איסוף לידים — בצורה נקייה שמקצרת זמן ומייצרת חוויה מקצועית וברורה.",
      link: "https://drive.google.com/file/d/1eZ3d7-rxxk9KfZNyrd_gYxPFPb_rtJlJ/view?usp=drive_link",
      badge: "זרימה חכמה",
    },
    {
      icon: <BsRobot className="w-8 h-8" />,
      title: "אוטומציות עם AI",
      description:
        "תהליכים שעובדים בשבילכם: סיכומי שיחות, תמלולים, יצירת הצעות מחיר, הודעות אוטומטיות, מעקבים — כדי להפחית עבודה ידנית ולשמור על עקביות.",
      link: "https://drive.google.com/file/d/1nsEMxi8_btHp6ZFlQW2lWwn4VUukrkSV/view?usp=sharing",
      badge: "שקט תפעולי",
    },
  ];

  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: true });

  return (
    <section
      id="services"
      className="py-24 sm:py-28"
      style={{
        background: `radial-gradient(1200px 600px at 50% 0%, rgba(124,214,222,0.18) 0%, rgba(0,10,185,0.0) 60%),
                     linear-gradient(180deg, ${BRAND_BLUE} 0%, #050B2A 70%, #050B2A 100%)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TITLE */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            המוצרים והשירותים שלנו
          </h1>
          <p className="mt-4 text-white/80 max-w-3xl mx-auto leading-relaxed">
            כל פתרון נבנה כדי לייצר <span className="font-semibold">שקט תפעולי</span>:
            פחות עומס, יותר סדר, והרבה יותר שליטה בעסק/בארגון — בצורה שמתאימה בדיוק לצורך שלכם.
          </p>
        </motion.div>

        {/* FEATURED CARD */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden border"
          style={{
            borderColor: "rgba(124,214,222,0.35)",
            boxShadow: "0 35px 90px rgba(0,0,0,0.35)",
          }}
        >
          {/* top strip */}
          <div
            className="px-6 sm:px-10 py-6 sm:py-7"
            style={{
              background:
                "linear-gradient(90deg, rgba(124,214,222,0.18) 0%, rgba(82,222,74,0.10) 35%, rgba(255,255,255,0.04) 100%)",
            }}
          >
            <div className="flex items-center justify-end gap-3 text-white">
              <span
                className="inline-flex items-center justify-center w-12 h-12 rounded-2xl"
                style={{ backgroundColor: "rgba(255,255,255,0.10)", color: BRAND_CYAN }}
              >
                {featuredService.icon}
              </span>
              <div className="text-right">
                <div className="text-2xl sm:text-3xl font-extrabold">
                  {featuredService.title}
                </div>
                <div className="text-white/80 mt-1">{featuredService.subtitle}</div>
              </div>
            </div>
          </div>

          {/* content */}
          <div className="bg-white px-6 sm:px-10 py-8 sm:py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
              {/* right column (RTL text area) */}
              <div className="text-right">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  מה מקבלים בפועל?
                </h3>

                {/* clean list aligned to the right (no “left bullets”) */}
                <div className="mt-5 space-y-3">
                  {featuredService.highlights.map((t, i) => (
                    <div
                      key={i}
                      className="flex flex-row-reverse items-start gap-3"
                    >
                      <span
                        className="mt-2 w-2.5 h-2.5 rounded-full flex-none"
                        style={{ backgroundColor: BRAND_GREEN }}
                      />
                      <p className="text-slate-700 leading-relaxed">{t}</p>
                    </div>
                  ))}
                </div>

                <div
                  className="mt-6 rounded-2xl p-4 border"
                  style={{
                    borderColor: "rgba(0,10,185,0.18)",
                    backgroundColor: "rgba(0,10,185,0.04)",
                  }}
                >
                  <p className="text-slate-800 font-semibold">
                    {featuredService.note}
                  </p>
                </div>

                {/* requested sentence + buttons BELOW it */}
                <p className="mt-8 text-slate-800 font-bold">
                  רוצה שנבחר יחד את הפתרון שיביא שקט, רוגע ושליטה לעסק/לארגון?
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {featuredService.links.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => window.open(item.link, "_blank")}
                      className="w-full py-3 px-4 rounded-xl text-sm font-extrabold
                                 transition-transform duration-300 hover:scale-[1.02]"
                      style={{
                        backgroundColor: BRAND_GREEN,
                        color: "#06233a",
                        boxShadow: "0 14px 28px rgba(0,0,0,0.18)",
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* left column: calm “info” card */}
              <div className="rounded-3xl p-6 sm:p-7 border bg-white"
                   style={{ borderColor: "rgba(124,214,222,0.35)" }}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="text-sm font-extrabold px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: "rgba(124,214,222,0.20)",
                      color: "#06233a",
                    }}
                  >
                    מתאים לעסק/לארגון
                  </div>
                  <div
                    className="text-sm font-bold"
                    style={{ color: BRAND_BLUE }}
                  >
                    שקט תפעולי • שליטה • סדר
                  </div>
                </div>

                <h4 className="mt-5 text-lg sm:text-xl font-extrabold text-slate-900 text-right">
                  בנייה מדויקת לפי הצורך — בלי רעש מיותר
                </h4>
                <p className="mt-3 text-slate-700 leading-relaxed text-right">
                  במקום “עוד כלי” שמוסיפים ומסתבכים איתו — אנחנו בונים תהליך שעובד.
                  ברור, מדיד, ומתוחזק בצורה מסודרת כדי שתוכלו להרגיש רגועים/ות לאורך זמן.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3">
                  <div
                    className="rounded-2xl p-4 border text-right"
                    style={{
                      borderColor: "rgba(82,222,74,0.35)",
                      backgroundColor: "rgba(82,222,74,0.10)",
                    }}
                  >
                    <div className="font-extrabold text-slate-900">
                      מדדים ועקביות
                    </div>
                    <div className="text-slate-700 mt-1">
                      יודעים מה נכנס, מה טופל, ומה מחכה — בלי לרדוף אחרי מידע.
                    </div>
                  </div>

                  <div
                    className="rounded-2xl p-4 border text-right"
                    style={{
                      borderColor: "rgba(124,214,222,0.35)",
                      backgroundColor: "rgba(124,214,222,0.10)",
                    }}
                  >
                    <div className="font-extrabold text-slate-900">
                      חוויית לקוח חכמה
                    </div>
                    <div className="text-slate-700 mt-1">
                      תגובה מהירה, שאלות נכונות, וניהול מסודר — שמרגיש מקצועי.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* OTHER SERVICES */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {otherServices.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 + i * 0.08 }}
              className="rounded-3xl bg-white border p-7 flex flex-col"
              style={{
                borderColor: "rgba(0,10,185,0.14)",
                boxShadow: "0 22px 55px rgba(0,0,0,0.12)",
              }}
            >
              <div className="flex items-center justify-between">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(0,10,185,0.06)",
                    color: BRAND_BLUE,
                  }}
                >
                  {s.icon}
                </div>
                <div
                  className="text-xs font-extrabold px-3 py-1.5 rounded-full"
                  style={{
                    backgroundColor: "rgba(124,214,222,0.18)",
                    color: "#06233a",
                  }}
                >
                  {s.badge}
                </div>
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-slate-900 text-right">
                {s.title}
              </h3>
              <p className="mt-3 text-slate-700 leading-relaxed text-right">
                {s.description}
              </p>

              <button
                onClick={() => window.open(s.link, "_blank")}
                className="mt-6 w-full py-3 px-4 rounded-xl text-sm font-extrabold
                           transition-transform duration-300 hover:scale-[1.02]"
                style={{
                  border: `2px solid ${BRAND_CYAN}`,
                  color: BRAND_BLUE,
                  backgroundColor: "rgba(124,214,222,0.10)",
                }}
              >
                לצפייה בדוגמה
              </button>
            </motion.div>
          ))}
        </div>

        {/* bottom reassurance line */}
        <div className="mt-10 text-center text-white/80">
          רוצים מראה נקי + תהליך שעובד?{" "}
          <span className="font-semibold" style={{ color: BRAND_CYAN }}>
            כאן בדיוק נכנס השקט התפעולי.
          </span>
        </div>
      </div>
    </section>
  );
}

export default Services;
