import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BsGear, BsLightning, BsRobot, BsChatDots } from 'react-icons/bs';

function Services() {
  const featuredService = {
    icon: <BsChatDots className="w-10 h-10" />,
    title: "צ'אטבוטים חכמים – ההתמחות שלנו",
    description: `
הצ'אטבוט יעבוד עבורך 24 שעות ביממה ויטפל במגוון רחב של צרכי העסק: שירות, מכירות, תמיכה טכנית, ניהול תורים, מעקב הזמנות ומשלוחים, איסוף נתונים ועוד.
הכול עם מענה מיידי וניתוב חכם שמקצר זמני המתנה ומשפר משמעותית את חוויית הלקוח.
ניתן לשלב בינה מלאכותית ליצירת מענה מותאם אישית, ולחבר את הצ'אטבוט למגוון רחב של ערוצים: וואצאפ, אתר, בוט קולי ועוד.
    `,
    link: 'https://drive.google.com/file/d/1j40VZjj1TLtvokKUPsXepMadL6beAmQR/view?usp=sharing'
  };

  const chatbotExamples = [
    { label: 'צ\'אטבוט לניהול תורים', link: featuredService.link },
    { label: 'צ\'אטבוט למסחר אלקטרוני', link: featuredService.link },
    { label: 'צ\'אטבוט לתמיכה טכנית', link: featuredService.link }
  ];

  const otherServices = [
    {
      icon: <BsGear className="w-8 h-8" />,
      title: 'מערכות ניהול מידע',
      description:
        'בנייה והטמעת מערכת ניהול מידע מותאמת אישית לעסק שלך - לייעול תהליכים, חיסכון בזמן והגדלת הרווחיות.',
      link: 'https://drive.google.com/file/d/1SJEK5zrWtqaRAP-3JGDAHiTnlmSxYa0X/view?usp=drive_link'
    },
    {
      icon: <BsLightning className="w-8 h-8" />,
      title: 'פתרונות דיגיטליים',
      description:
        'פיתוח פתרונות דיגיטליים מותאמים אישית: טפסים חכמים, קטלוגים דיגיטליים, דפי נחיתה מתקדמים ועוד.',
      link: 'https://drive.google.com/file/d/1eZ3d7-rxxk9KfZNyrd_gYxPFPb_rtJlJ/view?usp=drive_link'
    },
    {
      icon: <BsRobot className="w-8 h-8" />,
      title: 'פתרונות באמצעות בינה מלאכותית',
      description:
        'שילוב טכנולוגיות AI לייעול תהליכים: תמלול שיחות, סיכום פגישות, שליחת הצעות מחיר, ניהול חשבוניות ועוד.',
      link: 'https://drive.google.com/file/d/1nsEMxi8_btHp6ZFlQW2lWwn4VUukrkSV/view?usp=sharing'
    }
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="services" className="py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TITLE */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-12">הפתרונות החכמים שלנו</h2>
        </motion.div>

        {/* GRID STRUCTURE */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* FEATURED CHATBOT CARD — FULL WIDTH */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 bg-gray-800 rounded-2xl p-8 shadow-lg border border-blue-500/60 flex flex-col
                       transition-all duration-300 hover:shadow-2xl hover:border-blue-400/80 hover:bg-gray-800/90"
          >
            <div className="text-blue-400 mb-6 flex justify-center md:justify-start transition-transform duration-300">
              {featuredService.icon}
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-white text-center md:text-right">
              {featuredService.title}
            </h3>

            <p className="text-gray-300 whitespace-pre-line mb-8 text-center md:text-right">
              {featuredService.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-auto">
              {chatbotExamples.map((example, idx) => (
                <button
                  key={idx}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg
                             transition-all duration-300 transform hover:scale-105 text-sm font-medium"
                  onClick={() => window.open(example.link, '_blank')}
                >
                  {example.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* OTHER SERVICES CARDS */}
          {otherServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-blue-500/30 flex flex-col
                         transition-all duration-300 hover:shadow-2xl hover:border-blue-400/70 hover:bg-gray-800/90"
            >
              <div className="text-blue-400 mb-6 flex justify-center transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4 text-white text-center md:text-right">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-6 text-center md:text-right">
                {service.description}
              </p>

              <div className="mt-auto">
                <button
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg
                             transition-all duration-300 transform hover:scale-105 text-sm"
                  onClick={() => window.open(service.link, '_blank')}
                >
                  אני רוצה לראות דוגמה
                </button>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Services;
