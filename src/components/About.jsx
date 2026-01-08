import React from "react";

const BRAND_GREEN = "#52de4a";
const BRAND_CYAN = "#7cd6de";
const BRAND_BLUE = "#000ab9";

const About = () => {
  // Fonts
  const fontBold = { fontFamily: "FbAsparagosBold, sans-serif" };
  const fontRegular = { fontFamily: "FbAsparagos, sans-serif" };

  return (
    <div className="min-h-screen bg-white" dir="rtl" style={fontRegular}>
      {/* HERO */}
      <section className="py-20 px-6 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
            style={{
              borderColor: "rgba(0,10,185,0.18)",
              background: "rgba(124,214,222,0.10)",
              color: BRAND_BLUE,
            }}
          >
            <span className="text-sm font-semibold">שקט • רוגע • שליטה</span>
          </div>

          <h1
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-5"
            style={fontBold}
          >
            קצת <span style={{ color: BRAND_CYAN }}>עליי</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            סטנדרט של הייטק, בשפה של עסק: פתרונות שמכניסים <b style={{ color: BRAND_BLUE }}>סדר</b>,
            מורידים עומס ומייצרים <b>שקט תפעולי</b> ביום־יום.
          </p>
        </div>
      </section>

      {/* MAIN CARD */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
            {/* accent bar */}
            <div
              className="absolute top-0 right-0 w-2 h-full rounded-r-3xl"
              style={{
                background: `linear-gradient(180deg, ${BRAND_BLUE} 0%, ${BRAND_CYAN} 55%, ${BRAND_GREEN} 100%)`,
              }}
            />

            <div className="space-y-7 text-lg md:text-xl text-slate-700 leading-relaxed text-right">
              <p>
                שנים בעולם ה-QA והאוטומציה לימדו אותי כלל פשוט:
                <span
                  className="text-slate-900 block mt-2 text-2xl md:text-3xl"
                  style={fontBold}
                >
                  מה שלא יציב — גוזל זמן. מה שבנוי נכון — מחזיר שקט.
                </span>
              </p>

              <p>
                המטרה היא להפוך תהליכים מעייפים למערכת שעובדת לבד: אוספת מידע, מנתבת,
                מתעדת ומחזירה תשובות — בצורה ברורה ועקבית.
              </p>

              <div className="rounded-2xl border p-5 md:p-6"
                   style={{ borderColor: "rgba(0,10,185,0.12)", background: "rgba(0,10,185,0.02)" }}>
                <div className="text-slate-900 mb-2" style={fontBold}>
                  התוצאה:
                </div>
                <div className="text-slate-700 leading-relaxed">
                  פחות התעסקות, פחות פספוסים, יותר שליטה בתהליך — בעסק או בארגון.
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <p className="text-xl md:text-2xl" style={{ ...fontBold, color: BRAND_GREEN }}>
                  בואו נבנה יחד פתרון שמייצר שקט תפעולי אמיתי.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 px-6" style={{ background: "rgba(124,214,222,0.07)" }}>
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl text-slate-900" style={fontBold}>
            איך זה נראה בפועל
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            שלושה עקרונות שמחזיקים כל מערכת יציבה לאורך זמן.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div
              className="w-12 h-12 mx-auto rounded-2xl flex items-center justify-center border mb-4"
              style={{
                borderColor: "rgba(0,10,185,0.18)",
                background: "rgba(0,10,185,0.04)",
                color: BRAND_BLUE,
              }}
            >
              🎯
            </div>
            <h3 className="text-xl mb-2 text-slate-900" style={fontBold}>
              איכות ובקרה
            </h3>
            <p className="text-slate-600">
              תהליך נבדק מקצה לקצה כדי לעבוד חלק — גם בלחץ, גם לאורך זמן.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div
              className="w-12 h-12 mx-auto rounded-2xl flex items-center justify-center border mb-4"
              style={{
                borderColor: "rgba(124,214,222,0.35)",
                background: "rgba(124,214,222,0.14)",
                color: BRAND_BLUE,
              }}
            >
              ⚙️
            </div>
            <h3 className="text-xl mb-2 text-slate-900" style={fontBold}>
              אוטומציה חכמה
            </h3>
            <p className="text-slate-600">
              מורידים פעולות ידניות שחוזרות על עצמן — ומפנים זמן לעבודה החשובה.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div
              className="w-12 h-12 mx-auto rounded-2xl flex items-center justify-center border mb-4"
              style={{
                borderColor: "rgba(82,222,74,0.35)",
                background: "rgba(82,222,74,0.14)",
                color: BRAND_BLUE,
              }}
            >
              📈
            </div>
            <h3 className="text-xl mb-2 text-slate-900" style={fontBold}>
              שקט שמגדיל תוצאות
            </h3>
            <p className="text-slate-600">
              כשיש סדר ושליטה — קל יותר לגדול, לשפר שירות ולהגדיל הכנסות.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
