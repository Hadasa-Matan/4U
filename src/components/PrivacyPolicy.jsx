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

  const fontFaceStyle = `
    @font-face { font-family: 'FbAsparagosBold'; src: url('/4U/fonts/FbAsparagos-Bold.otf') format('opentype'); }
    @font-face { font-family: 'FbAsparagos'; src: url('/4U/fonts/FbAsparagos-Regular.otf') format('opentype'); }
  `;

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
            <a href="https://hadasamatan.com" className="font-bold hover:underline" style={{ color: BRAND_BLUE }}>
              https://hadasamatan.com/
            </a>
          </p>
          <p className="mt-2">
            דוא"ל:{" "}
            <a href="mailto:office@hadasamatan.com" className="font-bold hover:underline" style={{ color: BRAND_BLUE }}>
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
          <ul className="space-y-2 mr-6">
            <li><strong>מידע אישי:</strong> שם מלא, כתובת דוא"ל, מספר טלפון - רק כאשר אתם ממלאים טפסים באתר או יוצרים קשר איתנו.</li>
            <li><strong>מידע טכני:</strong> כתובת IP, סוג דפדפן, מערכת הפעלה, זמן ביקור - באמצעות עוגיות (Cookies) ואמצעי מעקב אחרים.</li>
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
          <ul className="space-y-2 mr-6">
            <li>✅ <strong>מענה לפניות:</strong> ליצירת קשר חזרה, מתן הצעות מחיר ומענה לשאלות.</li>
            <li>✅ <strong>שיפור השירות:</strong> הבנת אופן השימוש באתר ושיפור חוויית המשתמש.</li>
            <li>✅ <strong>שיווק ותקשורת:</strong> שליחת עדכונים, ניוזלטרים והצעות רלוונטיות (רק אם הסכמתם לכך).</li>
            <li>✅ <strong>ניתוח סטטיסטי:</strong> הבנת התנהגות משתמשים באופן אנונימי.</li>
          </ul>
          <p className="mt-3 text-slate-600 text-base">
            <strong>שימוש למטרות שיווק:</strong> ייעשה רק לאחר קבלת הסכמתכם המפורשת, בהתאם לחוק התקשורת (בזק ושידורים), תשמ"ב–1982.
          </p>
        </>
      ),
      color: BRAND_GREEN
    },
    {
      title: "שימוש בעוגיות (Cookies)",
      content: (
        <>
          <p className="mb-3">
            אתר זה משתמש בעוגיות (Cookies) - קבצי טקסט קטנים המאוחסנים במכשיר שלכם. העוגיות מסייעות לנו:
          </p>
          <ul className="space-y-2 mr-6">
            <li>🍪 לזכור את העדפותיכם</li>
            <li>🍪 לנתח תנועה באתר</li>
            <li>🍪 לשפר את חוויית הגלישה</li>
          </ul>
          <p className="mt-3">
            <strong>אתם יכולים לחסום עוגיות</strong> באמצעות הגדרות הדפדפן שלכם, אך זה עשוי להשפיע על תפקוד מסוימים באתר.
          </p>
          <p className="mt-3 text-slate-600 text-base">
            ייתכן ותוצג בפניכם בקשת הסכמה לשימוש בעוגיות שאינן חיוניות (כגון לצרכי ניתוח או שיווק), בהתאם להנחיות הרשות להגנת הפרטיות.
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
          <ul className="space-y-2 mr-6">
            <li>🔒 שימוש בהצפנה (SSL/HTTPS)</li>
            <li>🔒 שמירת מידע בשרתים מאובטחים</li>
            <li>🔒 הגבלת גישה למידע רק לאנשים מורשים</li>
          </ul>
          <p className="text-slate-600 text-base">
            ייתכן כי אנו שומרים חלק מהמידע בשרתי ענן מחוץ לישראל (כגון Google, Amazon). העברת המידע נעשית בהתאם לתקנות הגנת הפרטיות (העברת מידע לחו"ל), תשס"א–2001.
          </p>
          <p className="mt-3 text-slate-600 text-base">
            <strong>שימו לב:</strong> אף שיטת אבטחה אינה חסינה ב-100%. אנו עושים את מירב המאמצים להגן על המידע, אך איננו יכולים להבטיח אבטחה מוחלטת.
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
          <p className="mb-3">עם זאת, אנו עשויים לשתף מידע עם:</p>
          <ul className="space-y-2 mr-6">
            <li>📧 <strong>ספקי שירות:</strong> כגון שירותי דוא"ל, אחסון ענן, ניתוח נתונים - רק כדי לספק את השירות.</li>
            <li>⚖️ <strong>חובות חוקיות:</strong> במקרה שהחוק מחייב אותנו לחשוף מידע.</li>
          </ul>
          <p className="mt-3 text-slate-600 text-base">
            כל צד שלישי שאיתו אנו עובדים מחויב לשמור על פרטיותכם ולא להשתמש במידע למטרות אחרות.
          </p>
        </>
      ),
      color: BRAND_GREEN
    },
    {
      title: "הזכויות שלכם",
      content: (
        <>
          <p className="mb-3">על פי חוק הגנת הפרטיות, יש לכם את הזכויות הבאות:</p>
          <ul className="space-y-2 mr-6">
            <li>👁️ <strong>זכות העיון:</strong> לדעת איזה מידע אנו שומרים עליכם.</li>
            <li>✏️ <strong>זכות לתיקון:</strong> לבקש לתקן מידע לא מדויק.</li>
            <li>🗑️ <strong>זכות למחיקה:</strong> לבקש למחוק את המידע שלכם (למעט מידע שאנו חייבים לשמור על פי חוק).</li>
            <li>🚫 <strong>זכות להתנגדות:</strong> להתנגד לשימוש במידע למטרות שיווקיות.</li>
            <li>📤 <strong>זכות להעברה:</strong> לקבל את המידע שלכם בפורמט נוח להעברה.</li>
          </ul>
          <p className="mt-4 p-4 bg-slate-50 rounded-xl border-r-4" style={{ borderColor: BRAND_BLUE }}>
            <strong>לממש את זכויותיכם:</strong> צרו איתנו קשר ב-{" "}
            <a href="mailto:office@hadasamatan.com" className="font-bold hover:underline" style={{ color: BRAND_BLUE }}>
              office@hadasamatan.com
            </a>
          </p>
          <p className="text-slate-600 text-base mt-3">
            אנו מתחייבים להשיב לבקשות לעיון או תיקון מידע בתוך 30 יום ממועד קבלת הפנייה, בהתאם לסעיף 13 לחוק הגנת הפרטיות.
          </p>
        </>
      ),
      color: BRAND_BLUE
    },
    {
      title: "יצירת קשר",
      content: (
        <>
          <p className="mb-3">לשאלות, הבהרות או בקשות בנוגע למדיניות הפרטיות:</p>
          <div className="space-y-2">
            <p>
              📧 <strong>דוא"ל:</strong>{" "}
              <a href="mailto:office@hadasamatan.com" className="font-bold hover:underline" style={{ color: BRAND_BLUE }}>
                office@hadasamatan.com
              </a>
            </p>
            <p>
              📞 <strong>טלפון:</strong>{" "}
              <a href="tel:0504133408" className="font-bold hover:underline" style={{ color: BRAND_BLUE }}>
                050-413-3408
              </a>
            </p>
          </div>
        </>
      ),
      color: BRAND_BLUE
    }
  ];

  return (...);
}

export default PrivacyPolicy;
