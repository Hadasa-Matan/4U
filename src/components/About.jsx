import React from "react";

// הגדרת צבעי המותג
const BRAND_GREEN = "#52de4a";
const BRAND_CYAN = "#7cd6de";
const BRAND_BLUE = "#000ab9";

const About = () => {
  const fontBold = { fontFamily: "FbAsparagosBold, sans-serif", fontWeight: "bold" };
  const fontRegular = { fontFamily: "FbAsparagos, sans-serif" };

  const fontFaceStyle = `
    @font-face { font-family: 'FbAsparagosBold'; src: url('/4U/fonts/FbAsparagos-Bold.otf') format('opentype'); }
    @font-face { font-family: 'FbAsparagos'; src: url('/4U/fonts/FbAsparagos-Regular.otf') format('opentype'); }
  `;

  return (
    /* mt-24 דוחף את כל העמוד מתחת ל-Navbar כדי למנוע חפיפה */
    <div className="min-h-screen bg-white pb-12 mt-24 md:mt-32" dir="rtl" style={fontRegular}>
      <style>{fontFaceStyle}</style>

      {/* --- HERO SECTION --- */}
      {/* הגדלתי את ה-py (המרווח האנכי) כדי לתת לכותרת לנשום */}
      <section className="py-16 md:py-24 px-6 bg-slate-50/50 border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl text-slate-900 mb-6" style={fontBold}>
            קצת <span style={{ color: BRAND_CYAN }}>עליי</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            מחליפה מורכבות טכנולוגית ב<span style={{ color: BRAND_BLUE, fontWeight: "bold" }}>שקט תפעולי</span>, כדי שתחזירו לעצמכם את ה<span style={{ color: BRAND_BLUE, fontWeight: "bold" }}>שליטה</span> ביומיום.
          </p>
        </div>
      </section>

      {/* --- MAIN CONTENT CARD --- */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[32px] shadow-xl shadow-slate-200/40 border border-slate-100 overflow-hidden relative">
            
            <div className="absolute top-0 right-0 w-1.5 h-full"
                 style={{ background: `linear-gradient(180deg, ${BRAND_BLUE} 0%, ${BRAND_CYAN} 50%, ${BRAND_GREEN} 100%)` }} />
            
            <div className="p-8 md:p-14 space-y-10 text-sm md:text-base text-slate-700 leading-relaxed text-right">
              
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl text-slate-900" style={fontBold}>
                  החזון שלי לשקט התפעולי שלך
                </h2>
                <p>
                  אני מאמינה שכל בעל עסק ראוי לדעת שהמערכות שלו עובדות עבורו, ולא להיפך. 
                  השקט הזה נוצר כתוצאה של שילוב מדויק בין שני עולמות משלימים שאני מביאה איתי:
                </p>
              </div>

              {/* גריד ניסיון מקצועי */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-8 rounded-2xl border-r-4" style={{ borderColor: BRAND_BLUE }}>
                  <h3 className="text-slate-900 text-lg mb-3 font-bold" style={fontBold}>כבודקת תוכנה (QA)</h3>
                  <p className="text-sm md:text-base text-slate-600">
                    החזון שלי מתחיל בדיוק חסר פשרות. אני בונה מערכות חסינות לטעויות, כדי שתוכלו לישון בשקט בידיעה שהתהליכים בעסק פועלים בצורה מושלמת.
                  </p>
                </div>

                <div className="bg-slate-50 p-8 rounded-2xl border-r-4" style={{ borderColor: BRAND_GREEN }}>
                  <h3 className="text-slate-900 text-lg mb-3 font-bold" style={fontBold}>כמרצה למחשבים</h3>
                  <p className="text-sm md:text-base text-slate-600">
                    החלק השני בחזון הוא הפשטות. המטרה שלי היא להנגיש לכם את הטכנולוגיה, כך שתבינו ותשלטו בה בקלות ובביטחון מלא ביומיום.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <p className="text-slate-900 text-lg md:text-xl leading-tight" style={fontBold}>
                  במקום לבצע ידנית פעולות בכל בוקר — <span style={{color: BRAND_CYAN}}>בונים מערכת שעובדת בשבילך.</span>
                </p>
                
                <p className="text-sm md:text-base text-slate-600">
                  אני כאן כדי "לפרק" את העומס למשימות שהמחשב עושה טוב ומהר יותר. 
                  כשהטכנולוגיה עובדת בשבילכם, השליטה חוזרת לידיים שלכם ומתפנה הזמן להוביל את העסק קדימה.
                </p>
              </div>

              <div className="pt-8 border-t border-slate-100 text-center">
                <p className="text-lg md:text-xl" style={{ ...fontBold, color: BRAND_BLUE }}>
                  בואו נהפוך את החזון הזה למציאות בעסק שלכם.
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
