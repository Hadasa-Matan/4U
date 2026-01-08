import React from "react";

// הגדרת צבעי המותג
const BRAND_GREEN = "#52de4a";
const BRAND_CYAN = "#7cd6de";
const BRAND_BLUE = "#000ab9";

const About = () => {
  // הגדרת פונטים וסגנונות בסיסיים
  const fontBold = { fontFamily: "FbAsparagosBold, sans-serif", fontWeight: "bold" };
  const fontRegular = { fontFamily: "FbAsparagos, sans-serif" };

  // הזרקת פונט בטוחה לשימוש ב-GitHub Pages
  const fontFaceStyle = `
    @font-face { font-family: 'FbAsparagosBold'; src: url('/4U/fonts/FbAsparagos-Bold.otf') format('opentype'); }
    @font-face { font-family: 'FbAsparagos'; src: url('/4U/fonts/FbAsparagos-Regular.otf') format('opentype'); }
  `;

  return (
    <div className="min-h-screen bg-white pb-20" dir="rtl" style={fontRegular}>
      <style>{fontFaceStyle}</style>

      {/* --- HERO SECTION --- */}
      <section className="py-20 px-6 bg-slate-50/50 border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl text-slate-900 mb-6" style={fontBold}>
            קצת <span style={{ color: BRAND_CYAN }}>עליי</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            מחליפה מורכבות טכנולוגית ב<span style={{ color: BRAND_BLUE, fontWeight: "bold" }}>שקט תפעולי</span>, כדי שתחזירו לעצמכם את ה<span style={{ color: BRAND_BLUE, fontWeight: "bold" }}>שליטה</span> ביומיום.
          </p>
        </div>
      </section>

      {/* --- MAIN CONTENT CARD --- */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative">
            
            {/* פס עיצוב ימני עם גראדיאנט המותג */}
            <div className="absolute top-0 right-0 w-2 h-full"
                 style={{ background: `linear-gradient(180deg, ${BRAND_BLUE} 0%, ${BRAND_CYAN} 50%, ${BRAND_GREEN} 100%)` }} />
            
            <div className="p-10 md:p-16 space-y-12 text-xl text-slate-700 leading-relaxed text-right">
              
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl text-slate-900" style={fontBold}>השילוב בין דיוק להדרכה</h2>
                <p>
                  הלקוחות שלי תמיד אומרים שהדבר שהם הכי מעריכים זה את ה**שקט התפעולי** שנוצר ברגע שנכנסת מערכת חכמה לעסק. 
                  השקט הזה לא מגיע במקרה — הוא תוצאה של הניסיון המקצועי שלי בשני עולמות משלימים המבטיחים לכם מקסימום ביטחון:
                </p>
              </div>

              {/* הסבר על המקצוע והקשר לערך ללקוח */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-8 rounded-3xl border-r-4" style={{ borderColor: BRAND_BLUE }}>
                  <h3 className="text-slate-900 text-2xl mb-3 font-bold" style={fontBold}>כבודקת תוכנה (QA)</h3>
                  <p className="text-lg">
                    אני מביאה איתי "עין בוחנת" שלא מפספסת אף פרט. הניסיון שלי בבדיקת מערכות מאפשר לי לבנות לכם תהליכים שלא רק עובדים, אלא חסינים לטעויות, כדי שתוכלו לישון בשקט בידיעה שהכל פועל כשורה.
                  </p>
                </div>

                <div className="bg-slate-50 p-8 rounded-3xl border-r-4" style={{ borderColor: BRAND_GREEN }}>
                  <h3 className="text-slate-900 text-2xl mb-3 font-bold" style={fontBold}>כמרצה למחשבים</h3>
                  <p className="text-lg">
                    היכולת שלי לפשט תהליכים מורכבים ולהנגיש אותם בגובה העיניים היא המפתח. אני לא רק בונה אוטומציה, אלא מוודאת שאתם מבינים את המערכת ושולטים בה בקלות ובביטחון מלא.
                  </p>
                </div>
              </div>

              {/* ניסוח יומיומי ושורת סיכום */}
              <div className="space-y-6 pt-6">
                <p className="text-slate-900 text-2xl md:text-3xl leading-tight" style={fontBold}>
                  במקום לבצע ידנית את אותן פעולות בכל בוקר — <span style={{color: BRAND_CYAN}}>בונים מערכת שעובדת בשבילך.</span>
                </p>
                
                <p className="text-lg text-slate-600">
                  החזון שלי הוא "לפרק" את היומיום העמוס שלכם למשימות ברורות שהמחשב יכול לעשות טוב יותר, מהר יותר ובלי טעויות אנוש. 
                  כשהטכנולוגיה עובדת בשבילכם, השליטה חוזרת לידיים שלכם ומתפנה הזמן למה שבאמת חשוב: להוביל את העסק קדימה.
                </p>
              </div>

              <div className="pt-10 border-t border-slate-100 text-center">
                <p className="text-2xl md:text-4xl" style={{ ...fontBold, color: BRAND_BLUE }}>
                  בואו נכניס שקט ושליטה אמיתית לעסק שלכם.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
