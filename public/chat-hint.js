(function(){
  try {
    function createHint(){
      if (document.getElementById("chat-hint")) return;

      var hint = document.createElement("div");
      hint.id = "chat-hint";
      hint.setAttribute("dir","rtl");
      hint.setAttribute("lang","he");

      var isMobile = window.innerWidth <= 640;
      hint.style.position = "fixed";
      hint.style.bottom = isMobile ? "100px" : "100px";
      hint.style.right  = isMobile ? "20px"  : "100px";
      hint.style.zIndex = "2147483646";
      hint.style.cursor = "pointer";

      var span = document.createElement("span");
      span.className = "chat-question-text";
      span.textContent = "יש לך שאלה?";
      hint.appendChild(span);

      document.body.appendChild(hint);

      function hide(){
        try { if (hint && hint.parentNode) hint.parentNode.removeChild(hint); } catch(e){}
      }

      hint.addEventListener("click", function(){
        try {
          if (window.ktt10 && typeof window.ktt10.open === "function") window.ktt10.open();
          else if (window.ktt10 && typeof window.ktt10.toggle === "function") window.ktt10.toggle();
        } catch(e){}
        hide();
      });

      document.addEventListener("click", function(ev){
        try {
          var path = ev.composedPath ? ev.composedPath() : [ev.target];
          for (var i=0;i<path.length;i++){
            var n = path[i]; if (!n || n===window || n===document) continue;
            var id  = (n.id||"").toLowerCase();
            var cls = (n.className||"").toString().toLowerCase();
            var src = ""; try { src = (n.src||"").toLowerCase(); } catch(_){}
            if (id.indexOf("ktt10")>-1 || id.indexOf("chatrace")>-1 ||
                cls.indexOf("ktt10")>-1 || cls.indexOf("chatrace")>-1 ||
                src.indexOf("chatrace.com")>-1) { hide(); break; }
          }
        } catch(e){}
      }, true);

      window.addEventListener("resize", function(){
        var isMobile = window.innerWidth <= 640;
        hint.style.bottom = isMobile ? "100px" : "100px";
        hint.style.right  = isMobile ? "20px"  : "100px";
      });
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", createHint);
    } else {
      createHint();
    }
  } catch(e){}
})();
