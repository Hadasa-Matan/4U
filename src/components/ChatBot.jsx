import React, { useState } from 'react';
import { XMarkIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

function ChatBotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* בועה + טקסט ליד */}
      <div className="fixed bottom-4 left-4 flex items-center gap-2 z-50">
        <div
          onClick={handleToggle}
          className="bg-indigo-600 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-indigo-700 transition"
        >
          <ChatBubbleLeftRightIcon className="h-6 w-6" />
        </div>
        <div
          onClick={handleToggle}
          className="bg-white text-indigo-700 px-3 py-1 rounded-full shadow-md text-sm font-medium cursor-pointer hover:bg-indigo-50 transition"
        >
          יש לך שאלה?
        </div>
      </div>

      {/* חלון הצ'אט */}
      {isOpen && (
        <div
          className="fixed bottom-20 left-4 w-96 h-[500px] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col z-50"
          dir="rtl"
        >
          {/* כותרת */}
          <div className="bg-indigo-600 text-white p-4 relative">
            <h3 className="font-semibold text-right">צ'אט עם נציג</h3>
            <button
              onClick={handleToggle}
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
      )}
    </>
  );
}

export default ChatBotWidget;
