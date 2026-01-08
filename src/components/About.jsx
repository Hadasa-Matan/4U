import React from "react";

const BRAND_GREEN = "#52de4a";
const BRAND_CYAN = "#7cd6de";
const BRAND_BLUE = "#000ab9";

const About = () => {
  const fontBold = { fontFamily: "FbAsparagosBold, sans-serif", fontWeight: "bold" };
  const fontRegular = { fontFamily: "FbAsparagos, sans-serif" };
  const fontEng = { fontFamily: "FbRimonaEng, sans-serif" };

  const fontFaceStyle = `
    @font-face { font-family: 'FbAsparagosBold'; src: url('/4U/fonts/FbAsparagos-Bold.otf') format('opentype'); }
    @font-face { font-family: 'FbAsparagos'; src: url('/4U/fonts/FbAsparagos-Regular.otf') format('opentype'); }
    @font-face { font-family: 'FbRimonaEng'; src: url('/4U/fonts/FbRimonaEng-Regular.otf') format('opentype'); }
  `;

  return (
    <div className="min-h-screen bg-white pb-12" dir="rtl" style={fontRegular}>
      <style>{fontFaceStyle}</style>

      {/* --- HERO SECTION --- */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 px-6 bg-slate-50/50 border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl text-slate-900 mb-4" style={fontBold}>
            נעים <span style={{ color: BRAND_CYAN }}>להכיר</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            מחליפה מורכבות טכנולוגית ב<span style={{ color: BRAND_BLUE, fontWeight: "bold" }}>שקט תפעולי</span>, כדי שתחזירו לעצמכם את ה<span style={{ color: BRAND_BLUE, fontWeight: "bold" }}>שליטה</span> ביומיום.
          </p>
        </div>
      </section>

      {/* --- MAIN CONTENT CARD --- */}
      <section className="py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[32px] border-[1.5px] overflow-hidden relative" 
               style={{ 
                 borderColor: BRAND_BLUE
               }}>
            
            <div className="absolute top-0 right-0 w-2 h-full"
                 style={{ background: `linear-gradient(180deg, ${BRAND_BLUE} 0%, ${BRAND_CYAN} 50%, ${BRAND_GREEN} 100%)` }} />
            
            <div className="p-8 md:p-12 space-y-8 text-sm md:text-base text-slate-700 leading-relaxed text-right">
              
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl text-slate-900" style={fontBold}>
                  החזון שלי לשקט התפעולי שלך
                </h2>
                <p>
                  אני מאמינה שכל בעל עסק ראוי לדעת שהמערכות שלו עובדות עבורו, ולא להיפך. 
                  השקט הזה נוצר כתוצאה של שילוב מדויק בין שני עולמות משלימים שאני מביאה איתי:
                </p>
              </div>

              {/* גריד ניסיון מקצועי */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border-r-4 shadow-md hover:shadow-lg transition-shadow" 
                     style={{ borderColor: BRAND_BLUE }}>
                  <h3 className="text-slate-900 text-lg mb-2 font-bold" style={fontBold}>
                    כבודקת תוכנה (<span style={fontEng}>QA</span>)
                  </h3>
                  <p className="text-sm md:text-base text-slate-600">
                    החזון שלי מתחיל בדיוק חסר פשרות. אני בונה מערכות חסינות לטעויות, כדי שתוכלו לישון בשקט בידיעה שהתהליכים בעסק פועלים בצורה מושלמת.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border-r-4 shadow-md hover:shadow-lg transition-shadow" 
                     style={{ borderColor: BRAND_GREEN }}>
                  <h3 className="text-slate-900 text-lg mb-2 font-bold" style={fontBold}>כמרצה למחשבים</h3>
                  <p className="text-sm md:text-base text-slate-600">
                    החלק השני בחזון הוא הפשטות. המטרה שלי היא להנגיש לכם את הטכנולוגיה, כך שתבינו ותשלטו בה בקלות ובביטחון מלא ביומיום.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <p className="text-slate-900 text-lg md:text-xl leading-tight" style={fontBold}>
                  במקום לבצע ידנית פעולות בכל בוקר — <span style={{color: BRAND_CYAN}}>בונים מערכת שעובדת בשבילך.</span>
                </p>
                
                <p className="text-sm md:text-base text-slate-600">
                  אני כאן כדי "לפרק" את העומס למשימות שהמחשב עושה טוב ומהר יותר. 
                  כשהטכנולוגיה עובדת בשבילכם, השליטה חוזרת לידיים שלכם ומתפנה הזמן להוביל את העסק קדימה.
                </p>
              </div>

              <div className="pt-8 border-t border-slate-100 text-center">
                <p className="text-lg md:text-2xl font-bold mb-6" style={{ color: BRAND_BLUE, ...fontBold }}>
                  בואו נהפוך את החזון הזה למציאות בעסק שלכם
                </p>
                <a
                  href="https://cal.com/hadasa-matan/4u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                  style={{ backgroundColor: BRAND_GREEN, color: "#06233a", ...fontBold }}
                >
                  בואו נדבר על העסק שלכם - שיחה ללא עלות
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
