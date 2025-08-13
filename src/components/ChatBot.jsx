import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

function ChatBot({ setShowChat }) {
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
        <iframe
          src="https://chatrace.com/webchat/?p=1249354&id=kX8n4IR4DP27PkpEo2"
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
