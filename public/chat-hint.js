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
      hint.style.backgroundColor = "#fff"; // צבע לבן למלבן
      hint.style.borderRadius = "12px"; // פינות מעוגלות
      hint.style.padding = "10px 20px"; // מרווחים בתוך המלבן
      hint.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"; // צל קל

      var span = document.createElement("span");
      span.className = "chat-question-text";
      span.textContent = "יש לך שאלה?";

      // שינוי עיצוב של הטקסט
      span.style.fontSize = "16px";
      span.style.color = "#377FE1"; // צבע כחול לטקסט
      span.style.fontWeight = "bold"; // הדגשה של הטקסט
      span.style.padding = "0"; // הורדתי את המרווחים
      span.style.margin = "0"; // הורדתי את כל המרווחים מסביב

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

      hint.addEventListener("click", function(){
        try {
          if (window.ktt10 && typeof window.ktt10.open === "function") windo
