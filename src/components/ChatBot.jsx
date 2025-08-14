import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

function ChatBot({ setShowChat }) {
  const handleClose = () => {
    setShowChat(false);
  };

  return (
    <div className="h-full flex flex-col relative" dir="rtl" lang="he">
      {/* כפתור סגירה קטן בפינה */}
      <button
        onClick={handleClose}
        className="absolute top-2 left-2 z-10 text-gray-600 hover:text-gray-800 transition-colors duration-200 p-1 rounded-full hover:bg-gray-100 bg-white/80 backdrop-blur-sm shadow-sm"
        aria-label="סגור צ'אט"
      >
        <XMarkIcon className="h-4 w-4" />
      </button>
      
      <div className="flex-1 overflow-hidden relative">
        <iframe
          src="https://chatrace.com/webchat/?p=1249354&ref=1753054769905&lang=he&locale=he&direction=rtl&rtl=1"
          className="w-full h-full border-none"
          title="צ'אטבוט"
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
