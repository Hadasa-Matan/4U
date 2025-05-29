import React, { useState } from 'react';

function ChatBot() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessage('');
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="bg-indigo-600 text-white p-4">
        <h3 className="font-semibold">צ'אט עם נציג</h3>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="bg-gray-100 rounded-lg p-3 mb-4 max-w-[80%]">
          היי,
          הבוט שלנו נמצא כרגע בשלבי פיתוח מתקדמים, ואנו עובדים במרץ כדי להעניק לך את השירות הטוב והמקצועי ביותר. אי"ה בקרוב נשיק את הגרסה המלאה שתוכל לסייע לך באופן מיטבי. נשמח לעמוד לרשותך בהקדם האפשרי ומעריכים את סבלנותך. אם יש לך שאלה, אנא צור איתנו קשר באחד מאמצעי התקשורת.
        </div>
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
