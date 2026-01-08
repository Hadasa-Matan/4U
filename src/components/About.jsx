import React from "react";

// הגדרת צבעי המותג
const BRAND_GREEN = "#52de4a";
const BRAND_CYAN = "#7cd6de";
const BRAND_BLUE = "#000ab9";

const About = () => {
  // הגדרת פונטים מקומית עם גיבוי לנתיב של GitHub Pages
  const fontFaceStyle = `
    @font-face { font-family: 'FbAsparagosBold'; src: url('/4U/fonts/FbAsparagos-Bold.otf') format('opentype'); }
    @font-face { font-family: 'FbAsparagos'; src: url('/4U/fonts/FbAsparagos-Regular.otf') format('opentype'); }
  `;

  const fontBold = { fontFamily: "FbAsparagosBold, sans-serif", fontWeight: "bold" };
  const fontRegular = { fontFamily: "FbAsparagos, sans-serif" };

  return (
    <div className="min-h-screen bg-white pb-20" dir="rtl" style={fontRegular}>
      <style>{fontFaceStyle}</style>

      {/* --- HERO SECTION --- */}
      <section className="py-20 px-6 bg-slate-50/50 border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 bg-white shadow-sm"
               style={{ borderColor: "rgba(0,10,185,0.15)", color: BRAND_BLUE }}>
            <span className="text-sm font-bold">דיוק • אוטומציה • שליטה</span>
          </div>

          <h1 className="text-5xl md:text-7xl text-slate-900 mb-6" style={fontBold}>
            קצת <span style={{ color: BRAND_CYAN }}>עליי</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            סטנדרט של הייטק, בשפה של עסק: פתרונות שמכניסים <span style={{ color: BRAND_BLUE, fontWeight: "bold" }}>סדר</span>, 
            מורידים עומס ומייצרים שקט תפעולי ביום־יום.
          </p>
        </div>
      </section>

      {/* --- MAIN CONTENT CARD --- */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col md:flex-row">
            
            {/* צד ימין - תוכן וטקסט */}
            <div className="w-full md:w-3/5 p-10 md:p-16 relative">
              {/* פס דקורטיבי צדי */}
              <div className="absolute top-0 right-0 w-2 h-full"
                   style={{ background: `linear-gradient(180deg, ${BRAND_BLUE} 0%, ${BRAND_CYAN} 50%, ${BRAND_GREEN} 100%)` }} />
              
              <div className="space-y-8 text-xl text-slate-700 leading-relaxed">
                <h2 className="text-3xl md:text-4xl text-slate-900" style={fontBold}>החזון שלי</h2>
                
                <p className="text-slate-900 text-2xl md:text-3xl leading-tight" style={fontBold}>
                  במקום לבצע ידנית את אותן פעולות בכל בוקר — <span style={{color: BRAND_CYAN}}>בונים מערכת שעובדת בשבילך.</span>
                </p>

                <p className="text-lg text-slate-600">
                  היומיום של בעלי עסקים עמוס במשימות טכניות: איסוף נתונים, עדכון טבלאות, ומעקב אחרי פניות. 
                  אלו בדיוק המקומות שבהם טעויות אנוש קורות וזמן יקר הולך לאיבוד.
                </p>

                <div className="rounded-2xl p-6 border-r-4 shadow-sm" 
                     style={{ borderColor: BRAND_BLUE, background: "rgba(0,10,185,0.02)" }}>
                  <p className="font-bold text-slate-900 mb-2" style={fontBold}>השינוי שאני מביאה:</p>
                  <p>אני הופכת את ה"לעשות" ל"לנהל". המערכות שאני בונה מבצעות את העבודה השחורה באופן אוטומטי, כדי שאתם תוכלו להתמקד בצמיחה של העסק.</p>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <p className="text-xl md:text-2xl" style={{ ...fontBold, color: BRAND_GREEN }}>
                    בואו נבנה יחד פתרון שמייצר שקט תפעולי אמיתי.
                  </p>
                </div>
              </div>
            </div>

            {/* צד שמאל - ייצוג גרפי (במקום תמונה) */}
            <div className="w-full md:w-2/5 p-12 flex items-center justify-center text-white"
                 style={{ background: `linear-gradient(135deg, ${BRAND_BLUE} 0%, ${BRAND_CYAN} 100%)` }}>
              
              <div className="space-y-10 w-full">
                <div className="flex items-center gap-5 bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/20">
                  <span className="text-4xl">🔄</span>
                  <div>
                    <p className="font-bold text-xl" style={fontBold}>משימות חוזרות</p>
                    <p className="text-sm opacity-80 italic">הופכות לאוטומטיות</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/20">
                  <span className="text-4xl">🔍</span>
                  <div>
                    <p className="font-bold text-xl" style={fontBold}>בקרה ואיכות</p>
                    <p className="text-sm opacity-80 italic">אפס טעויות אנוש</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/20">
                  <span className="text-4xl">☕</span>
                  <div>
                    <p className="font-bold text-xl" style={fontBold}>זמן פנוי</p>
                    <p className="text-sm opacity-80 italic">לניהול ופיתוח העסק</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
