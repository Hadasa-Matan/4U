// Services.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsGear, BsLightning, BsRobot, BsChatDots, BsShieldCheck } from "react-icons/bs";

const BRAND_GREEN = "#52de4a";
const BRAND_CYAN = "#7cd6de";
const BRAND_BLUE = "#000ab9";

function Services() {
  const featuredService = {
    icon: <BsChatDots className="w-10 h-10" />,
    title: "שקטבוטים™ — צ׳אטבוט חכם שיוצר שקט תפעולי",
    description:
      "הבוט עובד 24/7 ומייצר סדר בתהליך: עונה מהר, מנתב נכון, אוסף מידע, ומחבר בין לקוחות/פניות לבין הצוות והמערכות — כדי שהעסק יפעל בצורה רגועה, ברורה ומבוקרת.",
    highlights: [
      { title: "סדר ושקיפות", text: "כל פנייה מתועדת, מסווגת ומנותבת — בלי בלגן." },
      { title: "תגובה מיידית", text: "מענה מהיר שמקצר זמני המתנה ומשפר חוויית לקוח." },
      { title: "חיבור למערכות", text: "וואטסאפ, אתר, CRM, טפסים, יומן, אוטומציות ועוד." },
    ],
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
        "בניית והטמעת מערכת שמרכזת נתונים וסטטוסים במקום אחד — כדי לדעת בכל רגע מה קורה, מה בוצע ומה השלב הבא.",
      link: "https://drive.google.com/file/d/1SJEK5zrWtqaRAP-3JGDAHiTnlmSxYa0X/view?usp=drive_link",
    },
    {
      icon: <BsLightning className="w-8 h-8" />,
      title: "אוטומציות ופתרונות דיגיטל",
      description:
        "טפסים חכמים, דפי נחיתה, קטלוגים ואוטומציות שמורידות עבודה ידנית — ומחזירות זמן, סדר ושליטה.",
      link: "https://drive.google.com/file/d/1eZ3d7-rxxk9KfZNyrd_gYxPFPb_rtJlJ/view?usp=drive_link",
    },
    {
      icon: <BsRobot className="w-8 h-8" />,
      title: "AI לעסק — חכם ומעשי",
      description:
        "שילוב בינה מלאכותית בתהליכים קיימים: סיכום שיחות, תמלול, ניסוח הצעות, ניהול משימות/מסמכים ועוד — בלי להסתבך.",
      link: "https://drive.google.com/file/d/1nsEMxi8_btHp6ZFlQW2lWwn4VUukrkSV/view?usp=sharing",
    },
  ];

  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: true });

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
            style={{
              borderColor: "rgba(0,10,185,0.18)",
              background: "rgba(124,214,222,0.10)",
              color: BRAND_BLUE,
            }}
          >
            <BsShieldCheck className="w-4 h-4" />
            <span className="text-sm font-semibold">שקט • רוגע • שליטה</span>
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold text-slate-900">
            הפתרונות החכמים שלך
          </h1>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto leading-relaxed">
            כל מה שנבנה כאן נועד לייצר <span className="font-bold" style={{ color: BRAND_BLUE }}>שקט תפעולי</span>:
            פחות עומס, יותר סדר, ויותר שליטה בתהליך — מהפנייה הראשונה ועד הביצוע.
          </p>
        </motion.div>

        {/* FEATURED CARD */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border overflow-hidden shadow-[0_28px_80px_rgba(0,0,0,0.08)]"
          style={{ borderColor: "rgba(0,10,185,0.18)" }}
        >
          {/* top band */}
          <div
            className="px-8 py-7"
            style={{
              background: `linear-gradient(135deg, rgba(0,10,185,0.06), rgba(124,214,222,0.12), rgba(82,222,74,0.10))`,
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border"
                  style={{
                    borderColor: "rgba(0,10,185,0.18)",
                    background: "white",
                    color: BRAND_BLUE,
                  }}
                >
                  {featuredService.icon}
                </div>

                <div className="text-right">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {featuredService.title}
                  </h2>
                  <p className="mt-2 text-slate-600 leading-relaxed max-w-3xl">
                    {featuredService.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-end">
                <a
                  href="/4U/consultation"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3 font-bold transition-transform hover:scale-[1.03]"
                  style={{
                    backgroundColor: BRAND_GREEN,
                    color: "#06233a",
                    boxShadow: "0 16px 36px rgba(0,0,0,0.12)",
                  }}
                >
                  שיחת ייעוץ ללא עלות
                </a>

                <a
                  href="/4U/contact"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3 font-bold border transition-transform hover:scale-[1.03]"
                  style={{
                    borderColor: "rgba(0,10,185,0.22)",
                    color: BRAND_BLUE,
                    backgroundColor: "rgba(0,10,185,0.04)",
                  }}
                >
                  לדבר איתי
                </a>
              </div>
            </div>
          </div>

          {/* content */}
          <div className="px-8 py-8 bg-white">
            {/* highlights - no bullets */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {featuredService.highlights.map((h) => (
                <div
                  key={h.title}
                  className="rounded-2xl border p-5 text-right"
                  style={{
                    borderColor: "rgba(0,10,185,0.14)",
                    background: "rgba(0,10,185,0.02)",
                  }}
                >
                  <div className="text-sm font-extrabold" style={{ color: BRAND_BLUE }}>
                    {h.title}
                  </div>
                  <div className="mt-2 text-slate-600 leading-relaxed">{h.text}</div>
                </div>
              ))}
            </div>

            {/* examples */}
            <div className="mt-7">
              <div className="text-right text-slate-800 font-extrabold mb-3">
                דוגמאות לצפייה
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {featuredService.examples.map((ex) => (
                  <button
                    key={ex.label}
                    onClick={() => window.open(ex.link, "_blank")}
                    className="w-full rounded-2xl px-4 py-3 font-bold transition-all duration-300
                               hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)] hover:-translate-y-[1px]"
                    style={{
                      backgroundColor: "rgba(82,222,74,0.16)",
                      border: `1px solid rgba(82,222,74,0.45)`,
                      color: "#06233a",
                    }}
                  >
                    {ex.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* OTHER SERVICES */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 + index * 0.08 }}
              className="rounded-3xl border p-7 bg-white text-right
                         shadow-[0_16px_50px_rgba(0,0,0,0.06)]
                         hover:shadow-[0_22px_70px_rgba(0,0,0,0.10)]
                         transition-shadow"
              style={{ borderColor: "rgba(0,10,185,0.16)" }}
            >
              <div className="flex items-center justify-between">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border"
                  style={{
                    borderColor: "rgba(124,214,222,0.45)",
                    background: "rgba(124,214,222,0.12)",
                    color: BRAND_BLUE,
                  }}
                >
                  {service.icon}
                </div>
                <div
                  className="text-xs font-bold px-3 py-1 rounded-full border"
                  style={{
                    borderColor: "rgba(0,10,185,0.14)",
                    color: BRAND_BLUE,
                    background: "rgba(0,10,185,0.03)",
                  }}
                >
                  שקט תפעולי
                </div>
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                {service.description}
              </p>

              <button
                onClick={() => window.open(service.link, "_blank")}
                className="mt-6 w-full rounded-2xl px-4 py-3 font-bold border transition-all
                           hover:-translate-y-[1px]"
                style={{
                  borderColor: "rgba(124,214,222,0.55)",
                  background: "rgba(124,214,222,0.12)",
                  color: BRAND_BLUE,
                }}
              >
                לראות דוגמה
              </button>
            </motion.div>
          ))}
        </div>

        {/* closing line */}
        <div className="mt-12 text-center text-slate-600">
          רוצה שנבחר יחד את הפתרון שיביא <span className="font-bold" style={{ color: BRAND_BLUE }}>שקט ושליטה</span> לעסק?
        </div>
      </div>
    </section>
  );
}

export default Services;
