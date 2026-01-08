import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsShieldCheck, BsLightbulb, BsGear } from "react-icons/bs";

// צבעי המותג
const BRAND_GREEN = "#52de4a";
const BRAND_CYAN = "#7cd6de";
const BRAND_BLUE = "#000ab9";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  // הזרקת פונטים
  const fontFaceStyle = `
    @font-face { font-family: 'FbAsparagosBlack'; src: url('/4U/fonts/FbAsparagos-Black.otf') format('opentype'); font-weight: 900; }
    @font-face { font-family: 'FbAsparagosBold'; src: url('/4U/fonts/FbAsparagos-Bold.otf') format('opentype'); font-weight: bold; }
    @font-face { font-family: 'FbAsparagos'; src: url('/4U/fonts/FbAsparagos-Regular.otf') format('opentype'); }
  `;

  const fontBlack = { fontFamily: "FbAsparagosBlack, sans-serif", fontWeight: 900 };
  const fontBold = { fontFamily: "FbAsparagosBold, sans-serif", fontWeight: "bold" };
  const fontRegular = { fontFamily: "FbAsparagos, sans-serif" };

  const values = [
    {
      icon: <BsShieldCheck className="w-10 h-10" />,
      title: "דיוק טכנולוגי",
      subtitle: "כבודקת תוכנה (QA)",
      description: "אני בונה מערכות שלא משאירות מקום לטעויות. כל תהליך נבדק ומוודא שהוא חסין מפני תקלות, כך שתוכלו לסמוך על הטכנולוגיה 100%."
    },
    {
      icon: <BsLightbulb className="w-10 h-10" />,
      title: "הנגשה והדרכה",
      subtitle: "כמרצה למחשבים",
      description: "אני לא רק בונה פתרונות - אני גם מוודאת שאתם מבינים איך להשתמש בהם. המטרה היא שתרגישו בשליטה מלאה, לא תלויים בי."
    },
    {
      icon: <BsGear className="w-10 h-10" />,
      title: "אוטומציה חכמה",
      subtitle: "טכנולוגיה שעובדת בשבילכם",
      description: "במקום שאתם תעבדו על המחשב, המחשב עובד עבורכם. משימות חוזרות הופכות לאוטומטיות, והזמן שלכם משתחרר למה שחשוב באמת."
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-20" dir="rtl" style={fontRegular}>
      <style>{fontFaceStyle}</style>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl text-slate-900 mb-8 leading-tight" style={fontBlack}>
            מחליפה <span style={{ color: BRAND_BLUE }}>כאוס</span>
            <br />
            ב<span style={{ color: BRAND_GREEN }}>שקט תפעולי</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed max-w-3xl mx-auto mb-6" style={fontBold}>
            כדי שתחזירו לעצמכם את השליטה ביומיום
          </p>

          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto" style={fontRegular}>
            אני הדסה מתן, ואני כאן כדי להפוך את הטכנולוגיה לבת ברית שלכם - לא למקור לחץ.
          </p>
        </motion.div>
      </section>

      {/* MAIN STORY */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* הסיפור האישי */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[40px] shadow-lg border border-slate-100 overflow-hidden mb-16 relative"
          >
            <div className="absolute top-0 right-0 w-2 h-full"
                 style={{ background: `linear-gradient(180deg, ${BRAND_BLUE} 0%, ${BRAND_CYAN} 50%, ${BRAND_GREEN} 100%)` }} />
            
            <div className="p-10 md:p-16 space-y-8 text-right">
              
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl text-slate-900 mb-6" style={fontBlack}>
                  השילוב שיוצר את ה<span style={{ color: BRAND_CYAN }}>שקט</span>
                </h2>
                
                <p className="text-xl text-slate-700 leading-relaxed">
                  הלקוחות שלي תמיד אומרים שהדבר שהם הכי מעריכים זה את <strong>השקט התפעולי</strong> שנוצר ברגע שנכנסת מערכת חכמה לעסק.
                </p>

                <p className="text-xl text-slate-700 leading-relaxed">
                  השקט הזה לא מגיע במקרה. הוא תוצאה של שילוב נדיר בין שני עולמות מקצועיים שמבטיחים לכם מקסימום ביטחון:
                </p>
              </div>

              {/* שתי העמודות המרכזיות */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <div className="bg-slate-50 p-8 rounded-3xl border-r-4 hover:shadow-md transition-shadow" 
                     style={{ borderColor: BRAND_BLUE }}>
                  <h3 className="text-slate-900 text-2xl mb-4" style={fontBold}>
                    👁️ כבודקת תוכנה (QA)
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    אני מביאה איתי "עין בוחנת" שלא מפספסת אף פרט. כל תהליך שאני בונה עובר בדיקות קפדניות, כך שהמערכת שלכם לא רק עובדת - היא <strong>חסינה לטעויות</strong>.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed mt-4">
                    אתם יכולים לישון בשקט בידיעה שהכל פועל כשורה, בלי הפתעות לא נעימות.
                  </p>
                </div>

                <div className="bg-slate-50 p-8 rounded-3xl border-r-4 hover:shadow-md transition-shadow" 
                     style={{ borderColor: BRAND_GREEN }}>
                  <h3 className="text-slate-900 text-2xl mb-4" style={fontBold}>
                    💡 כמרצה למחשבים
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    אני יודעת לפשט תהליכים מורכבים ולהנגיש אותם בגובה העיניים. זה אומר שאני לא רק בונה אוטומציה - אני מוודאת שאתם <strong>מבינים ושולטים</strong> במערכת בביטחון מלא.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed mt-4">
                    המטרה היא שתרגישו בשליטה, לא תלויים.
                  </p>
                </div>
              </div>

              {/* המסר המרכזי */}
              <div className="space-y-6 pt-10 border-t border-slate-200">
                <p className="text-slate-900 text-2xl md:text-3xl leading-tight" style={fontBold}>
                  במקום לבצע ידנית את אותן פעולות בכל בוקר —
                  <br />
                  <span style={{ color: BRAND_CYAN }}>בונים מערכת שעובדת בשבילכם.</span>
                </p>
                
                <p className="text-xl text-slate-600 leading-relaxed">
                  החזון שלי הוא "לפרק" את היומיום העמוס שלכם למשימות ברורות שהמחשב יכול לעשות טוב יותר, מהר יותר ובלי טעויות אנוש.
                </p>

                <p className="text-xl text-slate-600 leading-relaxed">
                  כשהטכנולוגיה עובדת בשבילכם, השליטה חוזרת לידיים שלכם ומתפנה הזמן למה שבאמת חשוב: <strong>להוביל את העסק קדימה</strong>.
                </p>
              </div>
            </div>
          </motion.div>

          {/* שלושת הערכים המרכזיים */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-all"
              >
                <div className="mb-6" style={{ color: BRAND_BLUE }}>
                  <div className="inline-block p-4 rounded-2xl" 
                       style={{ backgroundColor: `${BRAND_CYAN}20` }}>
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-2xl text-slate-900 mb-2" style={fontBold}>
                  {value.title}
                </h3>
                <p className="text-lg mb-4" style={{ color: BRAND_BLUE, ...fontBold }}>
                  {value.subtitle}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA סיום */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-bl from-slate-50 to-white rounded-[40px] p-12 text-center border border-slate-100 shadow-sm"
          >
            <h3 className="text-3xl md:text-5xl mb-6" style={{ ...fontBlack, color: BRAND_BLUE }}>
              בואו נכניס שקט ושליטה אמיתית לעסק שלכם
            </h3>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              זמן שתפסיקו לרוץ אחרי המערכות ותתחילו לשלוט בהן
            </p>
            <a
              href="/consultation"
              className="inline-block px-10 py-5 rounded-full text-xl font-bold transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: BRAND_GREEN, color: "#06233a", ...fontBold }}
            >
              בואו נדבר על העסק שלכם
            </a>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default About;
