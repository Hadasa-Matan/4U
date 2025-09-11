import React from "react";

function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-right leading-relaxed">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">
        מדיניות פרטיות – אמנת פרטיות
      </h1>

      <h2 className="text-xl font-semibold mt-6 mb-2">מי אנחנו?</h2>
      <p className="mb-4">
        האתר שלנו הוא{" "}
        <a
          href="https://hadasa-matan.github.io/4U/"
          className="text-blue-600 hover:underline"
        >
          https://hadasa-matan.github.io/4U/
        </a>{" "}
        ומספק שירותי אוטומציה עסקית, צ’אטבוטים וכלי טכנולוגיה לעסקים.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">איסוף ושימוש במידע</h2>
      <p className="mb-4">
        המשתמש מצהיר כי החברה רשאית לאסוף ולשמור את הפרטים שנמסרו על ידו
        (שם, טלפון, דוא"ל, תחום עסקי ועוד) לצורך שיפור השירותים, יצירת קשר,
        שליחת עדכונים או הצעות שיווקיות, וכן לצרכים סטטיסטיים – הכול בהתאם
        לחוק. מידע סטטיסטי לא יזהה את המשתמש אישית.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">שמירת מידע</h2>
      <p className="mb-4">
        הנתונים נשמרים במערכות CRM וכלי אוטומציה כגון MAKE, ChatRace,
        וכדומה. מסירת המידע אינה חובה, אך בלעדיה לא ניתן יהיה להשתמש בכל
        השירותים באתר.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Cookies ועוגיות</h2>
      <p className="mb-4">
        האתר עושה שימוש בעוגיות (Cookies) לצורך שיפור חוויית המשתמש, שמירת
        פרטי התחברות, ואיסוף נתונים סטטיסטיים. ניתן לחסום עוגיות בהגדרות
        הדפדפן, אך הדבר עלול להגביל חלק מהשירותים באתר.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        תוכן משובץ מאתרים אחרים
      </h2>
      <p className="mb-4">
        ייתכן שתוכן באתר יכלול רכיבים מוטמעים (כגון סרטונים, טפסים או מאמרים).
        תוכן מוטמע מתנהג כאילו המשתמש ביקר באתר המקור, וייתכן שייאסף עליו מידע
        נוסף בהתאם למדיניות הפרטיות של אותו אתר.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">זכויות המשתמש</h2>
      <p className="mb-4">
        המשתמש רשאי לעיין, לעדכן או לדרוש מחיקה של המידע שנשמר עליו בהתאם לחוק
        הגנת הפרטיות. לפניות בנושא ניתן ליצור קשר:{" "}
        <a
          href="mailto:HadasaMatan@gmail.com"
          className="text-blue-600 hover:underline"
        >
          HadasaMatan@gmail.com
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        מסירת מידע לצדדים שלישיים
      </h2>
      <p className="mb-4">
        החברה תעביר מידע לצדדים שלישיים רק במקרים הבאים:
      </p>
      <ul className="list-disc pr-6 mb-4">
        <li>לצורך תפעול האתר או גביית תשלום, בכפוף להתחייבות לסודיות.</li>
        <li>במקרה של הפרת תנאי שימוש באתר.</li>
        <li>אם יתקבל צו בית משפט או הוראה כדין.</li>
        <li>
          במסגרת מחלוקת, הליך משפטי או בוררות, או אם הדבר נחוץ לשמירה על
          זכויות החברה.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">אבטחת מידע</h2>
      <p className="mb-4">
        אנו נוקטים באמצעים מקובלים לשמירה על סודיות המידע, אך אין ביכולתנו
        להבטיח הגנה מוחלטת מפני פריצות או שימוש לא מורשה.
      </p>

      <p className="text-sm text-gray-600 mt-10">
        עודכן לאחרונה: ספטמבר 2025
      </p>
    </div>
  );
}

export default PrivacyPolicy;
