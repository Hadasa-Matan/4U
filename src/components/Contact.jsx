import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BsTelephone, BsEnvelope, BsClock, BsChatDots } from 'react-icons/bs';

const BRAND_GREEN = "#52de4a";
const BRAND_CYAN = "#7cd6de";
const BRAND_BLUE = "#000ab9";

function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const fontBold = { fontFamily: "FbAsparagosBold, sans-serif", fontWeight: "bold" };
  const fontRegular = { fontFamily: "FbAsparagos, sans-serif" };
  const fontEng = { fontFamily: "FbRimonaEng, sans-serif" };

  const fontFaceStyle = `
    @font-face { font-family: 'FbAsparagosBold'; src: url('/4U/fonts/FbAsparagos-Bold.otf') format('opentype'); }
    @font-face { font-family: 'FbAsparagos'; src: url('/4U/fonts/FbAsparagos-Regular.otf') format('opentype'); }
    @font-face { font-family: 'FbRimonaEng'; src: url('/4U/fonts/FbRimonaEng-Regular.otf') format('opentype'); }
  `;

  const emailSubject = encodeURIComponent("הגעתי דרך האתר שלך");
  const emailBody = encodeURIComponent("שלום וברכה,\n\nאשמח ל...");
  const mailtoLink = `mailto:hadasamatan@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div className="min-h-screen bg-white pb-12" dir="rtl" style={fontRegular}>
      <style>{fontFaceStyle}</style>

      {/* --- HERO SECTION - זהה ל-About --- */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 px-6 bg-slate-50/50 border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl text-slate-900 mb-4" style={fontBold}>
            צור <span style={{ color: BRAND_CYAN }}>קשר</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            נשמח לשמוע ממך ולעזור לך להכניס שקט ושליטה לעסק
          </p>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="py-10 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* טופס יצירת קשר */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="relative w-full rounded-[32px] overflow-hidden border-[1.5px]" 
                 style={{ paddingTop: '75%', borderColor: BRAND_BLUE }}>
              <iframe
                id="JotFormIFrame-251296577428469"
                title="צור קשר"
                src="https://forms.fillout.com/t/4tmSG4iqhVus"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  backgroundColor: 'transparent'
                }}
                scrolling="no"
              />
            </div>
          </motion.div>

          {/* דרכים נוספות ליצירת קשר */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[32px] border-[1.5px] p-8 md:p-12 relative overflow-hidden"
            style={{ borderColor: BRAND_BLUE }}
          >
            <div className="absolute top-0 right-0 w-2 h-full"
                 style={{ background: `linear-gradient(180deg, ${BRAND_BLUE} 0%, ${BRAND_CYAN} 50%, ${BRAND_GREEN} 100%)` }} />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl text-slate-900 mb-8 text-center" style={fontBold}>
                דרכים נוספות ליצירת קשר:
              </h3>
              
              <div className="grid grid-cols-1 gap-8">
                
                {/* פרטי קשר */}
                <div className="space-y-4">
                  <a href="tel:0504133408" 
                     className="flex items-center justify-center gap-3 text-lg text-slate-700 hover:text-slate-900 transition-colors duration-300"
                     style={fontEng}>
                    <BsTelephone className="w-5 h-5" style={{ color: BRAND_BLUE }} />
                    <span className="font-medium">050-413-3408</span>
                  </a>
                  <a href={mailtoLink} 
                     className="flex items-center justify-center gap-3 text-lg text-slate-700 hover:text-slate-900 transition-colors duration-300"
                     style={fontEng}>
                    <BsEnvelope className="w-5 h-5" style={{ color: BRAND_BLUE }} />
                    <span className="font-medium">HadasaMatan@gmail.com</span>
                  </a>
                </div>

                {/* שעות פעילות */}
                <div className="border-t border-slate-100 pt-6">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <BsClock className="w-5 h-5" style={{ color: BRAND_CYAN }} />
                    <h4 className="text-lg text-slate-900" style={fontBold}>שעות פעילות</h4>
                  </div>
                  <div className="space-y-2 text-slate-600 text-center" style={fontEng}>
                    <p>א'-ה': 10:00-16:00, 20:00-22:00</p>
                    <p>ו': 09:00-11:00</p>
                  </div>
                </div>

                {/* צ'אטבוט */}
                <div className="border-t border-slate-100 pt-6">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <BsChatDots className="w-5 h-5" style={{ color: BRAND_GREEN }} />
                    <h4 className="text-lg text-slate-900" style={fontBold}>צ'אטבוט 24 שעות ביממה</h4>
                  </div>
                  <p className="text-slate-600 text-center">זמין לכל שאלה ובכל עת :)</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}

export default Contact;
