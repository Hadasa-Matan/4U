{/* MAIN CARD - ניסוח ממוקד עשייה יומיומית */}
<section className="py-20 px-6">
  <div className="max-w-5xl mx-auto">
    <div className="bg-white rounded-[40px] shadow-xl shadow-slate-100/50 border border-slate-100 relative overflow-hidden flex flex-col md:flex-row">
      
      {/* צד ימין - תוכן מעודכן */}
      <div className="w-full md:w-3/5 p-10 md:p-16 relative">
        <div className="absolute top-0 right-0 w-2 h-full"
             style={{ background: `linear-gradient(180deg, ${BRAND_BLUE} 0%, ${BRAND_CYAN} 50%, ${BRAND_GREEN} 100%)` }} />
        
        <div className="space-y-8 text-xl text-slate-700 leading-relaxed">
           <h2 className="text-3xl md:text-4xl text-slate-900 mb-6" style={fontBold}>החזון שלי</h2>
           <div className="space-y-6">
             <p className="text-slate-900 text-2xl md:text-3xl leading-tight" style={fontBold}>
               במקום לבצע ידנית את אותן פעולות בכל בוקר — <span style={{color: BRAND_CYAN}}>בונים מערכת שעובדת בשבילך.</span>
             </p>
             
             <p className="text-lg">
               היומיום של בעלי עסקים עמוס במשימות טכניות: איסוף נתונים, עדכון טבלאות, מעקב אחרי פניות ושליחת אימיילים. אלו בדיוק המקומות שבהם טעויות אנוש קורות וזמן יקר הולך לאיבוד.
             </p>

             <div className="rounded-2xl p-6 border-r-4" style={{ borderColor: BRAND_BLUE, background: "rgba(0,10,185,0.02)" }}>
               <p className="font-bold text-slate-900 mb-2">השינוי שאני מביאה:</p>
               <p>אני הופכת את ה"לעשות" ל"לנהל". המערכות שאני בונה מבצעות את העבודה השחורה באופן אוטומטי, כדי שאתם תוכלו להתמקד בצמיחה של העסק.</p>
             </div>
           </div>
        </div>
      </div>

      {/* צד שמאל - ייצוג ויזואלי של זרימת עבודה */}
      <div className="w-full md:w-2/5 relative min-h-[350px] flex items-center justify-center p-8"
           style={{ background: `linear-gradient(135deg, ${BRAND_BLUE} 0%, ${BRAND_CYAN} 100%)` }}>
        
        <div className="text-right text-white space-y-8">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-xl text-3xl">🔄</div>
            <div>
              <p className="font-bold text-xl" style={fontBold}>משימות חוזרות</p>
              <p className="text-sm opacity-90">הופכות לאוטומטיות</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-xl text-3xl">🔍</div>
            <div>
              <p className="font-bold text-xl" style={fontBold}>בקרה ואיכות</p>
              <p className="text-sm opacity-90">אפס טעויות אנוש</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-xl text-3xl">☕</div>
            <div>
              <p className="font-bold text-xl" style={fontBold}>זמן פנוי</p>
              <p className="text-sm opacity-90">לניהול ופיתוח</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
