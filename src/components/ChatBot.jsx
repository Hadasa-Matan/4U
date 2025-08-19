import React, { useEffect, useState } from 'react';

function ChatBot() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const existing = document.querySelector('script[src^="https://chatrace.com/webchat/plugin.js"]');
    const script = existing || document.createElement('script');
    if (!existing) {
      script.src = "https://chatrace.com/webchat/plugin.js?v=6";
      script.async = true;
      document.body.appendChild(script);
    }

    function initWidget() {
      if (window.ktt10 && typeof window.ktt10.setup === 'function') {
        window.ktt10.setup({
          id: "kX8n4IR4DP27PkpEo2",
          accountId: "1249354",
          color: "#377FE1"
        });
        setIsReady(true);
        try {
          const defaultLauncher = document.querySelector('[id*="ktt10"], .ktt10-launcher, .chatrace-launcher');
          if (defaultLauncher) {
            defaultLauncher.style.display = 'none';
          }
        } catch (_) {}
      }
    }

    if (script.readyState === 'complete' || script.readyState === 'loaded') {
      initWidget();
    } else {
      script.addEventListener('load', initWidget);
    }

    return () => {
      script.removeEventListener('load', initWidget);
    };
  }, []);

  const handleOpen = () => {
    try {
      if (window.ktt10 && typeof window.ktt10.open === 'function') window.ktt10.open();
      else if (window.ktt10 && typeof window.ktt10.toggle === 'function') window.ktt10.toggle();
    } catch (_) {}
  };

  return (
    <div className="chatbot-container">
      <div className="chat-button-wrapper">
        <div className="chat-question-text">יש לך שאלה?</div>
        <button className="chat-button" aria-label="פתח צ'אט" onClick={handleOpen} disabled={!isReady}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3C7.03 3 3 6.58 3 11c0 2.02 1.02 3.84 2.66 5.15L5 21l3.2-1.6c1.17.32 2.43.5 3.8.5 4.97 0 9-3.58 9-8s-4.03-8-9-8z" fill="white"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ChatBot;
