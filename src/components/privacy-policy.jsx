import React, { useEffect } from "react";

function PrivacyPolicy() {
  // גורם לדף להיפתח תמיד מלמעלה כשנכנסים
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fontBold = { fontFamily: "FbAsparagosBold, sans-serif", fontWeight: "bold" };
  const fontRegular = { fontFamily: "FbAsparagos, sans-serif" };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6" dir="rtl" style={fontRegular}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-slate-900 border-r-4 border-[#000ab9] pr-4" style={fontBold}>
          מדיניות פרטיות <span className="text-[#7cd6de]">ואמנת שירות</span>
        </h1>

        <div className="space-y-8 text-slate-700 leading-relaxed text-lg">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3" style={fontBold}>מי אנחנו?</h2>
            <p>
              האתר שלנו הוא{" "}
              <a href="https://hadasamatan.com/" className="text-[#000ab9] hover:underline">
                https://hadasamatan.com/
              </a>{" "}
              והוא מספק שירותי אוטומציה עסקית, צ’אטבוטים וכלי טכנולוגיה מתקדמים לעסקים.
            </p>
          </section>

          <section className="bg-slate-50 p-6 rounded-2xl border-r-4 border-[#52de4a]">
            <h2 className="text-xl font-bold text-slate-900 mb-3" style={fontBold}>איסוף ושימוש במידע</h2>
            <p>
              המשתמש מצהיר כי החברה רשאית לאסוף ולשמור את הפרטים שנמסרו על ידו (שם, טלפון, דוא"ל) לצורך שיפור השירות, יצירת קשר ושליחת עדכונים. המידע נשמר באופן מאובטח ואינו מועבר לצד ג' למטרות סחר.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3" style={fontBold}>Cookies ועוגיות</h2>
            <p>
              האתר עושה שימוש בעוגיות (Cookies) לצורך שיפור חוויית המשתמש ואיסוף נתונים סטטיסטיים אנונימיים.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3" style={fontBold}>זכויות המשתמש</h2>
            <p>
              המשתמש רשאי לעיין, לעדכן או לדרוש מחיקה של המידע שנשמר עליו. לפניות בנושא:{" "}
              <a href="mailto:HadasaMatan@gmail.com" className="text-[#000ab9] font-bold">
                HadasaMatan@gmail.com
              </a>
            </p>
          </section>
        </div>

        <p className="text-sm text-slate-400 mt-16 pt-8 border-t border-slate-100">
          עודכן לאחרונה: ינואר 2026
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
