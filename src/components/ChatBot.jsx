import React, { useEffect, useRef } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

function ChatBot({ setShowChat }) {
  const chatContainerRef = useRef(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // טעינת הסקריפט של Chatrace
    if (!scriptLoadedRef.current) {
      const script = document.createElement('script');
      script.src = 'https://chatrace.com/webchat/plugin.js?v=6';
      script.onload = () => {
        // הגדרת הצ'אטבוט לאחר טעינת הסקריפט
        if (window.ktt10) {
          window.ktt10.setup({
            id: "kX8n4IR4DP27PkpEo2",
            accountId: "1249354",
            color: "#377FE1",
            container: chatContainerRef.current, // הגדרת הקונטיינר הספציפי
            showWidget: false // מניעת הצגת הווידג'ט הברירת מחדל
          });
        }
      };
      document.head.appendChild(script);
      scriptLoadedRef.current = true;
    }

    return () => {
      // ניקוי בעת סגירת הקומפוננטה
      if (window.ktt10 && window.ktt10.destroy) {
        window.ktt10.destroy();
      }
    };
  }, []);

  const handleClose = () => {
    setShowChat(false);
  };

  return (
    <div className="h-full flex flex-col relative" dir="rtl">
      {/* כפתור סגירה קטן בפינה */}
      <button
        onClick={handleClose}
        className="absolute top-2 left-2 z-10 text-gray-600 hover:text-gray-800 transition-colors duration-200 p-1 rounded-full hover:bg-gray-100 bg-white/80 backdrop-blur-sm shadow-sm"
        aria-label="סגור צ'אט"
      >
        <XMarkIcon className="h-4 w-4" />
      </button>
      
      <div className="flex-1 overflow-hidden relative">
        <div 
          ref={chatContainerRef}
          className="w-full h-full"
          style={{
            direction: 'rtl',
            textAlign: 'right'
          }}
        />
      </div>
    </div>
  );
}

export default ChatBot;
