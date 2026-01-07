import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsWhatsapp, BsLinkedin, BsEnvelope } from "react-icons/bs";

const BRAND_BLUE = "#000ab9";
const BRAND_CYAN = "#7cd6de"; // צבע הרקע החדש שביקשת

function Footer() {
  const fontBold = { fontFamily: "FbAsparagosBold, sans-serif" };
  const fontRegular = { fontFamily: "FbAsparagos, sans-serif" };

  return (
    <footer className="py-12" style={{ backgroundColor: BRAND_CYAN, ...fontRegular }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right" dir="rtl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* לוגו ותיאור קצר */}
          <div className="md:col-span-1">
            <img src="/4U/logo.png" alt="Logo" className="h-12 mb-4" />
            <p className="text-slate-800 text-sm leading-relaxed">
              מביאים שקט ושליטה לעסק שלך באמצעות פתרונות טכנולוגיים חכמים ואוטומציות מתקדמות.
            </p>
          </div>

          {/* ניווט מהיר - כותרות בפונט Bold */}
          <div>
            <h4 className="text-lg mb-6 text-slate-900" style={fontBold}>ניווט מהיר</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="hover:text-white transition-colors">המוצרים שלנו</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">אודות</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">צור קשר</Link></li>
            </ul>
          </div>

          {/* פרטי קשר */}
          <div>
            <h4 className="text-lg mb-6 text-slate-900" style={fontBold}>דברו איתנו</h4>
            <ul className="space-y-3 text-slate-800">
              <li className="flex items-center gap-2">
                <BsWhatsapp className="text-slate-900" />
                <span>ווטסאפ: 05X-XXXXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <BsEnvelope className="text-slate-900" />
                <span>hadasa.matan@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* רשתות חברתיות */}
          <div>
            <h4 className="text-lg mb-6 text-slate-900" style={fontBold}>עקבו אחרינו</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-all text-slate-900">
                <BsInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-all text-slate-900">
                <BsLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-black/10 text-center text-slate-700 text-sm">
          <p>© {new Date().getFullYear()} כל הזכויות שמורות להדסה מתן - שקט ושליטה בעסק.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
