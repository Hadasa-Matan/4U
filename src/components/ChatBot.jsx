import React, { useEffect } from 'react';

function ChatBot() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes pulse-animation {
        0% { transform: scale(1); }
        50% { transform: scale(1.08); }
        100% { transform: scale(1); }
      }
      
      /* טרגוט ספציפי של כפתור הפתיחה בלבד */
      div[id^="ktt10-"] iframe[title="chat-button"],
      .chatrace-launcher-button,
      #chatrace-web-chat-container > div:not([class*="window"]) { 
        animation: pulse-animation 2.2s infinite ease-in-out !important;
        transform-origin: center bottom;
      }

      /* מוודא שחלון הצ'אט עצמו כשהוא פתוח לא יושפע מהאנימציה */
      div[id^="ktt10-"] iframe:not([title="chat-button"]),
      .chat-window-container {
        animation: none !important;
      }
    `;
    document.head.appendChild(style);

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
