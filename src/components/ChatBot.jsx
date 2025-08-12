import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

function ChatBot({ setShowChat }) {

  const handleClose = () => {
    setShowChat(false);
  };

  return (
    <div
      className="fixed bottom-20 left-4 w-96 h-[500px] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col z-50"
      dir="rtl"
    >
      {/* כותרת */}
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

      {/* אזור הבוט */}
      <div className="flex-1">
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
  );
}

export default ChatBot;
