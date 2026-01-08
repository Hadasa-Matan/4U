import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BsEye, BsSun, BsCompass, BsShieldCheck } from 'react-icons/bs';

const BRAND_CYAN = "#7cd6de";
const BRAND_GREEN = "#52de4a";

function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const fontBold = { fontFamily: "FbAsparagosBold, sans-serif" };
  const fontRegular = { fontFamily: "FbAsparagos, sans-serif" };

  const outcomes = [
    {
      icon: <BsSun className="w-8 h-8" />,
      title: "שקט תפעולי",
      description: "המערכות עובדות בשבילך מאחורי הקלעים. פחות כיבוי שריפות, פחות התעסקות טכנית - יותר זמן להתמקד במה שאתה אוהב."
    },
    {
      icon: <BsEye className="w-8 h-8" />,
      title: "שליטה מלאה",
      description: "במקום לנחש מה קורה, אתה מקבל תמונת מצב מדויקת בזמן אמת. הנתונים זורמים למקום אחד והכול בשליטה שלך."
    },
    {
      icon: <BsCompass className="w-8 h-8" />,
      title: "בהירות עסקית",
      description: "סדר בתהליכים העסקיים שמאפשר לך לראות את הצעד הבא בבירור, ללא רעשי רקע של משימות ידניות ומתישות."
    },
    {
      icon: <BsShieldCheck className="w-8 h-8" />,
      title: "ביטחון טכנולוגי",
      description: "בזכות הניסיון שלי בהנדסת בדיקות (QA), הפתרונות שתקבל הם יציבים ובדוקים. השקט שלך מגיע מהידיעה שהכול תוכנן לא להישבר."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" style={fontRegular}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* כותרת ראשית - הפוקוס על הלקוח */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" style={fontBold}>
            להחזיר את השקט והשליטה לידיים שלך
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            אני כאן כדי לעזור לך להפסיק לרדוף אחרי העסק, ולהתחיל לנהל אותו בביטחון מלא דרך טכנולוגיה חכמה ואוטומציה יציבה.
          </p>
        </motion.div>

        {/* התוצאה עבור הלקוח - 4 עמודי התווך של השירות */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {outcomes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-slate-50 border border-transparent hover:border-[#7cd6de] transition-all group"
            >
              <div className="text-[#7cd6de] mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3" style={fontBold}>{item.title}</h4>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* הסיפור המקצועי - ה"איך" מאחורי השקט */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-slate-900" style={fontBold}>נעים להכיר, אני הדסה מתן</h3>
            <p className="text-lg text-slate-700">
              אחרי שנים בעולם ההייטק כמהנדסת בדיקות תוכנה (QA) ומדריכת מערכות, החלטתי להביא את הסטנדרטים הגבוהים ביותר לעסקים שרוצים לצמוח באמת.
            </p>
            <p className="text-lg text-slate-700 italic">
              "אני מאמינה שטכנולוגיה לא צריכה להיות מקור ללחץ, אלא הכלי שמייצר לך חופש."
            </p>
            <p className="text-lg text-slate-700">
              המומחיות שלי היא לקחת תהליכים מורכבים ולפשט אותם. בזכות הרקע שלי בבדיקות, אני בונה עבורך מערכות שהן לא רק חכמות, אלא קודם כל **יציבות ואמינות**. כך שכשאתה מקבל ממני פתרון, אתה יכול לסמוך עליו בעיניים עצומות.
            </p>
            <div className="pt-4">
               <div className="flex items-center gap-4 text-[#52de4a] font-bold" style={fontBold}>
                  <span className="w-12 h-0.5 bg-[#52de4a]"></span>
                  בס"ד, בונים עסק שעובד בשבילך
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="relative"
          >
            <div className="rounded-3xl bg-gradient-to-tr from-[#7cd6de]/20 to-[#52de4a]/20 aspect-[4/3] flex items-center justify-center border-2 border-slate-100 shadow-inner">
               <div className="text-center p-12">
                  <h4 className="text-2xl font-bold text-slate-800 mb-4" style={fontBold}>התוצאה בשבילך:</h4>
                  <ul className="space-y-3 text-right inline-block text-slate-700">
                     <li className="flex items-center gap-2">✨ חסכון של שעות עבודה ידניות</li>
                     <li className="flex items-center gap-2">✨ מניעת טעויות אנוש ותקלות</li>
                     <li className="flex items-center gap-2">✨ עסק מאורגן, רגוע ורווחי יותר</li>
                  </ul>
               </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default About;
