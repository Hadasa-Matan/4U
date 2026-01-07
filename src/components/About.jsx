import React from 'react';

const About = () => {
  return (
    // שימוש ב-overflow-hidden מבטיח ששום דבר לא יצא מגבולות העמוד וישבור את האתר
    <div className="min-h-screen bg-white overflow-hidden">
      
      {/* Hero Section עם צבע רקע עדין להפרדה */}
      <section className="bg-slate-50 py-16 md:py-24 px-6 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            הופכים מורכבות טכנולוגית <br />
            <span className="text-[#7cd6de]">לשקט נפשי</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            אני עוזרת לבעלי עסקים לשחרר את צוואר הבקבוק בניהול בעזרת אוטומציות חכמות ובדיקות איכות (QA) שמבטיחות שקט ושליטה.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse gap-16 items-center">
          
          {/* טקסט - מיושר לימין */}
          <div className="w-full md:w-1/2 text-right">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 border-r-4 border-[#7cd6de] pr-4">קצת עלי</h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
              <p>
                נעים מאוד, אני <span className="text-[#7cd6de] font-bold">הדסה מתן</span>. 
                מומחית לבדיקות איכות ואוטומציה עסקית.
              </p>
              <p>
                אחרי שנים בעולם ההייטק, ראיתי איך מערכות חכמות יכולות לשנות חיים של בעלי עסקים. המטרה שלי היא להנגיש את היציבות והדיוק האלו לכל עסק.
              </p>
              <p className="font-bold text-slate-900">
                אני כאן כדי שהטכנולוגיה תעבוד בשבילך, ולא את בשבילה.
              </p>
            </div>
            
            <button className="mt-10 px-8 py-3 bg-[#7cd6de] text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
              בואו נדבר
            </button>
          </div>

          {/* מקום לתמונה - עם מסגרת מגן */}
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-square bg-slate-100 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center overflow-hidden shadow-inner">
               {/* אם יש לך תמונה, שימי אותה כאן. כרגע זה שומר מקום נקי */}
               <span className="text-slate-400">תמונה תתווסף כאן</span>
            </div>
          </div>

        </div>
      </section>

      {/* ערכים בקוביות נקיות */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { title: "דיוק", icon: "🎯", desc: "כל תהליך נבדק מקצה לקצה." },
            { title: "יציבות", icon: "⚙️", desc: "בונים מערכות ששורדות לאורך זמן." },
            { title: "שותפות", icon: "🤝", desc: "הצלחה שלכם היא המדד שלי." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-xl mb-2 text-slate-800">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
