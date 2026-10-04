import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title:
    "המדריך: לחבר את Instinct ל-WhatsApp ולכספת Obsidian | Sharon Shineberg",
  description:
    "מדריך פתוח להקמה עצמית: איך לחבר את Instinct ל-WhatsApp, ל-Apple Reminders ולכספת Obsidian, ולעבוד במקביל עם Claude - כולל פרומפטים לכל שלב.",
  openGraph: {
    title: "המדריך: לחבר את Instinct ל-WhatsApp ולכספת Obsidian | Sharon Shineberg",
    description:
      "מדריך פתוח להקמה עצמית: איך לחבר את Instinct ל-WhatsApp, ל-Apple Reminders ולכספת Obsidian, ולעבוד במקביל עם Claude - כולל פרומפטים לכל שלב.",
    url: "https://shineberg.com/guide",
  },
};

const INVITE_URL = "https://app.instinct.com/invite?t=shineberg-site";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl font-bold mt-16 mb-6">{children}</h2>;
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-2xl font-bold mt-10 mb-4">{children}</h3>;
}

function H4({ children }: { children: React.ReactNode }) {
  return <h4 className="text-xl font-bold mt-8 mb-3">{children}</h4>;
}

function List({ children }: { children: React.ReactNode }) {
  return (
    <ul className="text-lg text-body list-disc ps-6 ms-0 space-y-2 mb-6">
      {children}
    </ul>
  );
}

function Prompt({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <div className="my-4">
      <p className="text-sm font-semibold text-ink mb-2">ל-{to}:</p>
      <blockquote className="border-s-2 border-ink bg-paper-2 px-5 py-4 text-lg text-body">
        {children}
      </blockquote>
    </div>
  );
}

function Ltr({ children }: { children: React.ReactNode }) {
  return (
    <span dir="ltr" className="font-mono text-base">
      {children}
    </span>
  );
}

const systems: [string, string, string][] = [
  [
    "Obsidian",
    "אפליקציית פתקים שעובדת על תיקייה של קבצי Markdown, עם קישורים בין פתקים",
    "הכספת: הזיכרון ומקור האמת",
  ],
  [
    "Google Drive",
    "אחסון קבצים בענן של Google. Google Drive for desktop מסנכרן תיקיות מהמחשב",
    "הגשר מהמק לענן. דרכו Instinct רואה את הכספת",
  ],
  [
    "iCloud Drive",
    "אחסון הענן של Apple",
    "מסנכרן את הכספת בין מכשירי Apple (אופציונלי)",
  ],
  [
    "WhatsApp Desktop",
    "אפליקציית WhatsApp למק, ששומרת את ההיסטוריה בקובץ מקומי",
    "מקור ההודעות שהייצוא קורא",
  ],
  [
    "Apple Reminders",
    "אפליקציית התזכורות של Apple",
    "רשימת המשימות האמיתית, מסונכרנת לקובץ בכספת",
  ],
  [
    "Claude",
    "מודל שפה של Anthropic. Claude Code רץ ב-Terminal ויכול לכתוב ולהריץ קוד על המק",
    "בונה ומתחזק את הסקריפטים המקומיים ועובד על הכספת מהמק",
  ],
  [
    "Instinct",
    "עוזר אישי שמדברים איתו בהודעות או בטלפון ומחובר לחשבונות שלך",
    "קורא וכותב בכספת דרך Drive, ופועל מולך ומול העולם",
  ],
  [
    "Workflowy",
    "כלי רשימות ומתארים (outliner)",
    "מקור מידע נוסף שאפשר לסנכרן לכספת",
  ],
];

