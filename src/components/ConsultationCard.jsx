import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BsClipboardCheck, BsCalendarCheck, BsGear, BsCheckCircle } from 'react-icons/bs';

function ConsultationCard() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const steps = [
    {
      icon: <BsClipboardCheck className="w-6 h-6" />,
      title: "מילוי טופס קצר",
      description: "צעד ראשון פשוט להבנת הצרכים העסקיים שלך שיסייע לך להבין כיצד פתרונות אוטומטיים יכולים לקדם את העסק שלך"
    },
    {
      icon: <BsCalendarCheck className="w-6 h-6" />,
      title: "תיאום פגישה",
      description: "נקבע זמן נוח לשיחת ייעוץ מעמיקה לבחינת הפתרונות המתאימים לעסק שלך."
    },
    {
      icon: <BsGear className="w-6 h-6" />,
      title: "פיתוח פתרון מותאם אישית",
      description: "יחד נגבש תכנית פעולה המותאמת במדויק לצרכים ולמטרות העסק שלך."
    },
    {
      icon: <BsCheckCircle className="w-6 h-6" />,
      title: "יישום והטמעה מוצלחת",
      description: "נלווה אותך לאורך כל הדרך ונוודא שהפתרון האוטומטי משתלב בצורה חלקה בעסק."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="consultation" className="py-32 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold text-white mb-12"
            variants={itemVariants}
          >
            הצעד הראשון להצלחת העסק שלך
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 border border-white/20 group"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-indigo-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative text-indigo-400 group-hover:text-indigo-300 transition-colors duration-500 transform group-hover:scale-110">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-200 transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-500">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12"
          >
            <a
              href="https://form.jotform.com/251493867410057"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-10 py-5 rounded-full font-medium text-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 relative overflow-hidden group"
            >
              <span className="relative z-10">אני רוצה למלא טופס קצרצר</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ConsultationCard;
