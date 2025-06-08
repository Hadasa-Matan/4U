import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';

function ChatBot({ setShowChat }) {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessage('');
    }
  };

  const handleConsultation = () => {
    navigate('/consultation');
    setShowChat(false);
  };

  const handleClose = () => {
    setShowChat(false);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="bg-indigo-600 text-white p-4 relative">
        <h3 className="font-semibold"> צ'אט עם נציג וירטואלי</h3>
        <button
          onClick={handleClose}
          className="absolute top-3 left-3 text-white hover:text-gray-200 transition-colors duration-200 p-1 rounded-full hover:bg-indigo-700"
          aria-label="סגור צ'אט"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="bg-gray-100 rounded-lg p-3 mb-4 max-w-[80%]">
          היי,
          <br />
          הבוט שלנו נמצא כרגע בשלבי פיתוח מתקדמים, ואנו עובדים במרץ כדי להעניק לך את השירות הטוב והמקצועי ביותר. אי"ה בקרוב נשיק את הגרסה המלאה שתוכל לסייע לך באופן מיטבי. נשמח לעמוד לרשותך בהקדם האפשרי ומעריכים את סבלנותך. לכל שאלה, אנא צור איתנו קשר באחד מאמצעי התקשורת.
        </div>
        <button
          onClick={handleConsultation}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105 w-full mb-4"
        >
          לשיחת ייעוץ ללא עלות
        </button>
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="הקלד הודעה..."
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500"
          />
          <button 
            type="submit"
            className="mr-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            שלח
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatBot;
