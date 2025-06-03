import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BsCode, BsGear, BsLightning, BsShieldCheck } from 'react-icons/bs';

function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const techFeatures = [
    {
      icon: <BsCode className="w-6 h-6" />,
      title: "פתרונות טכנולוגיים בהתאמה אישית",
      description: "פיתוח כלים חדשניים המותאמים במדויק לצרכים הייחודיים של העסק שלך, במטרה למקסם את הפוטנציאל שלו"
    },
    {
      icon: <BsGear className="w-6 h-6" />,
      title: "חיסכון וייעול תהליכים",
      description: "הטמעת טכנולוגיות מתקדמות לחיסכון משמעותי בזמן ובעלויות, תוך ייעול תהליכים עסקיים קיימים והגברת הפרודוקטיביות"
    },
    {
      icon: <BsLightning className="w-6 h-6" />,
      title: "הדרכה והטמעה מקצועית",
      description: "ליווי מקיף הכולל הדרכה והטמעה של המערכות החדשות, להבטחת מעבר חלק, קליטה מהירה ויכולת תפעול עצמאית ויעילה"
    },
    {
      icon: <BsShieldCheck className="w-6 h-6" />,
      title: "איכות ואמינות ללא פשרות",
      description: "התחייבות לסטנדרטים הגבוהים ביותר של איכות ואמינות, הנשענת על ניסיון עשיר בהנדסת בדיקות, להבטחת פתרונות יציבים ובדוקים"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 to-indigo-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-12">אודות</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20 mb-16"
          >
            <div className="text-white space-y-8">
              <h3 className="text-3xl font-bold mb-6">נעים להכיר, אני הדסה מתן.</h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                מתמחה בבניית פתרונות טכנולוגיים חדשניים, המותאמים אישית לעסקים ולעצמאים.
                מטרתי המרכזית היא להעצים את העסק שלך באמצעות טכנולוגיה, תוך התמקדות בחיסכון משמעותי בזמן ובמשאבים, הפחתת הוצאות תפעוליות וייעול תהליכים עסקיים.
              </p>
              <p className="text-gray-200 leading-relaxed text-lg">
                אני מביאה עימי ניסיון רב שנים בתחום ההדרכה והטמעת מערכות. ידע זה מאפשר לי להבטיח שהטכנולוגיות החדשות לא רק יפותחו, אלא גם יוטמעו בעסק שלך בצורה חלקה וידידותית, כך שההתחדשות תהיה קלה ונטולת קשיים עבורך ועבור העובדים שלך.
              </p>
              <p className="text-gray-200 leading-relaxed text-lg">
                בנוסף, ניסיוני העשיר כמהנדסת בדיקות תוכנה מבטיח בס"ד, כי כל פתרון שאני מפתחת עומד בסטנדרטים הגבוהים ביותר של איכות, אמינות ויציבות, ומספק לך שקט נפשי וביטחון מלא בפעילות העסקית שלך.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white">היתרונות שלנו</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white/5 rounded-xl p-6 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-blue-400 mb-4 text-3xl">{feature.icon}</div>
                <h4 className="text-white text-xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
