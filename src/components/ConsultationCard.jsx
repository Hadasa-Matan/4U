import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BsClipboardCheck, BsCalendarCheck, BsGear, BsCheckCircle } from 'react-icons/bs';

function ConsultationCard() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleFormClick = async () => {
    try {
      const clickData = {
        action: 'form_button_click',
        page: '/consultation',
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        referrer: document.referrer
      };

      // כאן תוכלי להוסיף את ה-webhook URL מ-Make
      const webhookUrl = 'https://hook.eu2.make.com/1gpuy8jd0zbdih1v5f3rm61jkmtw7l67';      
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clickData)
      });

      // פתיחת הטופס בחלון חדש
      window.open('https://form.jotform.com/251493867410057', '_blank');
    } catch (error) {
      console.error('Error tracking form click:', error);
      // במקרה של שגיאה, עדיין נפתח את הטופס
      window.open('https://form.jotform.com/251493867410057', '_blank');
    }
  };

 const steps = [
    {
      number: 1,
      icon: <BsClipboardCheck className="w-6 h-6" />,
      title: "מילוי טופס קצר",
      description: "צעד ראשון פשוט להבנת הצרכים העסקיים שלך שיסייע לך להבין כיצד פתרונות אוטומטיים יכולים לקדם את העסק שלך"
    },
    {
      number: 2,
      icon: <BsCalendarCheck className="w-6 h-6" />,
      title: "תיאום פגישה",
      description: "נקבע זמן נוח לשיחת ייעוץ מעמיקה לבחינת הפתרונות המתאימים לעסק שלך."
    },
    {
      number: 3,
      icon: <BsGear className="w-6 h-6" />,
      title: "פיתוח פתרון מותאם אישית",
      description: "יחד נגבש תכנית פעולה המותאמת במדויק לצרכים ולמטרות העסק שלך."
    },
    {
      number: 4,
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

  const stepCardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const numberVariants = {
    hidden: { scale: 0, rotate: -180, x: -20 },
    visible: {
      scale: 1,
      rotate: 0,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="consultation" className="py-32 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/5 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, -100],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
            style={{
              width: Math.random() * 6 + 4 + 'px',
              height: Math.random() * 6 + 4 + 'px',
            }}
          />
        ))}
      </div>

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
                variants={stepCardVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={handleFormClick}
                className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 pl-16 transition-all duration-500 border border-white/20 group cursor-pointer overflow-hidden"
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                
                {/* Number - positioned on the left */}
                <motion.div
                  variants={numberVariants}
                  className="absolute top-6 left-6 text-6xl font-bold text-transparent bg-gradient-to-br from-indigo-400 to-purple-400 bg-clip-text drop-shadow-lg"
                  style={{
                    fontFamily: 'FbAsparagos, sans-serif',
                    textShadow: '0 0 20px rgba(99, 102, 241, 0.5)'
                  }}
                >
                  {step.number}
                </motion.div>

                {/* Floating particles around the card */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-indigo-400 rounded-full"
                      initial={{
                        x: Math.random() * 100 + '%',
                        y: Math.random() * 100 + '%',
                        scale: 0,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        y: [null, '-20px'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  <div className="relative mb-6">
                    <motion.div 
                      className="absolute inset-0 bg-indigo-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="relative text-indigo-400 group-hover:text-indigo-300 transition-colors duration-500"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {step.icon}
                    </motion.div>
                  </div>
                  
                  <motion.h3 
                    className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-200 transition-colors duration-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    {step.title}
                  </motion.h3>
                  
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-500">
                    {step.description}
                  </p>

                  {/* Click indicator */}
                  <motion.div
                    className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    <span className="text-indigo-300 text-sm font-medium">לחץ להתחלה →</span>
                  </motion.div>
                </div>

                {/* Ripple effect on click */}
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-2xl opacity-0"
                  whileTap={{
                    opacity: [0, 0.3, 0],
                    scale: [0.8, 1.2, 1],
                  }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12"
          >
            <motion.button
              onClick={handleFormClick}
              className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-10 py-5 rounded-full font-medium text-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
              >
                אני רוצה למלא טופס קצרצר
              </motion.span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />
              
              {/* Button sparkle effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    initial={{
                      x: Math.random() * 100 + '%',
                      y: Math.random() * 100 + '%',
                      scale: 0,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ConsultationCard;
