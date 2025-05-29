import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { XMarkIcon } from '@heroicons/react/24/outline';

function Testimonials() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const testimonials = [
    {
      author: "הרב גלוסקין, גבאי ביהכנ\"ס 'אהל שמשון'",
      text: "\"כגבאי בית כנסת המתזז רבות בין משימות לא נגמרות\nגב' מתן הקפיצה אותי בכמה רמות עם אוטומציה מדהימה החוסכת הרבה זמן, (ובמיוחד בדקות אחרונות לפני שבת, ברכת מזל טוב, במהירות שיא וזמני תפילות אוטומטים וכד').\nפשוט, קל ויעיל\"",
      avatar: "/images/avatar1.jpg",
      image: "/images/testimonial1.jpg"
    },
    {
      author: "חסי לינטופ, מנהלת תוכניות כפיים",
      text: "\"תודה שהגשמת לי חלום...\nהאוטומציה הזו מהממת\nחוסכת לי זמן והתעסקות\nהכל ברור מסודר ומתקתק!! ...\"",
      image: "/images/avatar2.gif",
      avatar: "/images/testimonial2.jpg"
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

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
          <h2 className="text-4xl font-bold text-white mb-12">המלצות מלקוחות מרוצים</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 border border-white/20"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover border-4 border-indigo-100/20"
                    loading="lazy"
                  />
                  <div className="mr-4">
                    <h3 className="text-xl font-bold text-white">{testimonial.author}</h3>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                    {testimonial.text}
                  </p>
                </div>

                {testimonial.image && (
                  <div 
                    className="mt-6 cursor-pointer transform hover:scale-105 transition-transform duration-300"
                    onClick={() => openModal(testimonial.image)}
                  >
                    <img
                      src={testimonial.image}
                      alt="המלצה בכתב יד"
                      className="w-full rounded-lg shadow-md"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage}
              alt="המלצה מורחבת"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}

export default Testimonials;
