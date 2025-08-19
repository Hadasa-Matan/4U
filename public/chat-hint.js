(function(){
  try {
    function createHint(){
      if (document.getElementById("chat-hint")) return;

      var hint = document.createElement("div");
      hint.id = "chat-hint";
      hint.setAttribute("dir", "rtl");
      hint.setAttribute("lang", "he");

      var isMobile = window.innerWidth <= 640;
      hint.style.position = "fixed";
      hint.style.bottom = isMobile ? "160px" : "100px"; // מיקמתי את הטקסט קרוב יותר
      hint.style.right = isMobile ? "20px" : "20px";  // מיושר לימין של המסך
      hint.style.zIndex = "2147483646";
      hint.style.cursor = "pointer";
      hint.style.transition = "all 0.3s ease-in-out"; // אנימציה להבלטה

      // שינוי עיצוב של המלבן
      hint.style.backgroundColor = "transparent"; // הרקע יהיה שקוף
      hint.style.borderRadius = "12px"; // פינות מעוגלות
      hint.style.padding = "0"; // לא צריך מרווחים סביב הטקסט
      hint.style.boxShadow = "none"; // לא צריך צל

      var span = document.createElement("span");
      span.className = "chat-question-text";
      span.textContent = "יש לך שאלה?";

      // שינוי עיצוב של הטקסט
      span.style.fontSize = "16px";
      span.style.color = "#377FE1"; // צבע כחול לטקסט
      span.style.fontWeight = "bold"; // הדגשה של הטקסט
      span.style.padding = "8px 16px"; // מרווחים בתוך הטקסט
      span.style.backgroundColor = "#fff"; // רקע לבן סביב המילים
      span.style.borderRadius = "8px"; // פינות מעוגלות סביב הטקסט
      span.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"; // צל קל

      hint.appendChild(span);
      document.body.appendChild(hint);

      // הוספת סגנון CSS לאנימציה
      var style = document.createElement("style");
      style.innerHTML = `
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `;
      document.head.appendChild(style);

      // אנימציה שתתבצע מיידית כאשר האתר נטען
      hint.style.animation = "bounce 1s ease-out";

      // אנימציה שתתבצע אחרי 10 שניות
      setTimeout(function() {
        hint.style.animation = "bounce 1s ease-out";
      }, 10000);

      function hide(){
        try { if (hint && hint.parentNode) hint.parentNode.removeChild(hint); } catch(e){}
      }

      // כאשר לוחצים על הטקסט, יפתח הצ'אטבוט
      hint.addEventListener("click", function(){
        try {
          if (window.ktt10 && typeof window.ktt10.open === "function") window.ktt10.open(); // פותח את הצ'אטבוט
          else if (window.ktt10 && typeof window.ktt10.toggle === "function") window.ktt10.toggle();
        } catch(e){}

        hide();
      });

      document.addEventListener("click", function(ev){
        try {
          var path = ev.composedPath ? ev.composedPath() : [ev.target];
          for (var i=0; i<path.length; i++){
            var n = path[i]; if (!n || n === window || n === document) continue;
            var id = (n.id || "").toLowerCase();
            var cls = (n.className || "").toString().toLowerCase();
            var src = ""; try { src = (n.src || "").toLowerCase(); } catch(_) {}
            if (id.indexOf("ktt10") > -1 || id.indexOf("chatrace") > -1 ||
                cls.indexOf("ktt10") > -1 || cls.indexOf("chatrace") > -1 ||
                src.indexOf("chatrace.com") > -1) { hide(); break; }
          }
        } catch(e){}
      }, true);

      window.addEventListener("resize", function(){
        var isMobile = window.innerWidth <= 640;
        hint.style.bottom = isMobile ? "160px" : "100px";
        hint.style.right = isMobile ? "20px" : "20px"; // תמיד מיושר לימין
      });
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", createHint);
    } else {
      createHint();
    }
  } catch(e){}
})();
