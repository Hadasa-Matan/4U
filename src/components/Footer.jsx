import React from "react";
import { Link } from "react-router-dom";

const BRAND_CYAN = "#7cd6de"; 

function Footer() {
  const fontBold = { fontFamily: "FbAsparagosBold, sans-serif" };
  const fontRegular = { fontFamily: "FbAsparagos, sans-serif" };
  const fontEng = { fontFamily: "FbRimonaEng, sans-serif" };
  
  const fontFaceStyle = `
    @font-face { font-family: 'FbAsparagosBold'; src: url('/fonts/FbAsparagos-Bold.otf') format('opentype'); }
    @font-face { font-family: 'FbAsparagos'; src: url('/fonts/FbAsparagos-Regular.otf') format('opentype'); }
    @font-face { font-family: 'FbRimonaEng'; src: url('/fonts/FbRimonaEng-Regular.otf') format('opentype'); }
  `;
  
  // הגדרה נקייה של המייל החדש
  const email = "Hadasa@hadasamatan.com";
  const subject = encodeURIComponent("פנייה חדשה מהאתר");
  const body = encodeURIComponent("היי הדסה, הגעתי דרך האתר ואשמח לשמוע עוד על הפתרונות שלך.");
  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <footer className="py-6" style={{ backgroundColor: BRAND_CYAN, ...fontRegular }}>
      <style>{fontFaceStyle}</style>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-right" dir="rtl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* עמודה 1: אודות */}
          <div className="md:col-span-1">
            <h4 className="text-lg mb-3 text-slate-900" style={fontBold}>הדסה מתן</h4>
            <p className="text-slate-800 text-base leading-snug">
              מביאים שקט ושליטה לעסק שלך באמצעות פתרונות טכנולוגיים חכמים ואוטומציות מתקדמות שחוסכות לך זמן יקר.
            </p>
          </div>
          
          {/* עמודה 2: ניווט מהיר */}
          <div>
            <h4 className="text-lg mb-3 text-slate-900" style={fontBold}>ניווט מהיר</h4>
            <ul className="space-y-1 text-base">
              <li><Link to="/services" className="hover:text-white transition-colors">המוצרים שלנו</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">אודות</Link></li>
              <li><Link to="/testimonials" className="hover:text-white transition-colors">המלצות</Link></li>
              <li><Link to="/consultation" className="hover:text-white transition-colors">ייעוץ</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">צור קשר</Link></li>
            </ul>
          </div>
          
          {/* עמודה 3: פרטי קשר */}
          <div>
            <h4 className="text-lg mb-3 text-slate-900" style={fontBold}>דברו איתי</h4>
            <ul className="space-y-2 text-base text-slate-800">
              <li className="flex items-center gap-3">
                <svg className="text-slate-900 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href="tel:0504133408" 
                  style={fontEng} 
                  dir="ltr"
                  className="hover:text-white transition-colors underline decoration-slate-400 underline-offset-4"
                >
                  050-413-3408
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="text-slate-900 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href={mailtoLink} 
                  style={fontEng}
                  className="hover:text-white transition-colors underline decoration-slate-400 underline-offset-4"
                >
                  Hadasa@hadasamatan.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* שורת זכויות ומדיניות */}
        <div className="mt-6 pt-4 border-t border-black/10 text-center text-slate-700">
          <p className="text-sm mb-1">© {new Date().getFullYear()} כל הזכויות שמורות להדסה מתן - שקט תפעולי. שליטה בעסק.</p>
          <div className="flex justify-center items-center gap-3 text-xs opacity-80">
            <Link to="/PrivacyPolicy" className="hover:text-white transition-colors underline underline-offset-4">
              מדיניות פרטיות
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;