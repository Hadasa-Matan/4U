<script>
(function(){
  try {
    var STYLES_ADDED = false, HINT_EL = null, BOUNCE_TIMER = null, OBS = null;

    function addStylesOnce(){
      if (STYLES_ADDED) return; STYLES_ADDED = true;
      var css = document.createElement('style');
      css.innerHTML = `
        @keyframes hint-bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        .chat-hint-bounce { animation: hint-bounce .9s ease-out; }
      `;
      document.head.appendChild(css);
    }

    function isChatEl(node){
      try{
        if (!node || node===window || node===document) return false;
        var id  = (node.id||'').toLowerCase();
        var cls = (node.className||'').toString().toLowerCase();
        var src = ''; try { src = (node.src||'').toLowerCase(); } catch(_){}
        return id.includes('ktt10') || id.includes('chatrace') || cls.includes('ktt10') || cls.includes('chatrace') || src.includes('chatrace.com');
      }catch(e){ return false; }
    }

    function findBubbleRect(){
      var vw = window.innerWidth, vh = window.innerHeight;
      var bestRect = null, bestScore = -1;
      var nodes = Array.from(document.querySelectorAll('iframe, div, a, button'));
      nodes.forEach(function(el){
        try{
          if (!isChatEl(el)) return;
          var r = el.getBoundingClientRect();
          if (!r.width || !r.height) return;
          var bottomGap = vh - r.bottom, rightGap = vw - r.right;
          var sizeScore = 200 - Math.max(r.width, r.height);     // קטן יותר = עדיף
          var cornerScore = 300 - (Math.abs(bottomGap) + Math.abs(rightGap)); // קרוב לפינה ימנית תחתונה
          var score = sizeScore + cornerScore;
          if (score > bestScore){ bestScore = score; bestRect = r; }
        }catch(e){}
      });
      return bestRect;
    }

    function positionHint(){
      if (!HINT_EL) return;
      var vw = window.innerWidth, vh = window.innerHeight;
      var isMobile = vw <= 640;
      var bubble = findBubbleRect();

      if (bubble){
        // ימינה/שמאל: להצמיד לשמאל של הבועה עם רווח קטן
        var rightPx = Math.max(16, vw - bubble.left + 12);
        // למטה/למעלה: להצמיד מעט מעל תחתית הבועה
        var bottomPx = Math.max(16, vh - bubble.bottom + Math.max(8, bubble.height * 0.25));

        HINT_EL.style.right  = rightPx + 'px';
        HINT_EL.style.bottom = bottomPx + 'px';
      } else {
        // נפילה אחורית אם לא מצאנו בועה
        HINT_EL.style.right  = (isMobile ? 20 : 90) + 'px';
        HINT_EL.style.bottom = (isMobile ? 100 : 120) + 'px';
      }
    }

    function createHint(){
      if (HINT_EL) return;
      addStylesOnce();

      var el = document.createElement('div');
      el.id = 'chat-hint';
      el.setAttribute('dir','rtl');
      el.setAttribute('lang','he');
      el.style.position = 'fixed';
      el.style.zIndex   = '2147483646';
      el.style.cursor   = 'pointer';

      var span = document.createElement('span');
      span.className = 'chat-question-text';
      span.textContent = 'יש לך שאלה?';
      el.appendChild(span);

      el.addEventListener('click', function(){
        try {
          if (window.ktt10 && typeof window.ktt10.open === 'function') window.ktt10.open();
          else if (window.ktt10 && typeof window.ktt10.toggle === 'function') window.ktt10.toggle();
        } catch(e){}
        destroyHint();
      });

      document.addEventListener('click', function(ev){
        try{
          var path = ev.composedPath ? ev.composedPath() : [ev.target];
          if (path.some(isChatEl)) destroyHint();
        }catch(e){}
      }, true);

      document.body.appendChild(el);
      HINT_EL = el;

      positionHint();
      window.addEventListener('resize', positionHint);

      // להתעדכן כשהווידג׳ט נטען/זז
      if (window.MutationObserver){
        OBS = new MutationObserver(function(){ positionHint(); });
        OBS.observe(document.body, { childList: true, subtree: true, attributes: true });
      }

      // קפיצה כל 10 שניות
      BOUNCE_TIMER = setInterval(function(){
        if (!HINT_EL) return;
        HINT_EL.classList.add('chat-hint-bounce');
        setTimeout(function(){ if (HINT_EL) HINT_EL.classList.remove('chat-hint-bounce'); }, 900);
      }, 10000);

      // קפיצה קצרה ראשונית אחרי הטעינה
      setTimeout(function(){
        if (!HINT_EL) return;
        HINT_EL.classList.add('chat-hint-bounce');
        setTimeout(function(){ if (HINT_EL) HINT_EL.classList.remove('chat-hint-bounce'); }, 900);
      }, 800);
    }

    function destroyHint(){
      try{
        if (BOUNCE_TIMER) { clearInterval(BOUNCE_TIMER); BOUNCE_TIMER = null; }
        if (OBS) { OBS.disconnect(); OBS = null; }
        window.removeEventListener('resize', positionHint);
        if (HINT_EL && HINT_EL.parentNode) HINT_EL.parentNode.removeChild(HINT_EL);
      }catch(e){}
      HINT_EL = null;
    }

    function init(){ createHint(); positionHint(); }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();

    // רה-מיקום גם אחרי שהווידג׳ט נטען מאוחר
    setTimeout(positionHint, 1500);
    setTimeout(positionHint, 3000);
  } catch(e){}
})();
</script>
