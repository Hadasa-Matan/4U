import React from "react";
import { Link } from "react-router-dom";
import { BsEnvelope, BsPhone } from "react-icons/bs";

const BRAND_CYAN = "#7cd6de"; 

function Footer() {
  const fontBold = { fontFamily: "FbAsparagosBold, sans-serif" };
  const fontRegular = { fontFamily: "FbAsparagos, sans-serif" };

  // הכנת הלינק למייל עם נושא ומלל שיווקי
  const emailSubject = encodeURIComponent("פנייה חדשה מהאתר");
  const emailBody = encodeURIComponent("היי הדסה,\nהגעתי דרך האתר שלך ואשמח לשמוע עוד על הפתרונות שלך ליצירת שקט ושליטה בעסק שלי.");
  const mailtoLink = `mailto:HadasaMatan@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  return (
    <footer className="py-12" style={{ backgroundColor: BRAND_CYAN, ...fontRegular }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right" dir="rtl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* עמודה 1: שם ותיאור (בלי לוגו) */}
          <div className="md:col-span-1">
            <h4 className="text-xl mb-6 text-slate-900" style={fontBold}>הדסה מתן</h4>
            <p className="text-slate-800 text-lg leading-relaxed">
              מביאים שקט תפעולי ושליטה לעסק שלך באמצעות פתרונות טכנולוגיים חכמים ואוטומציות מתקדמות שחוסכות לך זמן יקר.
            </p>
          </div>

          {/* עמודה 2: ניווט מלא */}
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

          {/* עמודה 3: פרטי קשר עם טלפון ומייל לחיץ */}
          <div>
            <h4 className="text-xl mb-6 text-slate-900" style={fontBold}>דברו איתנו</h4>
            <ul className="space-y-4 text-lg text-slate-800">
              <li className="flex items-center gap-3">
                <BsPhone className="text-slate-900 w-5 h-5" />
                <span dir="ltr">050-413-3408</span>
              </li>
              <li className="flex items-center gap-3">
                <BsEnvelope className="text-slate-900 w-5 h-5" />
                <a 
                  href={mailtoLink} 
                  className="hover:text-white transition-colors underline decoration-slate-400 underline-offset-4"
                >
                  HadasaMatan@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* זכויות יוצרים */}
        <div className="mt-12 pt-8 border-t border-black/10 text-center text-slate-700 text-md">
          <p>© {new Date().getFullYear()} כל הזכויות שמורות להדסה מתן - שקט ושליטה בעסק.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
