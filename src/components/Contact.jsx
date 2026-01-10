import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BRAND_GREEN = "#52de4a";
const BRAND_CYAN = "#7cd6de";
const BRAND_BLUE = "#000ab9";

function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  const fontBold = { fontFamily: "FbAsparagosBold, sans-serif", fontWeight: "bold" };
  const fontRegular = { fontFamily: "FbAsparagos, sans-serif" };
  const fontEng = { fontFamily: "FbRimonaEng, sans-serif" };

  const fontFaceStyle = `
    @font-face { font-family: 'FbAsparagosBold'; src: url('/fonts/FbAsparagos-Bold.otf') format('opentype'); }
    @font-face { font-family: 'FbAsparagos'; src: url('/fonts/FbAsparagos-Regular.otf') format('opentype'); }
    @font-face { font-family: 'FbRimonaEng'; src: url('/fonts/FbRimonaEng-Regular.otf') format('opentype'); }
  `;

  const emailSubject = encodeURIComponent("פנייה חדשה מהאתר");
  const emailBody = "היי הדסה,%0D%0Aהגעתי דרך האתר שלך ואשמח לשמוע עוד על הפתרונות שלך ליצירת שקט ושליטה בעסק שלי.%0D%0Aנשתמע!";
  const mailtoLink = `mailto:HadasaMatan@gmail.com?subject=${emailSubject}&body=${emailBody}`;

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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="relative w-full rounded-[32px] overflow-hidden border-[1.5px]" 
                 style={{ paddingTop: '60%', borderColor: BRAND_BLUE }}>
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                     className="flex items-center justify-center gap-3 text-lg text-slate-700 hover:text-slate-900 transition-colors duration-300">
                    <svg className="w-5 h-5" style={{ color: BRAND_BLUE }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-medium" style={fontEng}>050-413-3408</span>
                  </a>
                  <a href={mailtoLink} 
                     className="flex items-center justify-center gap-3 text-lg text-slate-700 hover:text-slate-900 transition-colors duration-300">
                    <svg className="w-5 h-5" style={{ color: BRAND_BLUE }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium" style={fontEng}>HadasaMatan@gmail.com</span>
                  </a>
                </div>

                {/* שעות פעילות */}
                <div className="border-t border-slate-100 pt-6">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <svg className="w-5 h-5" style={{ color: BRAND_CYAN }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className="text-lg text-slate-900" style={fontBold}>שעות פעילות</h4>
                  </div>
                  <div className="space-y-2 text-slate-600 text-center">
                    <p><span style={fontRegular}>א'-ה': </span><span style={fontEng}>10:00-16:00, 20:00-22:00</span></p>
                    <p><span style={fontRegular}>ו': </span><span style={fontEng}>09:00-11:00</span></p>
                  </div>
                </div>

                {/* צ'אטבוט */}
                <div className="border-t border-slate-100 pt-6">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <svg className="w-5 h-5" style={{ color: BRAND_GREEN }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <h4 className="text-lg text-slate-900" style={fontBold}>צ'אטבוט <span style={fontEng}>24</span> שעות ביממה</h4>
                  </div>
                  <p className="text-slate-600 text-center" style={fontRegular}>זמין לכל שאלה ובכל עת :)</p>
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
