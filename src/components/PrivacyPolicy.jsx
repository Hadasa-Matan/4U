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
  const fontEng = { fontFamily: "FbRimonaEng, sans-serif" };

  const sections = [
    {
      title: "מי אנחנו",
      content: (
        <>
          <p className="mb-3">
            אתר זה מופעל על ידי <strong>הדסה מתן</strong>, העוסקת במתן שירותי אוטומציה עסקית, פתרונות דיגיטליים וכלי בינה מלאכותית לעסקים.
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
          <p className="mt-4 text-slate-600 text-base">
            <strong>הבהרה:</strong> מסירת המידע נעשית מרצונכם החופשי. עם זאת, ייתכן שלא נוכל לספק מענה או שירותים מסוימים אם לא תספקו את המידע המבוקש.
          </p>
        </>
      ),
      color: BRAND_CYAN
    },
    {
      title: "למה אנחנו משתמשים במידע",
      content: (
        <>
          <p className="mb-3">המידע שנאסף משמש אותנו למטרות הבאות:</p>
          <ul className="space-y-2 mr-6 list-disc">
            <li>✅ <strong>מענה לפניות:</strong> ליצירת קשר חזרה, מתן הצעות מחיר ומענה לשאלות.</li>
            <li>✅ <strong>שיפור השירות:</strong> הבנת אופן השימוש באתר ושיפור חוויית המשתמש.</li>
            <li>✅ <strong>שיווק ותקשורת:</strong> שליחת עדכונים והצעות רלוונטיות (רק אם הסכמתם לכך).</li>
            <li>✅ <strong>ניתוח סטטיסטי:</strong> הבנת התנהגות משתמשים באופן אנונימי.</li>
          </ul>
        </>
      ),
      color: BRAND_GREEN
    },
    {
      title: "שימוש בעוגיות (Cookies)",
      content: (
        <>
          <p className="mb-3">
            אתר זה משתמש בעוגיות (<span style={fontEng}>Cookies</span>) - קבצי טקסט קטנים המאוחסנים במכשיר שלכם. העוגיות מסייעות לנו לזכור את העדפותיכם ולנתח תנועה באתר.
          </p>
          <p className="mt-3">
            <strong>אתם יכולים לחסום עוגיות</strong> באמצעות הגדרות הדפדפן שלכם, אך זה עשוי להשפיע על תפקודים מסוימים באתר.
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
            <li>🔒 שימוש בהצפנה (<span style={fontEng}>SSL/HTTPS</span>)</li>
            <li>🔒 שמירת מידע בשרתים מאובטחים</li>
            <li>🔒 הגבלת גישה למידע רק לאנשים מורשים</li>
          </ul>
          <p className="mt-3 text-slate-600 text-base">
            ייתכן כי אנו שומרים חלק מהמידע בשרתי ענן מחוץ לישראל (כגון <span style={fontEng}>Google, Amazon</span>). העברת המידע נעשית בהתאם לתקנות הגנת הפרטיות (העברת מידע לחו"ל).
          </p>
        </>
      ),
      color: BRAND_CYAN
    },
    {
      title: "שיתוף מידע עם צדדים שלישיים",
      content: (
        <>
          <p className="mb-3"><strong>אנו לא מוכרים או משכירים את המידע האישי שלכם.</strong></p>
          <p className="mb-3">עם זאת, אנו עשויים לשתף מידע עם ספקי שירות (כגון שירותי דוא"ל או אחסון ענן) רק לצורך אספקת השירות, או במקרה שהחוק מחייב אותנו לחשוף מידע.</p>
        </>
      ),
      color: BRAND_GREEN
    },
    {
      title: "הזכויות שלכם",
      content: (
        <>
          <p className="mb-3">על פי חוק הגנת הפרטיות, יש לכם זכות לעיין במידע, לתקנו, לבקש את מחיקתו או להתנגד לשימוש בו למטרות שיווקיות.</p>
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
      <style>{`
        @font-face { font-family: 'FbAsparagosBold'; src: url('/fonts/FbAsparagos-Bold.otf') format('opentype'); }
        @font-face { font-family: 'FbAsparagos'; src: url('/fonts/FbAsparagos-Regular.otf') format('opentype'); }
        @font-face { font-family: 'FbRimonaEng'; src: url('/fonts/FbRimonaEng-Regular.otf') format('opentype'); }
      `}</style>

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

      <div className="max-w-4xl mx-auto px-6 mt-12 text-center">
        <div className="bg-slate-50 rounded-2xl p-6 border-t-4" style={{ borderColor: BRAND_BLUE }}>
          <p className="text-sm text-slate-500">
            <strong>עודכן לאחרונה:</strong> <span style={fontEng}>January 2026</span>
          </p>
          <p className="text-sm text-slate-500 mt-2">
            מסמך זה נכתב בהתאם להוראות חוק הגנת הפרטיות, התשמ"א–1981, ותקנות הגנת הפרטיות (אבטחת מידע), התשע"ז–2017.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;