import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';

function ChatBot({ setShowChat }) {
  const navigate = useNavigate();

  useEffect(() => {
    // טעינת הסקריפט של Chatrace (הווידג'ט המלא)
    const script = document.createElement('script');
    script.src = 'https://chatrace.com/webchat/plugin.js?v=6';
    script.async = true;
    document.body.appendChild(script);

    // הפעלת הצ'אט אחרי טעינת הסקריפט
    script.onload = () => {
      if (window.ktt10) {
        window.ktt10.setup({
          id: "kX8n4IR4DP27PkpEo2",
          accountId: "1249354",
          color: "#377FE1",
          lang: "he"
        });
      }
    };

    // ניקוי כשהקומפוננטה נהרסת
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleClose = () => {
    setShowChat(false);
  };

  return (
    <div className="h-full flex flex-col" dir="rtl">
      <div className="bg-indigo-600 text-white p-4 relative">
        <h3 className="font-semibold text-right">
          צ'אטבוט בשילוב בינה מלאכותית
        </h3>
        <button
          onClick={handleClose}
          className="absolute top-3 left-3 text-white hover:text-gray-200 transition-colors duration-200 p-1 rounded-full hover:bg-indigo-700"
          aria-label="סגור צ'אט"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 overflow-hidden relative">
        {/* הווידג'ט של Chatrace יוטמע כאן */}
        <div id="chatrace-webchat" className="w-full h-full"></div>
      </div>
    </div>
  );
}

export default ChatBot;
