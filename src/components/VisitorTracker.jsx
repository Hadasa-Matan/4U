import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function VisitorTracker() {
  const location = useLocation();

  useEffect(() => {
    const trackVisit = async () => {
      try {
        const visitorData = {
          path: location.pathname,
          referrer: document.referrer,
          userAgent: navigator.userAgent,
          language: navigator.language,
          screenResolution: `${window.screen.width}x${window.screen.height}`,
          timestamp: new Date().toISOString(),
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };

        // כאן תוכלי להוסיף את ה-webhook URL מ-Make
        const webhookUrl = 'https://hook.eu2.make.com/itm1d1xudha4e0nnpdg2rcq7ddw7ph5w';
        
        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(visitorData)
        });
      } catch (error) {
        console.error('Error tracking visitor:', error);
      }
    };

    trackVisit();
  }, [location]);

  return null;
}

export default VisitorTracker;
