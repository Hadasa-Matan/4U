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
            <a href="https://HadasaMatan.com" className="font-bold hover:underline" style={{ color: BRAND_BLUE }}>
              https://HadasaMatan.com
            </a>
          </p>
          <p className="mt-2">
            דוא"ל:{" "}
            <a href="mailto:HadasaMatan@gmail.com" className="font-bold hover:underline" style={{ color: BRAND_BLUE }}>
              HadasaMatan@gmail.com
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
            <a href="mailto:HadasaMatan@gmail.com" className="font-bold hover:underline" style={{ color: BRAND_BLUE }}>
              HadasaMatan@gmail.com
            </a>
          </p>
        </>
      ),
      color: BRAND_BLUE
    },
    {
      title: "קישורים לאתרים חיצוניים",
      content: (
        <>
          <p>
            האתר עשוי לכלול קישורים לאתרים חיצוניים. אנו לא אחראים על מדיניות הפרטיות או התוכן של אתרים אלה. מומלץ לעיין במדיניות הפרטיות של כל אתר שאליו אתם נכנסים.
          </p>
        </>
      ),
      color: BRAND_CYAN
    },
    {
      title: "שינויים במדיניות הפרטיות",
      content: (
        <>
          <p>
            אנו שומרים לעצמנו את הזכות לעדכן מדיניות זו מעת לעת. כל שינוי יפורסם בעמוד זה, ותאריך העדכון האחרון יופיע בתחתית הדף. המשך שימוש באתר לאחר עדכון המדיניות מהווה הסכמה לשינויים.
          </p>
        </>
      ),
      color: BRAND_GREEN
    },
    {
      title: "יצירת קשר",
      content: (
        <>
          <p className="mb-3">לשאלות, הבהרות או בקשות בנוגע למדיניות הפרטיות:</p>
          <div className="space-y-2">
            <p>
              📧 <strong>דוא"ל:</strong>{" "}
              <a href="mailto:HadasaMatan@gmail.com" className="font-bold hover:underline" style={{ color: BRAND_BLUE }}>
                HadasaMatan@gmail.com
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

  return (
    <div className="min-h-screen bg-white pb-12" dir="rtl" style={fontRegular}>
      <style>{fontFaceStyle}</style>

      {/* HERO */}
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

      {/* CONTENT */}
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
                <div className="text-slate-700 leading-relaxed space-y-3">
                  {section.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER NOTE */}
      <div className="max-w-4xl mx-auto px-6 mt-12">
        <div className="bg-slate-50 rounded-2xl p-6 text-center border-t-4" style={{ borderColor: BRAND_BLUE }}>
          <p className="text-sm text-slate-500">
            <strong>עודכן לאחרונה:</strong> ינואר 2026
          </p>
          <p className="text-sm text-slate-500 mt-2">
            מדיניות זו כתובה בשפה פשוטה ונגישה, ועומדת בדרישות חוק הגנת הפרטיות התשמ"א-1981
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;