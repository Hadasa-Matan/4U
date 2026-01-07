import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero - כותרת עם רקע עדין כדי לתת עומק */}
      <section className="bg-slate-50 py-20 px-6 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            הופכים מורכבות טכנולוגית <br />
            <span className="text-[#7cd6de]">לשקט נפשי</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            אני עוזרת לבעלי עסקים לשחרר את צוואר הבקבוק בניהול, בעזרת אוטומציות חכמות ובדיקות איכות שמבטיחות שהכל עובד חלק.
          </p>
        </div>
      </section>

      {/* Section 2: התוכן המרכזי - חלוקה ברורה לשני טורים */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          
          {/* תמונה / אלמנט ויזואלי */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#52de4a] rounded-2xl z-0"></div>
            <img 
              src="/4U/images/about-image.jpg" // ודאי שיש לך תמונה בנתיב הזה, או שנחליף לאיור
              alt="הדסה מתן"
              className="relative z-10 rounded-2xl shadow-xl w-full h-[400px] object-cover bg-slate-200"
            />
          </div>

          {/* טקסט אודות */}
          <div className="w-full md:w-1/2 text-right">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 border-r-4 border-[#7cd6de] pr-4">מי אני?</h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
              <p>
                נעים מאוד, אני <span className="text-[#7cd6de] font-bold text-xl italic">הדסה מתן</span>. 
                מומחית לבדיקות איכות (QA) ואוטומציה עסקית.
              </p>
              <p>
                אחרי שנים בעולם הטכנולוגי, הבנתי שהכוח האמיתי של טכנולוגיה הוא לא רק בחדשנות שלה, אלא ביכולת שלה לפנות לבעלי עסקים את המשאב הכי יקר שלהם: <span className="font-bold text-slate-900">זמן</span>.
              </p>
              <p>
                החזון שלי הוא להביא את הסטנדרטים הגבוהים של עולם ההייטק - דיוק, יציבות ושליטה - ישירות לתוך העסק שלך, כדי שתוכל להתמקד בצמיחה בזמן שהמערכות עובדות בשבילך.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: ערכים - קוביות עם צללים שנותנים תחושת "סדר" */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-bold text-xl mb-3 text-slate-800">דיוק</h3>
              <p className="text-slate-600">אנחנו לא משאירים מקום לטעויות. כל תהליך נבדק מקצה לקצה.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">⚙️</div>
              <h3 className="font-bold text-xl mb-3 text-slate-800">יציבות</h3>
              <p className="text-slate-600">בונים מערכות ששורדות לאורך זמן, ולא רק ל"כאן ועכשיו".</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="font-bold text-xl mb-3 text-slate-800">שותפות</h3>
              <p className="text-slate-600">אני כאן כדי להבין את הצרכים הייחודיים שלכם ולתפור פתרון מדויק.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
