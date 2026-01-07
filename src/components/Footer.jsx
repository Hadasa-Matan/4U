import React from "react";
import { Link } from "react-router-dom";
import { BsEnvelope, BsPhone } from "react-icons/bs";

const BRAND_CYAN = "#7cd6de"; 

function Footer() {
  const fontBold = { fontFamily: "FbAsparagosBold, sans-serif" };
  const fontRegular = { fontFamily: "FbAsparagos, sans-serif" };
  const fontEng = { fontFamily: "FbRimonaEng, sans-serif" };

  // בניית הקישור למייל עם קידוד מחמיר כדי להבטיח שהמלל השיווקי יופיע
  const subject = "פנייה חדשה מהאתר";
  const body = "היי הדסה,%0D%0Aהגעתי דרך האתר שלך ואשמח לשמוע עוד על הפתרונות שלך ליצירת שקט ושליטה בעסק שלי.%0D%0Aנשתמע!";
  const mailtoLink = `mailto:HadasaMatan@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

  return (
    <footer className="py-12" style={{ backgroundColor: BRAND_CYAN, ...fontRegular }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right" dir="rtl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* עמודה 1: אודות */}
          <div className="md:col-span-1">
            <h4 className="text-xl mb-6 text-slate-900" style={fontBold}>הדסה מתן</h4>
            <p className="text-slate-800 text-lg leading-relaxed">
              מביאים שקט ושליטה לעסק שלך באמצעות פתרונות טכנולוגיים חכמים ואוטומציות מתקדמות שחוסכות לך זמן יקר.
            </p>
          </div>

          {/* עמודה 2: ניווט מהיר */}
          <div>
            <h4 className="text-xl mb-6 text-slate-900" style={fontBold}>ניווט מהיר</h4>
            <ul className="space-y-3 text-lg">
              <li><Link to="/services" className="hover:text-white transition-colors">המוצרים שלנו</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">אודות</Link></li>
              <li><Link to="/testimonials" className="hover:text-white transition-colors">המלצות</Link></li>
              <li><Link to="/consultation" className="hover:text-white transition-colors">ייעוץ</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">צור קשר</Link></li>
            </ul>
          </div>

          {/* עמודה 3: פרטי קשר */}
          <div>
            <h4 className="text-xl mb-6 text-slate-900" style={fontBold}>דברו איתנו</h4>
            <ul className="space-y-4 text-lg text-slate-800">
              <li className="flex items-center gap-3">
                <BsPhone className="text-slate-900 w-5 h-5" />
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
                <BsEnvelope className="text-slate-900 w-5 h-5" />
                <a 
                  href={mailtoLink} 
                  style={fontEng}
                  className="hover:text-white transition-colors underline decoration-slate-400 underline-offset-4"
                >
                  HadasaMatan@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-black/10 text-center text-slate-700 text-md">
          <p>© {new Date().getFullYear()} כל הזכויות שמורות להדסה מתן - שקט ושליטה בעסק.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