export default function Guide() {
  return (
    <div className="min-h-screen bg-paper text-ink font-serif">
      <Nav />

      <article
        lang="he"
        dir="rtl"
        className="px-8 py-24 max-w-3xl mx-auto font-sans"
      >
        <p
          dir="ltr"
          lang="en"
          className="text-sm text-muted text-left mb-12 font-serif italic"
        >
          Note for English readers: this guide is written in Hebrew. It walks
          you step by step through connecting Instinct to WhatsApp and an
          Obsidian vault, so you can build this setup yourself.
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          איך לחבר את Instinct ל-WhatsApp ולכספת Obsidian
        </h1>
        <p className="text-lg text-muted mb-12">מדריך פתוח להקמה עצמית</p>

        <H2>1. מה זה Instinct</H2>
        <p className="text-lg text-body">
          Instinct הוא עוזר אישי שמבין על מה אתה עובד ומה חשוב לך. מדברים איתו
          בהודעות (WhatsApp או iMessage) או בשיחת טלפון, בלי אפליקציה חדשה
          ללמוד. אחרי שמחברים לו חשבונות (Gmail, יומן Google, Google Drive
          ועוד), הוא יכול לקרוא, לחפש, להכין טיוטות ולבצע משימות בשבילך, ולחזור
          אליך מיוזמתו כשמשהו דורש תשומת לב.
        </p>
        <p className="text-lg text-body">
          הנקודה החשובה למדריך הזה: Instinct לא יושב על המחשב שלך. הוא עובד מול
          שירותי ענן. לכן כל מה שחי רק במק (היסטוריית WhatsApp, משימות, פתקים)
          צריך להגיע קודם לתיקייה בענן, ומשם הוא קורא.
        </p>

        <H2>2. מה אפשר לעשות איתו</H2>
        <List>
          <li>
            <strong>בריף יומי</strong>{" "}- הודעה אחת בבוקר שמרכזת מיילים, משימות
            להיום, מי מחכה לתשובה ממך, ומה על הלו&quot;ז.
          </li>
          <li>
            <strong>מי מחכה לי</strong>{" "}- מעבר על צ&apos;אטי WhatsApp ומיילים
            ורשימה של שיחות שבהן הכדור אצלך.
          </li>
          <li>
            <strong>טיוטות בקול שלך</strong>{" "}- מיילים והודעות שנכתבים אחרי קריאת
            ההיסטוריה עם האדם, ונשלחים רק אחרי אישור שלך.
          </li>
          <li>
            <strong>לכידת משימות</strong>{" "}- &quot;תוסיף לרשימת הקניות...&quot;
            בהודעה, והמשימה נכנסת לקובץ המשימות (ומשם ל-Reminders).
          </li>
          <li>
            <strong>כרטיסי אנשים (CRM)</strong>{" "}- פרופיל לכל איש קשר שנבנה
            מהשיחות, עם הפרדה בין עובדות לפרשנות.
          </li>
          <li>
            <strong>יומן ותיאום</strong>{" "}- קביעת פגישות, בדיקת זמינות ותזכורות.
          </li>
          <li>
            <strong>מסמכים ומחקר</strong>{" "}- הכנת מסמכים, הצעות ומצגות, וחיפוש
            מידע עם מקורות.
          </li>
          <li>
            <strong>תיאום בין Instincts</strong>{" "}- אם גם לאדם השני יש Instinct
            והוא ברשימת האנשים המהימנים שלך, שני העוזרים יכולים לתאם ביניהם
            (למשל מועד לפגישה), לפי ההרשאות שכל צד נותן.
          </li>
        </List>

        <H2>3. למה לחבר אותו לכספת Obsidian</H2>
        <List>
          <li>
            <strong>זיכרון שאתה רואה ושולט בו.</strong>{" "}ההקשר על הפרויקטים,
            האנשים והכללים שלך כתוב בקבצי Markdown רגילים, שאפשר לקרוא, לערוך
            ולמחוק.
          </li>
          <li>
            <strong>מקור אמת אחד.</strong>{" "}במקום שכל כלי יחזיק
            &quot;זיכרון&quot; משלו, כולם קוראים מאותה תיקייה.
          </li>
          <li>
            <strong>הקשר עשיר יותר.</strong>{" "}כשהסוכן רואה את דף הפרויקט, את
            כרטיס האדם ואת היסטוריית השיחה, התשובות והטיוטות שלו מדויקות יותר.
          </li>
          <li>
            <strong>נתונים מקומיים זמינים.</strong>{" "}דרך הכספת Instinct מגיע גם
            למידע שבדרך כלל נעול במק, כמו WhatsApp ו-Reminders.
          </li>
          <li>
            <strong>הכל שלך.</strong>{" "}הקבצים נשארים אצלך. אפשר להחליף כלי מחר
            בלי לאבד כלום.
          </li>
        </List>

        <H2>4. לעבוד במקביל עם Claude ומודלים אחרים</H2>
        <p className="text-lg text-body">
          הכספת היא שכבה משותפת. Instinct עובד מול העותק שלה ב-Drive, ו-Claude
          (למשל Claude Code על המק) עובד מול אותה תיקייה מקומית. כל מודל אחר
          שיודע לקרוא קבצים יכול להצטרף.
        </p>
        <List>
          <li>
            <strong>חלוקת עבודה טבעית:</strong>{" "}מה שדורש גישה למק (סקריפטים,
            הרשאות macOS, קבצים מקומיים) עושים עם Claude על המק. מה שקשור
            לתקשורת, למיילים, ליומן ולמעקב לאורך זמן עושים עם Instinct.
          </li>
          <li>
            <strong>תיאום דרך קבצים:</strong>{" "}אין צורך בחיבור ישיר בין הסוכנים.
            אחד כותב קובץ (למשל &quot;הוראות לסוכן&quot; או עדכון בדף פרויקט),
            והשני קורא אותו בסשן הבא.
          </li>
          <li>
            <strong>זהירות מדריסה:</strong>{" "}אם שני סוכנים עורכים את אותו קובץ
            באותו זמן, הסנכרון עלול לדרוס שינוי. כדאי לקבוע לכל קובץ
            &quot;בעלים&quot; עיקרי, ולקבצים משותפים לעבוד בשינויים קטנים.
          </li>
        </List>

        <H2>5. פרוטוקולי תיעוד - כך כל הסוכנים נשארים מסונכרנים</H2>
        <p className="text-lg text-body">שלושה רכיבים עושים את העבודה:</p>
        <List>
          <li>
            <strong>
              תיקיית <Ltr>System/</Ltr>
            </strong>{" "}
            - &quot;איך לעבוד איתי&quot;. קובץ <Ltr>INDEX.md</Ltr>{" "}שמוגדר כמקור
            האמת היחיד, ומפנה לקבצים ממוספרים: מי אני, כללי עבודה, תוכן וקול,
            פרויקטים, אנשים, כלים ואוטומציה, מבנה הכספת, תהליכי עבודה. כל סוכן
            קורא את INDEX ואת קובץ כללי העבודה בתחילת סשן. אצל Claude, קובץ ה-
            <Ltr>CLAUDE.md</Ltr>{" "}הגלובלי מחזיק רק מצביע לתיקייה הזו, כך שיש מקור
            אחד ולא שניים.
          </li>
          <li>
            <strong>יומן פעולות לכל סוכן</strong>{" "}- למשל{" "}
            <Ltr>Instinct Log.md</Ltr>{" "}בשורש הכספת. יומן שרק מוסיפים אליו: לכל
            רשומה יש שם הסוכן, תאריך ושעה, מה נעשה, ואילו קבצים נגעו. ככה רואים
            מי שינה מה, והסוכן השני יודע מה קרה בלעדיו.
          </li>
          <li>
            <strong>כללים משותפים</strong>{" "}- דוגמאות לכללים שעובדים טוב:
            <ul className="list-[circle] ps-6 ms-0 mt-2 space-y-1">
              <li>הכספת היא מקור האמת.</li>
              <li>אישור לפני כל תוכן יוצא. מיילים נשמרים כטיוטה בלבד.</li>
              <li>לא לזייף פעולות: אם כלי נכשל, אומרים את זה.</li>
              <li>
                שינויים קטנים וניתנים לבדיקה, ולעדכן INDEX וקישורים חוזרים.
              </li>
              <li>
                לא נוגעים בקבצי המקור (למשל תיקיית <Ltr>WhatsApp/</Ltr>). מה
                שנגזר מהם נכתב במקום אחר.
              </li>
              <li>אם קישור או קובץ חסר, עוצרים ושואלים, ולא מנחשים תחליף.</li>
            </ul>
          </li>
        </List>

        <H2>6. מה זה כל מערכת</H2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-base text-body border-collapse">
            <thead>
              <tr className="border-b-2 border-ink text-ink text-start">
                <th className="py-3 pe-4 text-start">מערכת</th>
                <th className="py-3 pe-4 text-start">מה היא</th>
                <th className="py-3 text-start">התפקיד שלה כאן</th>
              </tr>
            </thead>
            <tbody>
              {systems.map(([name, what, role]) => (
                <tr key={name} className="border-b border-line align-top">
                  <td className="py-3 pe-4 font-semibold text-ink whitespace-nowrap">
                    {name}
                  </td>
                  <td className="py-3 pe-4">{what}</td>
                  <td className="py-3">{role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>7. שלבים ופרומפטים</H2>
        <p className="text-lg text-body">
          הפרומפטים כאן הם נקודת התחלה. כדאי להתאים אותם לשמות התיקיות שלך.
        </p>

        <H3>שלב 1: הכספת בענן</H3>
        <List>
          <li>לבחור תיקייה שתהיה הכספת (אפשר Obsidian vault קיים).</li>
          <li>
            להתקין Google Drive for desktop ולהוסיף את התיקייה לסנכרון מהמחשב.
            לוודא ב-drive.google.com שהקבצים מופיעים.
          </li>
          <li>לחבר ל-Instinct את חשבון ה-Google שבו נמצאת התיקייה.</li>
        </List>
        <Prompt to="Instinct">
          &quot;הכספת שלי (Obsidian) מסונכרנת ל-Google Drive בתיקייה [שם
          התיקייה]. תמצא אותה, תעבור על המבנה ותגיד לי מה אתה רואה: אילו תיקיות
          יש, ומתי עודכן הקובץ האחרון. אל תשנה כלום.&quot;
        </Prompt>

        <H3>שלב 2: קובץ כללים ויומן</H3>
        <Prompt to="Claude (על המק, מתוך תיקיית הכספת)">
          &quot;תבנה בכספת תיקייה System/ עם INDEX.md שמוגדר כמקור האמת היחיד
          לאיך לעבוד איתי, ותת-קבצים: מי אני, כללי עבודה, פרויקטים, אנשים, כלים
          ואוטומציה, מבנה הכספת. תשאל אותי שאלות כדי למלא אותם. אחר כך תשים
          ב-CLAUDE.md הגלובלי רק מצביע ל-System/INDEX.md.&quot;
        </Prompt>
        <Prompt to="Instinct">
          &quot;לפני כל עבודה בכספת תקרא את System/INDEX.md ואת קובץ כללי
          העבודה. מעכשיו, כל שינוי שאתה עושה בכספת תתעד בקובץ Instinct Log.md
          בשורש: תאריך ושעה, מה עשית, ואילו קבצים נגעו.&quot;
        </Prompt>

        <H3>שלב 3: חיבור Instinct ל-WhatsApp</H3>
        <p className="text-lg text-body">
          השיטה לחבר את Instinct ל-WhatsApp: מבקשים מה-Instinct שלך להתחבר
          ל-WhatsApp, הוא מציג קוד QR, ואתה סורק אותו עם הטלפון.
        </p>
        <Prompt to="Instinct">
          &quot;תתחבר ל-WhatsApp שלי. תציג לי קוד QR ואני אסרוק אותו עם
          הטלפון.&quot;
        </Prompt>
        <p className="text-lg text-body">
          אחרי הסריקה Instinct מחובר ל-WhatsApp שלך.
        </p>
        <p className="text-lg text-body">
          אופציונלי - ייצוא היסטוריית הצ&apos;אטים לכספת, לשימוש בכרטיסי אנשים
          ובחיפוש בארכיון:
        </p>
        <Prompt to="Claude">
          &quot;תכתוב לי סקריפט Python שקורא עותק של ChatStorage.sqlite של
          WhatsApp Desktop (בלי לגעת בקובץ החי), מוציא רק הודעות טקסט, וכותב
          קובץ Markdown לכל צ&apos;אט בתיקייה WhatsApp/ בכספת, עם INDEX.md של כל
          הצ&apos;אטים. הריצה צריכה להיות אינקרמנטלית (לשמור state), עם נעילה
          נגד ריצה כפולה ו-dry-run. אחר כך תיצור LaunchAgent שמריץ אותו פעם
          ביום, ותסביר לי איך לתת Full Disk Access.&quot;
        </Prompt>
        <Prompt to="Instinct (אחרי הריצה הראשונה)">
          &quot;בתיקייה WhatsApp/ בכספת יש ייצוא של הצ&apos;אטים שלי. הקבצים שם
          לקריאה בלבד, לעולם לא לערוך אותם. תגיד לי מתי רץ הייצוא האחרון ומי
          מחכה לתשובה ממני.&quot;
        </Prompt>

        <H3>שלב 4: כרטיסי אנשים</H3>
        <Prompt to="Instinct">
          &quot;תבנה לי כרטיסי אנשים תחת People/CRM/ מתוך שיחות ה-WhatsApp. קובץ
          לכל אדם: מי הוא, הקשר, נושאים פתוחים, עם קישור לשיחת המקור. תפריד בין
          עובדות לפרשנות ותשמור פרטים רגישים ברמת סיכום. תתחיל באצווה של חמישה
          ותראה לי.&quot;
        </Prompt>

        <H3>שלב 5: משימות (אופציונלי)</H3>
        <Prompt to="Claude">
          &quot;תבנה סנכרון בין Apple Reminders לקובץ משימות.md בכספת: כותרת לכל
          רשימה, שורת - [ ] לכל משימה, ומזהה נסתר לכל שורה. תתחיל בקריאה בלבד.
          אחרי שזה יציב, דו-כיווני עם בלמי בטיחות (לעצור אם יש 0 משימות או ירידה
          חריגה), כש-Reminders מנצח בהתנגשות. LaunchAgent כל שעה.&quot;
        </Prompt>
        <Prompt to="Instinct">
          &quot;קובץ המשימות שלי הוא משימות.md בכספת, מסונכרן עם Reminders.
          כשאני מבקש להוסיף משימה, תוסיף שורה תחת הרשימה המתאימה, ואל תיגע
          במזהים הקיימים.&quot;
        </Prompt>

        <H3>שלב 6: Workflowy (אופציונלי)</H3>
        <Prompt to="Claude">
          &quot;תכתוב סקריפט שמושך פעם ביום את כל התוכן מ-Workflowy דרך ה-API
          הרשמי (nodes-export), בונה ממנו עץ, וכותב קובץ Markdown לתיקייה
          Workflowy/ בכספת. את מפתח ה-API תשמור ב-Keychain של macOS, לא בקובץ.
          LaunchAgent יומי.&quot;
        </Prompt>

        <H3>שלב 7: בריף יומי</H3>
        <Prompt to="Instinct">
          &quot;כל בוקר ב-8 תשלח לי הודעה אחת: מיילים שדורשים תשובה, המשימות של
          היום מקובץ המשימות, מי מחכה לי ב-WhatsApp, ומה ביומן.&quot;
        </Prompt>

        <H2>8. החלק הטכני: מתכון לסנכרונים</H2>
        <p className="text-lg text-body">
          כך בונים את שלושת הסנכרונים. הקוד עצמו פשוט, ואפשר לבקש מ-Claude לכתוב
          אותו לפי התיאור כאן (הפרומפטים בפרק 7).
        </p>

        <H3>א. הכספת: המק ← Google Drive</H3>
        <List>
          <li>
            הכספת היא תיקייה רגילה במק (אפשר גם בתוך iCloud Drive, אם רוצים אותה
            במכשירי Apple).
          </li>
          <li>
            Google Drive for desktop מסנכרן את התיקייה ל-Drive. היא מופיעה תחת
            &quot;המחשבים שלי&quot; (My Computers).
          </li>
          <li>
            Instinct מחובר לחשבון ה-Google, קורא את קבצי ה-Markdown בתיקייה
            ב-Drive, ועורך אותם כשצריך. השינויים חוזרים למק דרך אותו סנכרון.
          </li>
        </List>

        <H3>ב. WhatsApp ← הכספת</H3>
        <H4>הגישה</H4>
        <List>
          <li>
            סקריפט Python מקומי שרץ פעם ביום דרך LaunchAgent של macOS (קובץ
            plist תחת <Ltr>~/Library/LaunchAgents</Ltr>).
          </li>
          <li>
            הסקריפט מעתיק את מסד הנתונים של WhatsApp Desktop (
            <Ltr>ChatStorage.sqlite</Ltr>) לתיקייה זמנית וקורא מהעותק, לא מהקובץ
            החי.
          </li>
          <li>
            מסנן להודעות טקסט, וכותב קובץ Markdown לכל צ&apos;אט, עם ההודעות לפי
            תאריך, לתיקייה <Ltr>WhatsApp/</Ltr>{" "}בכספת. בנוסף כותב קובץ{" "}
            <Ltr>INDEX.md</Ltr>{" "}עם רשימת כל הצ&apos;אטים.
          </li>
          <li>
            הריצה אינקרמנטלית: קובץ state קטן שומר עד איפה הגיעה הריצה הקודמת,
            וכל ריצה מוסיפה רק הודעות חדשות. נעילת תהליך מונעת שתי ריצות במקביל.
          </li>
          <li>
            היתרון על פני גשרים שמתחברים ל-WhatsApp Web: אין צורך לסרוק QR מחדש
            כל כמה ימים, ואין תלות בחיבור לשרתים של WhatsApp.
          </li>
          <li>כדאי שיהיה מצב dry-run (הצגה בלי כתיבה) ומצב ייצוא מחדש מלא.</li>
        </List>
        <H4>הצפנה והרשאות</H4>
        <p className="text-lg text-body">
          ההצפנה של WhatsApp היא בתעבורה (end-to-end). על המק עצמו, אפליקציית
          WhatsApp שומרת את ההיסטוריה בקובץ SQLite רגיל, בתיקייה:
        </p>
        <p
          dir="ltr"
          className="font-mono text-sm bg-paper-2 px-4 py-3 mb-4 text-left break-all"
        >
          ~/Library/Group
          Containers/group.net.whatsapp.WhatsApp.shared/ChatStorage.sqlite
        </p>
        <p className="text-lg text-body">
          macOS חוסם גישה לתיקייה הזו מאפליקציות אחרות. לכן התהליך שמריץ את
          הסקריפט (Terminal, או python3) צריך Full Disk Access ב-System Settings
          ← Privacy &amp; Security. בגרסאות ישנות של האפליקציה הנתיב היה אחר
          (תחת <Ltr>~/Library/Containers/com.whatsapp/...</Ltr>), אז כדאי לבדוק
          איפה הקובץ נמצא אצלך.
        </p>
        <H4>מה בונים מעל</H4>
        <p className="text-lg text-body">
          Instinct קורא את קבצי ה-WhatsApp בכספת (קריאה בלבד), בונה מהם כרטיסי
          אנשים בתיקייה נפרדת (למשל <Ltr>People/CRM/</Ltr>), ומשתמש בהם כדי לדעת
          מי מחכה לתשובה. את קבצי המקור ב-<Ltr>WhatsApp/</Ltr>{" "}לא עורכים אף פעם.
        </p>

        <H3>ג. Apple Reminders ↔ קובץ משימות בכספת</H3>
        <List>
          <li>
            סקריפט דטרמיניסטי (בלי מודל שפה) שרץ כל שעה דרך LaunchAgent, עם גשר
            EventKit קטן: אפליקציה מקומית שמקבלת מ-macOS הרשאה ל-Reminders.
          </li>
          <li>
            הפלט הוא קובץ אחד בשורש הכספת (למשל משימות.md): כותרת לכל רשימה
            ב-Reminders, ושורת משימה (<Ltr>- [ ]</Ltr>) לכל תזכורת, עם מזהה נסתר
            בסוף השורה (הערת Obsidian בתחביר <Ltr>%%...%%</Ltr>) שמקשר אותה
            לתזכורת.
          </li>
          <li>
            דו-כיווני: יצירה, סימון כבוצע, שינוי שם או תאריך, והעברה בין רשימות.
            מחיקת שורה בקובץ מסמנת את המשימה כבוצעה ולא מוחקת אותה.
          </li>
          <li>
            בהתנגשות, Reminders מנצח. בלמי בטיחות: הסנכרון עוצר אם הוא רואה 0
            משימות או היעלמות חריגה של משימות.
          </li>
          <li>
            רשימה חדשה יוצרים קודם באפליקציית Reminders. כותרת רשימה שקיימת רק
            בקובץ תימחק בסנכרון הבא, והמשימות שלה יעברו ל-inbox.
          </li>
          <li>
            המלצה: להתחיל בגרסה קריאה-בלבד שכותבת קובץ אחד (אפשר ב-JXA,
            ה-JavaScript המובנה של macOS, בלי שום התקנה), ורק אחרי שזה יציב
            להוסיף כתיבה חזרה.
          </li>
        </List>

        <H3>ד. Workflowy ← הכספת</H3>
        <p className="text-lg text-body">
          העיקרון זהה: להביא את התוכן לקובץ בתיקייה שמסתנכרנת ל-Drive,
          ו-Instinct קורא משם. יש שלוש דרכים, מהפשוטה לאוטומטית:
        </p>
        <List>
          <li>
            <strong>ייצוא ידני</strong>{" "}- Workflowy מאפשר לייצא את כל החשבון או
            ענף אחד כ-Markdown, טקסט או OPML, מתפריט הבולט או מ-Settings. שומרים
            את הקובץ בתיקייה המסונכרנת. טוב לבדיקה ראשונה.
          </li>
          <li>
            <strong>גיבוי יומי ל-Dropbox</strong>{" "}- Workflowy יודע לשמור גיבוי
            יומי לחשבון Dropbox מחובר. אם Dropbox מסונכרן למק, סקריפט קטן יכול
            להעתיק את הגיבוי האחרון לכספת.
          </li>
          <li>
            <strong>API (הכי מומלץ לסנכרון read-only יומי)</strong>{" "}-
            ל-Workflowy יש API רשמי עם מפתח API. ה-endpoint{" "}
            <Ltr>GET /api/v1/nodes-export</Ltr>{" "}מחזיר את כל הבולטים ברשימה שטוחה
            עם <Ltr>parent_id</Ltr>, ומוגבל לקריאה אחת בדקה. סקריפט Python
            ב-LaunchAgent יומי מושך את הרשימה, בונה ממנה עץ, וכותב קובץ Markdown
            לכספת. את מפתח ה-API שומרים ב-Keychain של macOS, לא בקובץ בתוך
            הכספת.
          </li>
        </List>

        <H3>ה. דברים ששווה לדעת מראש</H3>
        <List>
          <li>
            <strong>עדכניות.</strong>{" "}Instinct רואה רק את מה שהגיע ל-Drive.
            הודעת WhatsApp שנכנסה אחרי הריצה היומית תופיע רק אחרי הריצה הבאה.
          </li>
          <li>
            <strong>המק צריך להיות דלוק.</strong>{" "}הסקריפטים רצים מקומית. אם המק
            כבוי או ישן, אין ריצה.
          </li>
          <li>
            <strong>פרטיות.</strong>{" "}ברגע שההיסטוריה ב-Drive, היא נגישה לכל מי
            שיש לו גישה לתיקייה. כדאי להשאיר את התיקייה פרטית.
          </li>
          <li>
            <strong>קבצי מקור לא נוגעים בהם.</strong>{" "}שומרים את הייצוא הגולמי
            כמו שהוא, וכל מה שנגזר ממנו נכתב במקום אחר. ככה ריצה חוזרת לא דורסת
            עבודה.
          </li>
          <li>
            <strong>לבדוק שהסנכרון חי.</strong>{" "}מדי פעם לבקש מ-Instinct לבדוק
            מתי עודכנו הקבצים בפעם האחרונה. אם קובץ לא התעדכן יום או יותר, כנראה
            שה-LaunchAgent נעצר.
          </li>
        </List>

        <H2>9. חיבור בין סוכנים (Instinct ל-Instinct)</H2>
        <p className="text-lg text-body">
          עד כאן דיברנו על הסוכן שלך. אבל אם גם לחבר שלך יש Instinct, שני
          הסוכנים יכולים להתחבר זה לזה ולעבוד יחד, בלי שאתם צריכים להיות
          המתווכים.
        </p>

        <H3>מה זה</H3>
        <p className="text-lg text-body">
          חיבור מהימן (Trusted people) הוא קשר בין הסוכן שלך לסוכן של אדם אחר.
          אחרי שהחיבור מאושר משני הצדדים, הסוכנים יכולים להעביר ביניהם הודעות
          ולתאם דברים בשמכם. החיבור עצמו הוא רק ערוץ תקשורת: הוא לא נותן לאף צד
          גישה למידע או לפעולות.
        </p>

        <H3>איך מבקשים חיבור</H3>
        <List>
          <li>
            אפשרות א&apos;: אומרים לסוכן שלך, למשל: &quot;תבקש חיבור לסוכן של
            דנה, המספר שלה 050-0000000&quot;. הסוכן שולח את הבקשה למספר הטלפון.
            זה עובד רק אם לאדם כבר יש חשבון Instinct על המספר הזה.
          </li>
          <li>
            אפשרות ב&apos;: נכנסים לדף האנשים המהימנים:{" "}
            <a
              href="https://app.instinct.com/trusted-networks"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              <Ltr>app.instinct.com/trusted-networks</Ltr>
            </a>{" "}
            ומבקשים משם.
          </li>
          <li>
            אם לאדם עדיין אין Instinct: שולחים לו קודם קישור הזמנה (בסוף
            המדריך). אחרי שנרשם, מבקשים את החיבור.
          </li>
          <li>
            הצד השני צריך לאשר. עד שהוא מאשר, אין חיבור ושום דבר לא עובר.
          </li>
        </List>

        <H3>מה זה מאפשר</H3>
        <List>
          <li>
            תיאום בין הסוכנים, למשל מציאת זמן לפגישה או לטניס, בלי סבב הודעות
            ביניכם.
          </li>
          <li>
            עדכונים הדדיים, למשל שהסוכן שלך יעדכן אותך כשחבר נוחת, אם הוא הרשה
            לשתף את זה.
          </li>
          <li>
            עבודה משותפת על דברים כמו מסמך, דרך הסוכנים. יכולת זו תלויה במה
            שכל צד הרשה ובחיבורים הפעילים אצלו, ולכן כדאי לבדוק מול הסוכן שלך
            מה אפשרי במקרה שלך.
          </li>
        </List>

        <H3>מודל ההרשאות: אתה מגדיר מה יוצא</H3>
        <List>
          <li>
            <strong>חיבור הוא לא הרשאה.</strong>{" "}עצם זה שמישהו ברשימה שלך לא
            אומר שהסוכן יספר לו משהו או יעשה משהו בשבילו.
          </li>
          <li>
            אתה מגדיר מה מותר לשתף ולמי, למשל &quot;אפשר לשתף עם דנה את
            החלונות הפנויים שלי השבוע, אבל לא פרטי פגישות&quot;. מה שלא הוגדר לא
            יוצא.
          </li>
          <li>
            פעולות שמחייבות אותך, כמו הסכמה לפגישה, נשארות באישור שלך. אפשר
            לבקש מהסוכן לשאול אותך לפני כל התחייבות.
          </li>
          <li>
            גם הסוכן של הצד השני מייצג רק את בעליו. בקשה שמגיעה מסוכן אחר היא
            בקשה, לא פקודה.
          </li>
          <li>
            אפשר לשנות או לבטל הרשאה בכל רגע, פשוט לומר לסוכן. אפשר גם לחסום
            אדם מדף האנשים המהימנים.
          </li>
        </List>

        <H3>הפרומפט להתחלה</H3>
        <Prompt to="Instinct">
          &quot;תבקש חיבור לסוכן של [שם], המספר שלו [מספר]. תשתף איתו רק את
          [מה מותר], ובכל דבר אחר תשאל אותי קודם.&quot;
        </Prompt>

        <div className="mt-20 pt-12 border-t border-line text-center">
          <h2 className="text-3xl font-bold mb-6">רוצה להתחיל?</h2>
          <p className="text-lg text-body mb-8">
            אם המדריך עזר לך ואתה רוצה לנסות את Instinct בעצמך, הנה קישור הזמנה
            אישי שלי:
          </p>
          <a
            href={INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-ink text-paper text-sm font-medium hover:opacity-80 transition mb-8"
          >
            הצטרפות ל-Instinct
          </a>
          <p className="text-lg text-body">
            ואם נתקעת בשלב מסוים - מוזמן לכתוב לי.
          </p>
        </div>
      </article>

      <Footer />
    </div>
  );
}
