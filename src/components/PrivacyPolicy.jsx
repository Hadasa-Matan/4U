// PrivacyPolicy.jsx
import React, { useEffect } from "react";

const BRAND_GREEN = "#52de4a";
const BRAND_CYAN = "#7cd6de";
const BRAND_BLUE = "#000ab9";

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fontBold = { fontFamily: "FbAsparagosBold, sans-serif", fontWeight: "bold" };
  const fontRegular = { fontFamily: "FbAsparagos, sans-serif" };
  const fontEng = { fontFamily: "FbRimonaEng, sans-serif" }; // פונט אנגלית

  const fontFaceStyle = `
    @font-face { font-family: 'FbAsparagosBold'; src: url('/fonts/FbAsparagos-Bold.otf') format('opentype'); }
    @font-face { font-family: 'FbAsparagos'; src: url('/fonts/FbAsparagos-Regular.otf') format('opentype'); }
    @font-face { font-family: 'FbRimonaEng'; src: url('/fonts/FbRimonaEng-Regular.otf') format('opentype'); }
  `;

  const sections = [
    {
      title: "מי אנחנו",
      content: (
        <>
          <p className="mb-3">
            אתר זה מופעל על ידי <strong>הדסה מתן</strong>, העוסקת במתן שירותי אוטומציה עסקית, פתרונות דיגיטליים וכלי בינה מלאכולית לעסקים.
          </p>
          <p>
            כתובת האתר:{" "}
            <a href="https://hadasamatan.com" className="font-bold hover:underline" style={{ color: BRAND_BLUE, ...fontEng }}>
              https://hadasamatan.com
            </a>
          </p>
          <p className="mt-2">
            דוא"ל:{" "}
            <a href="mailto:office@hadasamatan.com" className="font-bold hover:underline" style={{ color: BRAND_BLUE, ...fontEng }}>
              office@hadasamatan.com
            </a>
          </p>
        </>
      ),
      color: BRAND_BLUE
    },
    {
      title: "איזה מידע אנחנו אוספים",
      content: (
        <>
          <p className="mb-3">באתר זה אנו עשויים לאסוף את סוגי המידע הבאים:</p>
          <ul className="space-y-2 mr-6 list-disc">
            <li><strong>מידע אישי:</strong> שם מלא, כתובת דוא"ל, מספר טלפון - רק כאשר אתם ממלאים טפסים באתר או יוצרים קשר איתנו.</li>
            <li><strong>מידע טכני:</strong> <span style={fontEng}>IP</span>, סוג דפדפן, מערכת הפעלה, זמן ביקור - באמצעות עוגיות (<span style={fontEng}>Cookies</span>) ואמצעי מעקב אחרים.</li>
            <li><strong>מידע שימושי:</strong> דפים שבהם ביקרתם, זמן שהות באתר, אינטראקציות עם תכנים שונים.</li>
          </ul>
        </>
      ),
      color: BRAND_CYAN
    },
    {
      title: "שימוש בעוגיות (Cookies)",
      content: (
        <>
          <p className="mb-3">
            אתר זה משתמש בעוגיות (<span style={fontEng}>Cookies</span>) - קבצי טקסט קטנים המאוחסנים במכשיר שלכם.
          </p>
          <p className="mt-3 text-slate-600 text-base">
            ניתן לחסום עוגיות דרך הגדרות הדפדפן, אך זה עשוי להשפיע על תפקודים מסוימים באתר.
          </p>
        </>
      ),
      color: BRAND_BLUE
    },
    {
      title: "אבטחת המידע",
      content: (
        <>
          <p className="mb-3">
            אנו נוקטים אמצעי אבטחה סבירים כדי להגן על המידע שלכם, כולל:
          </p>
          <ul className="space-y-2 mr-6 list-disc">
            <li style={fontEng}>SSL / HTTPS</li>
            <li>שמירת מידע בשרתים מאובטחים</li>
          </ul>
          <p className="text-slate-600 text-base mt-2">
            ייתכן כי אנו שומרים חלק מהמידע בשרתי ענן מחוץ לישראל (כגון <span style={fontEng}>Google, Amazon</span>).
          </p>
        </>
      ),
      color: BRAND_CYAN
    },
    {
      title: "הזכויות שלכם",
      content: (
        <>
          <p className="mb-3">על פי חוק הגנת הפרטיות, יש לכם זכות לעיין במידע, לתקנו או לבקש את מחיקתו.</p>
          <div className="mt-4 p-4 bg-slate-50 rounded-xl border-r-4" style={{ borderColor: BRAND_BLUE }}>
            <strong>לממש את זכויותיכם:</strong> צרו איתנו קשר ב-{" "}
            <a href="mailto:office@hadasamatan.com" className="font-bold hover:underline" style={{ color: BRAND_BLUE, ...fontEng }}>
              office@hadasamatan.com
            </a>
          </div>
        </>
      ),
      color: BRAND_BLUE
    },
    {
      title: "יצירת קשר",
      content: (
        <div className="space-y-2">
          <p>
            📧 <strong>דוא"ל:</strong>{" "}
            <a href="mailto:office@hadasamatan.com" className="font-bold hover:underline" style={{ color: BRAND_BLUE, ...fontEng }}>
              office@hadasamatan.com
            </a>
          </p>
          <p>
            📞 <strong>טלפון:</strong>{" "}
            <a href="tel:0504133408" className="font-bold hover:underline" style={{ color: BRAND_BLUE, ...fontEng }}>
              050-413-3408
            </a>
          </p>
        </div>
      ),
      color: BRAND_BLUE
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-12" dir="rtl" style={fontRegular}>
      <style>{fontFaceStyle}</style>

      <section className="pt-24 pb-12 md:pt-32 md:pb-16 px-6 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl text-slate-900 mb-4 text-center" style={fontBold}>
            מדיניות <span style={{ color: BRAND_CYAN }}>פרטיות</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 text-center leading-relaxed max-w-2xl mx-auto">
            אנו מחויבים להגן על הפרטיות שלכם. מדיניות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלכם.
          </p>
        </div>
      </section>

      <section className="py-10 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-[32px] border-[1.5px] p-8 md:p-10 relative overflow-hidden"
              style={{ borderColor: section.color }}
            >
              <div
                className="absolute top-0 right-0 w-2 h-full"
                style={{ backgroundColor: section.color }}
              />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl text-slate-900 mb-4" style={fontBold}>
                  {section.title}
                </h2>
                <div className="text-slate-700 leading-relaxed">
                  {section.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 mt-12">
        <div className="bg-slate-50 rounded-2xl p-6 text-center border-t-4" style={{ borderColor: BRAND_BLUE }}>
          <p className="text-sm text-slate-500">
            <strong>עודכן לאחרונה:</strong> <span style={fontEng}>January 2026</span>
          </p>
          <p className="text-sm text-slate-500 mt-2">
            מסמך זה נכתב בהתאם להוראות חוק הגנת הפרטיות, התשמ"א–1981, ותקנות הגנת הפרטיות.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;