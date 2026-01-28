import React, { useEffect } from 'react';

function ChatBot() {
  useEffect(() => {
    // 1. הוספת ה-CSS לאפקט הנשימה
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes pulse-animation {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }
      
      /* זיהוי הכפתור של צ'אטרייס והפעלת האנימציה */
      #chatrace-web-chat-container, 
      .chatrace-launcher-button, 
      [id^="ktt10-"] { 
        animation: pulse-animation 2s infinite ease-in-out !important;
        transition: transform 0.3s ease;
      }
    `;
    document.head.appendChild(style);

    // 2. טעינת הסקריפט של הצאטבוט
    const script = document.createElement('script');
    script.src = "https://chatrace.com/webchat/plugin.js?v=6";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.ktt10) {
        window.ktt10.setup({
          id: "kX8n4IR4DP27PkpEo2",
          accountId: "1249354",
          color: "#0AD000"
        });
      }
    };

    return () => {
      document.head.removeChild(style);
      document.body.removeChild(script);
    };
  }, []);

  return null;
}

export default ChatBot;
