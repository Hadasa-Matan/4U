{/* MAIN CARD עם עיצוב גרפי במקום תמונה */}
<section className="py-20 px-6">
  <div className="max-w-5xl mx-auto">
    <div className="bg-white rounded-[40px] shadow-xl shadow-slate-100/50 border border-slate-100 relative overflow-hidden flex flex-col md:flex-row">
      
      {/* צד ימין - הטקסט שלך (הרחבתי אותו קצת) */}
      <div className="w-full md:w-3/5 p-10 md:p-16 relative">
        <div className="absolute top-0 right-0 w-2 h-full"
             style={{ background: `linear-gradient(180deg, ${BRAND_BLUE} 0%, ${BRAND_CYAN} 50%, ${BRAND_GREEN} 100%)` }} />
        
        <div className="space-y-8 text-xl text-slate-700 leading-relaxed">
           <h2 className="text-3xl md:text-4xl text-slate-900 mb-6" style={fontBold}>החזון שלי</h2>
           <p>
             שנים בעולם ה-QA והאוטומציה לימדו אותי כלל פשוט:
             <span className="text-slate-900 block mt-4 text-2xl md:text-3xl" style={fontBold}>
               מה שלא יציב — גוזל זמן.<br/> מה שבנוי נכון — <span style={{color: BRAND_CYAN}}>מחזיר שקט.</span>
             </span>
           </p>
           <p className="text-lg">
             אני הופכת תהליכים ידניים ומעייפים למערכת חכמה שעובדת בשבילך: אוספת, מנתבת ומתעדת — הכל בצורה ברורה וחסינה לטעויות.
             המטרה שלי היא לשחרר אותך מהתעסקות טכנית ולאפשר לך להתמקד במה שאת עושה הכי טוב: להצמיח את העסק שלך.
           </p>
        </div>
      </div>

      {/* צד שמאל - אזור גרפי עם אייקונים וצבעי מותג */}
      <div className="w-full md:w-2/5 relative min-h-[300px] flex items-center justify-center p-8"
           style={{ background: `linear-gradient(135deg, ${BRAND_BLUE} 0%, ${BRAND_CYAN} 100%)` }}>
        
        <div className="text-center text-white space-y-4">
          <div className="text-5xl">✅</div>
          <p className="text-2xl font-bold" style={fontBold}>בדיקה יסודית</p>
          <div className="text-5xl">⚙️</div>
          <p className="text-2xl font-bold" style={fontBold}>אוטומציה חכמה</p>
          <div className="text-5xl">✨</div>
          <p className="text-2xl font-bold" style={fontBold}>שקט תפעולי</p>
        </div>

      </div>

    </div>
  </div>
</section>
