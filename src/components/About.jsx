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
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0">
          <div className="grid grid-cols-12 gap-2 h-full w-full transform rotate-12">
            {Array.from({ length: 100 }).map((_, index) => (
              <motion.div
                key={index}
                className="h-8 bg-blue-500/30 rounded"
                initial={{ opacity: 0.1 }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-12">אודות</h2>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
                <img
                  src="/4U/images/Ds3LrL2GnRioYMjRpMR2Q.png"
                  alt="Tech Innovation"
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-video"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 rounded-2xl"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:w-1/2"
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20">
                <motion.div className="text-white space-y-6 text-right">
                  <h3 className="text-2xl font-bold mb-4">נעים להכיר, אני הדסה מתן.</h3>
                  <p className="text-gray-300 leading-relaxed">
                    מתמחה בבניית פתרונות טכנולוגיים חדשניים, המותאמים אישית לעסקים ולעצמאים.
                    מטרתי המרכזית היא להעצים את העסק שלך באמצעות טכנולוגיה, תוך התמקדות בחיסכון משמעותי בזמן ובמשאבים, הפחתת הוצאות תפעוליות וייעול תהליכים עסקיים.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    אני מביאה עימי ניסיון רב שנים בתחום ההדרכה והטמעת מערכות. ידע זה מאפשר לי להבטיח שהטכנולוגיות החדשות לא רק יפותחו, אלא גם יוטמעו בעסק שלך בצורה חלקה וידידותית, כך שההתחדשות תהיה קלה ונטולת קשיים עבורך ועבור העובדים שלך.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    בנוסף, ניסיוני העשיר כמהנדסת בדיקות תוכנה מבטיח בס"ד, כי כל פתרון שאני מפתחת עומד בסטנדרטים הגבוהים ביותר של איכות, אמינות ויציבות, ומספק לך שקט נפשי וביטחון מלא בפעילות העסקית שלך.
                  </p>
                </motion.div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  {techFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="bg-white/5 rounded-xl p-4 backdrop-blur-lg border border-white/10"
                    >
                      <div className="text-blue-400 mb-2">{feature.icon}</div>
                      <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
