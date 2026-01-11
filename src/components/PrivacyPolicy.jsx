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
            <a
              href="https://hadasamatan.com/"
              className="font-bold hover:underline"
              style={{ color: BRAND_BLUE }}
            >
              https://hadasamatan.com/
            </a>
          </p>
          <p className="mt-2">
            דוא"ל:{" "}
            <a
              href="mailto:office@hadasamatan.com"
              className="font-bold hover:underline"
              style={{ color: BRAND_BLUE }}
            >
              office@hadasamatan.com
            </a>
          </p>
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
        <div
          className="bg-slate-50 rounded-2xl p-6 text-center border-t-4"
          style={{ borderColor: BRAND_BLUE }}
        >
          <p className="text-sm text-slate-500">
            <strong>עודכן לאחרונה:</strong> ינואר 2026
          </p>
          <p className="text-sm text-slate-500 mt-2">
            מסמך זה נכתב בהתאם להוראות חוק הגנת הפרטיות, התשמ"א–1981, תקנות הגנת הפרטיות (אבטחת מידע), התשע"ז–2017, והנחיות הרשות להגנת הפרטיות.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
