import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { XMarkIcon } from '@heroicons/react/24/outline';

const BRAND_BLUE = "#000ab9";
const BRAND_GREEN = "#52de4a";
const BRAND_CYAN = "#7cd6de";

function Testimonials() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [scale, setScale] = useState(1);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // הגדרות פונטים זהות ל-About
  const fontBold = { fontFamily: "FbAsparagosBold, sans-serif", fontWeight: "bold" };
  const fontRegular = { fontFamily: "FbAsparagos, sans-serif" };

  const fontFaceStyle = `
    @font-face { font-family: 'FbAsparagosBold'; src: url('/4U/fonts/FbAsparagos-Bold.otf') format('opentype'); }
    @font-face { font-family: 'FbAsparagos'; src: url('/4U/fonts/FbAsparagos-Regular.otf') format('opentype'); }
  `;

  const testimonials = [
    {
      author: "הרב גלוסקין, גבאי ביהכנ\"ס 'אהל שמשון'",
      text: "\"כגבאי בית כנסת המתזז רבות בין משימות לא נגמרות גב' מתן הקפיצה אותי בכמה רמות עם אוטומציה מדהימה החוסכת הרבה זמן, פשוט, קל ויעיל\"",
      avatar: "/4U/images/avatar1.jpg",
      image: "/4U/images/testimonial1.jpg"
    },
    {
      author: "חסי לינטופ, מנהלת תוכניות כפיים",
      text: "\"תודה שהגשמת לי חלום... האוטומציה הזו מהממת חוסכת לי זמן והתעסקות הכל ברור מסודר ומתקתק!! ...\"",
      avatar: "/4U/images/avatar2.gif",
      image: "/4U/images/testimonial2.jpg"
    },
    {
      author: "לקוח מרוצה נוסף",
      text: "\"השירות והמקצועיות של הדסה פשוט יוצאי דופן. המערכות שבנתה לנו שינו את פני העסק מקצה לקצה והביאו לשקט תפעולי אמיתי.\"",
      avatar: "/4U/images/avatar1.jpg", // ניתן לשנות לאווטאר אחר
      image: "/4U/images/testimonial3.jpg"
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
    setScale(1);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY * -0.01;
    const newScale = Math.min(Math.max(0.5, scale + delta), 4);
    setScale(newScale);
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl" style={fontRegular}>
      <style>{fontFaceStyle}</style>

      {/* --- HERO SECTION - זהה בדיוק ל-About ו-Services --- */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 px-6 bg-slate-50/50 border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl text-slate-900 mb-4" style={fontBold}>
            מה הלקוחות <span style={{ color: BRAND_CYAN }}>אומרים</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            ההצלחה שלכם היא המדד הכי טוב לעבודה שלי. הנה כמה סיפורים מהשטח.
          </p>
        </div>
      </section>

      {/* --- TESTIMONIALS GRID --- */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] border-[1px] border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="p-8 flex-grow">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-14 h-14 rounded-full object-cover border-2"
                      style={{ borderColor: BRAND_BLUE }}
                    />
                    <div className="mr-4">
                      <h3 className="text-lg font-bold text-slate-900" style={fontBold}>{testimonial.author}</h3>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 text-base leading-relaxed mb-6 italic">
                    {testimonial.text}
                  </p>

                  {testimonial.image && (
                    <div 
                      className="relative rounded-xl overflow-hidden cursor-pointer group"
                      onClick={() => openModal(testimonial.image)}
                    >
                      <img
                        src={testimonial.image}
                        alt="צילום המלצה"
                        className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <span className="bg-white/90 px-4 py-2 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: BRAND_BLUE }}>
                          הגדל תמונה +
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MODAL --- */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-12 left-0 text-white hover:text-gray-300 transition-colors"
            >
              <XMarkIcon className="h-10 w-10" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage}
              alt="המלצה מורחבת"
              className="w-full rounded-lg shadow-2xl"
              style={{ transform: `scale(${scale})`, transition: 'transform 0.2s' }}
              onWheel={handleWheel}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Testimonials;
