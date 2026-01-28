import React, { useEffect } from 'react';



function ChatBot() {

  useEffect(() => {

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

      document.body.removeChild(script);

    };

  }, []);



  return null; // הצ'אטבוט יצוץ לבד כשהסקריפט יטען

}



export default ChatBot;
