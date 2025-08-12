import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';

function ChatBot({ setShowChat }) {
  const navigate = useNavigate();

  useEffect(() => {
    // טעינת הסקריפט של Chatrace
    const script = document.createElement('script');
    script.src = 'https://chatrace.com/webchat/?p=1249354&ref=1753054769905';
    script.async = true;
    
    // הוספת הסקריפט לראש הדף
    document.head.appendChild(script);

    // ניקוי הסקריפט כשהקומפוננטה נהרסת
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleConsultation = () => {
    navigate('/consultation');
    setShowChat(false);
  };

  const handleClose = () => {
    setShowChat(false);
  };

  return (
    <div className="h-full flex flex-col" dir="rtl">
      <div className="bg-indigo-600 text-white p-4 relative">
        <h3 className="font-semibold text-right">צ'אט עם נציג</h3>
        <button
          onClick={handleClose}
          className="absolute top-3 left-3 text-white hover:text-gray-200 transition-colors duration-200 p-1 rounded-full hover:bg-indigo-700"
          aria-label="סגור צ'אט"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
      
      <div className="flex-1 overflow-hidden relative">
        {/* אזור הטמעת הבוט של Chatrace */}
        <div 
          className="w-full h-full"
          style={{
            direction: 'rtl',
            textAlign: 'right'
          }}
        >
          <iframe
            src="https://chatrace.com/webchat/?p=1249354&ref=1753054769905"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              direction: 'rtl'
            }}
            title="Chatrace Bot"
            allow="microphone; camera"
          />
        </div>
      </div>

      {/* כפתור לייעוץ כגיבוי */}
      <div className="p-4 border-t bg-gray-50">
        <button
          onClick={handleConsultation}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300 w-full text-sm"
        >
          לשיחת ייעוץ ללא עלות
        </button>
      </div>
    </div>
  );
}

export default ChatBot;
