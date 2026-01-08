import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      
      {/* כותרת העמוד עם רקע עדין מאוד כדי לתת עומק */}
      <section className="bg-slate-50 py-16 md:py-24 px-6 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            קצת <span className="text-[#7cd6de]">עלי</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            מביאה את הסטנדרטים של עולם ההייטק לעסק שלך - עם דגש על איכות, יציבות ושקט נפשי.
          </p>
        </div>
      </section>

      {/* החלק של הטקסט המקורי שלך - בעיצוב נקי וברור */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 relative">
            {/* עיטור עיצובי קטן בצד */}
            <div className="absolute top-0 right-0 w-2 h-full bg-[#7cd6de] rounded-r-3xl"></div>
            
            <div className="space-y-8 text-xl text-slate-700 leading-relaxed text-right font-medium">
              <p>
                שנים של ניסיון בעולם ה-QA והאוטומציה לימדו אותי דבר אחד מרכזי: 
                <span className="text-slate-900 font-bold"> מערכות טובות הן מערכות שפשוט עובדות.</span>
              </p>

              <p>
                התשוקה שלי היא לקחת תהליכים מורכבים, "לפרק" אותם ולהפוך אותם לאוטומטיים, חכמים וחסינים לטעויות. 
                אני מאמינה שכל בעל עסק ראוי לשקט הזה, שבו הוא יודע שהמערכות שלו מנוהלות בצורה מקצועית ויציבה.
              </p>

              <div className="pt-6 border-t border-slate-50">
                <p className="text-[#52de4a] font-bold text-2xl">
                  אני כאן כדי לעזור לך להחזיר את השליטה לידיים שלך.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* חלק הערכים - נשמר כי הוא עוזר "למלא" את הדף בצורה מקצועית */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-bold text-xl mb-2 text-slate-800">QA ואיכות</h3>
            <p className="text-slate-600">בדיקה יסודית של כל תהליך כדי לוודא אפס תקלות.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="font-bold text-xl mb-2 text-slate-800">אוטומציה</h3>
            <p className="text-slate-600">חוסכים זמן יקר על ידי מיכון תהליכים חוזרים.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="font-bold text-xl mb-2 text-slate-800">צמיחה</h3>
            <p className="text-slate-600">מפנים לך פנאי לניהול ופיתוח העסק באמת.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
