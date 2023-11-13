function wnabout() {
    return `
 +--------------------------------------+
 | Widgetnas Version: 2.0.0.3           |
 +--------------------------------------+
`;
}
var WNLanguage = {};
var wnConfig;
WNLanguage['en'] = {
    'common': {
        'browsererror': 'Please use a new browser with proper w3 support. Chrome version 89 and above or FireFox version 55 and above.',
        'close': 'Close',
        'ok': 'Ok',
        'cancel': 'Cancel',
    },
    "inputdatettime": {
        "previousmonth": "Previous Month",
        "nextmonth": "Next Month",
        "monthyear": "Select Month Year",
        "today": "Today"
    },
    "editor": {
        "undo": "Undo",
        "redo": "Redo",
        "bold": "Bold",
        "italic": "Italic",
        "underline": "Underline",
        "strikethrough": "Strikethrough",
        "font": "Font",
        "fontsize": "Font size",
        "subscript": "Subscript",
        "superscript": "Superscript",
        "style": "Style",
        "alignleft": "Left align",
        "aligncenter": "Center align",
        "alignright": "Right align",
        "alignjustify": "Justify",
        "ltr": "LTR",
        "rtl": "RTL",
        "indent": "Indent",
        "outdent": "Outdent",
        "numberlist": "Number list",
        "buletlist": "Bulet list",
        "textcolor": "Text color",
        "background": "Background color",
        "fill": "Fill color",
        "eraseformat": "Erase format",
        "link": "Link",
        "unlink": "Unlink",
        "image": "Image",
        "media": "Media",
        "iframe": "IFrame",
        "hr": "Horizontal line",
        "source": "Source",
        "dark_mode": "Dark mode",
        "fullscreen": "Full screen",
        "url": "Addres",
        "target": "Target",
        "title": "Title",
        "insert": "Insert",
        "alt": "Alt",
        "width": "Width",
        "height": "Height",
        "borderwidth": "Border Width",
        "borderstyle": "Border Style",
        "class": "Class",
        "type": "Type",
        "controls": "Controls",
        "mute": "Muted",
        "autoPlay": "Auto Play",
        "medianotsupport": "Your browser does not support the media element."
    },
    "filelist": {
        "refresh": "Refresh",
        "newfolder": "New folder",
        "rename": "Rename",
        "delete": "Delete",
        "copy": "Copy",
        "cut": "Cut",
        "paste": "Paste",
        "upload": "Upload file",
        "download": "Download file",
        "compress": "Compress files",
        "decompress": "Extract files",
        "root": "root",
        "filename": "File name",
        "ext": "Ext",
        "size": "Size",
        "date": "Date",
        "name": "Name",
        "errorcommand": "While execute command, i received an error.",
        "foldercreated": "Folder created",
        "renamesuccess": "Rename Successed",
        "deletefiles": "Do you want to delete selected files?",
        "files": "file(s)",
        "deletefolder": "Do you want to delete selected folder?",
        "renamed": "Renamed successed.",
        "deleted": "Deleted successed.",
        "clipboarded": "Data set in clipboard.",
        "pasted": "Files or folder pasted.",
        "drophere": "Drop files here.",
        "uploaded": "Files uploaded.",
        "compressed": "Files are compressed.",
        "decompressmessage": "Do you want to decompressed all files and over write them?",
        "decompressed": "Files are decompressed.",
    },
    "error": {
        "400": "Bad Request",
        "401": "Unauthorized",
        "402": "Payment Required",
        "403": "Forbidden",
        "404": "Not Found",
        "405": "Method Not Allowed",
        "406": "Not Acceptable",
        "407": "Proxy Authentication Required",
        "408": "Request Timeout",
        "409": "Conflict",
        "410": "Gone",
        "411": "Length Required",
        "412": "Precondition Failed",
        "413": "Content Too Large",
        "414": "URI Too Long",
        "415": "Unsupported Media Type",
        "416": "Range Not Satisfiable",
        "417": "Expectation Failed",
        "421": "Misdirected Request",
        "422": "Unprocessable Content",
        "426": "Upgrade Required",
        "500": "Internal Server Error",
        "501": "Not Implemented",
        "502": "Bad Gateway",
        "503": "Service Unavailable",
        "504": "Gateway Timeout",
        "505": "HTTP Version Not Supported"
    }
};
WNLanguage['fa'] = {
    'common': {
        'browsererror': 'لطفا از یک مرورگر جدید با قابلیت پشتیبانی درست از w3 استفاده کنید. Chrome نسخه 89 به بالا یا FireFox نسخه 55 به بالا.',
        'close': 'بستن',
        'ok': 'تایید',
        'cancel': 'لغو',
    },
    "inputdatettime": {
        "previousmonth": "ماه قبل",
        "nextmonth": "ماه بعد",
        "monthyear": "انتخاب سال و ماه",
        "today": "امروز"
    },
    "cdd": {
        "WNPersianCalendar": [
            { month: 1, day: 1, holiday: true, text: 'آغاز نوروز' },
            { month: 1, day: 2, holiday: true, text: 'عید نوروز - هجوم مأموران ستم‌شاهی پهلوی به مدرسه‌ی فیضیه‌ی قم (۱۳۴۲ ه‍.ش) - آغاز عملیات فتح‌المبین (۱۳۶۱ ه‍.ش)' },
            { month: 1, day: 3, holiday: true, text: 'عید نوروز' },
            { month: 1, day: 4, holiday: true, text: 'عید نوروز' },
            { month: 1, day: 6, holiday: false, text: 'ولادت زرتشت' },
            { month: 1, day: 7, holiday: false, text: 'روز هنرهای نمایشی' },
            { month: 1, day: 12, holiday: true, text: 'روز جمهوری اسلامی' },
            { month: 1, day: 13, holiday: true, text: 'سیزده نوروز - روز طبیعت' },
            { month: 1, day: 15, holiday: false, text: 'روز ذخایر ژنتیکی و زیستی' },
            { month: 1, day: 18, holiday: false, text: 'روز سلامتی' },
            { month: 1, day: 19, holiday: false, text: 'شهادت آیت‌اللّه سیدمحمدباقر صدر و خواهر ایشان بنت‌الهدی به دست حکومت بعث عراق (۱۳۵۹ ه‍.ش)' },
            { month: 1, day: 20, holiday: false, text: 'روز ملّی فنّاوری هسته‌ای - روز هنر انقلاب اسلامی (سالروز شهادت سیدمرتضی آوینی) (۱۳۷۲ ه‍.ش)' },
            { month: 1, day: 21, holiday: false, text: 'شهادت امیر سپهبد علی صیاد شیرازی (۱۳۷۸ ه‍.ش) - سالروز افتتاح حساب شماره‌ی ۱۰۰ به فرمان امام خمینی (رحمة‌اللّه علیه) و تأسیس بنیاد مسکن انقلاب اسلامی (۱۳۵۸ ه‍.ش)' },
            { month: 1, day: 25, holiday: false, text: 'روز بزرگداشت عطّار نیشابوری ‌' },
            { month: 1, day: 29, holiday: false, text: 'روز ارتش جمهوری اسلامی و نیروی زمینی' },
            { month: 2, day: 1, holiday: false, text: 'روز بزرگداشت سعدی - روز نثر فارسی' },
            { month: 2, day: 2, holiday: false, text: 'تأسیس سپاه پاسداران انقلاب اسلامی (۱۳۵۸ ه‍.ش) - سالروز اعلام انقلاب فرهنگی (۱۳۵۹ ه‍.ش) - روز زمین پاک' },
            { month: 2, day: 3, holiday: false, text: 'روز بزرگداشت شیخ بهایی - روز معماری - سالروز شهادت امیر سپهبد قرنی (۱۳۵۸ ه‍.ش)' },
            { month: 2, day: 5, holiday: false, text: 'شکست حمله نظامی آمریکا به ایران در طبس (۱۳۵۹ ه‍.ش)' },
            { month: 2, day: 7, holiday: false, text: 'روز ایمنی حمل و نقل' },
            { month: 2, day: 9, holiday: false, text: 'روز شورا' },
            { month: 2, day: 10, holiday: false, text: 'روز ملی خلیج فارس - آغاز عملیات بیت المقدس (۱۳۶۱ ه‍.ش)' },
            { month: 2, day: 12, holiday: false, text: 'شهادت استاد مرتضی مطهری و روز معلم (۱۳۵۸ ه‍.ش)' },
            { month: 2, day: 15, holiday: false, text: 'روز بزرگداشت شیخ صدوق' },
            { month: 2, day: 18, holiday: false, text: 'روز بیماری‌های خاص و صعب‌العلاج' },
            { month: 2, day: 19, holiday: false, text: 'روز بزرگداشت شیخ کلینی - روز اسناد ملی و میراث مکتوب' },
            { month: 2, day: 24, holiday: false, text: 'لغو امتیاز تنباکو به فتوای آیت‌اللّه میرزا حسن شیرازی (۱۲۷۰ ه‍.ش)' },
            { month: 2, day: 25, holiday: false, text: 'روز پاسداشت زبان فارسی و بزرگداشت حکیم ابوالقاسم فردوسی' },
            { month: 2, day: 27, holiday: false, text: 'روز ارتباطات و روابط عمومی' },
            { month: 2, day: 28, holiday: false, text: 'روز بزرگداشت حکیم عمر خیام' },
            { month: 2, day: 30, holiday: false, text: 'روز ملی جمعیت' },
            { month: 2, day: 31, holiday: false, text: 'روز اهدای عضو، اهدای زندگی' },
            { month: 3, day: 1, holiday: false, text: 'روز بهره‌وری و بهینه‌سازی مصرف - روز بزرگداشت ملّاصدرا (صدرالمتألهین)' },
            { month: 3, day: 3, holiday: false, text: 'فتح خرمشهر در عملیات بیت‌المقدس و روز مقاومت، ایثار و پیروزی (۱۳۶۱ ه‍.ش)' },
            { month: 3, day: 4, holiday: false, text: 'روز دزفول ‌- روز مقاومت و پایداری' },
            { month: 3, day: 5, holiday: false, text: 'روز نسیم مهر (روز حمایت از خانواده زندانیان)' },
            { month: 3, day: 7, holiday: false, text: 'افتتاح اولین دوره‌ی مجلس شورای اسلامی (۱۳۵۹ ه‍.ش)' },
            { month: 3, day: 14, holiday: true, text: 'رحلت حضرت امام خمینی (رحمة‌اللّه علیه) رهبر کبیر انقلاب و بنیان‌گذار جمهوری اسلامی ایران (۱۳۶۸ ه‍.ش) - انتخاب حضرت آیت‌اللّه امام خامنه‌ای به رهبری (۱۳۶۸ ه‍.ش)' },
            { month: 3, day: 15, holiday: true, text: 'قیام خونین ۱۵ خرداد (۱۳۴۲ ه‍.ش) - زندانی شدن حضرت امام خمینی (رحمة‌اللّه علیه) به دست مأموران ستم‌شاهی پهلوی (۱۳۴۲ ه‍.ش)' },
            { month: 3, day: 20, holiday: false, text: 'روز صنایع دستی - شهادت آیت‌اللّه سعیدی به دست مأموران ستم‌شاهی پهلوی (۱۳۴۹ ه‍.ش)' },
            { month: 3, day: 26, holiday: false, text: 'شهادت سربازان دلیر اسلام :بخارایی، امانی، صفار هرندی و نیک‌نژاد (۱۳۴۴ ه‍.ش)' },
            { month: 3, day: 27, holiday: false, text: 'روز جهاد کشاورزی (تشکیل جهاد سازندگی به فرمان حضرت امام خمینی رحمة‌اللّه علیه) (۱۳۵۸ ه‍.ش)' },
            { month: 3, day: 29, holiday: false, text: 'درگذشت دکتر علی شریعتی (۱۳۵۶ ه‍.ش)' },
            { month: 3, day: 30, holiday: false, text: 'شهادت زائران حرم رضوی علیه‌السلام به دست ایادی آمریکا در روز عاشورا (۱۳۷۳ ه‍.ش)' },
            { month: 3, day: 31, holiday: false, text: 'شهادت دکتر مصطفی چمران (۱۳۶۰ ه‍.ش) - روز بسیج استادان' },
            { month: 4, day: 1, holiday: false, text: 'روز تبلیغ و اطلاع‌رسانی دینی (سالروز صدور فرمان امام خمینی رحمة‌اللّه علیه مبنی بر تأسیس سازمان تبلیغات اسلامی) (۱۳۶۰ ه‍.ش) - روز اصناف' },
            { month: 4, day: 7, holiday: false, text: 'شهادت مظلومانه‌ی آیت‌اللّه دکتر بهشتی و ۷۲ تن از یاران امام با انفجار بمب به دست منافقان در دفتر مرکزی حزب جمهوری اسلامی (۱۳۶۰ ه‍.ش) - روز قوه‌ی قضائیه - سالروز بمباران شیمیایی شهر سردشت (۱۳۶۶ ه‍.ش)' },
            { month: 4, day: 8, holiday: false, text: 'روز مبارزه با سلاح‌های شیمیایی و میکروبی' },
            { month: 4, day: 10, holiday: false, text: 'روز صنعت و معدن - روز آزادسازی شهر مهران - روز بزرگداشت صائب تبریزی - روز دیپلماسی فرهنگی و تعامل با جهان' },
            { month: 4, day: 11, holiday: false, text: 'شهادت آیت‌اللّه صدوقی چهارمین شهید محراب به دست منافقان (۱۳۶۱ ه‍.ش)' },
            { month: 4, day: 12, holiday: false, text: 'حمله‌ی ددمنشانه‌ی ناوگان آمریکای جنایتکار به هواپیمای مسافربری جمهوری اسلامی ایران (۱۳۶۷ ه‍.ش) - روز افشای حقوق بشر آمریکایی - روز بزرگداشت علامه امینی (۱۳۴۹ ه‍.ش)' },
            { month: 4, day: 14, holiday: false, text: 'روز قلم - روز شهرداری و دهیاری' },
            { month: 4, day: 16, holiday: false, text: 'روز مالیات' },
            { month: 4, day: 18, holiday: false, text: 'روز ادبیات کودکان و نوجوانان - کشف توطئه‌ی آمریکایی در پایگاه هوایی شهید نوژه (کودتای نافرجام نقاب) (۱۳۵۹ ه‍.ش)' },
            { month: 4, day: 21, holiday: false, text: 'روز عفاف و حجاب - حمله به مسجد گوهرشاد و کشتار مردم به دست رضاخان (۱۳۱۴ ه‍.ش)' },
            { month: 4, day: 23, holiday: false, text: 'سالروز اشتباه برجام، مایه‌ی عبرت آیندگان (۱۳۹۴ ه‍.ش) - گشایش نخستین مجلس خبرگان رهبری (۱۳۶۲ ه‍.ش)' },
            { month: 4, day: 25, holiday: false, text: 'روز بهزیستی و تأمین اجتماعی' },
            { month: 4, day: 26, holiday: false, text: 'سالروز تأسیس نهاد شورای نگهبان (۱۳۵۹ ه‍.ش)' },
            { month: 4, day: 27, holiday: false, text: 'اعلام پذیرش قطعنامه‌ی ۵۹۸ شورای امنیت از سوی ایران (۱۳۶۷ ه‍.ش)' },
            { month: 4, day: 30, holiday: false, text: 'روز بزرگداشت آیت‌اللّه سید ابوالقاسم کاشانی' },
            { month: 5, day: 4, holiday: false, text: 'روز بزرگداشت شیخ صفی‌الدین اردبیلی' },
            { month: 5, day: 5, holiday: false, text: 'سالروز عملیات افتخار‌آفرین مرصاد (۱۳۶۷ ه‍.ش)' },
            { month: 5, day: 6, holiday: false, text: 'روز کارآفرینی و آموزش‌های فنّی‌و‌حرفه‌ای' },
            { month: 5, day: 8, holiday: false, text: 'روز بزرگداشت شیخ شهاب‌الدین سهروردی (شیخ اشراق)' },
            { month: 5, day: 9, holiday: false, text: 'روز اهدای خون' },
            { month: 5, day: 11, holiday: false, text: 'شهادت آیت‌اللّه شیخ فضل‌اللّه نوری (۱۲۸۸ ه‍.ش)' },
            { month: 5, day: 14, holiday: false, text: 'صدور فرمان مشروطیت (۱۲۸۵ ه‍.ش) ‌- روز حقوق بشر اسلامی و کرامت انسانی' },
            { month: 5, day: 15, holiday: false, text: 'انفجار بمب اتمی آمریکا در هیروشیما با بیش از ۱۶۰هزار کشته و مجروح در سال ۱۹۴۵ میلادی - سالروز شهادت امیر سرلشکر خلبان عباس بابایی (۱۳۶۶ ه‍.ش)' },
            { month: 5, day: 16, holiday: false, text: 'تشکیل جهاد دانشگاهی (۱۳۵۹ ه‍.ش)' },
            { month: 5, day: 17, holiday: false, text: 'روز خبرنگار' },
            { month: 5, day: 18, holiday: false, text: 'روز بزرگداشت شهدای مدافع حرم' },
            { month: 5, day: 21, holiday: false, text: 'روز حمایت از صنایع کوچک' },
            { month: 5, day: 22, holiday: false, text: 'روز تشکّل‌ها و مشارکت‌های اجتماعی' },
            { month: 5, day: 23, holiday: false, text: 'روز مقاومت اسلامی' },
            { month: 5, day: 26, holiday: false, text: 'آغاز بازگشت آزادگان به میهن اسلامی (۱۳۶۹ ه‍.ش)' },
            { month: 5, day: 28, holiday: false, text: 'کودتای آمریکا برای بازگرداندن شاه (۱۳۳۲ ه‍.ش) - گشایش مجلس خبرگان برای بررسی نهایی قانون اساسی جمهوری اسلامی ایران (۱۳۵۸ ه‍.ش)' },
            { month: 5, day: 30, holiday: false, text: 'روز بزرگداشت علامه مجلسی' },
            { month: 5, day: 31, holiday: false, text: 'روز صنعت دفاعی' },
            { month: 6, day: 1, holiday: false, text: 'روز بزرگداشت ابوعلی سینا - روز پزشک' },
            { month: 6, day: 2, holiday: false, text: 'آغاز هفته‌ی دولت - شهادت سید‌علی اندرزگو (در روز ۱۹ ماه مبارک رمضان) (۱۳۵۷ ه‍.ش)' },
            { month: 6, day: 3, holiday: false, text: 'اِشغال ایران توسّط متّفقین و فرار رضاخان (۱۳۲۰ ه‍.ش)' },
            { month: 6, day: 4, holiday: false, text: 'روز کارمند' },
            { month: 6, day: 5, holiday: false, text: 'روز بزرگداشت محمّدبن زکریای رازی ‌ - روز داروسازی - روز کشتی' },
            { month: 6, day: 8, holiday: false, text: 'روز مبارزه با تروریسم (انفجار دفتر نخست‌وزیری به دست منافقان و شهادت مظلومانه‌ی شهیدان رجایی و باهنر) (۱۳۶۰ ه‍.ش)' },
            { month: 6, day: 10, holiday: false, text: 'روز بانکداری اسلامی (سالروز تصویب قانون عملیات بانکی بدون ربا) (۱۳۶۲ ه‍.ش) - روز تشکیل قرارگاه پدافند هوایی حضرت خاتم‌الانبیا صلی اللّه علیه و آله (۱۳۷۱ ه‍.ش)' },
            { month: 6, day: 11, holiday: false, text: 'روز صنعت چاپ' },
            { month: 6, day: 12, holiday: false, text: 'روز مبارزه بااستعمار انگلیس (سالروز شهادت رئیسعلی دلواری - ۱۲۹۴ هـ.ش) - روز بهوَرز' },
            { month: 6, day: 13, holiday: false, text: 'روز تعاون - روز بزرگداشت ابوریحان بیرونی - روز مردم‌شناسی' },
            { month: 6, day: 14, holiday: false, text: 'شهادت آیت‌اللّه قدّوسی و سرتیپ وحید دستجردی (۱۳۶۰ ه‍.ش)' },
            { month: 6, day: 17, holiday: false, text: 'قیام ۱۷ شهریور و کشتار جمعی از مردم به‌دست مأموران ستم‌شاهی پهلوی (۱۳۵۷ ه‍.ش)' },
            { month: 6, day: 19, holiday: false, text: 'وفات آیت‌اللّه سیدمحمود طالقانی اوّلین امام جمعه‌ی تهران (۱۳۵۸ ه‍.ش)' },
            { month: 6, day: 20, holiday: false, text: 'شهادت دومین شهید محراب آیت‌اللّه مدنی به دست منافقان (۱۳۶۰ ه‍.ش)' },
            { month: 6, day: 21, holiday: false, text: 'روز سینما' },
            { month: 6, day: 27, holiday: false, text: 'روز شعر و ادب فارسی - روز بزرگداشت استاد سید‌محمّد‌حسین شهریار' },
            { month: 6, day: 31, holiday: false, text: 'آغاز جنگ تحمیلی (۱۳۵۹ ه‍.ش) ‌ - آغاز هفته‌ی دفاع مقدّس' },
            { month: 7, day: 5, holiday: false, text: 'شکست حصر آبادان در عملیات ثامن‌الائمه علیه‌السلام (۱۳۶۰ ه‍.ش)' },
            { month: 7, day: 7, holiday: false, text: 'روز بزرگداشت فرماندهان شهید دفاع مقدّس - شهادت سرداران اسلام: فلاحی، فکوری، نامجو، کلاهدوز و جهان‌آرا (۱۳۶۰ ه‍.ش) - روز آتش‌نشانی و ایمنی - روز بزرگداشت شمس' },
            { month: 7, day: 8, holiday: false, text: 'روز بزرگداشت مولوی' },
            { month: 7, day: 9, holiday: false, text: 'روز همبستگی و همدردی با کودکان و نوجوانان فلسطینی' },
            { month: 7, day: 10, holiday: false, text: 'روز نخبگان' },
            { month: 7, day: 13, holiday: false, text: 'هجرت حضرت امام خمینی (رحمة‌اللّه علیه) از عراق به پاریس (۱۳۵۷ ه‍.ش) - روز نیروی انتظامی' },
            { month: 7, day: 14, holiday: false, text: 'روز دامپزشکی' },
            { month: 7, day: 15, holiday: false, text: 'روز روستا و عشایر' },
            { month: 7, day: 20, holiday: false, text: 'روز بزرگداشت حافظ' },
            { month: 7, day: 23, holiday: false, text: 'شهادت پنجمین شهید محراب آیت‌اللّه اشرفی اصفهانی به دست منافقان (۱۳۶۱ ه‍.ش)' },
            { month: 7, day: 24, holiday: false, text: 'روز ملی پارالمپیک - روز پیوند اولیا و مربیان - سالروز واقعه‌ی به‌آتش‌کشیدن مسجد جامع شهر کرمان به دست دژخیمان حکومت پهلوی (۱۳۵۷ ه‍.ش)' },
            { month: 7, day: 26, holiday: false, text: 'روز تربیت‌بدنی و ورزش' },
            { month: 7, day: 29, holiday: false, text: 'روز صادرات' },
            { month: 8, day: 1, holiday: false, text: 'شهادت مظلومانه‌ی آیت‌اللّه حاج سید مصطفی خمینی (۱۳۵۶ ه‍.ش) - روز آمار و برنامه‌ریزی' },
            { month: 8, day: 4, holiday: false, text: 'اعتراض و افشاگری حضرت امام خمینی (ره) علیه پذیرش کاپیتولاسیون (۱۳۴۳ ه‍.ش)' },
            { month: 8, day: 8, holiday: false, text: 'شهادت محمّدحسین فهمیده (بسیجی ۱۳ ساله) (۱۳۵۹ ه‍.ش) ‌- روز نوجوان و بسیج دانش‌آموزی - روز پدافند غیرعامل' },
            { month: 8, day: 10, holiday: false, text: 'شهادت آیت‌اللّه قاضی طباطبایی، اوّلین شهید محراب به دست منافقان (۱۳۵۸ ه‍.ش)' },
            { month: 8, day: 13, holiday: false, text: 'تسخیر لانه‌ی جاسوسی آمریکا به دست دانشجویان پیرو خط امام (۱۳۵۸ ه‍.ش) - روز ملی مبارزه با استکبار جهانی - روز دانش‌آموز - تبعید حضرت امام خمینی (رحمة‌اللّه علیه) از ایران به ترکیه (۱۳۴۳ ه‍.ش)' },
            { month: 8, day: 14, holiday: false, text: 'روز فرهنگ عمومی' },
            { month: 8, day: 18, holiday: false, text: 'روز کیفیت' },
            { month: 8, day: 24, holiday: false, text: 'روز کتاب، کتاب‌خوانی و کتابدار - روز بزرگداشت آیت‌اللّه علامه سیدمحمّدحسین طباطبایی (۱۳۶۰ ه‍.ش)' },
            { month: 8, day: 26, holiday: false, text: 'سالروز آزادسازی سوسنگرد (۱۳۵۹ ه‍.ش)' },
            { month: 8, day: 30, holiday: false, text: 'روز قهرمان ملی' },
            { month: 9, day: 5, holiday: false, text: 'روزبسیج مستضعفان (تشکیل بسیج مستضعفان به فرمان حضرت امام خمینی رحمة‌اللّه علیه) (۱۳۵۸ ه‍.ش) - سالروز قیام مردم گرگان (۱۳۵۷ ه‍.ش)' },
            { month: 9, day: 7, holiday: false, text: 'روز نیروی دریایی' },
            { month: 9, day: 9, holiday: false, text: 'روز بزرگداشت شیخ مفید' },
            { month: 9, day: 10, holiday: false, text: 'شهادت آیت‌اللّه سید‌حسن مدرّس و روز مجلس (۱۳۱۶ ه‍.ش)' },
            { month: 9, day: 11, holiday: false, text: 'شهادت میرزا‌کوچک‌خان جنگلی (۱۳۰۰ ه‍.ش)' },
            { month: 9, day: 12, holiday: false, text: 'روز قانون اساسی جمهوری اسلامی ایران (تصویب قانون اساسی جمهوری اسلامی ایران) (۱۳۵۸ ه‍.ش)' },
            { month: 9, day: 13, holiday: false, text: 'روز بیمه' },
            { month: 9, day: 16, holiday: false, text: 'روز دانشجو' },
            { month: 9, day: 18, holiday: false, text: 'معرّفی عراق به عنوان مسئول و آغازگر جنگ از سوی سازمان ملل (۱۳۷۰ ه‍.ش)' },
            { month: 9, day: 19, holiday: false, text: 'تشکیل شورای عالی انقلاب فرهنگی به فرمان حضرت امام خمینی (رحمة‌اللّه علیه) (۱۳۶۳ ه‍.ش)' },
            { month: 9, day: 20, holiday: false, text: 'شهادت آیت‌اللّه دستغیب، سومین شهید محراب به دست منافقان (۱۳۶۰ ه‍.ش)' },
            { month: 9, day: 25, holiday: false, text: 'روز پژوهش' },
            { month: 9, day: 26, holiday: false, text: 'روز حمل‌و‌نقل و رانندگان' },
            { month: 9, day: 27, holiday: false, text: 'شهادت آیت‌اللّه دکتر محمّد مفتّح (۱۳۵۸ ه‍.ش) - روز وحدت حوزه و دانشگاه' },
            { month: 9, day: 29, holiday: false, text: 'روز تجلیل از شهید تندگویان' },
            { month: 9, day: 30, holiday: false, text: 'شب یلدا - روز ترویج فرهنگ مهمانی و پیوند با خویشان' },
            { month: 10, day: 3, holiday: false, text: 'روز ثبت‌احوال' },
            { month: 10, day: 5, holiday: false, text: 'روز ایمنی در برابر زلزله و کاهش اثرات بلایای طبیعی' },
            { month: 10, day: 7, holiday: false, text: 'سالروز تشکیل نهضت سوادآموزی به فرمان حضرت امام خمینی (رحمة‌اللّه علیه) (۱۳۵۸ ه‍.ش) - شهادت آیت‌اللّه حسین غفّاری به دست مأموران ستم‌شاهی پهلوی (۱۳۵۳ ه‍.ش)' },
            { month: 10, day: 8, holiday: false, text: 'روز صنعت پتروشیمی' },
            { month: 10, day: 9, holiday: false, text: 'روز بصیرت و میثاق امّت با ولایت (سالروز حماسه‌ی ۹ دی ۸۸)' },
            { month: 10, day: 13, holiday: false, text: 'روز جهانی مقاومت - شهادت الگوی اخلاص و عمل، سردار سپهبد حاج قاسم سلیمانی و هم‌رزمان ایشان به دست استکبار جهانی (۱۳۹۸ ه‍.ش) - ابلاغ پیام تاریخی حضرت امام خمینی (ره) به گورباچف رهبر شوروی سابق (۱۳۶۷ ه‍.ش)' },
            { month: 10, day: 17, holiday: false, text: 'اجرای طرح استعماری حذف حجاب (کشف حجاب) به دست رضاخان دیکتاتور (۱۳۱۴ ه‍.ش) - روز بزرگداشت خواجوی کرمانی' },
            { month: 10, day: 19, holiday: false, text: 'قیام خونین مردم قم (۱۳۵۶ ه‍.ش)' },
            { month: 10, day: 20, holiday: false, text: 'شهادت میرزا تقی خان امیرکبیر (۱۲۳۰ ه‍.ش)' },
            { month: 10, day: 22, holiday: false, text: 'تشکیل شورای انقلاب به فرمان حضرت امام خمینی (رحمة‌اللّه علیه) (۱۳۵۷ ه‍.ش)' },
            { month: 10, day: 26, holiday: false, text: 'فرار شاه معدوم (۱۳۵۷ ه‍.ش)' },
            { month: 10, day: 27, holiday: false, text: 'شهادت شهیدان: نواب صفوی، طهماسبی، برادران واحدی و ذوالقدر از فدائیان اسلام (۱۳۳۴ ه‍.ش)' },
            { month: 10, day: 29, holiday: false, text: 'روز غزه' },
            { month: 11, day: 5, holiday: false, text: 'انتخابات اولین دوره ریاست جمهوری' },
            { month: 11, day: 6, holiday: false, text: 'سالروز حماسه‌ی مردم آمل' },
            { month: 11, day: 12, holiday: false, text: 'سالروز بازگشت حضرت امام خمینی (رحمة‌اللّه علیه) به ایران و آغاز دهه‌ی مبارک فجر انقلاب اسلامی' },
            { month: 11, day: 14, holiday: false, text: 'روز فنّاوری فضایی' },
            { month: 11, day: 19, holiday: false, text: 'روز نیروی هوایی' },
            { month: 11, day: 21, holiday: false, text: 'شکسته‌شدن حکومت‌نظامی به فرمان امام خمینی (رحمة‌اللّه علیه) (۱۳۵۷ ه‍.ش)' },
            { month: 11, day: 22, holiday: true, text: 'پیروزی انقلاب اسلامی ایران و سقوط نظام شاهنشاهی (۱۳۵۷ ه‍.ش)' },
            { month: 11, day: 25, holiday: false, text: 'صدور حکم تاریخی حضرت امام خمینی (رحمة‌اللّه علیه) مبنی بر ارتداد سلمان‌رشدی نویسنده‌ی خائن کتاب آیات شیطانی (۱۳۶۷ ه‍.ش)' },
            { month: 11, day: 29, holiday: false, text: 'قیام مردم تبریز به مناسبت چهلمین روز شهادت شهدای قم (۱۳۵۶ ه‍.ش) - روز اقتصاد مقاومتی و کارآفرینی' },
            { month: 12, day: 1, holiday: false, text: 'انتخابات اولین دوره فقهای شورای نگهبان' },
            { month: 12, day: 3, holiday: false, text: 'کودتای انگلیسی رضاخان (۱۲۹۹ ه‍.ش)' },
            { month: 12, day: 5, holiday: false, text: 'روز بزرگداشت خواجه‌نصیرالدّین طوسی - روز مهندسی' },
            { month: 12, day: 8, holiday: false, text: 'روز امور تربیتی و تربیت اسلامی ‌- روز بزرگداشت حکیم حاج ملاهادی سبزواری' },
            { month: 12, day: 9, holiday: false, text: 'روز حمایت از حقوق مصرف‌کنندگان' },
            { month: 12, day: 14, holiday: false, text: 'روز احسان و نیکوکاری - روز ترویج فرهنگ قرض‌الحسنه' },
            { month: 12, day: 15, holiday: false, text: 'روز درختکاری - روز آموزش همگانی حفظ محیط زیست' },
            { month: 12, day: 18, holiday: false, text: 'روز بزرگداشت سید‌جمال‌الدّین اسدآبادی - سالروز تأسیس کانون‌های فرهنگی‌و‌هنری مساجد کشور' },
            { month: 12, day: 20, holiday: false, text: 'روز راهیان نور' },
            { month: 12, day: 21, holiday: false, text: 'روز بزرگداشت نظامی گنجوی' },
            { month: 12, day: 22, holiday: false, text: 'روز بزرگداشت شهدا (سالروز صدور فرمان حضرت امام خمینی رحمة‌اللّه علیه، مبنی بر تأسیس بنیاد شهید انقلاب اسلامی) (۱۳۵۸ ه‍.ش)' },
            { month: 12, day: 25, holiday: false, text: 'بمباران شیمیایی حلبچه به دست ارتش بعث عراق (۱۳۶۶ ه‍.ش)' },
            { month: 12, day: 29, holiday: true, text: 'روز ملّی‌شدن صنعت نفت ایران (۱۳۲۹ ه‍.ش)' },
            { month: 12, day: 30, holiday: false, text: 'روز سال کبیسه' },
        ],
        "WNHijriCalendar": [
            { month: 1, day: 1, holiday: false, text: 'آغاز سال هجری قمری (اوّل ماه محرّم)' },
            { month: 1, day: 2, holiday: true, text: 'روز امر به معروف و نهی از منکر' },
            { month: 1, day: 9, holiday: true, text: 'تاسوعای حسینی' },
            { month: 1, day: 10, holiday: true, text: 'عاشورای حسینی' },
            { month: 1, day: 11, holiday: false, text: 'روز تجلیل از اسرا و مفقودان' },
            { month: 1, day: 12, holiday: false, text: 'شهادت حضرت امام زین‌العابدین علیه‌السلام (۹۵ ه‍.ق) ‌' },
            { month: 1, day: 25, holiday: false, text: 'شهادت حضرت امام زین‌العابدین علیه‌السلام :به روایتی (۹۵ ه‍.ق)' },
            { month: 2, day: 7, holiday: false, text: 'شهادت حضرت امام حسن مجتبی علیه‌السلام :به روایتی (۵۰ ه‍.ق) - روز بزرگداشت سلمان فارسی' },
            { month: 2, day: 20, holiday: true, text: 'اربعین حسینی' },
            { month: 2, day: 27, holiday: true, text: 'روز وقف' },
            { month: 2, day: 28, holiday: true, text: 'رحلت حضرت رسول اکرم صلی اللّه علیه و آله (۱۱ ه‍.ق) - شهادت حضرت امام حسن مجتبی علیه‌السلام (۵۰ ه‍.ق)' },
            { month: 2, day: 29, holiday: false, text: 'شهادت حضرت امام رضا علیه‌السلام' },
            { month: 3, day: 1, holiday: false, text: 'هجرت حضرت رسول اکرم صلی اللّه علیه و آله از مکّه به مدینه' },
            { month: 3, day: 8, holiday: true, text: 'شهادت حضرت امام حسن عسکری علیه‌السلام (۲۶۰ ه‍.ق) - آغاز امامت حضرت ولی‌عصر (عج) (۲۶۰ ه‍.ق)' },
            { month: 3, day: 12, holiday: false, text: 'ولادت حضرت رسول اکرم صلی اللّه علیه و آله :به روایت اهل سنت (-۵۳ ه‍.ق) - آغاز هفته‌ی وحدت' },
            { month: 3, day: 17, holiday: true, text: 'ولادت حضرت رسول اکرم صلی اللّه علیه و آله - روز اخلاق و مهرورزی (-۵۳ ه‍.ق)  - ولادت حضرت امام جعفر صادق علیه‌السلام، مؤسس مذهب جعفری (۸۳ ه‍.ق)' },
            { month: 4, day: 4, holiday: false, text: 'ولادت حضرت عبدالعظیم حسنی علیه‌السلام' },
            { month: 4, day: 8, holiday: false, text: 'ولادت حضرت امام حسن عسکری علیه‌السلام (۲۳۲ ه‍.ق)' },
            { month: 4, day: 10, holiday: false, text: 'وفات حضرت معصومه سلام‌اللّه علیها (۲۰۱ ه‍.ق)' },
            { month: 5, day: 5, holiday: false, text: 'ولادت حضرت زینب سلام‌اللّه علیها و روز پرستار' },
            { month: 5, day: 13, holiday: false, text: 'شهادت حضرت فاطمه‌ی زهرا سلام‌اللّه علیها :به روایتی (۱۱ ه‍.ق)' },
            { month: 6, day: 3, holiday: true, text: 'شهادت حضرت فاطمه‌ی زهرا سلام‌اللّه علیها (۱۱ ه‍.ق)' },
            { month: 6, day: 13, holiday: false, text: 'سالروز وفات حضرت اُم‌البنین سلام‌اللّه علیها - روز تکریم مادران و همسران شهدا' },
            { month: 6, day: 20, holiday: false, text: 'ولادت حضرت فاطمه‌ی زهرا سلام‌اللّه علیها و روز زن (-۸ ه‍.ق) - تولّد حضرت امام خمینی (رحمة‌اللّه علیه)، رهبر کبیر انقلاب اسلامی (۱۳۲۰ ه‍.ق) ‌ - روز مادر - روز زن' },
            { month: 7, day: 1, holiday: false, text: 'ولادت حضرت امام محمّد باقر علیه‌السلام (۵۷ ه‍.ق)' },
            { month: 7, day: 3, holiday: false, text: 'شهادت حضرت امام علی نقی «هادی» علیه‌السلام (۲۵۴ ه‍.ق)' },
            { month: 7, day: 10, holiday: false, text: 'ولادت حضرت امام محمد تقی علیه‌السلام «جوادالائمه» (۱۹۵ ه‍.ق)' },
            { month: 7, day: 13, holiday: true, text: 'ولادت حضرت امام علی علیه‌السلام (-۲۳ ه‍.ق) - آغاز ایام البیض (اعتکاف) - روز پدر - روز مرد' },
            { month: 7, day: 15, holiday: false, text: 'ارتحال حضرت زینب کبری سلام‌اللّه علیها (۶۲ ه‍.ق) - تغییر قبله‌ی مسلمین از بیت‌المقدس به مکّه‌ی معظّمه (۲ ه‍.ق)' },
            { month: 7, day: 25, holiday: false, text: 'شهادت حضرت امام موسی کاظم علیه‌السلام (۱۸۳ ه‍.ق)' },
            { month: 7, day: 27, holiday: true, text: 'مبعث حضرت رسول اکرم صلی‌اللّه علیه و آله (-۱۳ ه‍.ق)' },
            { month: 8, day: 3, holiday: false, text: 'ولادت حضرت امام حسین علیه‌السلام و روز پاسدار (۴ ه‍.ق)' },
            { month: 8, day: 4, holiday: false, text: 'ولادت حضرت ابوالفضل‌العباس علیه‌السلام و روز جانباز (۲۶ ه‍.ق)' },
            { month: 8, day: 5, holiday: false, text: 'ولادت حضرت امام زین‌العابدین علیه‌السلام (۳۸ ه‍.ق)' },
            { month: 8, day: 11, holiday: false, text: 'ولادت حضرت علی‌اکبر علیه‌السلام و روز جوان (۳۳ ه‍.ق)' },
            { month: 8, day: 15, holiday: true, text: 'ولادت حضرت قائم عجل‌اللّه تعالی فرجه (جشن صاحب‌الزّمان) و روز جهانی مستضعفان (۲۵۵ ه‍.ق) - روز سربازان گمنام امام زمان (عج)' },
            { month: 9, day: 10, holiday: false, text: 'وفات حضرت خدیجه سلام‌اللّه علیها (-۳ ه‍.ق)' },
            { month: 9, day: 15, holiday: false, text: 'ولادت حضرت امام حسن مجتبی علیه‌السلام (۳ ه‍.ق) - روز اکرام و تکریم خیّرین' },
            { month: 9, day: 18, holiday: false, text: 'شب قدر' },
            { month: 9, day: 19, holiday: false, text: 'ضربت خوردن حضرت علی (ع)' },
            { month: 9, day: 20, holiday: false, text: 'شب قدر' },
            { month: 9, day: 21, holiday: true, text: 'شهادت امیر‌المؤمنین، حضرت امام علی علیه‌السلام (۴۰ ه‍.ق)' },
            { month: 9, day: 22, holiday: false, text: 'شب قدر' },
            { month: 10, day: 1, holiday: true, text: 'عید سعید فطر' },
            { month: 10, day: 2, holiday: true, text: 'تعطیل به مناسبت عید سعید فطر' },
            { month: 10, day: 17, holiday: false, text: 'روز فرهنگ پهلوانی و ورزش زورخانه‌ای' },
            { month: 10, day: 21, holiday: false, text: 'فتح اندلس به دست مسلمانان (۹۲ ه‍.ق)' },
            { month: 10, day: 25, holiday: true, text: 'شهادت حضرت امام جعفر صادق علیه‌السلام (۱۴۸ ه‍.ق) ' },
            { month: 11, day: 1, holiday: false, text: 'ولادت حضرت معصومه سلام‌اللّه علیها و روز دختران (۱۷۳ ه‍.ق)' },
            { month: 11, day: 5, holiday: false, text: 'روز تجلیل از امام‌زادگان و بقاع متبرکه - روز بزرگداشت حضرت صالح بن موسی کاظم علیه‌السلام' },
            { month: 11, day: 6, holiday: false, text: 'روز بزرگداشت حضرت احمد بن موسی شاهچراغ علیه‌السلام' },
            { month: 11, day: 11, holiday: false, text: 'ولادت حضرت امام رضا علیه‌السلام (۱۴۸ ه‍.ق)' },
            { month: 11, day: 29, holiday: false, text: 'آخرین روز (۲۹ یا ۳۰) ماه ذی‌القعده: شهادت حضرت امام محمد تقی علیه‌السلام «جوادالائمه» (۱۴۸ ه‍.ق)' },
            { month: 11, day: 30, holiday: true, text: 'شهادت حضرت امام محمد تقی علیه‌السلام «جوادالائمه» (۲۲۰ ه‍.ق)' },
            { month: 12, day: 1, holiday: false, text: 'سالروز ازدواج حضرت امام علی علیه‌السلام و حضرت فاطمه سلام‌اللّه علیها (۲ ه‍.ق) - روز ازدواج' },
            { month: 12, day: 6, holiday: false, text: 'شهادت مظلومانه‌ی زائران خانه‌ی خدا به دست مأموران آل‌سعود در سال ۱۳۶۶ هجری‌شمسی (۱۴۰۷ ه‍.ق)' },
            { month: 12, day: 7, holiday: false, text: 'شهادت حضرت امام محمد باقر علیه‌السلام (۱۱۴ ه‍.ق)' },
            { month: 12, day: 9, holiday: false, text: 'روز عرفه (روز نیایش) ‌' },
            { month: 12, day: 10, holiday: true, text: 'عید سعید قربان' },
            { month: 12, day: 15, holiday: false, text: 'ولادت حضرت امام علی نقی «هادی» علیه‌السلام (۲۱۲ ه‍.ق)' },
            { month: 12, day: 18, holiday: true, text: 'عید سعید غدیر خم (۱۰ ه‍.ق)' },
            { month: 12, day: 20, holiday: false, text: 'ولادت حضرت امام موسی کاظم علیه‌السلام (۱۲۸ ه‍.ق)' },
            { month: 12, day: 24, holiday: false, text: 'روز مباهله پیامبر اسلام (ص)' },
            { month: 12, day: 25, holiday: false, text: 'روز خانواده و تکریم بازنشستگان' },
        ],
        'WNGregorianCalendar': [
            { month: 1, day: 1, holiday: false, text: 'آغاز سال جدید میلادی' },
            { month: 1, day: 26, holiday: false, text: 'روز جهانی گمرک' },
            { month: 3, day: 22, holiday: false, text: 'روز جهانی آب' },
            { month: 3, day: 23, holiday: false, text: 'روز جهانی هواشناسی' },
            { month: 5, day: 1, holiday: false, text: 'روز جهانی کار و کارگر' },
            { month: 5, day: 5, holiday: false, text: 'روز جهانی ماما' },
            { month: 5, day: 8, holiday: false, text: 'روز جهانی صلیب‌سرخ و هلال‌احمر' },
            { month: 5, day: 18, holiday: false, text: 'روز جهانی موزه و میراث‌فرهنگی' },
            { month: 5, day: 31, holiday: false, text: 'روز جهانی بدون دخانیات' },
            { month: 6, day: 5, holiday: false, text: 'روز جهانی محیط زیست' },
            { month: 6, day: 17, holiday: false, text: 'روز جهانی بیابان‌زدایی' },
            { month: 6, day: 26, holiday: false, text: 'روز جهانی مبارزه با مواد‌مخدر' },
            { month: 8, day: 1, holiday: false, text: 'روز جهانی شیر مادر' },
            { month: 8, day: 21, holiday: false, text: 'روز جهانی مسجد' },
            { month: 9, day: 27, holiday: false, text: 'روز جهانی جهانگردی - روز گردشگری' },
            { month: 9, day: 30, holiday: false, text: 'روز جهانی دریانوردی - روز جهانی ناشنوایان' },
            { month: 10, day: 1, holiday: false, text: 'روز جهانی سالمندان' },
            { month: 10, day: 8, holiday: false, text: 'روز جهانی کودک' },
            { month: 10, day: 9, holiday: false, text: 'روز جهانی پست' },
            { month: 10, day: 14, holiday: false, text: 'روز جهانی استاندارد' },
            { month: 10, day: 15, holiday: false, text: 'روز جهانی نابینایان (عصای سفید)' },
            { month: 10, day: 16, holiday: false, text: 'روز جهانی غذا' },
            { month: 11, day: 10, holiday: false, text: 'روز جهانی علم در خدمت صلح و توسعه' },
            { month: 12, day: 1, holiday: false, text: 'روز جهانی مبارزه با ایدز' },
            { month: 12, day: 3, holiday: false, text: 'روز جهانی معلولان' },
            { month: 12, day: 7, holiday: false, text: 'روز جهانی هواپیمایی' },
            { month: 12, day: 25, holiday: false, text: 'ولادت حضرت عیسی مسیح علیه‌السلام' },
        ]
    },
    "editor": {
        "undo": "برگشت تغیرات",
        "redo": "اعمال تغییرات برگشت شده",
        "bold": "پر رنگ",
        "italic": "خمیده",
        "underline": "زیر خط دار",
        "strikethrough": "خط دار",
        "font": "قلم",
        "fontsize": "اندازه قلم",
        "subscript": "پایین نویس",
        "superscript": "بالا نویس",
        "style": "حالت",
        "alignleft": "چپ چین",
        "aligncenter": "وسط چین",
        "alignright": "راست چین",
        "alignjustify": "تمام چین",
        "ltr": "چپ به راست",
        "rtl": "راست به چپ",
        "indent": "فرو رفتن",
        "outdent": "برآمدگی",
        "numberlist": "لیست عددی",
        "buletlist": "لیست شکلی",
        "textcolor": "رنگ متن",
        "background": "پس زمینه",
        "fill": "پر شدن",
        "eraseformat": "حذف شکل دهی",
        "link": "اتصال",
        "unlink": "حذف اتصال",
        "image": "درج تصویر",
        "media": "درج صوت و تصویر",
        "iframe": "iframe",
        "hr": "خط افقی",
        "source": "منبع",
        "dark_mode": "ویرایشگر تاریک",
        "fullscreen": "تمام صفحه",
        "url": "آدرس",
        "target": "روش باز شدن",
        "title": "عنوان",
        "insert": "درج",
        "alt": "شرح",
        "width": "طول",
        "height": "ازتفاع",
        "borderwidth": "کلفتی کادر",
        "borderstyle": "نوع کادر",
        "class": "کلاس",
        "type": "نوع",
        "controls": "کنترل ها",
        "mute": "بی صدا",
        "autoPlay": "پخش خودکار",
        "medianotsupport": "مرورگر شما از مدیا پشتیبانی نمیکند",
    },
    "filelist": {
        "refresh": "نمایش مجدد",
        "newfolder": "فهرست جدید",
        "rename": "تغییر نام",
        "delete": "حذف",
        "copy": "کپی",
        "cut": "برش",
        "paste": "چسباندن",
        "upload": "ارسال فایل",
        "download": "دریافت فایل",
        "compress": "فشرده سازی",
        "decompress": "بازیابی فایل فشرده",
        "root": "ریشه",
        "filename": "نام فایل",
        "ext": "پسوند",
        "size": "حجم",
        "date": "تاریخ",
        "name": "نام",
        "errorcommand": "در هنگام اجرا دستور، دچار خطا شدیم.",
        "foldercreated": "فهرست ساخته شد.",
        "renamesuccess": "تغییر نام موفق بود.",
        "deletefiles": "آیا مایل به حذف فایلهای انتخاب شده هستید؟",
        "files": "فایل",
        "deletefolder": "آیا مایل به حذف فهرست انتخاب شده هستید؟",
        "renamed": "تغییر نام انجام شد.",
        "deleted": "حذف انجام شد.",
        "clipboarded": "اطلاعات در حافظه قرار گرفت.",
        "pasted": "عملیات چسباندن انجام شد.",
        "drophere": "فایلهای مد نظر را اینجا رها کنید.",
        "uploaded": "فایلها آپلود شدند.",
        "compressed": "فایلها فشرده شدند.",
        "decompressmessage": "آیا مایل هستید فایل از فشرده در آمده و فایلهای درون آن رونویسی شوند؟",
        "decompressed": "فایلها از فشرده درآمدند.",
    },
    "error": {
        "400": "درخواست بد",
        "401": "غیر مجاز",
        "402": "پرداخت لازم است",
        "403": "ممنوعه",
        "404": "پیدا نشد",
        "405": "روش مجاز نیست",
        "406": "قابل قبول نیست",
        "407": "احراز هویت پروکسی مورد نیاز است",
        "408": "درنگ درخواست",
        "409": "درگیری",
        "410": "رفته",
        "411": "طول مورد نیاز",
        "412": "پیش شرط ناموفق",
        "413": "محتوا خیلی بزرگ است",
        "414": "URI خیلی طولانی",
        "415": "نوع رسانه پشتیبانی نشده",
        "416": "محدوده قابل رضایت نیست",
        "417": "انتظار شکست خورد",
        "421": "درخواست نادرست",
        "422": "محتوای غیرقابل پردازش",
        "426": "ارتقا لازم است",
        "500": "خطای سرور داخلی",
        "501": "اجرا نشده است",
        "502": "گیت وی نامعتبر",
        "503": "خدمات در دسترس نیست",
        "504": "زمان پاسخگویی در گیت وی",
        "505": "نسخه HTTP پشتیبانی نمی شود"
    }
};
class WNCultureInfo_en_US {
    displayName = 'English';
    englishName = 'English';
    threeLetterISOLanguageName = 'eng';
    twoLetterISOLanguageName = 'en';
    DateTimeFormat = {
        amDesignator: 'AM',
        abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        abbreviatedMonthNames: {
            "gregory": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
            "julian": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
            "persian": ["Far", "Ord", "Kho", "Tir", "Mor", "Sha", "Meh", "Aba", "Aza", "Dey", "Bah", "Esf", ""],
            "islamic": ["Muh", "Saf", "RAw", "RTh", "JAw", "JTh", "Raj", "Sha", "Ram", "Shw", "ZQa", "ZHi", ""],
        },
        dateSeparator: '-',
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        firstDayOfWeek: 0,
        fullDateTimePattern: 'dddd, MMMM d, yyyy h:mm:ss tt',
        longDatePattern: 'dddd, MMMM d, yyyy',
        longTimePattern: 'h:mm:ss tt',
        monthDayPattern: 'MMMM d',
        monthNames: {
            "gregory": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
            "julian": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
            "persian": ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand", ""],
            "islamic": ["al-Muharram", "Safar", "Rabi al-Awwal", "Rabi ath-Thani", "Jumada al-Awwal", "Jumada ath-Thaniyah", "Rajab", "Shaban", "Ramadan", "Shawwal", "Zu al-Qadah", "Zu al-Hijjah", ""],
        },
        pmDesignator: 'PM',
        shortDatePattern: "M-d-yyyy",
        shortTimePattern: "h:mm tt",
        shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        timeSeparator: ':',
        yearMonthPattern: 'MMMM yyyy',
        holiday: 0
    };
    NumberFormat = {
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyGroupSizes: [3],
        currencyNegativePattern: 0,
        currencyPositivePattern: 0,
        currencySymbol: "$",
        nanSymbol: "NaN",
        nativeDigits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        negativeInfinitySymbol: "-∞",
        negativeSign: "-",
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberGroupSizes: [3],
        numberNegativePattern: 1,
        perMilleSymbol: "‰",
        percentDecimalDigits: 2,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentGroupSizes: [3],
        percentNegativePattern: 1,
        percentPositivePattern: 1,
        percentSymbol: "%",
        positiveInfinitySymbol: "∞",
        positiveSign: "+"
    };
    TextInfo = {
        ansiCodePage: 1252,
        cultureName: "en-US",
        ebcdicCodePage: 37,
        isRightToLeft: false,
        lcid: 1033,
        listSeparator: ",",
        macCodePage: 10000,
        oemCodePage: 437
    };
}
class WNCultureInfo_fa_IR {
    displayName = 'پارسی';
    englishName = 'Persian';
    threeLetterISOLanguageName = 'fas';
    twoLetterISOLanguageName = 'fa';
    DateTimeFormat = {
        amDesignator: 'ق.ظ',
        abbreviatedDayNames: ["يكش", "دوش", "س.ش", "چ.ش", "پنج", "جمع", "شنب"],
        abbreviatedMonthNames: {
            "persian": ["فرو", "ارد", "خرد", "تیر", "مرد", "شهر", "مهر", "آبا", "آذر", "دی", "بهم", "اسف", ""],
            "gregory": ["ژان", "فور", "مار", "آپر", "می", "جون", "جول", "آگو", "سپت", "اکت", "نوا", "دسا", ""],
            "julian": ["ژان", "فور", "مار", "آپر", "می", "جون", "جول", "آگو", "سپت", "اکت", "نوا", "دسا", ""],
            "islamic": ["محر", "صفر", "راول", "رثانی", "جاول", "جثانی", "رجب", "شعب", "رمض", "شوا", "ذقعده", "ذحجه", ""],
        },
        dateSeparator: '/',
        dayNames: ["يكشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"],
        firstDayOfWeek: 6,
        fullDateTimePattern: 'dddd, d MMMM yyyy hh:mm:ss tt',
        longDatePattern: 'dddd, d MMMM yyyy',
        longTimePattern: 'h:mm:ss tt',
        monthDayPattern: 'd MMMM',
        monthNames: {
            "persian": ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند", ""],
            "gregory": ["ژانویه", "فوریه", "مارچ", "آپریل", "می", "جون", "جولای", "آگوست", "سپتامبر", "اکتبر", "نوامبر", "دسامبر", ""],
            "julian": ["ژانویه", "فوریه", "مارچ", "آپریل", "می", "جون", "جولای", "آگوست", "سپتامبر", "اکتبر", "نوامبر", "دسامبر", ""],
            "islamic": ["محرم", "صفر", "ربیع الاول", "ربیع الثانی", "جمادی الاول", "جمادی الثانی", "رجب", "شعبان", "رمضان", "شوال", "ذوالقعده", "ذوالحجه", ""],
        },
        pmDesignator: 'ب.ظ',
        shortDatePattern: "yyyy/MM/dd",
        shortTimePattern: "hh:mm tt",
        shortestDayNames: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
        timeSeparator: ':',
        yearMonthPattern: 'MMMM, yyyy',
        holiday: 5
    };
    NumberFormat = {
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: "/",
        currencyGroupSeparator: ",",
        currencyGroupSizes: [3],
        currencyNegativePattern: 6,
        currencyPositivePattern: 1,
        currencySymbol: "ريال",
        nanSymbol: "ناعدد",
        nativeDigits: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
        negativeInfinitySymbol: "-∞",
        negativeSign: "-",
        numberDecimalDigits: 2,
        numberDecimalSeparator: "/",
        numberGroupSeparator: ",",
        numberGroupSizes: [3],
        numberNegativePattern: 1,
        perMilleSymbol: "‰",
        percentDecimalDigits: 2,
        percentDecimalSeparator: "/",
        percentGroupSeparator: ",",
        percentGroupSizes: [3],
        percentNegativePattern: 1,
        percentPositivePattern: 1,
        percentSymbol: "%",
        positiveInfinitySymbol: "∞",
        positiveSign: "+"
    };
    TextInfo = {
        ansiCodePage: 1256,
        cultureName: "fa-IR",
        ebcdicCodePage: 20420,
        isRightToLeft: true,
        lcid: 1065,
        listSeparator: "؛",
        macCodePage: 10004,
        oemCodePage: 720
    };
}
class WNDate {
    _Year;
    _Month;
    _Day;
    _Hour;
    _Minute;
    _Second;
    _Millisecond;
    _DayOfWeek;
    dateChanged;
    GregorianCalnedar = new WNGregorianCalendar();
    cultureInfo;
    calendar;
    constructor(lCultureInfo, lCalendar, lDate) {
        this._Year = 0;
        this._Month = 0;
        this._Day = 0;
        this._Hour = 0;
        this._Minute = 0;
        this._Second = 0;
        this._Millisecond = 0;
        this._DayOfWeek = 0;
        this.dateChanged = undefined;
        if (lCultureInfo != undefined && lCultureInfo.calendar != undefined) {
            let Template = lCultureInfo;
            this.cultureInfo = Template.cultureInfo;
            this.calendar = Template.calendar;
            this.setDateNumber(Template.toNumber());
        }
        else {
            if (!lCultureInfo)
                lCultureInfo = wnConfig.cultureInfo;
            if (!lCalendar)
                lCalendar = wnConfig.calendar;
            this.cultureInfo = lCultureInfo;
            this.calendar = lCalendar;
            if (lDate != null)
                this.setDate(lDate);
        }
    }
    addDays(value) { this._Day += value; this.fixedDate(); }
    addHours(value) { this._Hour += value; this.fixedDate(); }
    addMilliseconds(value) { this._Millisecond += value; this.fixedDate(); }
    addMinutes(value) { this._Minute += value; this.fixedDate(); }
    addMonths(value) { this._Month += value; this.fixedDate(); }
    addSeconds(value) { this._Second += value; this.fixedDate(); }
    addYears(value) { this._Year += value; this.fixedDate(); }
    addWeeks(value) { this.addDays(value * 7); this.fixedDate(); }
    set year(value) { this._Year = value; this.fixedDate(); }
    get year() { return this._Year; }
    set month(value) { this._Month = value; this.fixedDate(); }
    get month() { return this._Month; }
    set day(value) { this._Day = value; this.fixedDate(); }
    get day() { return this._Day; }
    set hour(value) { this._Hour = value; this.fixedDate(); }
    get hour() { return this._Hour; }
    set minute(value) { this._Minute = value; this.fixedDate(); }
    get minute() { return this._Minute; }
    set second(value) { this._Second = value; this.fixedDate(); }
    get second() { return this._Second; }
    set milliseconds(value) { this._Millisecond = value; this.fixedDate(); }
    get milliseconds() { return this._Millisecond; }
    get dayOfWeek() { return this._DayOfWeek; }
    get dayOfYear() { return this.calendar.getDayOfYear(this._Year, this._Month, this._Day); }
    get daysInMonth() { return this.calendar.getDaysInMonth(this._Year, this._Month); }
    get daysInYear() { return this.calendar.getDaysInYear(this._Year); }
    get isLeapYear() { return this.calendar.isLeapYear(this._Year); }
    get leapMonth() { return this.calendar.leapMonth; }
    get monthsInYear() { return this.calendar.monthsInYear; }
    get isLeapMonth() { return this.calendar.isLeapMonth(this._Year, this._Month); }
    get isLeapDay() { return this.calendar.isLeapDay(this._Year, this._Month, this._Day); }
    get weekOfYear() { return this.calendar.getWeekOfYear(this._Year, this._Month, this._Day); }
    setDate(date) {
        if (date == undefined || isNaN(date.getTime())) {
            this.setDateNumber(undefined);
            return;
        }
        let days = this.GregorianCalnedar.getDaysFromBase(date.getFullYear(), date.getMonth() + 1, date.getDate());
        let ret = this.calendar.getYearMontDayFromDays(days);
        this._Year = ret.year;
        this._Month = ret.month;
        this._Day = ret.day;
        this._Hour = date.getHours();
        this._Minute = date.getMinutes();
        this._Second = date.getSeconds();
        this._Millisecond = date.getMilliseconds();
        this._DayOfWeek = this.calendar.getDayOfWeek(this._Year, this._Month, this._Day);
        this.dateChanged?.(this);
    }
    setDateYMD(Year, Month, Day, Hour = 0, Minute = 0, Second = 0, Millisecond = 0) {
        this._Year = Year;
        this._Month = Month;
        this._Day = Day;
        this._Hour = Hour;
        this._Minute = Minute;
        this._Second = Second;
        this._Millisecond = Millisecond;
        this.fixedDate();
    }
    setYMD(Year, Month, Day, Hour = 0, Minute = 0, Second = 0, Millisecond = 0) {
        this._Year = Year;
        this._Month = Month;
        this._Day = Day;
        this._Hour = Hour;
        this._Minute = Minute;
        this._Second = Second;
        this._Millisecond = Millisecond;
    }
    setDateNumber(jd) {
        if (jd === undefined) {
            this._Year = 0;
            this._Month = 0;
            this._Day = 0;
            this._Hour = 0;
            this._Minute = 0;
            this._Second = 0;
            this._Millisecond = 0;
            this._DayOfWeek = 0;
            this.dateChanged?.(this);
            return;
        }
        let ret = this.calendar.getYearMontDayFromDays(jd);
        this._Year = ret.year;
        this._Month = ret.month;
        this._Day = ret.day;
        jd -= 0.5;
        let ij = (jd - Math.floor(jd)) * 1000000000;
        this._Hour = Math.floor(ij / 3600000);
        ij = ij % 3600000;
        this._Minute = Math.floor(ij / 60000);
        ij = ij % 60000;
        this._Second = Math.floor(ij / 1000);
        this._Millisecond = Math.round(ij % 1000);
        this._DayOfWeek = this.calendar.getDayOfWeek(this._Year, this._Month, this._Day);
        this.dateChanged?.(this);
    }
    setDateString(s) {
        if (s == undefined) {
            this.setDateNumber(undefined);
            return;
        }
        let Year = 0;
        let Month = 0;
        let Day = 0;
        let Hour = 0;
        let Minute = 0;
        let Second = 0;
        let Millisecond = 0;
        s = decodeURIComponent(s).trim();
        let d = s.match(/(\d+)/ig);
        if (d != null) {
            if (d.length < 4 && s.indexOf(this.cultureInfo.DateTimeFormat.timeSeparator) > -1) {
                if (d.length > 0)
                    Hour = parseInt(d[0]);
                if (d.length > 1)
                    Minute = parseInt(d[1]);
                if (d.length > 2)
                    Second = parseInt(d[2]);
            }
            else {
                if (d.length > 2) {
                    Year = parseInt(d[0]);
                    Month = parseInt(d[1]);
                    Day = parseInt(d[2]);
                }
                if (d.length > 4) {
                    Hour = parseInt(d[3]);
                    Minute = parseInt(d[4]);
                }
                if (d.length > 5) {
                    Second = parseInt(d[5]);
                }
                if (d.length > 6) {
                    Millisecond = parseInt(d[6]);
                }
            }
            if (s.indexOf(this.cultureInfo.DateTimeFormat.pmDesignator) > -1 && Hour < 13)
                Hour += 12;
        }
        if (Day > 31 && Year < Day) {
            [Year, Day] = [Day, Year];
        }
        this.setDateYMD(Year, Month, Day, Hour, Minute, Second, Millisecond);
    }
    set(value) {
        if (this.calendar == value.calendar) {
            this.setDateYMD(value.year, value.month, value.day, value.hour, value.minute, value.second, value.milliseconds);
        }
        else
            this.setDateNumber(value.toNumber());
    }
    set value(value) {
        if (value == undefined)
            this.setDateNumber(undefined);
        else if (typeof (value) == 'number')
            this.setDateNumber(value);
        else if (typeof (value) == 'object' && value.getDate != undefined)
            this.setDate(value);
        else if (typeof (value) == 'object' && value.toNumber != undefined)
            this.set(value);
        else if (typeof (value) == 'string')
            this.setDateString(value);
    }
    get value() {
        return this.toNumber();
    }
    toDateTime() {
        if (this.year == 0 && this.month == 0 && this.day == 0 && this.hour == 0 && this.minute == 0 && this.second == 0 && this.milliseconds == 0)
            return null;
        let days = this.calendar.getDaysFromBase(this._Year, this._Month, this._Day);
        let ret = this.GregorianCalnedar.getYearMontDayFromDays(days);
        return new Date(ret.year, ret.month - 1, ret.day, this._Hour, this._Minute, this._Second, this._Millisecond);
    }
    toNumber() {
        if (this.year == 0 && this.month == 0 && this.day == 0 && this.hour == 0 && this.minute == 0 && this.second == 0 && this.milliseconds == 0)
            return null;
        let ret = this.calendar.getDaysFromBase(this._Year, this._Month, this._Day);
        ret += (this._Millisecond + this._Second * 1000 + this.minute * 60000 + this.hour * 3600000) / 1000000000;
        return ret;
    }
    toNumberDate() {
        if (this.year == 0 && this.month == 0 && this.day == 0)
            return undefined;
        return this.calendar.getDaysFromBase(this._Year, this._Month, this._Day);
    }
    toNumberYMD(Year, Month, Day) {
        if (this.year == 0 && this.month == 0 && this.day == 0)
            return undefined;
        let ret = this.calendar.getDaysFromBase(Year, Month, Day);
        return ret;
    }
    toString(format = this.cultureInfo.DateTimeFormat.fullDateTimePattern, nativeDigit = wnConfig.nativeDigit) {
        if (this.year == 0 && this.month == 0 && this.day == 0 && this.hour == 0 && this.minute == 0 && this.second == 0 && this.milliseconds == 0)
            return '';
        if (format == 'shortdatetime')
            format = this.cultureInfo.DateTimeFormat.shortDatePattern + ' ' + this.cultureInfo.DateTimeFormat.shortTimePattern;
        else if (format == 'shortdate')
            format = this.cultureInfo.DateTimeFormat.shortDatePattern;
        else if (format == 'shorttime')
            format = this.cultureInfo.DateTimeFormat.shortTimePattern;
        else if (format == 'longdatettime' || format == 'date' || format == '')
            format = this.cultureInfo.DateTimeFormat.longDatePattern + ' ' + this.cultureInfo.DateTimeFormat.longTimePattern;
        else if (format == 'longdate')
            format = this.cultureInfo.DateTimeFormat.longDatePattern;
        else if (format == 'longtime')
            format = this.cultureInfo.DateTimeFormat.longTimePattern;
        let ret = format;
        ret = ret.replace(/yyyy/g, '{u1}');
        ret = ret.replace(/yy/g, '{u2}');
        ret = ret.replace(/y/g, '{u1}');
        ret = ret.replace(/u/g, 'y');
        ret = ret.replace(/MMMM/g, '{u4}');
        ret = ret.replace(/MMM/g, '{u3}');
        ret = ret.replace(/MM/g, '{u2}');
        ret = ret.replace(/M/g, '{u1}');
        ret = ret.replace(/u/g, 'M');
        ret = ret.replace(/dddd/g, '{u4}');
        ret = ret.replace(/ddd/g, '{u3}');
        ret = ret.replace(/dd/g, '{u2}');
        ret = ret.replace(/d/g, '{u1}');
        ret = ret.replace(/u/g, 'd');
        ret = ret.replace(/hh/g, '{u2}');
        ret = ret.replace(/h/g, '{u1}');
        ret = ret.replace(/u/g, 'h');
        ret = ret.replace(/HH/g, '{u2}');
        ret = ret.replace(/H/g, '{u1}');
        ret = ret.replace(/u/g, 'H');
        ret = ret.replace(/mm/g, '{u2}');
        ret = ret.replace(/m/g, '{u1}');
        ret = ret.replace(/u/g, 'm');
        ret = ret.replace(/ss/g, '{u2}');
        ret = ret.replace(/s/g, '{u1}');
        ret = ret.replace(/u/g, 's');
        ret = ret.replace(/f/g, '{f}');
        ret = ret.replace(/tt/g, '{tt}');
        ret = ret.replace(/{y2}/g, (this._Year % 100).toString());
        ret = ret.replace(/{y1}/g, this._Year.toString());
        ret = ret.replace(/{M4}/g, (this.cultureInfo.DateTimeFormat.monthNames[this.calendar.localeName] || this.cultureInfo.DateTimeFormat.monthNames[0])[this._Month - 1]);
        ret = ret.replace(/{M3}/g, (this.cultureInfo.DateTimeFormat.abbreviatedMonthNames[this.calendar.localeName] || this.cultureInfo.DateTimeFormat.abbreviatedMonthNames[0])[this._Month - 1]);
        if (this._Month < 10)
            ret = ret.replace(/{M2}/g, '0' + this._Month.toString());
        else
            ret = ret.replace(/{M2}/g, this._Month.toString());
        ret = ret.replace(/{M1}/g, this._Month.toString());
        ret = ret.replace(/{d4}/g, this.cultureInfo.DateTimeFormat.dayNames[this._DayOfWeek]);
        ret = ret.replace(/{d3}/g, this.cultureInfo.DateTimeFormat.abbreviatedDayNames[this._DayOfWeek]);
        if (this._Day < 10)
            ret = ret.replace(/{d2}/g, '0' + this._Day);
        else
            ret = ret.replace(/{d2}/g, this._Day.toString());
        ret = ret.replace(/{d1}/g, this._Day.toString());
        if (this._Hour % 12 < 10)
            ret = ret.replace(/{h2}/g, '0' + this._Hour % 12);
        else
            ret = ret.replace(/{h2}/g, (this._Hour % 12).toString());
        ret = ret.replace(/{h1}/g, (this._Hour % 12).toString());
        if (this._Hour < 10)
            ret = ret.replace(/{H2}/g, '0' + this._Hour.toString());
        else
            ret = ret.replace(/{H2}/g, this._Hour.toString());
        ret = ret.replace(/{H1}/g, this._Hour.toString());
        if (this._Minute < 10)
            ret = ret.replace(/{m2}/g, '0' + this._Minute.toString());
        else
            ret = ret.replace(/{m2}/g, this._Minute.toString());
        ret = ret.replace(/{m1}/g, this._Minute.toString());
        if (this._Second < 10)
            ret = ret.replace(/{s2}/g, '0' + this._Second.toString());
        else
            ret = ret.replace(/{s2}/g, this._Second.toString());
        ret = ret.replace(/{s1}/g, this._Second.toString());
        ret = ret.replace(/{f}/g, this._Millisecond.toString());
        if (this._Hour > 11)
            ret = ret.replace(/{tt}/g, this.cultureInfo.DateTimeFormat.pmDesignator);
        else
            ret = ret.replace(/{tt}/g, this.cultureInfo.DateTimeFormat.amDesignator);
        ret = WNnativeDigit(ret, this.cultureInfo, nativeDigit);
        return ret;
    }
    toLongDateString(nativeDigit = wnConfig.nativeDigit) { return this.toString(this.cultureInfo.DateTimeFormat.longDatePattern, nativeDigit); }
    toShortDateString(nativeDigit = wnConfig.nativeDigit) { return this.toString(this.cultureInfo.DateTimeFormat.shortDatePattern, nativeDigit); }
    toLongTimeString(nativeDigit = wnConfig.nativeDigit) { return this.toString(this.cultureInfo.DateTimeFormat.longTimePattern, nativeDigit); }
    toShortTimeString(nativeDigit = wnConfig.nativeDigit) { return this.toString(this.cultureInfo.DateTimeFormat.shortTimePattern, nativeDigit); }
    convert(value, format = this.cultureInfo.DateTimeFormat.fullDateTimePattern, nativeDigit = wnConfig.nativeDigit) { this.value = value; return this.toString(format, nativeDigit); }
    fixedDate() {
        if (this.year == 0 && this.month == 0 && this.day == 0 && this.hour == 0 && this.minute == 0 && this.second == 0 && this.milliseconds == 0)
            return;
        [this._Millisecond, this._Second] = this.limitToRange(0, 999, this._Millisecond, this._Second);
        [this._Second, this._Minute] = this.limitToRange(0, 59, this._Second, this._Minute);
        [this._Minute, this._Hour] = this.limitToRange(0, 59, this._Minute, this._Hour);
        [this._Hour, this._Day] = this.limitToRange(0, 23, this._Hour, this._Day);
        for (var i = 0; i < 2; i++) {
            [this._Month, this._Year] = this.limitToRange(1, this.calendar.monthsInYear, this._Month, this._Year);
            [this._Day, this._Month] = this.limitToRange(1, this.calendar.getDaysInMonth(this._Year, this._Month), this._Day, this._Month);
        }
        this._DayOfWeek = this.calendar.getDayOfWeek(this._Year, this._Month, this._Day);
        this.dateChanged?.(this);
    }
    limitToRange(Min, Max, Value, NextValue) {
        let Range = Max - Min + 1;
        let mod = ((Value - Min) % Range) + Min;
        if (mod < Min)
            mod += Max;
        let div = (Value - mod) / Range;
        return [mod, NextValue + div];
    }
    lessThan(rhs) {
        return this.toNumberDate() < rhs.toNumberDate();
    }
    lessThanEqual(rhs) {
        return this.toNumberDate() <= rhs.toNumberDate();
    }
    greaterThan(rhs) {
        return this.toNumberDate() > rhs.toNumberDate();
    }
    greaterThanEqual(rhs) {
        return this.toNumberDate() >= rhs.toNumberDate();
    }
    equal(rhs) {
        return this.toNumberDate() === rhs.toNumberDate();
    }
    notEqual(rhs) {
        return this.toNumberDate() !== rhs.toNumberDate();
    }
    lessThanExact(rhs) {
        return this.toNumber() < rhs.toNumber();
    }
    lessThanEqualExact(rhs) {
        return this.toNumber() <= rhs.toNumber();
    }
    greaterThanExact(rhs) {
        return this.toNumber() > rhs.toNumber();
    }
    greaterThanEqualExact(rhs) {
        return this.toNumber() >= rhs.toNumber();
    }
    equalExact(rhs) {
        return this.toNumber() === rhs.toNumber();
    }
    notEqualExact(rhs) {
        return this.toNumber() !== rhs.toNumber();
    }
}
class WNGregorianCalendar {
    leapMonth = 2;
    monthsInYear = 12;
    localeName = "gregory";
    GREGORIAN_EPOCH = 1721425.5;
    ["constructor"]() {
        return this;
    }
    getDayOfWeek(Year, Month, Day) {
        return WNmod(Math.floor((this.getDaysFromBase(Year, Month, Day) + 1.5)), 7);
    }
    getDayOfYear(Year, Month, Day) {
        return this.getDaysFromBase(Year, Month, Day) - this.getDaysFromBase(Year, 1, 1);
    }
    getDaysInMonth(Year, Month) {
        return this.getMonthsDays(this.isLeapYear(Year))[Month - 1];
    }
    getDaysInYear(Year) { return this.isLeapYear(Year) ? 366 : 365; }
    getWeekOfYear(Year, Month, Day) {
        let dayDiff = this.getDayOfYear(Year, Month, Day) + this.getDayOfWeek(Year, 1, 1);
        let weekNr = ((dayDiff - (dayDiff % 7)) / 7) + 1;
        return weekNr;
    }
    isLeapDay(Year, Month, Day) {
        return this.isLeapMonth(Year, Month) && Day === 29;
    }
    isLeapMonth(Year, Month) { return this.isLeapYear(Year) && Month === this.leapMonth; }
    isLeapYear(Year) {
        return ((Year % 4) == 0) &&
            (!(((Year % 100) == 0) && ((Year % 400) != 0)));
    }
    getMonthsDays(mLeapYear) {
        return [31, mLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 0];
    }
    getDaysFromBase(Year, Month, Day) {
        return (this.GREGORIAN_EPOCH - 1) +
            (365 * (Year - 1)) +
            Math.floor((Year - 1) / 4) +
            (-Math.floor((Year - 1) / 100)) +
            Math.floor((Year - 1) / 400) +
            Math.floor((((367 * Month) - 362) / 12) +
                ((Month <= 2) ? 0 :
                    (this.isLeapYear(Year) ? -1 : -2)) +
                Day);
    }
    getYearMontDayFromDays(jd) {
        let wjd, depoch, quadricent, dqc, cent, dcent, quad, dquad, yindex, year, yearday, leapadj, month, day;
        wjd = Math.floor(jd - 0.5) + 0.5;
        depoch = wjd - this.GREGORIAN_EPOCH;
        quadricent = Math.floor(depoch / 146097);
        dqc = WNmod(depoch, 146097);
        cent = Math.floor(dqc / 36524);
        dcent = WNmod(dqc, 36524);
        quad = Math.floor(dcent / 1461);
        dquad = WNmod(dcent, 1461);
        yindex = Math.floor(dquad / 365);
        year = (quadricent * 400) + (cent * 100) + (quad * 4) + yindex;
        if (!((cent == 4) || (yindex == 4))) {
            year++;
        }
        yearday = wjd - this.getDaysFromBase(year, 1, 1);
        leapadj = ((wjd < this.getDaysFromBase(year, 3, 1)) ? 0
            :
                (this.isLeapYear(year) ? 1 : 2));
        month = Math.floor((((yearday + leapadj) * 12) + 373) / 367);
        day = (wjd - this.getDaysFromBase(year, month, 1)) + 1;
        return { year: year, month: month, day: day };
    }
}
class WNHijriCalendar {
    localeName = "islamic";
    leapMonth = 12;
    monthsInYear = 12;
    hijriAdjustment = wnConfig.hijriAdjustment;
    ISLAMIC_EPOCH = 1948439.5;
    ["constructor"]() {
        return this;
    }
    constructor() {
    }
    getDayOfWeek(Year, Month, Day) {
        return WNmod(Math.floor((this.getDaysFromBase(Year, Month, Day) + 1.5 - this.hijriAdjustment)), 7);
    }
    getDayOfYear(Year, Month, Day) {
        return this.getDaysFromBase(Year, Month, Day) - this.getDaysFromBase(Year, 1, 1);
    }
    getDaysInMonth(Year, Month) {
        return this.getMonthsDays(this.isLeapYear(Year))[Month - 1];
    }
    getDaysInYear(Year) { return this.isLeapYear(Year) ? 355 : 354; }
    getWeekOfYear(Year, Month, Day) {
        let dayDiff = this.getDayOfYear(Year, Month, Day) + this.getDayOfWeek(Year, 1, 1) + 1;
        let weekNr = ((dayDiff - (dayDiff % 7)) / 7) + 1;
        return weekNr;
    }
    isLeapDay(Year, Month, Day) {
        return this.isLeapMonth(Year, Month) && Day === 30;
    }
    isLeapMonth(Year, Month) { return this.isLeapYear(Year) && Month === this.leapMonth; }
    isLeapYear(Year) {
        return (((Year * 11) + 14) % 30) < 11;
    }
    getDaysFromBase(Year, Month, Day) {
        return (Day +
            Math.ceil(29.5 * (Month - 1)) +
            (Year - 1) * 354 +
            Math.floor((3 + (11 * Year)) / 30) +
            this.ISLAMIC_EPOCH) - 1;
    }
    getYearMontDayFromDays(jd) {
        let year, month, day;
        jd = Math.floor(jd) + 0.5 + this.hijriAdjustment;
        year = Math.floor(((30 * (jd - this.ISLAMIC_EPOCH)) + 10646) / 10631);
        month = Math.min(12, Math.ceil((jd - (29 + this.getDaysFromBase(year, 1, 1))) / 29.5) + 1);
        day = (jd - this.getDaysFromBase(year, month, 1)) + 1;
        return { year: year, month: month, day: day };
    }
    getMonthsDays(mLeapYear) {
        return [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, mLeapYear ? 30 : 29, 0];
    }
}
class WNJulianCalendar {
    localeName = "julian";
    leapMonth = 2;
    monthsInYear = 12;
    ["constructor"]() {
        return this;
    }
    getDayOfWeek(Year, Month, Day) {
        return WNmod(Math.floor((this.getDaysFromBase(Year, Month, Day) + 1.5)), 7);
    }
    getDayOfYear(Year, Month, Day) {
        return this.getDaysFromBase(Year, Month, Day) - this.getDaysFromBase(Year, 1, 1);
    }
    getDaysInMonth(Year, Month) {
        return this.getMonthsDays(this.isLeapYear(Year))[Month - 1];
    }
    getDaysInYear(Year) { return this.isLeapYear(Year) ? 366 : 365; }
    getWeekOfYear(Year, Month, Day) {
        let FirstWeekDay = this.getDayOfWeek(Year, 1, 1);
        let dayDiff = this.getDayOfYear(Year, Month, Day);
        dayDiff += FirstWeekDay;
        let weekNr = Math.ceil(dayDiff / 7);
        return weekNr;
    }
    isLeapDay(Year, Month, Day) {
        return this.isLeapMonth(Year, Month) && Day === 29;
    }
    isLeapMonth(Year, Month) { return this.isLeapYear(Year) && Month === this.leapMonth; }
    isLeapYear(Year) {
        return WNmod(Year, 4) == ((Year > 0) ? 0 : 3);
    }
    getMonthsDays(mLeapYear) {
        return [31, mLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 0];
    }
    getDaysFromBase(Year, Month, Day) {
        if (Year < 1) {
            Year++;
        }
        if (Month <= 2) {
            Year--;
            Month += 12;
        }
        return ((Math.floor((365.25 * (Year + 4716))) +
            Math.floor((30.6001 * (Month + 1))) +
            Day) - 1524.5);
    }
    getYearMontDayFromDays(jd) {
        let a, b, c, d, e, year, month, day;
        jd += 0.5;
        a = Math.floor(jd);
        b = a + 1524;
        c = Math.floor((b - 122.1) / 365.25);
        d = Math.floor(365.25 * c);
        e = Math.floor((b - d) / 30.6001);
        month = Math.floor((e < 14) ? (e - 1) : (e - 13));
        year = Math.floor((month > 2) ? (c - 4716) : (c - 4715));
        day = b - d - Math.floor(30.6001 * e);
        if (year < 1) {
            year--;
        }
        return { year: year, month: month, day: day };
    }
}
class WNPersianCalendar {
    localeName = "persian";
    leapMonth = 12;
    monthsInYear = 12;
    PERSIAN_EPOCH = 1948320.5;
    getDayOfWeek(Year, Month, Day) {
        return WNmod(Math.floor((this.getDaysFromBase(Year, Month, Day) + 1.5)), 7);
    }
    getDayOfYear(Year, Month, Day) {
        return this.getDaysFromBase(Year, Month, Day) - this.getDaysFromBase(Year, 1, 1);
    }
    getDaysInMonth(Year, Month) {
        return this.getMonthsDays(this.isLeapYear(Year))[Month - 1];
    }
    getDaysInYear(Year) { return this.isLeapYear(Year) ? 366 : 365; }
    getWeekOfYear(Year, Month, Day) {
        let dayDiff = this.getDayOfYear(Year, Month, Day) + this.getDayOfWeek(Year, 1, 1) + 1;
        let weekNr = ((dayDiff - (dayDiff % 7)) / 7) + 1;
        return weekNr;
    }
    isLeapDay(Year, Month, Day) {
        return this.isLeapMonth(Year, Month) && Day === 30;
    }
    isLeapMonth(Year, Month) { return this.isLeapYear(Year) && Month === this.leapMonth; }
    isLeapYear(Year) {
        return ((((((Year - ((Year > 0) ? 474 : 473)) % 2820) + 474) + 38) * 682) % 2816) < 682;
    }
    getDaysFromBase(Year, Month, Day) {
        let epbase, epyear;
        epbase = Year - ((Year >= 0) ? 474 : 473);
        epyear = 474 + WNmod(epbase, 2820);
        return Day +
            ((Month <= 7) ?
                ((Month - 1) * 31) :
                (((Month - 1) * 30) + 6)) +
            Math.floor(((epyear * 682) - 110) / 2816) +
            (epyear - 1) * 365 +
            Math.floor(epbase / 2820) * 1029983 +
            (this.PERSIAN_EPOCH - 1);
    }
    getYearMontDayFromDays(jd) {
        let year, month, day, depoch, cycle, cyear, ycycle, aux1, aux2, yday;
        jd = Math.floor(jd) + 0.5;
        depoch = jd - this.getDaysFromBase(475, 1, 1);
        cycle = Math.floor(depoch / 1029983);
        cyear = WNmod(depoch, 1029983);
        if (cyear == 1029982) {
            ycycle = 2820;
        }
        else {
            aux1 = Math.floor(cyear / 366);
            aux2 = WNmod(cyear, 366);
            ycycle = Math.floor(((2134 * aux1) + (2816 * aux2) + 2815) / 1028522) +
                aux1 + 1;
        }
        year = ycycle + (2820 * cycle) + 474;
        if (year <= 0) {
            year--;
        }
        yday = (jd - this.getDaysFromBase(year, 1, 1)) + 1;
        month = (yday <= 186) ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
        day = (jd - this.getDaysFromBase(year, month, 1)) + 1;
        return { year: year, month: month, day: day };
    }
    getMonthsDays(mLeapYear) {
        return [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, mLeapYear ? 30 : 29, 0];
    }
}
function getFormData(Form) {
    let data = new FormData();
    if (Form != undefined) {
        data = new FormData(Form);
        data.delete("__RequestVerificationToken");
    }
    var object = {};
    data.forEach(function (value, key) {
        object[key] = value;
    });
    return JSON.stringify(object);
}
function getRequestInit() {
    return {
        method: "post",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        redirect: "manual",
        referrerPolicy: "origin",
        headers: {
            "Authorization": wnConfig.authorizationToken,
            "Content-Encoding": "deflate, gzip",
            "Content-Type": "application/json",
            "Accept": "text/html, application/xhtml+xml, application/json, application/xml;q=0.9, image/webp, */*;q=0.8"
        }
    };
}
function getRequestFormInit() {
    return {
        method: "post",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        redirect: "manual",
        referrerPolicy: "origin",
        headers: {
            "Authorization": wnConfig.authorizationToken,
        }
    };
}
function getPostUrl(postUrl) {
    let url = postUrl;
    if (!url.startsWith('/') && !url.split('?')[0].toLowerCase().includes(':')) {
        if (wnConfig.baseFetchUri !== undefined)
            url = wnConfig.baseFetchUri + url;
        else
            url = '/' + url;
    }
    else if (url.startsWith('~'))
        url = wnConfig.baseFetchUri + url;
    return url;
}
async function Post(data, postUrl, init = undefined) {
    if (init == undefined)
        init = getRequestInit();
    init.method = "post";
    init.body = data;
    return new Promise(async (resolve, reject) => {
        await fetch(getPostUrl(postUrl), init)
            .then(async (response) => {
            const res = await response.text();
            try {
                if (response.ok) {
                    const r = JSON.parse(res);
                    if (r)
                        resolve(r);
                    else
                        resolve(res);
                }
                else if (response.status >= 400 && response.status < 600) {
                    if (res == undefined || res == null || res == '')
                        reject(new Error(wnConfig.language['error'][response.status.toString()]));
                    else
                        reject(new Error(res));
                }
                else {
                    const r = JSON.parse(res);
                    if (r)
                        reject(new Error(r?.detail));
                    else
                        reject(res);
                }
            }
            catch (e) {
                resolve(res);
            }
        })
            .catch((e) => {
            console.error(e);
            reject(e);
        });
    });
}
async function Get(data, postUrl, init = undefined) {
    if (init == undefined)
        init = getRequestInit();
    init.method = "get";
    let url = getPostUrl(postUrl);
    if (data != undefined && data != '')
        url += "?" + encodeURIComponent(JSON.stringify(data));
    return new Promise(async (resolve, reject) => {
        await fetch(url, init)
            .then(async (response) => {
            try {
                if (response.ok) {
                    let data = await response.json();
                    resolve(data);
                }
                else {
                    const r = await response.json();
                    if (r)
                        reject(new Error(r?.detail));
                    else
                        reject(response);
                }
            }
            catch (e) {
                console.error(e);
                reject(e);
            }
        })
            .catch((e) => {
            console.error(e);
            reject(e);
        });
    });
}
async function getText(postUrl, init = undefined) {
    if (init == undefined)
        init = getRequestInit();
    init.method = "get";
    return new Promise(async (resolve, reject) => {
        await fetch(getPostUrl(postUrl), init)
            .then(async (response) => {
            try {
                if (response.ok) {
                    resolve(response.text());
                }
                else {
                    const r = await response.json();
                    if (r)
                        reject(new Error(r?.detail));
                    else
                        reject(response);
                }
            }
            catch (e) {
                console.error(e);
                reject(e);
            }
        })
            .catch((e) => {
            console.error(e);
            reject(e);
        });
    });
}
async function getFile(path, postUrl, init = undefined) {
    if (init == undefined) {
        init = getRequestInit();
        init.headers = {
            "Content-Encoding": "deflate, gzip",
        };
    }
    init.method = "get";
    let url = getPostUrl(postUrl);
    url += "?" + encodeURIComponent(JSON.stringify(path));
    return new Promise(async (resolve, reject) => {
        await fetch(url, init)
            .then(response => response.blob())
            .then(blob => {
            const objectURL = URL.createObjectURL(blob);
            resolve(objectURL);
        })
            .catch((e) => {
            console.error(e);
            reject(e);
        });
    });
}
async function upload(files, destination, postUrl, init = undefined) {
    if (init == undefined) {
        init = getRequestFormInit();
    }
    init.method = "put";
    const formData = new FormData();
    formData.append('destination', destination);
    if (files.length == undefined)
        formData.append(files.name, files);
    else
        for (var i = 0; i < files.length; i++)
            formData.append(files[i].name, files[i]);
    init.body = formData;
    return new Promise(async (resolve, reject) => {
        await fetch(getPostUrl(postUrl), init)
            .then((response) => {
            try {
                if (response.ok) {
                    resolve(response.json());
                }
                else
                    reject(response.statusText);
            }
            catch (e) {
                console.error(e);
                reject(e);
            }
        })
            .catch((e) => {
            console.error(e);
            reject(e);
        });
    });
}
var WNElements = {};
class WNElement {
    wn;
    element;
    get htmlElement() { return this.element; }
    get document() { return this.element; }
    get fieldSetElement() { return this.element; }
    get embedElement() { return this.element; }
    get formElement() { return this.element; }
    get hrElement() { return this.element; }
    get headElement() { return this.element; }
    get headingElement() { return this.element; }
    get linkElement() { return this.element; }
    get iFrameElement() { return this.element; }
    get imageElement() { return this.element; }
    get inputElement() { return this.element; }
    get liElement() { return this.element; }
    get labelElement() { return this.element; }
    get legendElement() { return this.element; }
    get mapElement() { return this.element; }
    get mediaElement() { return this.element; }
    get menuElement() { return this.element; }
    get metaElement() { return this.element; }
    get meterElement() { return this.element; }
    get oListElement() { return this.element; }
    get objectElement() { return this.element; }
    get optGroupElement() { return this.element; }
    get optionElement() { return this.element; }
    get outputElement() { return this.element; }
    get paragraphElement() { return this.element; }
    get pictureElement() { return this.element; }
    get preElement() { return this.element; }
    get progressElement() { return this.element; }
    get quoteElement() { return this.element; }
    get scriptElement() { return this.element; }
    get selectElement() { return this.element; }
    get sourceElement() { return this.element; }
    get spanElement() { return this.element; }
    get tableCaptionElement() { return this.element; }
    get tableCellElement() { return this.element; }
    get tableColElement() { return this.element; }
    get tableElement() { return this.element; }
    get tableRowElement() { return this.element; }
    get tableSectionElement() { return this.element; }
    get templateElement() { return this.element; }
    get textAreaElement() { return this.element; }
    get timeElement() { return this.element; }
    get titleElement() { return this.element; }
    get trackElement() { return this.element; }
    get uListElement() { return this.element; }
    get videoElement() { return this.element; }
    ready(callBack, options = false) { this.element.addEventListener("DOMContentLoaded", callBack, options); }
    click(callBack) { this.element.addEventListener("click", callBack); }
    change(callBack) { this.element.addEventListener("change", callBack); }
    input(callBack) { this.element.addEventListener("input", callBack); }
    focus(callBack) { this.element.addEventListener("focus", callBack); }
    focusIn(callBack) { this.element.addEventListener("focusin", callBack); }
    focusOut(callBack) { this.element.addEventListener("focusout", callBack); }
    resize(callBack) { this.element.addEventListener("resize", callBack); }
    scroll(callBack) { this.element.addEventListener("scroll", callBack); }
    select(callBack) { this.element.addEventListener("select", callBack); }
    contextMenu(callBack) { this.element.addEventListener("contextmenu", callBack); }
    copy(callBack) { this.element.addEventListener("copy", callBack); }
    cut(callBack) { this.element.addEventListener("cut", callBack); }
    paste(callBack) { this.element.addEventListener("paste", callBack); }
    dblClick(callBack) { this.element.addEventListener("dblclick", callBack); }
    drag(callBack) { this.element.addEventListener("drag", callBack); }
    dragend(callBack) { this.element.addEventListener("dragend", callBack); }
    dragEnter(callBack) { this.element.addEventListener("dragenter", callBack); }
    dragLeave(callBack) { this.element.addEventListener("dragleave", callBack); }
    dragOver(callBack) { this.element.addEventListener("dragover", callBack); }
    dragStart(callBack) { this.element.addEventListener("dragstart", callBack); }
    drop(callBack) { this.element.addEventListener("drop", callBack); }
    keyDown(callBack) { this.element.addEventListener("keydown", callBack); }
    keyPress(callBack) { this.element.addEventListener("keypress", callBack); }
    keyUp(callBack) { this.element.addEventListener("keyup", callBack); }
    mouseDown(callBack) { this.element.addEventListener("mousedown", callBack); }
    mouseEnter(callBack) { this.element.addEventListener("mouseenter", callBack); }
    mouseLeave(callBack) { this.element.addEventListener("mouseleave", callBack); }
    mouseMove(callBack) { this.element.addEventListener("mousemove", callBack); }
    mouseOver(callBack) { this.element.addEventListener("mouseover", callBack); }
    mouseOut(callBack) { this.element.addEventListener("mouseout", callBack); }
    mouseUp(callBack) { this.element.addEventListener("mouseup", callBack); }
    touchCancel(callBack) { this.element.addEventListener("touchcancel", callBack); }
    touchEnd(callBack) { this.element.addEventListener("touchend", callBack); }
    touchMove(callBack) { this.element.addEventListener("touchmove", callBack); }
    touchStart(callBack) { this.element.addEventListener("touchstart", callBack); }
    wheel(callBack) { this.element.addEventListener("wheel", callBack); }
    constructor(element) {
        this.element = element;
    }
}
function WNReset() {
    WNElements = {};
}
function WN(element) {
    let id = '';
    let telement;
    if (typeof (element) == 'string') {
        if (WNElements[element.toLowerCase()] != undefined)
            return WNElements[element.toLowerCase()];
        telement = document.querySelector(`[id='${element}' i]`);
        if (telement == null) {
            telement = document.querySelector(`[name='${element}' i]`);
        }
        if (telement == null)
            telement = document.querySelector(element);
        if (telement == undefined)
            return null;
        id = telement.id.toLowerCase();
    }
    else if (element == document) {
        telement = element;
        id = 'document';
    }
    else {
        telement = element;
        id = telement.id.toLowerCase();
    }
    if (id === '')
        id = telement.name.toLowerCase();
    if (id === '')
        id = element.toString().toLowerCase();
    if (WNElements[id] == undefined) {
        WNElements[id] = new WNElement(telement);
    }
    return WNElements[id];
}
function WNSetElementPosition(source, base, param) {
    let source_cs = getComputedStyle(source);
    let source_pos = source.getBoundingClientRect();
    let element_pos = base.getBoundingClientRect();
    let offsetLeft = element_pos.left;
    let offsetTop = element_pos.top;
    let marginTop = WNparseNumber(source_cs.marginTop.replace('px', ''), 0);
    let marginLeft = WNparseNumber(source_cs.marginLeft.replace('px', ''), 0);
    let marginRight = WNparseNumber(source_cs.marginRight.replace('px', ''), 0);
    let rtl = source_cs.direction == 'rtl';
    let top = offsetTop + element_pos.height;
    let start = 0;
    let width = source_pos.width;
    if (param.fit) {
        if (width < element_pos.width)
            width = element_pos.width;
    }
    if (element_pos.bottom + source_pos.height + marginTop * 2 > window.innerHeight || param.direction == 'top')
        top = offsetTop - source_pos.height - marginTop * 2;
    if (rtl) {
        start = element_pos.right - width;
        if (param.direction == 'end') {
            start = offsetLeft;
        }
    }
    else {
        start = offsetLeft;
        if (param.direction == 'end') {
            start = offsetLeft + element_pos.width - width;
        }
    }
    if (start < 0)
        start = offsetLeft;
    if (start + width > window.innerWidth)
        start = window.innerWidth - width;
    if (param.direction == 'start') {
        top = offsetTop - source_pos.height / 2;
        if (rtl)
            start = offsetLeft + base.offsetWidth;
        else
            start = offsetLeft - width - marginLeft - marginRight;
    }
    if (param.direction == 'end') {
        top = offsetTop - source_pos.height / 2;
        if (rtl)
            start = offsetLeft - width - marginLeft - marginRight;
        else
            start = offsetLeft + base.offsetWidth;
    }
    if (param.direction == 'bottom')
        top = offsetTop + element_pos.height;
    source.style.top = top + "px";
    source.style.left = start + "px";
    if (width != 0)
        source.style.width = width + "px";
}
function WNmod(a, b) { return a - (b * Math.floor(a / b)); }
function WNparseBoolean(value, Default) {
    if ((value === undefined || value == null) && Default != undefined)
        return Default;
    switch (value.toString().toLowerCase()) {
        case "true":
        case "1":
        case "on":
        case "yes":
            return true;
        case '':
            if (Default != undefined)
                return Default;
    }
    return false;
}
function WNparseNumber(value, Default, culture = wnConfig.cultureInfo) {
    if ((value == undefined || value == null || value == '') && Default != undefined && Default != null)
        return Default;
    value = WNDenativeDigit(value, culture);
    return parseInt(value);
}
function WNparseString(value, Default) {
    if ((value == undefined || value == null || value == '') && Default != undefined && Default != null)
        return Default;
    return value;
}
function WNTrim(value, trimstr = ' ') {
    while (value.startsWith(trimstr))
        value = value.substring(trimstr.length);
    while (value.endsWith(trimstr))
        value = value.substring(0, value.lastIndexOf(trimstr));
    return value;
}
function WNTrimStart(value, trimstr = ' ') {
    while (value.startsWith(trimstr))
        value = value.substring(trimstr.length);
    return value;
}
function WNTrimEnd(value, trimstr = ' ') {
    while (value.endsWith(trimstr))
        value = value.substring(0, value.lastIndexOf(trimstr));
    return value;
}
function WNLimitRange(value, min, max) {
    if (value < min)
        value = min;
    if (value > max)
        value = max;
    return value;
}
function WNnativeDigit(number, culture, convert) {
    let ret = number.toString();
    if (convert) {
        ret = ret.replace(/0/g, culture.NumberFormat.nativeDigits[0]);
        ret = ret.replace(/1/g, culture.NumberFormat.nativeDigits[1]);
        ret = ret.replace(/2/g, culture.NumberFormat.nativeDigits[2]);
        ret = ret.replace(/3/g, culture.NumberFormat.nativeDigits[3]);
        ret = ret.replace(/4/g, culture.NumberFormat.nativeDigits[4]);
        ret = ret.replace(/5/g, culture.NumberFormat.nativeDigits[5]);
        ret = ret.replace(/6/g, culture.NumberFormat.nativeDigits[6]);
        ret = ret.replace(/7/g, culture.NumberFormat.nativeDigits[7]);
        ret = ret.replace(/8/g, culture.NumberFormat.nativeDigits[8]);
        ret = ret.replace(/9/g, culture.NumberFormat.nativeDigits[9]);
    }
    return ret;
}
function WNDenativeDigit(value, culture = wnConfig.cultureInfo) {
    value = value.toString();
    for (var i = 0; i < 10; i++) {
        let r = new RegExp('(' + culture.NumberFormat.nativeDigits[i] + ')', "ig");
        value = value.replace(r, i.toString());
    }
    return value;
}
function WNGetNodesList(list, parent = document, thiselemnt = null) {
    let ret = Array();
    if (list != '') {
        let part = [];
        part = list.split(',');
        for (var p = 0; p < part.length; p++) {
            if (part[p].toLowerCase().trim() == 'this' && thiselemnt != null)
                ret.push(thiselemnt);
            else {
                let elems = parent.querySelectorAll(part[p].trim());
                for (var i = 0; i < elems.length; i++) {
                    ret.push(elems[i]);
                }
            }
        }
    }
    return ret;
}
function WNParentHaveClass(child, parentClassName) {
    var node = child.parentNode;
    while (node != null) {
        if (node.classList != undefined && node.classList.contains(parentClassName)) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}
function WNCalcValue(value1, value2, sign, elem = null, min = Number.MIN_VALUE, max = Number.MAX_VALUE) {
    let v1 = { value: 0, unit: '' };
    let v2 = { value: 0, unit: '' };
    v1 = WNValueUnit(value1);
    v2 = WNValueUnit(value2);
    if (v1.unit != v2.unit) {
        if (v1.unit == 'px' && v2.unit == 'em')
            v1.value /= parseFloat(getComputedStyle(elem).fontSize);
        else if (v1.unit == 'px' && v2.unit == 'rem')
            v1.value /= parseFloat(getComputedStyle(document.documentElement).fontSize);
        else if (v1.unit == 'em' && v2.unit == 'px')
            v1.value *= parseFloat(getComputedStyle(elem).fontSize);
        else if (v1.unit == 'rem' && v2.unit == 'px')
            v1.value *= parseFloat(getComputedStyle(document.documentElement).fontSize);
        else if (v1.unit == 'em' && v2.unit == 'rem')
            v1.value *= parseFloat(getComputedStyle(elem).fontSize) / parseFloat(getComputedStyle(document.documentElement).fontSize);
        else if (v1.unit == 'rem' && v2.unit == 'em')
            v1.value *= parseFloat(getComputedStyle(document.documentElement).fontSize) / parseFloat(getComputedStyle(elem).fontSize);
    }
    if (sign == '+')
        v1.value += v2.value;
    else if (sign == '-')
        v1.value -= v2.value;
    else if (sign == '*')
        v1.value *= v2.value;
    else if (sign == '/')
        v1.value /= v2.value;
    if (v1.value < min)
        v1.value = min;
    if (v1.value > max)
        v2.value = max;
    return v1.value + v2.unit;
}
function WNContainElement(elem, findin) {
    for (var j = 0; j < findin.childNodes.length; j++) {
        if (findin.childNodes[j] == elem) {
            return true;
        }
        if (findin.childNodes[j].childNodes.length > 0)
            if (WNContainElement(elem, findin.childNodes[j]))
                return true;
    }
    return false;
}
function WNHtmlToEscape(src) {
    let txt = src;
    let out = '';
    let ht = false;
    let hv = false;
    txt = txt.replace('= ', '=');
    txt = txt.replace(' =', '=');
    for (var i = 0; i < txt.length; i++) {
        let ch = txt[i];
        let nch = '';
        if (i + 1 < txt.length)
            nch = txt[i + 1];
        if (ch == '<' && nch == '/') {
            out += '<span class="hv">&lt;/</span><span class="ht">';
            ht = true;
            i++;
        }
        else if (ch == '<') {
            out += '<span class="hv">&lt;</span><span class="ht">';
            ht = true;
        }
        else if (ch == '>') {
            if (ht) {
                out += '</span>';
                ht = false;
            }
            out += '<span class="hv">&gt;</span>';
        }
        else if (ch == '=' && (nch == '"' || nch == "'" || nch == '`') && !hv) {
            for (var j = out.length - 1; j >= 0; j--) {
                if (out[j] == ' ' || out[j] == '>' || j == 0) {
                    let te = out.substring(j, out.length);
                    out = out.substring(0, j);
                    out += '<span class="ha">' + te + '</span>';
                    break;
                }
            }
            out += '<span class="hv">' + ch + nch;
            i++;
            hv = true;
        }
        else if (ch == '"' || ch == "'" || ch == '`' && hv) {
            out += '</span>' + ch;
            hv = false;
        }
        else if (ch == ' ' || ch == '"' || ch == "'" || ch == '`') {
            if (ht) {
                out += '</span>';
                ht = false;
            }
            out += ' ';
        }
        else
            out += ch;
    }
    return out;
}
function WNHtmlToText(src) {
    var regex = /(<([^>]+)>)/ig;
    return src.replace(regex, "");
}
function WNValueUnit(value) {
    let v = 0;
    let unit = '';
    if (value.endsWith('px')) {
        unit = 'px';
        v = WNparseNumber(value.substring(0, value.length - 2));
    }
    else if (value.endsWith('em')) {
        unit = 'em';
        v = WNparseNumber(value.substring(0, value.length - 2));
    }
    else if (value.endsWith('rem')) {
        unit = 'rem';
        v = WNparseNumber(value.substring(0, value.length - 2));
    }
    return { value: v, unit: unit };
}
function WNGetCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function WNSetCookie(cname, cvalue, exdays, samesite = 'lax', secure = false, HTTPOnly = false) {
    let cookie = cname + "=" + cvalue + ";";
    const d = new Date();
    if (exdays > 0) {
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        cookie += expires + ";";
    }
    cookie += "path=/;";
    cookie += "samesite=" + samesite + ";";
    if (secure)
        cookie += "secure;";
    if (HTTPOnly)
        cookie += "httponly;";
    cookie = WNTrim(cookie, ';');
    document.cookie = cookie;
}
function WNGetStorage(key) {
    let ret = sessionStorage.getItem(key);
    if (ret == null)
        ret = localStorage.getItem(key);
    if (ret == null)
        ret = WNGetCookie(key);
    return ret;
}
function WNSetStorage(key, value, localstorage) {
    if (localstorage) {
        localStorage.setItem(key, value);
        return localStorage.getItem(key) == value;
    }
    else {
        sessionStorage.setItem(key, value);
        return sessionStorage.getItem(key) == value;
    }
}
function WNSleep(ms) {
    return new Promise(s => setTimeout(s, ms));
}
function WNAddClassList(elem, classes) {
    if (classes == '' || elem == null || elem == undefined)
        return;
    classes.split(' ').forEach((s) => { if (!elem.classList.contains(s))
        elem.classList.add(s); });
}
function WNRemoveClassList(elem, classes) {
    if (classes == '' || elem == null || elem == undefined)
        return;
    classes.split(' ').forEach((s) => { if (elem.classList.contains(s))
        elem.classList.remove(s); });
}
function WNCalendarFunction(name) {
    let cal = name.toLowerCase();
    if (!cal.toLowerCase().startsWith('wn'))
        cal = 'WN' + cal[0].toUpperCase() + cal.substring(1);
    else
        cal = 'WN' + cal[2].toUpperCase() + cal.substring(3);
    if (!cal.includes('calendar'))
        cal += 'calendar';
    cal = cal.replace('calendar', 'Calendar');
    return WNGenerateFunction('return new ' + cal + '()')();
}
function WNCultureInfoFunction(name) {
    let cul = name.toLowerCase().replace('-', '_').split('_');
    if (cul.length == 1)
        return null;
    name = 'WNCultureInfo_' + cul[cul.length - 2].toLowerCase() + '_' + cul[cul.length - 1].toUpperCase();
    return WNGenerateFunction('return new ' + name + '()')();
}
function WNGenerateFunction(body, params = '') {
    let ret = undefined;
    let pr = [];
    if (params !== '')
        pr = params.split(',');
    pr.push(body);
    if (body.trim().startsWith('('))
        ret = new Function(body);
    else if (pr.length == 5)
        ret = new Function(pr[0], pr[1], pr[2], pr[3], pr[4]);
    else if (pr.length == 4)
        ret = new Function(pr[0], pr[1], pr[2], pr[3]);
    else if (pr.length == 3)
        ret = new Function(pr[0], pr[1], pr[2]);
    else if (pr.length == 2)
        ret = new Function(pr[0], pr[1]);
    else if (pr.length == 1)
        ret = new Function(pr[0]);
    return ret;
}
function WNAddStringQuote(value) { return '"' + value + '"'; }
function WNisJson(item) {
    item = typeof item !== "string"
        ? JSON.stringify(item)
        : item;
    try {
        item = JSON.parse(item);
    }
    catch (e) {
        return false;
    }
    if (typeof item === "object" && item !== null) {
        return true;
    }
    return false;
}
function WNtoTitleCase(text) {
    let s = text.split(' ');
    for (var i = 0; i < s.length; i++) {
        if (s.length > 0)
            s[i] = s[i][0].toUpperCase() + s[i].substring(1).toLowerCase();
    }
    return s.join(' ');
}
function WNNumberToString(num, culture = wnConfig.cultureInfo) {
    let negsign = num < 0 ? culture.NumberFormat.negativeSign : '';
    num = WNparseNumber(num.toFixed(culture.NumberFormat.numberDecimalDigits), 0);
    var decimal = Math.abs(num) - Math.floor(Math.abs(num));
    num = num - decimal;
    let grp = num.toString().split("").reverse().join("").match(new RegExp('.{1,' + culture.NumberFormat.numberGroupSizes[0] + '}', 'ig'));
    let ret = negsign;
    for (var i = grp.length - 1; i > -1; i--)
        ret += grp[i].split("").reverse().join("") + (i != 0 ? culture.NumberFormat.numberGroupSeparator : '');
    if (decimal > 0)
        ret += culture.NumberFormat.numberDecimalSeparator + decimal.toString();
    return ret;
}
function WNStringFormat(text, format, culture = wnConfig.cultureInfo) {
    let ret = text.toString();
    if (format.includes('{0}'))
        ret = format.replace('{0}', ret);
    else if (format.toLowerCase() == 'l' || format.toLowerCase() == 'lowercase')
        ret = ret.toLowerCase();
    else if (format.toLowerCase() == 'u' || format.toLowerCase() == 'uppercase')
        ret = ret.toUpperCase();
    else if (format.toLowerCase() == 't' || format.toLowerCase() == 'titlecase')
        ret = WNtoTitleCase(ret);
    else if (format.toLowerCase() == 'number')
        ret = WNNumberToString(WNparseNumber(text), culture);
    else if (format.toLowerCase() == 'date')
        ret = new WNDate(culture, wnConfig.calendar, new Date(ret)).toString();
    else if (format.toLowerCase() == 'longdate')
        ret = new WNDate(culture, wnConfig.calendar, new Date(ret)).toLongDateString();
    else if (format.toLowerCase() == 'shortdate')
        ret = new WNDate(culture, wnConfig.calendar, new Date(ret)).toShortDateString();
    else if (format.toLowerCase() == 'longtime')
        ret = new WNDate(culture, wnConfig.calendar, new Date(ret)).toLongTimeString();
    else if (format.toLowerCase() == 'shorttime')
        ret = new WNDate(culture, wnConfig.calendar, new Date(ret)).toShortTimeString();
    return ret;
}
function WNToggleClass(elem, setclass, classes) {
    let el = WN(elem).htmlElement;
    classes.forEach(x => el.classList.remove(x));
    el.classList.add(setclass);
}
window.addEventListener("resize", WNSetViewSize);
function WNSetViewSize() {
    let width;
    width = window.visualViewport.width;
    document.body.style.setProperty('--view-width', getComputedStyle(document.body).width);
    return width;
}
function WNGetParentsElementsTag(elem, untilTag, untilClass) {
    let ret = [];
    let tElem = elem;
    untilTag = (untilTag ?? '').toLowerCase().trim();
    let luntilTag;
    luntilTag = untilTag.split(' ');
    untilClass = (untilClass ?? '').toLowerCase().trim();
    let luntilClass;
    luntilClass = untilClass.split(' ');
    while (tElem != null) {
        let tag = tElem.tagName.toLowerCase();
        let classList = tElem.classList;
        ret.push(tag);
        if (luntilTag.find((x) => x == tag) != null)
            break;
        if (luntilClass.find((x) => classList.contains(x)) != null)
            break;
        tElem = tElem.parentElement;
    }
    return ret;
}
function WNRGB2HEX(rgb) {
    let ret = '';
    rgb = rgb.toLowerCase();
    if (rgb.includes('rgba'))
        ret = `#${rgb.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`;
    else if (rgb.includes('rgb'))
        ret = `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`;
    return ret;
}
function WNFindTreeArray(source, fieldName1, fieldName2 = '', value, contain = false, ignoreCase = false, childsFieldName) {
    let find = [];
    for (var i = 0; i < source.length; i++) {
        let item = source[i];
        let tValue = item[fieldName1];
        if (fieldName2 != '')
            tValue += item[fieldName2];
        if (ignoreCase) {
            tValue = tValue.toLowerCase();
            value = value.toLowerCase();
        }
        if (contain && tValue.includes(value))
            find.push(item);
        else if (tValue == value)
            find.push(item);
        if (item[childsFieldName].length > 0) {
            find = find.concat(WNFindTreeArray(item[childsFieldName], fieldName1, fieldName2, value, contain, ignoreCase, childsFieldName));
        }
    }
    return find;
}
async function WNFileToString(input) {
    if (!input.files || !input.files[0])
        return '';
    let result_base64 = await new Promise((resolve) => {
        let fileReader = new FileReader();
        fileReader.onload = (e) => resolve(fileReader.result);
        fileReader.readAsDataURL(input.files[0]);
    });
    return result_base64;
}
async function WNSetImageBase(input, img) {
    if (typeof (img) == 'string') {
        img = document.getElementById(img);
    }
    img.src = await WNFileToString(input);
}
class WNConfig {
    nativeDigit = true;
    calendar;
    locale;
    dateTimeFormat;
    numberFormat;
    _cultureInfo;
    get cultureInfo() { return this._cultureInfo; }
    set cultureInfo(value) {
        this._cultureInfo = value;
        this.language = WNLanguage[this._cultureInfo.twoLetterISOLanguageName];
        this.locale = new Intl.Locale(this._cultureInfo.TextInfo.cultureName);
        this.dateTimeFormat = Intl.DateTimeFormat(this.locale.baseName);
        this.numberFormat = Intl.NumberFormat(this.locale.baseName);
    }
    hijriAdjustment = 0;
    language;
    authorizationToken = '';
    _baseFetchUri = '';
    get baseFetchUri() { return this._baseFetchUri; }
    set baseFetchUri(value) {
        this._baseFetchUri = value.trim().toLowerCase();
        if (!this._baseFetchUri.endsWith('/'))
            this._baseFetchUri += '/';
    }
    constructor() {
        if (document.documentElement.lang.includes('fa') || window.navigator.languages.includes('fa')) {
            this.calendar = new WNPersianCalendar();
            this.cultureInfo = new WNCultureInfo_fa_IR();
        }
        else {
            this.calendar = new WNGregorianCalendar();
            this.cultureInfo = new WNCultureInfo_en_US();
        }
    }
}
if (!wnConfig)
    wnConfig = new WNConfig();
document.addEventListener("DOMContentLoaded", initComponents, true);
function initComponents() {
    CheckBrowserCompatibility();
    WNSetViewSize();
    InitWNBlock(document);
}
function CheckBrowserCompatibility() {
    let objAgent = navigator.userAgent;
    let objbrowserName = '';
    let objfullVersion = '';
    let objBrMajorVersion = 0;
    let objOffsetName, objOffsetVersion, ix;
    if ((objOffsetVersion = objAgent.indexOf("Chrome")) != -1) {
        objbrowserName = "Chrome";
        objfullVersion = objAgent.substring(objOffsetVersion + 7);
    }
    else if ((objOffsetVersion = objAgent.indexOf("MSIE")) != -1) {
        objbrowserName = "Microsoft Internet Explorer";
        objfullVersion = objAgent.substring(objOffsetVersion + 5);
    }
    else if ((objOffsetVersion = objAgent.indexOf("Firefox")) != -1) {
        objbrowserName = "Firefox";
        objfullVersion = objAgent.substring(objOffsetVersion + 8);
    }
    else if ((objOffsetVersion = objAgent.indexOf("Safari")) != -1) {
        objbrowserName = "Safari";
        objfullVersion = objAgent.substring(objOffsetVersion + 7);
        if ((objOffsetVersion = objAgent.indexOf("Version")) != -1)
            objfullVersion = objAgent.substring(objOffsetVersion + 8);
    }
    else if ((objOffsetName = objAgent.lastIndexOf(' ') + 1) < (objOffsetVersion = objAgent.lastIndexOf('/'))) {
        objbrowserName = objAgent.substring(objOffsetName, objOffsetVersion);
        objfullVersion = objAgent.substring(objOffsetVersion + 1);
        if (objbrowserName.toLowerCase() == objbrowserName.toUpperCase()) {
            objbrowserName = 'Netscape';
        }
    }
    if ((ix = objfullVersion.indexOf(";")) != -1)
        objfullVersion = objfullVersion.substring(0, ix);
    if ((ix = objfullVersion.indexOf(" ")) != -1)
        objfullVersion = objfullVersion.substring(0, ix);
    objBrMajorVersion = parseInt('' + objfullVersion, 10);
    if (isNaN(objBrMajorVersion)) {
        objfullVersion = '1.0';
        objBrMajorVersion = 0;
    }
    let error = true;
    if (objbrowserName == 'Chrome' && objBrMajorVersion >= 89)
        error = false;
    else if (objbrowserName == 'Firefox' && objBrMajorVersion >= 5)
        error = false;
    if (error)
        document.body.innerHTML = `<div class='alert warning'>` + wnConfig.language["common"]["browsererror"] + ' ' + objbrowserName + ':' + objBrMajorVersion + `</div>` + document.body.innerHTML;
}
function InitWNBlock(elem = document) {
    InitWN(elem);
    SetComponentCompatibility(elem);
    WNTooltipAssign(elem);
    WNAnimationSetup();
}
function InitWN(masterelem = document) {
    let selectors = masterelem.querySelectorAll("*");
    let idIndex = 1;
    for (var i = 0; i < selectors.length; i++) {
        let elem = selectors[i];
        if (elem !== null) {
            let type = elem.getAttribute("wn-type");
            let id = type;
            if (id == null)
                id = elem.tagName.toLowerCase() + '-';
            else
                id = 'wn-' + id;
            if (!elem.hasAttribute('id') || elem.getAttribute('is') == '') {
                elem.id = id + (idIndex).toString();
                elem.setAttribute('id', elem.id);
                idIndex++;
            }
            try {
                if (type != null) {
                    let welem = WN(elem);
                    if (welem.wn == null) {
                        let wn = new Function('elem', 'return new WN' + type[0].toUpperCase() + type.substring(1) + '(elem)')(elem);
                        welem.wn = wn;
                    }
                    else
                        console.error('Duplicated WNElement ID! ' + elem.id + ' ' + type);
                }
            }
            catch (e) {
                console.error(e);
            }
        }
    }
}
function SetComponentCompatibility(elem = document) {
    let selectors = elem.querySelectorAll("*");
    for (var i = 0; i < selectors.length; i++) {
        let elem = selectors[i];
        if (elem !== null) {
            let st = getComputedStyle(elem);
            if (st.direction == 'ltr') {
                if (elem.tagName == "INPUT" && (elem.type == 'email')) {
                    if (getComputedStyle(elem.parentElement).direction == 'ltr')
                        elem.setAttribute('dir', 'ltr');
                    else
                        elem.setAttribute('dir', 'rtl');
                }
                else
                    elem.setAttribute('dir', 'ltr');
            }
        }
    }
}
class WNAccordion {
    nameType = 'WNAccordion';
    element;
    mode = AccordionMode.single;
    items;
    get selectedItem() {
        if (this._selectedIndex == -1)
            return null;
        return this.items[this._selectedIndex];
    }
    ;
    set selectedItem(value) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].body == value.body && this.items[i].head == value.head) {
                this.selectedIndex = i;
                break;
            }
        }
    }
    ;
    _selectedIndex = -1;
    get selectedIndex() { return this._selectedIndex; }
    ;
    set selectedIndex(value) {
        if (value < 0)
            value = -1;
        if (value >= this.items.length)
            value = this.items.length - 1;
        if (this.beforeCollapse && this.beforeCollapse(this, value) != false)
            return;
        this._selectedIndex = value;
        this.setCollapse();
        this.afterCollapse?.(this, value);
    }
    ;
    beforeCollapse;
    afterCollapse;
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.init();
        }
    }
    init() {
        this.items = [];
        let index = 0;
        this.element.querySelectorAll('.accordion-item').forEach((x) => {
            let head = x.querySelector('.accordion-header');
            let body = x.querySelector('.accordion-body');
            if (head == null)
                head = x.firstChild;
            if (head != null) {
                if (body == null)
                    body = head.nextSibling;
                if (body == null) {
                    body = document.createElement('div');
                    body.className = 'accordion-body';
                    head.after(body);
                }
                head.setAttribute('index', index.toString());
                head.addEventListener("click", (e) => {
                    this.selectedIndex = WNparseNumber(e.target.getAttribute('index'), -1);
                });
                this.items.push({ head: head, body: body });
                index++;
            }
        });
        if (this.element.hasAttribute('mode'))
            this.mode = this.element.getAttribute('mode') == 'multiple' ? AccordionMode.multiple : AccordionMode.single;
        if (this.element.hasAttribute('selected-index'))
            this.selectedIndex = WNparseNumber(this.element.getAttribute('selected-index'));
    }
    setCollapse() {
        if (this.mode == AccordionMode.single) {
            this.items.forEach((x) => {
                x.head.classList.add('collapsed');
                x.body.classList.add('accordion-collapse');
            });
            if (this.selectedIndex > -1) {
                this.items[this.selectedIndex].head.classList.remove('collapsed');
                this.items[this.selectedIndex].body.classList.remove('accordion-collapse');
            }
        }
        else if (this.mode == AccordionMode.multiple) {
            if (this.selectedIndex > -1) {
                this.items[this.selectedIndex].head.classList.toggle('collapsed');
                this.items[this.selectedIndex].body.classList.toggle('accordion-collapse');
            }
        }
    }
}
class WNCaptcha {
    nameType = 'WNCaptcha';
    element;
    image;
    refreshButton;
    input;
    url;
    key = '';
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.init();
            this.refresh();
        }
    }
    get value() { return { key: this.key ?? '', value: this.input.value ?? '' }; }
    init() {
        let imagebar = this.element.querySelector(".imagebar");
        this.image = this.element.querySelector(".image");
        this.refreshButton = this.element.querySelector(".refresh");
        this.input = this.element.querySelector("input");
        if (imagebar == null && this.image == null) {
            imagebar = document.createElement("div");
            imagebar.className = "imagebar";
            this.element.appendChild(imagebar);
        }
        if (this.image == null) {
            this.image = document.createElement("img");
            this.image.className = "image";
            imagebar.appendChild(this.image);
        }
        if (this.refreshButton == null) {
            this.refreshButton = document.createElement("button");
            this.refreshButton.className = "refresh";
            imagebar.appendChild(this.refreshButton);
        }
        if (this.input == null) {
            this.input = document.createElement("input");
            this.element.appendChild(this.input);
        }
        if (this.element.hasAttribute('url'))
            this.url = this.element.getAttribute('url') ?? '';
        this.refreshButton.addEventListener("click", () => this.refresh());
        this.key = '';
        this.element.classList.add('hide-valid');
        this.input.addEventListener("change", async () => await this.validate());
        this.input.addEventListener("", async () => await this.validate());
    }
    async refresh() {
        await Post(JSON.stringify({
            Method: 'Captcha',
            Width: this.image.width,
            Height: this.image.height
        }), this.url).then(async (r) => {
            this.image.src = r.Image;
            this.key = r.Key;
            this.input.value = "";
        }).catch((e) => console.error(e.message));
    }
    async validate() {
        let ret = false;
        await Post(JSON.stringify({
            Method: 'Validate',
            Key: this.key ?? '',
            Value: this.input.value
        }), this.url).then(async (r) => {
            if (r.Validate == 'true') {
                this.input.classList.add('valid');
                this.element.classList.remove('hide-valid');
                this.input.classList.remove('invalid');
                ret = true;
            }
            else {
                this.input.classList.remove('valid');
                this.element.classList.add('hide-valid');
                this.input.classList.add('invalid');
                await this.refresh();
            }
        }).catch((e) => console.error(e.message));
        return ret;
    }
}
class WNCarousel {
    nameType = 'WNCarousel';
    element;
    interval = 10000;
    autoPlay = true;
    _playState = 'ready';
    _hoverPause = true;
    get hoverPause() { return this._hoverPause; }
    set hoverPause(value) {
        this._hoverPause = value;
        if (this._hoverPause) {
            this.element.addEventListener("mouseenter", () => { if (this._playState == 'play')
                this._playState = 'pause'; });
            this.element.addEventListener("mouseleave", () => { if (this._playState == 'pause')
                this._playState = 'play'; });
        }
    }
    ;
    _items;
    _indicators;
    _oldindex = -1;
    _index = 0;
    _transitionDelay = 600;
    _durationHandle;
    _effectHandle;
    _touch_x = 0;
    nextButton;
    previousButton;
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.init();
        }
        if (this.autoPlay) {
            this._playState = 'play';
            this.play();
        }
    }
    init() {
        this.interval = WNparseNumber(this.element.getAttribute("interval"), 5000);
        this.autoPlay = WNparseBoolean(this.element.getAttribute("autoplay"), true);
        this.hoverPause = WNparseBoolean(this.element.getAttribute("hoverpause"), true);
        this._items = WNGetNodesList(".carousel-item", this.element);
        this._index = 0;
        for (var i = 0; i < this._items.length; i++) {
            if (this._items[i].classList.contains('active')) {
                this._index = i;
                break;
            }
        }
        let t = getComputedStyle(this._items[0]).transitionDuration.toLowerCase();
        if (t.endsWith('ms'))
            this._transitionDelay = parseInt(t.substring(0, t.length - 2));
        else if (t.endsWith('s'))
            this._transitionDelay = parseFloat(t.substring(0, t.length - 1)) * 1000;
        this.nextButton = this.element.querySelector('.carousel-next');
        this.nextButton?.addEventListener('click', () => { this.next(); });
        this.previousButton = this.element.querySelector('.carousel-previous');
        this.previousButton?.addEventListener('click', () => { this.previous(); });
        this.element.addEventListener("touchstart", (e) => { this._touch_x = e.touches[0].clientX; });
        this.element.addEventListener("touchend", (e) => {
            if (this._touch_x > e.changedTouches[0].clientX)
                this.previous();
            if (this._touch_x < e.changedTouches[0].clientX)
                this.next();
        });
        this.element.addEventListener("mousedown", (e) => { this._touch_x = e.clientX; });
        this.element.addEventListener("mouseup", (e) => {
            if (this._touch_x > e.clientX)
                this.previous();
            if (this._touch_x < e.clientX)
                this.next();
        });
        let indicators = this.element.querySelector('.carousel-indicators');
        if (indicators != null) {
            if (indicators.children.length == 0) {
                for (var i = 0; i < this._items.length; i++) {
                    let indicator = document.createElement('div');
                    indicator.className = 'indicator-item';
                    indicator.setAttribute('indicator-index', i.toString());
                    indicators.appendChild(indicator);
                }
            }
            this._indicators = WNGetNodesList(".indicator-item", indicators);
            this._indicators.forEach((e) => { e.addEventListener('click', () => { this.showSlide(e); }); });
            let t = this._index;
            this._index = -1;
            this.showSlide(this._indicators[t]);
        }
    }
    play() {
        window.clearTimeout(this._durationHandle);
        let interval = this.interval;
        if (this._playState == 'pause') {
            this.clear();
            this._items[this._index].classList.add('active');
        }
        else
            interval = this.show();
        if (this._playState != 'ready')
            this._durationHandle = window.setTimeout(() => {
                if (this._playState == 'play')
                    this.addIndex(1);
                this.play();
            }, interval);
    }
    show() {
        let oldElement = null;
        if (this._oldindex != -1) {
            oldElement = this._items[this._oldindex];
            oldElement.classList.remove('active');
            oldElement.classList.add('end');
        }
        let nextElement = this._items[this._index];
        nextElement.classList.add('start');
        if (this._indicators != null) {
            if (this._oldindex > -1 && this._oldindex < this._indicators.length)
                this._indicators[this._oldindex].classList.remove('active');
            if (this._index < this._indicators.length)
                this._indicators[this._index].classList.add('active');
        }
        this._effectHandle = setTimeout(() => {
            nextElement.classList.remove('start');
            nextElement.classList.add('active');
            if (oldElement != null)
                oldElement.classList.remove('end');
        }, this._transitionDelay);
        return WNparseNumber(nextElement.getAttribute("interval"), this.interval);
    }
    clear() {
        window.clearTimeout(this._effectHandle);
        window.clearTimeout(this._durationHandle);
        for (var i = 0; i < this._items.length; i++) {
            this._items[i].classList.remove('start');
            this._items[i].classList.remove('end');
            this._items[i].classList.remove('active');
            if (this._indicators != null && i < this._indicators.length)
                this._indicators[i].classList.remove('active');
        }
    }
    next() {
        this.addIndex(1);
        if (this.autoPlay)
            this._playState = 'play';
        this.clear();
        this.play();
    }
    previous() {
        this.addIndex(-1);
        if (this.autoPlay)
            this._playState = 'play';
        this.clear();
        this.play();
    }
    addIndex(skip) {
        this._oldindex = this._index;
        this._index += skip;
        if (this._index >= this._items.length)
            this._index = 0;
        if (this._index < 0)
            this._index = this._items.length - 1;
    }
    showSlide(element) {
        let index = WNparseNumber(element.getAttribute('indicator-index'), 0);
        if (this._index == index)
            return;
        this._oldindex = this._index;
        this._index = index;
        if (this.autoPlay)
            this._playState = 'play';
        this.clear();
        this.play();
    }
}
class WNCloseButton {
    nameType = 'WNCloseButton';
    element;
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.render();
        }
    }
    render() {
        this.element.addEventListener("click", (e) => {
            let elem = e.target;
            if (elem.hasAttribute('close-parent')) {
                if (this.element.parentElement.classList.contains('show'))
                    this.element.parentElement.classList.remove('show');
                else
                    this.element.parentElement.classList.add('hide');
            }
            else if (elem.hasAttribute('remove-id')) {
                let el = WNGetNodesList(elem.getAttribute('remove-id'));
                for (var i = 0; i < el.length; i++) {
                    el[i].remove();
                }
            }
            else if (elem.hasAttribute('target')) {
                let el = WNGetNodesList(elem.getAttribute('target'));
                let addclass = null;
                let removeclass = null;
                if (elem.hasAttribute('add-class'))
                    addclass = elem.getAttribute('add-class').split(' ');
                if (elem.hasAttribute('remove-class'))
                    removeclass = elem.getAttribute('remove-class').split(' ');
                for (var i = 0; i < el.length; i++) {
                    let elm = el[i];
                    if (addclass != null)
                        for (var j = 0; j < addclass.length; j++)
                            elm.classList.add(addclass[j]);
                    if (removeclass != null)
                        for (var j = 0; j < removeclass.length; j++)
                            elm.classList.remove(removeclass[j]);
                }
            }
        });
    }
}
class WNCollapse {
    nameType = 'WNCollapse';
    element;
    target = '';
    remove = '';
    targetMode = 'toggle';
    beforecollapse;
    aftercollapse;
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.init();
        }
    }
    init() {
        this.element.removeEventListener("click", () => { this.collapse(); });
        if (this.element.hasAttribute('target'))
            this.target = this.element.getAttribute('target');
        if (this.element.hasAttribute('remove'))
            this.remove = this.element.getAttribute('remove');
        if (this.element.hasAttribute('target-mode')) {
            switch (this.element.getAttribute('target-mode').toLowerCase()) {
                case "show":
                    this.targetMode = "show";
                    break;
                case "hide":
                    this.targetMode = "hide";
                    break;
                default:
                    this.targetMode = "toggle";
                    break;
            }
        }
        if (this.element.hasAttribute('beforecollapse'))
            this.beforecollapse = WNGenerateFunction(this.element.getAttribute('beforecollapse'));
        if (this.element.hasAttribute('aftercollapse'))
            this.beforecollapse = WNGenerateFunction(this.element.getAttribute('aftercollapse'));
        this.element.addEventListener("click", () => { this.collapse(); });
    }
    collapse() {
        if (this.beforecollapse && !this.beforecollapse?.(this))
            return;
        this.HideControls(this.remove);
        let TargetNodes = WNGetNodesList(this.target, document, this.element);
        let countshow = 0;
        let counthide = 0;
        for (var i = 0; i < TargetNodes.length; i++) {
            if (TargetNodes[i].classList.contains('show'))
                countshow++;
            else
                counthide++;
        }
        let mode = this.targetMode;
        if (this.targetMode == "toggle") {
            if (countshow > counthide) {
                mode = 'hide';
            }
            else {
                mode = 'show';
            }
        }
        if (this.element != null) {
            this.element.classList.remove('collapsing');
            if (mode == 'show') {
                this.element.classList.remove('collapsed');
            }
            else if (mode == 'hide')
                this.element.classList.add('collapsed');
        }
        for (var i = 0; i < TargetNodes.length; i++) {
            if (mode == 'show') {
                TargetNodes[i].classList.add('show');
            }
            else if (mode == 'hide') {
                if (TargetNodes[i].classList.contains('show')) {
                    TargetNodes[i].classList.add('collapsing');
                    if (getComputedStyle(TargetNodes[i]).animationName != 'none') {
                        TargetNodes[i].addEventListener('animationend', (e) => {
                            e.currentTarget.classList.remove('show');
                            e.currentTarget.classList.remove('collapsing');
                        }, { once: true, capture: true });
                    }
                    else {
                        TargetNodes[i].classList.remove('show');
                        TargetNodes[i].classList.remove('collapsing');
                    }
                }
            }
        }
        this.aftercollapse?.(this);
    }
    HideControls(list) {
        let elems = WNGetNodesList(list);
        for (var i = 0; i < elems.length; i++) {
            elems[i].classList.remove('show');
            elems[i].classList.add('collapsed');
        }
    }
}
class WNConfirm {
    nameType = 'WNConfirm';
    title = '';
    body = '';
    buttons = [];
    modalClass = '';
    headClass = '';
    bodyClass = '';
    footerClass = '';
    showClass = "animation zoomIn";
    closeButton = true;
    values = {};
    parentElement = document.body;
    element;
    modal;
    constructor() {
        this.title = '';
        this.body = '';
        this.buttons = [];
        this.modalClass = '';
        this.headClass = '';
        this.bodyClass = '';
        this.footerClass = '';
        this.showClass = "animation zoomIn";
        this.closeButton = true;
        this.element = null;
        this.modal = null;
        this.values = {};
    }
    async show() {
        if (typeof (this.body) == 'object') {
            this.body = this.body.outerHTML;
        }
        this.element = document.createElement("div");
        this.element.className = `modal darkback ${this.modalClass}`;
        this.element.setAttribute("showClass", this.showClass);
        let modaldialog = document.createElement('div');
        modaldialog.className = "modal-dialog";
        modaldialog.innerHTML = `
        <div class="modal-header ${this.headClass}">
            <h5 class="modal-title">${this.title}</h5>` +
            (this.closeButton ? `<button class="close" close-parent=""></button>` : '') +
            `</div>
        <div class="modal-body ${this.bodyClass}">
            ${this.body}
        </div>`;
        let footer = document.createElement('div');
        footer.className = `modal-footer  ${this.footerClass}`;
        for (var i = 0; i < this.buttons.length; i++) {
            let btn = document.createElement("button");
            btn.className = this.buttons[i].class ?? '';
            btn.innerHTML = this.buttons[i].caption ?? '';
            let click = this.buttons[i]?.click;
            btn.onclick = async () => {
                if (click != null) {
                    let r = await click(this);
                    if (r == undefined || r == true) {
                        this.modal.hide();
                        this.element.remove();
                    }
                }
                else {
                    this.modal.hide();
                    this.element.remove();
                }
            };
            footer.appendChild(btn);
        }
        modaldialog.appendChild(footer);
        this.element.appendChild(modaldialog);
        this.parentElement.appendChild(this.element);
        if (this.modal == null)
            this.modal = new WNModal(this.element);
        else
            this.modal.element = this.element;
        await this.modal.show();
        modaldialog.focus();
    }
    ;
}
class WNCounter {
    nameType = 'WNCounter';
    element;
    countTo = 0;
    countNum = 0;
    countStep = 1;
    duration = 1000;
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.render();
        }
    }
    render() {
        if (this.element.hasAttribute('count'))
            this.countTo = WNparseNumber(this.element.getAttribute('count'));
        this.countNum = WNparseNumber(this.element.innerText, 0);
        if (this.element.hasAttribute('duration'))
            this.duration = WNparseNumber(this.element.getAttribute('duration'), 1000);
        this.countStep = (this.countTo - this.countNum) / this.duration;
        this.start(this);
        window.addEventListener("scroll", () => this.start(this));
    }
    start(e) {
        if (document.readyState == "loading")
            return;
        if (((window.scrollY == 0 && e.element.getBoundingClientRect().bottom < window.innerHeight) ||
            (e.element.getBoundingClientRect().bottom < window.scrollY - window.innerHeight / 2)) && e.element.getBoundingClientRect().bottom > 0 && e.countNum < e.countTo) {
            let id = setInterval(() => {
                e.countNum += e.countStep;
                if (e.countNum > e.countTo) {
                    e.countNum = e.countTo;
                    clearInterval(id);
                }
                e.element.innerText = Math.floor(e.countNum).toString();
                window.requestAnimationFrame(() => { });
            }, e.duration / (e.countTo / e.countStep));
        }
    }
}
class WNDropdown {
    nameType = 'WNDropdown';
    static WNWindowClickHandled = false;
    static WNLastDropdownOpened = [];
    element;
    dropdown;
    checkOnlyDropDown = false;
    beforeShow;
    afterShow;
    beforeHide;
    afterHide;
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            if (this.element.hasAttribute('wn-dropdown')) {
                this.dropdown = document.getElementById(this.element.getAttribute('wn-dropdown'));
            }
            else {
                this.dropdown = elem.querySelector("[class*='dropdown']");
                if (this.dropdown == null) {
                    if (this.element.nextElementSibling.classList.contains('dropdown'))
                        this.dropdown = this.element.nextElementSibling;
                }
            }
            this.render();
        }
    }
    render() {
        window.removeEventListener("click", (e) => this.windowClick(e));
        window.removeEventListener("scroll", (e) => this.windowClick(e));
        window.removeEventListener("resize", (e) => this.windowClick(e));
        window.addEventListener("click", (e) => this.windowClick(e));
        window.addEventListener("scroll", (e) => this.windowClick(e));
        window.addEventListener("resize", (e) => this.windowClick(e));
        let defaultevent = "click";
        if (this.element.hasAttribute('wn-dropdown-event'))
            defaultevent = this.element.getAttribute('wn-dropdown-event');
        if (defaultevent !== '')
            defaultevent.split(',').forEach((s) => {
                this.element.addEventListener(s.trim(), (e) => {
                    if (this.checkOnlyDropDown) {
                        if ((e.target == this.dropdown))
                            this.toggle();
                    }
                    else
                        this.toggle();
                });
            });
        if (this.element.hasAttribute('onbeforeshow'))
            this.beforeShow = WNGenerateFunction(this.element.getAttribute('onbeforeshow'), 't');
        if (this.element.hasAttribute('onbeforehide'))
            this.beforeHide = WNGenerateFunction(this.element.getAttribute('onbeforehide'), 't');
        if (this.element.hasAttribute('onaftershow'))
            this.afterShow = WNGenerateFunction(this.element.getAttribute('onbaftershow'), 't');
        if (this.element.hasAttribute('onafterhide'))
            this.afterHide = WNGenerateFunction(this.element.getAttribute('onafterhide'), 't');
    }
    windowClick(event) {
        if (WNDropdown.WNWindowClickHandled || WNDropdown.WNLastDropdownOpened == null) {
            WNDropdown.WNWindowClickHandled = false;
            return;
        }
        let doHide = false;
        if (event.target == document || event.target == window)
            doHide = true;
        else if (event.target.getAttribute('wn-type') != 'dropdown' && !WNParentHaveClass(event.target, 'dropdown'))
            doHide = true;
        if (doHide) {
            while (WNDropdown.WNLastDropdownOpened.length > 0) {
                let obj = WNDropdown.WNLastDropdownOpened.pop();
                obj.classList.remove("show");
            }
        }
    }
    toggle() {
        WNDropdown.WNWindowClickHandled = true;
        if (this.dropdown.classList.contains('single') && this.dropdown.classList.contains('show')) {
            this.dropdown.classList.remove("show");
            return;
        }
        let hide = true;
        for (var i = 0; i < WNDropdown.WNLastDropdownOpened.length; i++) {
            if (WNContainElement(this.element, WNDropdown.WNLastDropdownOpened[i])) {
                hide = false;
                break;
            }
        }
        if (hide)
            this.hide();
        if (!this.dropdown.classList.contains("show"))
            this.show();
        else
            this.hide();
    }
    hide() {
        WNDropdown.WNWindowClickHandled = true;
        if (this.dropdown.classList.contains('single') && this.dropdown.classList.contains('show')) {
            this.dropdown.classList.remove("show");
            return;
        }
        this.beforeHide?.(this);
        while (WNDropdown.WNLastDropdownOpened.length > 0) {
            let obj = WNDropdown.WNLastDropdownOpened.pop();
            obj.classList.remove("show");
        }
        this.afterHide?.(this);
    }
    show() {
        WNDropdown.WNWindowClickHandled = true;
        this.setPosition();
        this.beforeShow?.(this);
        this.dropdown.classList.add("show");
        if (!this.dropdown.classList.contains('single')) {
            WNDropdown.WNLastDropdownOpened.push(this.dropdown);
        }
        this.afterShow?.(this);
    }
    setPosition() {
        let dropdown_cs = getComputedStyle(this.dropdown);
        let dropdown_pos = this.dropdown.getBoundingClientRect();
        let element_pos = this.element.getBoundingClientRect();
        let offsetLeft = element_pos.left;
        let offsetTop = element_pos.top;
        let marginTop = +parseInt(dropdown_cs.marginTop);
        let rtl = dropdown_cs.direction == 'rtl';
        let top = offsetTop + element_pos.height;
        let start = 0;
        let width = dropdown_pos.width;
        if (this.dropdown.className.includes('align-fit')) {
            if (width < element_pos.width)
                width = element_pos.width;
        }
        if (element_pos.bottom + dropdown_pos.height + marginTop * 2 > window.innerHeight || this.element.className.includes('pos-top'))
            top = offsetTop - dropdown_pos.height - marginTop * 2;
        if (rtl) {
            start = element_pos.right - width;
            if (this.dropdown.className.includes('align-end')) {
                start = offsetLeft;
            }
        }
        else {
            start = offsetLeft;
            if (this.dropdown.className.includes('align-end')) {
                start = offsetLeft + element_pos.width - width;
            }
        }
        if (start < 0)
            start = offsetLeft;
        if (start + width > window.innerWidth)
            start = window.innerWidth - width;
        if (this.element.className.includes('pos-start')) {
            top = offsetTop - dropdown_pos.height / 2;
            if (rtl)
                start = offsetLeft + this.element.offsetWidth + marginTop;
            else
                start = offsetLeft - width - marginTop;
        }
        if (this.element.className.includes('pos-end')) {
            top = offsetTop - dropdown_pos.height / 2;
            if (rtl)
                start = offsetLeft - width - marginTop;
            else
                start = offsetLeft + this.element.offsetWidth + marginTop;
        }
        if (this.element.className.includes('pos-bottom'))
            top = offsetTop + element_pos.height;
        this.dropdown.style.top = top + "px";
        this.dropdown.style.left = start + "px";
        if (width > 0)
            this.dropdown.style.width = width + "px";
        else
            this.dropdown.style.width = '';
    }
    hideAllDropDowns() {
        WNDropdown.WNLastDropdownOpened.forEach((x) => { x.classList.remove('show'); });
    }
}
class WNEditor {
    nameType = 'WNEditor';
    element;
    change;
    defaultFonts = 'Default On Page, Arial, Tahoma, Verdana, Helvetica, Trebuchet MS, Times New Roman, Georgia, Garamond, Courier New, Brush Script MT';
    defaultFontsize = 'X Small:4px, Small:8px, Medium:12px, Normal:16px, Large:20px, X Large:24px,2X Large:32px,3X Large:48px';
    defaultTags = 'Paragraph:p,Heading 1:h1,Heading 2:h2,Heading 3:h3,Heading 4:h4,Heading 5:h5,Heading 6:h6,Preformat:pre';
    dfaultcolorPicker = [
        '#000000', '#333333', '#555555', '#777777', '#999999', '#AAAAAA', '#CCCCCC', '#DDDDDD', '#EEEEEE', '#FFFFFF',
        '#996666', '#B24D4D', '#CC3333', '#E61919', '#FF0000', '#FF2A00', '#E63B19', '#CC4C33', '#B25E4D', '#996F66',
        '#997766', '#B26F4D', '#CC6633', '#E65D19', '#FF5500', '#FF8000', '#E68019', '#CC8033', '#B2804D', '#998066',
        '#998866', '#B2904D', '#CC9933', '#E6A119', '#FFAA00', '#FFDD33', '#EBCF47', '#D6C25C', '#C2B470', '#ADA785',
        '#999966', '#B2B24D', '#CCCC33', '#E5E619', '#FFFF00', '#D4FF00', '#C3E619', '#B2CC33', '#A1B24D', '#909966',
        '#6D7A52', '#748F3D', '#7AA329', '#81B814', '#88CC00', '#80FF00', '#80E619', '#80CC33', '#80B24D', '#809966',
        '#669988', '#4DB290', '#33CC99', '#19E6A1', '#00FFAA', '#00FFD5', '#19E6C4', '#33CCB3', '#4DB2A1', '#669990',
        '#669999', '#4DB2B2', '#33CCCC', '#19E5E6', '#00FFFF', '#00D4FF', '#19C3E6', '#33B2CC', '#4DA1B2', '#669099',
        '#668899', '#4D90B2', '#3399CC', '#19A1E6', '#00AAFF', '#0066CC', '#1466B8', '#2966A3', '#3D668F', '#52667A',
        '#6E6699', '#5D4DB2', '#4C33CC', '#3B19E6', '#2A00FF', '#7733FF', '#7E47EB', '#855CD6', '#8B70C2', '#9285AD',
        '#9985AD', '#9970C2', '#995CD6', '#9947EB', '#9933FF', '#BB33FF', '#B447EB', '#AD5CD6', '#A770C2', '#A085AD',
        '#906699', '#A14DB2', '#B233CC', '#C319E6', '#D400FF', '#FF00FF', '#E619E5', '#CC33CC', '#B24DB2', '#996699',
        '#996690', '#B24DA1', '#CC33B2', '#E619C3', '#FF00D4', '#FF33BB', '#EB47B4', '#D65CAD', '#C270A7', '#AD85A0',
        '#AD8592', '#C2708B', '#D65C85', '#EB477E', '#FF3377', '#FF002B', '#E6193C', '#CC334C', '#B24D5E', '#99666F'
    ];
    paragraphSeparator = 'p';
    FontList;
    FontSize;
    TagList;
    valueElement;
    OldHtml;
    _content;
    _editorType = 'standard';
    _editortoolbar;
    _toolbar;
    _colorPicker;
    _colorPickerInput;
    _insertLink;
    _insertLinkUrl;
    _insertLinkTarget;
    _insertLinkTitle;
    _insertImage;
    _insertImageUrl;
    _insertImageAlt;
    _insertImageWidth;
    _insertImageHeight;
    _insertImageBorderWidth;
    _insertImageBorderStyle;
    _insertImageClass;
    _insertMedia;
    _insertMediaType;
    _insertMediaUrl;
    _insertMediaWidth;
    _insertMediaHeight;
    _insertMediaControls;
    _insertMediaMute;
    _insertMediaautoPlay;
    _insertMediaBorderWidth;
    _insertMediaBorderStyle;
    _insertMediaClass;
    _insertIFrame;
    _insertIFrameUrl;
    _insertIFrameTitle;
    _insertIFrameWidth;
    _insertIFrameHeight;
    _insertIFrameBorderWidth;
    _insertIFrameBorderStyle;
    _insertIFrameClass;
    _editor_undo;
    _editor_redo;
    _editor_bold;
    _editor_italic;
    _editor_underline;
    _editor_strikethrough;
    _editor_font;
    _editor_fontsize;
    _editor_subscript;
    _editor_superscript;
    _editor_elementtag;
    _editor_alignleft;
    _editor_aligncenter;
    _editor_alignright;
    _editor_alignjustify;
    _editor_ltr;
    _editor_rtl;
    _editor_indent;
    _editor_outdent;
    _editor_numberlist;
    _editor_buletlist;
    _editor_textcolor;
    _editor_background;
    _editor_fill;
    _editor_eraseformat;
    _editor_link;
    _editor_unlink;
    _editor_image;
    _editor_media;
    _editor_iframe;
    _editor_hr;
    _editor_source;
    _editor_source_textarea;
    _editor_source_mode = 'html';
    _dark_mode;
    _fullscreen;
    _lang;
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    Init() {
        if (this.element.hasAttribute('lang'))
            this._lang = WNLanguage[this.element.getAttribute('lang')]["editor"];
        else
            this._lang = wnConfig.language["editor"];
        if (!this.element.classList.contains('editor'))
            this.element.classList.add('editor');
        if (this.element.hasAttribute('dfaultcolorPicker'))
            this.dfaultcolorPicker = WNparseString(this.element.getAttribute('dfaultcolorPicker')).split(',');
        if (this.element.hasAttribute('defaultFonts'))
            this.defaultFonts = WNparseString(this.element.getAttribute('defaultFonts'));
        if (this.element.hasAttribute('defaultFontsize'))
            this.defaultFontsize = WNparseString(this.element.getAttribute('defaultFontsize'));
        if (this.element.hasAttribute('defaultTags'))
            this.defaultTags = WNparseString(this.element.getAttribute('defaultTags'));
        if (this.element.hasAttribute('paragraphSeparator'))
            this.paragraphSeparator = WNparseString(this.element.getAttribute('paragraphSeparator'));
        this._content = this.element.querySelector('.editor-content');
        this._editorType = WNparseString(this.element.getAttribute("mode"), "standard");
        this._editortoolbar = this.element.querySelector('.editor-toolbar');
        this._toolbar = this.element.querySelector('.toolbar');
        this._editor_undo = this.element.querySelector('.editor-undo');
        this._editor_redo = this.element.querySelector('.editor-redo');
        this._editor_bold = this.element.querySelector('.editor-bold');
        this._editor_italic = this.element.querySelector('.editor-italic');
        this._editor_underline = this.element.querySelector('.editor-underline');
        this._editor_strikethrough = this.element.querySelector('.editor-strikethrough');
        this._editor_font = this.element.querySelector('.editor-font');
        this._editor_fontsize = this.element.querySelector('.editor-fontsize');
        this._editor_subscript = this.element.querySelector('.editor-subscript');
        this._editor_superscript = this.element.querySelector('.editor-superscript');
        this._editor_elementtag = this.element.querySelector('.editor-elementtag');
        this._editor_alignleft = this.element.querySelector('.editor-alignleft');
        this._editor_aligncenter = this.element.querySelector('.editor-aligncenter');
        this._editor_alignright = this.element.querySelector('.editor-alignright');
        this._editor_alignjustify = this.element.querySelector('.editor-alignjustify');
        this._editor_ltr = this.element.querySelector('.editor-ltr');
        this._editor_rtl = this.element.querySelector('.editor-rtl');
        this._editor_indent = this.element.querySelector('.editor-indent');
        this._editor_outdent = this.element.querySelector('.editor-outdent');
        this._editor_numberlist = this.element.querySelector('.editor-numberlist');
        this._editor_buletlist = this.element.querySelector('.editor-buletlist');
        this._editor_textcolor = this.element.querySelector('.editor-textcolor');
        this._editor_background = this.element.querySelector('.editor-background');
        this._editor_fill = this.element.querySelector('.editor-fill');
        this._editor_eraseformat = this.element.querySelector('.editor-eraseformat');
        this._editor_link = this.element.querySelector('.editor-link');
        this._editor_unlink = this.element.querySelector('.editor-unlink');
        this._editor_image = this.element.querySelector('.editor-image');
        this._editor_media = this.element.querySelector('.editor-media');
        this._editor_iframe = this.element.querySelector('.editor-iframe');
        this._editor_hr = this.element.querySelector('.editor-hr');
        this._editor_source = this.element.querySelector('.editor-source');
        this._dark_mode = this.element.querySelector('.editor-darkmode');
        this._fullscreen = this.element.querySelector('.editor-fullscreen');
        this.addToolBar();
        this.addContent();
        this.setLanguage();
        this.assignEvents();
        this._content.contentEditable = 'true';
        this.execCommand("defaultparagraphSeparator", this.paragraphSeparator);
        if (this.element.hasAttribute('value-id')) {
            this.valueElement = document.getElementById(WNparseString(this.element.getAttribute('value-id'), ''));
            this.html = this.valueElement?.value;
        }
        else
            this.html = '';
        if (this.element.hasAttribute('onchange'))
            this.change = WNGenerateFunction(this.element.getAttribute('onchange'), 't');
        this.OldHtml = this.html;
        if (this.element.hasAttribute('dark-mode')) {
            if (WNparseBoolean(this.element.getAttribute('dark-mode'), false)) {
                this._dark_mode.checked = true;
                this._content.parentElement.classList.add('dark');
            }
        }
        ;
    }
    addToolBar() {
        if (this._editorType == 'simple')
            return;
        if (this._editortoolbar == undefined || this._editortoolbar == null) {
            this._editortoolbar = document.createElement('div');
            this._editortoolbar.className = 'editor-toolbar';
            this.element.appendChild(this._editortoolbar);
        }
        if (this._toolbar == undefined || this._editortoolbar == null) {
            this._toolbar = document.createElement('div');
            this._toolbar.className = 'toolbar';
            this._editortoolbar.appendChild(this._toolbar);
        }
        if (this._editor_undo == null && this._editor_redo == null
            && (this._editorType == 'full')) {
            this._editor_undo = this.createElement('button', 'button editor-undo');
            this._editor_redo = this.createElement('button', 'button editor-redo');
            let grp = this.createElement('div', 'button-group');
            grp.appendChild(this._editor_undo);
            grp.appendChild(this._editor_redo);
            this._toolbar.appendChild(grp);
        }
        if (this._editor_bold == null && this._editor_italic == null && this._editor_underline == null && this._editor_strikethrough == null
            && (this._editorType == 'full' || this._editorType == 'standard')) {
            this._editor_bold = this.createElement('input', '', 'checkbox');
            this._editor_italic = this.createElement('input', '', 'checkbox');
            this._editor_underline = this.createElement('input', '', 'checkbox');
            this._editor_strikethrough = this.createElement('input', '', 'checkbox');
            let grp = this.createElement('div', 'button-group');
            grp.appendChild(this._editor_bold);
            grp.appendChild(this.createElement('label', 'button editor-bold'));
            grp.appendChild(this._editor_italic);
            grp.appendChild(this.createElement('label', 'button editor-italic'));
            grp.appendChild(this._editor_underline);
            grp.appendChild(this.createElement('label', 'button editor-underline'));
            grp.appendChild(this._editor_strikethrough);
            grp.appendChild(this.createElement('label', 'button editor-strikethrough'));
            this._toolbar.appendChild(grp);
        }
        if (this._editor_font == null && this._editor_fontsize == null && this._editor_subscript == null && this._editor_superscript == null
            && (this._editorType == 'full')) {
            this._editor_font = this.createElement('select', '.editor-font');
            this.FontList = WNparseString(this.element.getAttribute('default-fonts'), this.defaultFonts).split(',');
            for (var i = 0; i < this.FontList.length; i++) {
                this.FontList[i] = this.FontList[i].trim();
                let itm = document.createElement('option');
                itm.text = this.FontList[i];
                itm.value = this.FontList[i];
                this._editor_font.appendChild(itm);
            }
            this._editor_fontsize = this.createElement('select', '.editor-fontsize');
            this.FontSize = WNparseString(this.element.getAttribute('default-fonts'), this.defaultFontsize).split(',');
            this.FontSize.forEach(x => {
                let xx = x.split(':');
                let itm = document.createElement('option');
                itm.text = xx[0].trim();
                itm.value = xx[1].trim();
                this._editor_fontsize.appendChild(itm);
            });
            this._editor_subscript = this.createElement('input', '', 'checkbox');
            this._editor_superscript = this.createElement('input', '', 'checkbox');
            this._editor_elementtag = this.createElement('select', '.editor-elementtag');
            this.TagList = WNparseString(this.element.getAttribute('default-tags'), this.defaultTags).split(',');
            this.TagList.forEach(x => {
                let xx = x.split(':');
                let itm = document.createElement('option');
                itm.text = xx[0].trim();
                itm.value = xx[1].trim();
                this._editor_elementtag.appendChild(itm);
            });
            let grp = this.createElement('div', 'button-group');
            grp.appendChild(this._editor_font);
            grp.appendChild(this._editor_fontsize);
            grp.appendChild(this._editor_subscript);
            grp.appendChild(this.createElement('label', 'button editor-subscript'));
            grp.appendChild(this._editor_superscript);
            grp.appendChild(this.createElement('label', 'button editor-superscript'));
            grp.appendChild(this._editor_elementtag);
            this._toolbar.appendChild(grp);
        }
        if (this._editor_alignleft == null && this._editor_aligncenter == null && this._editor_alignright == null &&
            this._editor_alignjustify == null && this._editor_ltr == null && this._editor_rtl == null
            && (this._editorType == 'full' || this._editorType == 'standard')) {
            this._editor_alignleft = this.createElement('input', '', 'checkbox');
            this._editor_aligncenter = this.createElement('input', '', 'checkbox');
            this._editor_alignright = this.createElement('input', '', 'checkbox');
            this._editor_alignjustify = this.createElement('input', '', 'checkbox');
            this._editor_ltr = this.createElement('input', '', 'checkbox');
            this._editor_rtl = this.createElement('input', '', 'checkbox');
            let grp = this.createElement('div', 'button-group');
            grp.appendChild(this._editor_alignleft);
            grp.appendChild(this.createElement('label', 'button editor-alignleft'));
            grp.appendChild(this._editor_aligncenter);
            grp.appendChild(this.createElement('label', 'button editor-aligncenter'));
            grp.appendChild(this._editor_alignright);
            grp.appendChild(this.createElement('label', 'button editor-alignright'));
            grp.appendChild(this._editor_alignjustify);
            grp.appendChild(this.createElement('label', 'button editor-alignjustify'));
            grp.appendChild(this.createElement('div', 'separator'));
            grp.appendChild(this._editor_ltr);
            grp.appendChild(this.createElement('label', 'button editor-ltr'));
            grp.appendChild(this._editor_rtl);
            grp.appendChild(this.createElement('label', 'button editor-rtl'));
            this._toolbar.appendChild(grp);
        }
        if (this._editor_indent == null && this._editor_outdent == null && this._editor_numberlist == null && this._editor_buletlist == null
            && (this._editorType == 'full')) {
            this._editor_indent = this.createElement('button', 'editor-indent');
            this._editor_outdent = this.createElement('button', 'editor-outdent');
            this._editor_numberlist = this.createElement('button', 'editor-numberlist');
            this._editor_buletlist = this.createElement('button', 'editor-buletlist');
            let grp = this.createElement('div', 'button-group');
            grp.appendChild(this._editor_indent);
            grp.appendChild(this._editor_outdent);
            grp.appendChild(this.createElement('div', 'separator'));
            grp.appendChild(this._editor_numberlist);
            grp.appendChild(this._editor_buletlist);
            this._toolbar.appendChild(grp);
        }
        if (this._editor_textcolor == null && this._editor_background == null && this._editor_fill == null && this._editor_eraseformat == null
            && (this._editorType == 'full')) {
            this._editor_textcolor = this.createElement('button', 'dropdown-toggle editor-textcolor');
            this._editor_background = this.createElement('button', 'dropdown-toggle editor-background');
            this._editor_fill = this.createElement('button', 'dropdown-toggle editor-fill');
            this._editor_eraseformat = this.createElement('button', 'editor-eraseformat');
            let grp = this.createElement('div', 'button-group');
            grp.appendChild(this._editor_textcolor);
            grp.appendChild(this._editor_background);
            grp.appendChild(this._editor_fill);
            grp.appendChild(this.createElement('div', 'separator'));
            grp.appendChild(this._editor_eraseformat);
            this._toolbar.appendChild(grp);
        }
        if (this._editor_link == null && this._editor_unlink == null && this._editor_image == null && this._editor_media == null && this._editor_iframe == null && this._editor_hr == null
            && (this._editorType == 'full')) {
            this._editor_link = this.createElement('button', 'dropdown-toggle editor-link');
            this._editor_unlink = this.createElement('button', 'editor-unlink');
            this._editor_image = this.createElement('button', 'dropdown-toggle editor-image');
            this._editor_media = this.createElement('button', 'dropdown-toggle editor-media');
            this._editor_iframe = this.createElement('button', 'dropdown-toggle editor-iframe');
            this._editor_hr = this.createElement('button', 'editor-hr');
            let grp = this.createElement('div', 'button-group');
            grp.appendChild(this._editor_link);
            grp.appendChild(this._editor_unlink);
            grp.appendChild(this._editor_image);
            grp.appendChild(this._editor_media);
            grp.appendChild(this._editor_iframe);
            grp.appendChild(this._editor_hr);
            this._toolbar.appendChild(grp);
        }
        if (this._editor_source == null
            && (this._editorType == 'full')) {
            this._editor_source = this.createElement('button', 'editor-source');
            let grp = this.createElement('div', 'button-group');
            grp.appendChild(this._editor_source);
            this._toolbar.appendChild(grp);
        }
        if (this._dark_mode == null) {
            this._dark_mode = this.createElement('input', '', 'checkbox');
            let grp = this.createElement('div', 'button-group');
            grp.appendChild(this._dark_mode);
            grp.appendChild(this.createElement('label', 'button editor-darkmode'));
            this._toolbar.appendChild(grp);
        }
        if (this._fullscreen == null) {
            this._fullscreen = this.createElement('button', 'editor-fullscreen');
            let grp = this._dark_mode?.parentElement ?? this.createElement('div', 'button-group');
            grp.appendChild(this._fullscreen);
            this._toolbar.appendChild(grp);
        }
    }
    addContent() {
        if (this._content != null)
            return;
        let editorbody = document.createElement('div');
        editorbody.className = 'editor-body';
        this._content = document.createElement('div');
        this._content.className = 'editor-content';
        editorbody.appendChild(this._content);
        editorbody.addEventListener("click", () => {
            this._content.focus();
        });
        editorbody.addEventListener('paste', (event) => {
            let paste = (event.clipboardData).getData('text');
            paste = this.cleanWordPaste(paste);
            const selection = window.getSelection();
            if (!selection.rangeCount)
                return false;
            selection.deleteFromDocument();
            selection.getRangeAt(0).insertNode(document.createElement(paste));
            event.preventDefault();
            return true;
        });
        this._editor_source_textarea = document.createElement('textarea');
        this._editor_source_textarea.className = 'editor-source';
        editorbody.appendChild(this._editor_source_textarea);
        this.element.appendChild(editorbody);
    }
    setLanguage() {
        if (this._editor_undo != null)
            this._editor_undo.title = this._lang['undo'];
        if (this._editor_redo != null)
            this._editor_redo.title = this._lang['redo'];
        if (this._editor_bold != null)
            this._editor_bold.nextSibling.title = this._lang['bold'];
        if (this._editor_italic != null)
            this._editor_italic.nextSibling.title = this._lang['italic'];
        if (this._editor_underline != null)
            this._editor_underline.nextSibling.title = this._lang['underline'];
        if (this._editor_strikethrough != null)
            this._editor_strikethrough.nextSibling.title = this._lang['strikethrough'];
        if (this._editor_font != null)
            this._editor_font.title = this._lang['font'];
        if (this._editor_fontsize != null)
            this._editor_fontsize.title = this._lang['fontsize'];
        if (this._editor_subscript != null)
            this._editor_subscript.nextSibling.title = this._lang['subscript'];
        if (this._editor_superscript != null)
            this._editor_superscript.nextSibling.title = this._lang['superscript'];
        if (this._editor_elementtag != null)
            this._editor_elementtag.title = this._lang['style'];
        if (this._editor_alignleft != null)
            this._editor_alignleft.nextSibling.title = this._lang['alignleft'];
        if (this._editor_aligncenter != null)
            this._editor_aligncenter.nextSibling.title = this._lang['aligncenter'];
        if (this._editor_alignright != null)
            this._editor_alignright.nextSibling.title = this._lang['alignright'];
        if (this._editor_alignjustify != null)
            this._editor_alignjustify.nextSibling.title = this._lang['alignjustify'];
        if (this._editor_ltr != null)
            this._editor_ltr.nextSibling.title = this._lang['ltr'];
        if (this._editor_rtl != null)
            this._editor_rtl.nextSibling.title = this._lang['rtl'];
        if (this._editor_indent != null)
            this._editor_indent.title = this._lang['indent'];
        if (this._editor_outdent != null)
            this._editor_outdent.title = this._lang['outdent'];
        if (this._editor_numberlist != null)
            this._editor_numberlist.title = this._lang['numberlist'];
        if (this._editor_buletlist != null)
            this._editor_buletlist.title = this._lang['buletlist'];
        if (this._editor_textcolor != null)
            this._editor_textcolor.title = this._lang['textcolor'];
        if (this._editor_background != null)
            this._editor_background.title = this._lang['background'];
        if (this._editor_fill != null)
            this._editor_fill.title = this._lang['fill'];
        if (this._editor_eraseformat != null)
            this._editor_eraseformat.title = this._lang['eraseformat'];
        if (this._editor_link != null)
            this._editor_link.title = this._lang['link'];
        if (this._editor_unlink != null)
            this._editor_unlink.title = this._lang['unlink'];
        if (this._editor_image != null)
            this._editor_image.title = this._lang['image'];
        if (this._editor_media != null)
            this._editor_media.title = this._lang['media'];
        if (this._editor_iframe != null)
            this._editor_iframe.title = this._lang['iframe'];
        if (this._editor_hr != null)
            this._editor_hr.title = this._lang['hr'];
        if (this._editor_source != null)
            this._editor_source.title = this._lang['source'];
        if (this._dark_mode != null)
            this._dark_mode.nextSibling.title = this._lang['dark_mode'];
        if (this._fullscreen != null)
            this._fullscreen.title = this._lang['fullscreen'];
    }
    createElement(eltype, classname, type = null) {
        let r = document.createElement(eltype);
        r.className = classname;
        if (type != null)
            r.type = type;
        return r;
    }
    assignEvents() {
        this._editor_undo?.addEventListener('click', () => { this.execCommand('undo'); });
        this._editor_redo?.addEventListener('click', () => { this.execCommand('redo'); });
        this._editor_bold?.nextSibling.addEventListener('click', () => { this.setSelectionStyle('font-weight', 'bold', true); });
        this._editor_italic?.nextSibling.addEventListener('click', () => { this.setSelectionStyle('font-style', 'italic', true); });
        this._editor_underline?.nextSibling.addEventListener('click', () => { this.setSelectionStyle('text-decoration', 'underline', true); });
        this._editor_strikethrough?.nextSibling.addEventListener('click', () => { this.setSelectionStyle('text-decoration', 'line-through', true); });
        this._editor_font?.addEventListener("change", (e) => {
            var value = e.target.value;
            if (value == this.FontList[0])
                this.setSelectionStyle('font-family', '', false);
            else {
                this.setSelectionStyle('font-family', value, false);
            }
        });
        this._editor_fontsize?.addEventListener("change", (e) => {
            var value = e.target.value;
            if (value == this.FontList[0])
                this.setSelectionStyle('font-size', '', false);
            else
                this.setSelectionStyle('font-size', value, false);
        });
        this._editor_subscript?.nextSibling.addEventListener('click', () => {
            if (this._editor_subscript.checked)
                this.execCommand('removeFormat');
            else
                this.execCommand('subscript');
        });
        this._editor_superscript?.nextSibling.addEventListener('click', () => { this.execCommand('superscript'); });
        this._editor_elementtag?.addEventListener("change", (e) => {
            this.setSelectionTag(e.target.value);
        });
        this._editor_alignleft?.nextSibling.addEventListener('click', () => { this.setSelectionStyle('text-align', 'start', true, true); });
        this._editor_aligncenter?.nextSibling.addEventListener('click', () => { this.setSelectionStyle('text-align', 'center', true, true); });
        this._editor_alignright?.nextSibling.addEventListener('click', () => { this.setSelectionStyle('text-align', 'end', true, true); });
        this._editor_alignjustify?.nextSibling.addEventListener('click', () => { this.setSelectionStyle('text-align', 'justify', true, true); });
        this._editor_ltr?.nextSibling.addEventListener('click', () => { this.setSelectionStyle('direction', 'ltr', true, true); });
        this._editor_rtl?.nextSibling.addEventListener('click', () => { this.setSelectionStyle('direction', 'rtl', true, true); });
        this._editor_indent?.addEventListener('click', () => { this.setSelectionStyle('padding-inline-start', '+1em', false); });
        this._editor_outdent?.addEventListener('click', () => { this.setSelectionStyle('padding-inline-start', '-1em', false); });
        this._editor_numberlist?.addEventListener('click', () => { this.execCommand('insertOrderedList'); });
        this._editor_buletlist?.addEventListener('click', () => { this.execCommand('insertUnorderedList'); });
        this._editor_textcolor?.addEventListener('click', () => { this.colorPicker(this._editor_textcolor, 'color'); });
        this._editor_background?.addEventListener('click', () => { this.colorPicker(this._editor_background, 'background-color'); });
        this._editor_fill?.addEventListener('click', () => { this.colorPicker(this._editor_fill, 'background-color', true); });
        this._editor_eraseformat?.addEventListener('click', () => { this.execCommand('removeFormat'); });
        this._editor_link?.addEventListener('click', () => { this.insertLink(); });
        this._editor_unlink?.addEventListener('click', () => { this.execCommand("unlink", ''); });
        this._editor_image?.addEventListener('click', () => { this.insertImage(); });
        this._editor_media?.addEventListener('click', () => { this.insertMedia(); });
        this._editor_iframe?.addEventListener('click', () => { this.insertIFrame(); });
        this._editor_hr?.addEventListener('click', () => { this.execCommand("insertHTML", '<hr/>'); });
        this._editor_source?.addEventListener('click', () => { this.showSource(); });
        document.addEventListener("selectionchange", () => {
            if (this._content === document.activeElement) {
                this.recheckToolbar();
            }
        });
        this._editor_source_textarea.addEventListener("input", () => {
            const parser = new DOMParser();
            const doc3 = parser.parseFromString(this._editor_source_textarea.value, "text/html");
            this._content.innerHTML = doc3.body.innerHTML;
            if (this.change != null && this.OldHtml != this.html) {
                this.change(this);
                this.OldHtml = this.html;
            }
        });
        this._dark_mode?.nextSibling.addEventListener('click', () => { this.switchDarkMode(); });
        this._fullscreen?.addEventListener('click', () => { this.switchFullScreen(); });
    }
    recheckToolbar() {
        if (this._editor_bold != undefined)
            this._editor_bold.checked = this.getCurrentStyle('font-weight') > '500';
        if (this._editor_italic != undefined)
            this._editor_italic.checked = this.getCurrentStyle('font-style') == 'italic';
        if (this._editor_underline != undefined)
            this._editor_underline.checked = this.getCurrentStyle('font-style') == 'underline';
        if (this._editor_strikethrough != undefined)
            this._editor_strikethrough.checked = this.getCurrentStyle('font-style') == 'line-through';
        if (this._editor_font != undefined) {
            let fontfamily = this.getCurrentStyle('font-family').toString();
            this._editor_font.value = this.FontList.find((e) => e == fontfamily) ?? this.FontList[0];
        }
        if (this._editor_fontsize != undefined) {
            let fontSize = this.getCurrentStyle('font-size').toString();
            this._editor_fontsize.value = (this.FontSize.find((e) => e.includes(fontSize)) ?? this.FontSize[3]).split(':')[1];
        }
        if (this._editor_subscript != undefined)
            this._editor_subscript.checked = this.isSelectionInTag('sub');
        if (this._editor_superscript != undefined)
            this._editor_superscript.checked = this.isSelectionInTag('sup');
        if (this._editor_alignleft != undefined)
            this._editor_alignleft.checked = this.getCurrentStyle('text-align') == 'start';
        if (this._editor_aligncenter != undefined)
            this._editor_aligncenter.checked = this.getCurrentStyle('text-align') == 'center';
        if (this._editor_alignright != undefined)
            this._editor_alignright.checked = this.getCurrentStyle('text-align') == 'end';
        if (this._editor_alignjustify != undefined)
            this._editor_alignjustify.checked = this.getCurrentStyle('text-align') == 'justify';
        if (this._editor_rtl != undefined)
            this._editor_rtl.checked = this.getCurrentStyle('direction') == 'rtl';
        if (this._editor_ltr != undefined)
            this._editor_ltr.checked = this.getCurrentStyle('direction') == 'ltr';
        if (this._editor_textcolor != undefined)
            this._editor_textcolor.style.borderBlockEndColor = this.getCurrentStyle('color');
        if (this._editor_background != undefined)
            this._editor_background.style.borderBlockEndColor = this.getCurrentStyle('background-color');
        if (this._editor_fill != undefined)
            this._editor_fill.style.borderBlockEndColor = getComputedStyle(this.getParentTagSelection()).getPropertyValue('background-color');
        if (this._editor_elementtag != undefined) {
            let tagName = this.getParentTagSelection().tagName.toLowerCase();
            this._editor_elementtag.value = (this.TagList.find((e) => e.includes(tagName)) ?? this.TagList[0]).split(':')[1];
        }
        if (this.valueElement != undefined)
            this.valueElement.value = this.html;
        if (this.change != null && this.OldHtml != this.html) {
            this.change(this);
            this.OldHtml = this.html;
        }
    }
    isSelectionInTag(tag) {
        tag = tag.toUpperCase();
        let currentNode = window.getSelection().focusNode;
        while (!currentNode.classList?.contains('editor-content')) {
            if (currentNode.tagName == tag)
                return true;
            currentNode = currentNode.parentNode;
        }
        return false;
    }
    execCommand(cmd, value = null) {
        document.execCommand(cmd, false, value);
    }
    getCurrentStyle(prop) {
        let value = '';
        var element = document.getSelection().focusNode;
        for (var p = element; p; p = p.parentNode) {
            if (p.nodeType != 3) {
                var style = window.getComputedStyle(p, null);
                if (style) {
                    value = style.getPropertyValue(prop);
                    break;
                }
            }
        }
        return value;
    }
    getParentTagSelection() {
        let currentNode = window.getSelection().focusNode;
        for (var i = 0; i < 2; i++) {
            if (!currentNode?.classList?.contains('editor-content')) {
                if (currentNode.tagName != undefined)
                    return currentNode;
                currentNode = currentNode.parentNode;
            }
        }
        return null;
    }
    setSelectionStyle(prop, value = null, toggle, getParentTag = false) {
        let signValue = '';
        if (value.startsWith('+') || value.startsWith('-')) {
            signValue = value.substring(0, 1);
            value = value.substring(1);
        }
        if (window.getSelection) {
            var sel = window.getSelection();
            if (sel.rangeCount) {
                var range = sel.getRangeAt(0).cloneRange();
                var span = range.commonAncestorContainer;
                if (getParentTag)
                    span = this.getParentTagSelection();
                else {
                    var rangeText = range.toString();
                    if (span == null || (span.textContent != rangeText && rangeText != '')) {
                        span = document.createElement("span");
                        span.innerText = rangeText;
                        range.deleteContents();
                        range.insertNode(span);
                        sel.removeAllRanges();
                        sel.addRange(range);
                    }
                    else
                        span = span.parentElement;
                }
                if (span.innerHTML != '') {
                    span.childNodes.forEach(x => {
                        if (x.nodeName != '#text')
                            x?.style.removeProperty(prop);
                    });
                    if (toggle) {
                        if (span.style.getPropertyValue(prop) != value)
                            span.style.setProperty(prop, value);
                        else
                            span.style.setProperty(prop, '');
                    }
                    else {
                        if (signValue == '')
                            span.style.setProperty(prop, value);
                        else {
                            value = WNCalcValue(span.style.getPropertyValue(prop), value, signValue, span, 0, 1000);
                            span.style.setProperty(prop, value);
                        }
                    }
                    this._content.focus();
                }
            }
        }
        this.recheckToolbar();
    }
    setSelectionTag(value = null) {
        var elem = undefined;
        if (window.getSelection) {
            var sel = window.getSelection();
            if (sel.rangeCount) {
                var range = sel.getRangeAt(0).cloneRange();
                var rangeText = range.toString();
                var parent = null;
                if (range.startOffset == range.endOffset) {
                    parent = this.getParentTagSelection();
                    rangeText = parent.innerText;
                }
                else {
                    parent = document.createElement("span");
                    parent.innerText = rangeText;
                    range.deleteContents();
                    range.insertNode(parent);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
                elem = range.commonAncestorContainer;
                elem = document.createElement(value);
                elem.innerText = rangeText;
                parent.before(elem);
                parent.remove();
                this._content.focus();
            }
        }
        this.recheckToolbar();
        return elem;
    }
    saveSelection() {
        if (window.getSelection) {
            let sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                var ranges = [];
                for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                    ranges.push(sel.getRangeAt(i));
                }
                return ranges;
            }
        }
        else if (document.getSelection() && document.createRange()) {
            return document.createRange();
        }
        return null;
    }
    restoreSelection(savedSel) {
        if (savedSel) {
            if (window.getSelection) {
                let sel = window.getSelection();
                sel.removeAllRanges();
                for (var i = 0, len = savedSel.length; i < len; ++i) {
                    sel.addRange(savedSel[i]);
                }
            }
            else if (document.getSelection() && savedSel.select) {
                savedSel.select();
            }
        }
    }
    cleanWordPaste(str) {
        str = str.replace(/<o:p>\s*<\/o:p>/g, "");
        str = str.replace(/<o:p>.*?<\/o:p>/g, "&nbsp;");
        str = str.replace(/\s*mso-[^:]+:[^;"]+;?/gi, "");
        str = str.replace(/\s*MARGIN: 0cm 0cm 0pt\s*;/gi, "");
        str = str.replace(/\s*MARGIN: 0cm 0cm 0pt\s*"/gi, "\"");
        str = str.replace(/\s*TEXT-INDENT: 0cm\s*;/gi, "");
        str = str.replace(/\s*TEXT-INDENT: 0cm\s*"/gi, "\"");
        str = str.replace(/\s*TEXT-ALIGN: [^\s;]+;?"/gi, "\"");
        str = str.replace(/\s*PAGE-BREAK-BEFORE: [^\s;]+;?"/gi, "\"");
        str = str.replace(/\s*FONT-VARIANT: [^\s;]+;?"/gi, "\"");
        str = str.replace(/\s*tab-stops:[^;"]*;?/gi, "");
        str = str.replace(/\s*tab-stops:[^"]*/gi, "");
        str = str.replace(/\s*face="[^"]*"/gi, "");
        str = str.replace(/\s*face=[^ >]*/gi, "");
        str = str.replace(/\s*FONT-FAMILY:[^;"]*;?/gi, "");
        str = str.replace(/<(\w[^>]*) class=([^ |>]*)([^>]*)/gi, "<$1$3");
        str = str.replace(/<(\w[^>]*) style="([^\"]*)"([^>]*)/gi, "<$1$3");
        str = str.replace(/\s*style="\s*"/gi, '');
        str = str.replace(/<SPAN\s*[^>]*>\s*&nbsp;\s*<\/SPAN>/gi, '&nbsp;');
        str = str.replace(/<SPAN\s*[^>]*><\/SPAN>/gi, '');
        str = str.replace(/<(\w[^>]*) lang=([^ |>]*)([^>]*)/gi, "<$1$3");
        str = str.replace(/<SPAN\s*>(.*?)<\/SPAN>/gi, '$1');
        str = str.replace(/<FONT\s*>(.*?)<\/FONT>/gi, '$1');
        str = str.replace(/<\\?\?xml[^>]*>/gi, "");
        str = str.replace(/<\/?\w+:[^>]*>/gi, "");
        str = str.replace(/<H\d>\s*<\/H\d>/gi, '');
        str = str.replace(/<H1([^>]*)>/gi, '');
        str = str.replace(/<H2([^>]*)>/gi, '');
        str = str.replace(/<H3([^>]*)>/gi, '');
        str = str.replace(/<H4([^>]*)>/gi, '');
        str = str.replace(/<H5([^>]*)>/gi, '');
        str = str.replace(/<H6([^>]*)>/gi, '');
        str = str.replace(/<\/H\d>/gi, '<br>');
        str = str.replace(/<(U|I|STRIKE)>&nbsp;<\/\1>/g, '&nbsp;');
        str = str.replace(/<(B|b)>&nbsp;<\/\b|B>/g, '');
        str = str.replace(/<([^\s>]+)[^>]*>\s*<\/\1>/g, '');
        str = str.replace(/<([^\s>]+)[^>]*>\s*<\/\1>/g, '');
        str = str.replace(/<([^\s>]+)[^>]*>\s*<\/\1>/g, '');
        var re = new RegExp("(<P)([^>]*>.*?)(<\/P>)", "gi");
        str = str.replace(re, "<div$2</div>");
        var re2 = new RegExp("(<font|<FONT)([^*>]*>.*?)(<\/FONT>|<\/font>)", "gi");
        str = str.replace(re2, "<div$2</div>");
        str = str.replace(/size|SIZE = ([\d]{1})/g, '');
        str = str.replace(/(?:\r\n|\r|\n)/g, '<br/>');
        str = str.replace(/¬/g, '\u200C');
        return str;
    }
    colorPicker(parent, style, selectTag = false) {
        if (this._colorPicker == undefined)
            this.createcolorPickerObject();
        this._colorPickerStyle = style;
        this._colorPickerselectTag = selectTag;
        this._colorPickerDropDown.element = parent;
        this._colorPickerDropDown.setPosition();
        this._colorPickerInput.value = WNRGB2HEX(this.getCurrentStyle(style));
        this._colorPickerDropDown.show();
    }
    _colorPickerStyle = '';
    _colorPickerselectTag = false;
    _colorPickerDropDown;
    _oldSelection;
    createcolorPickerObject() {
        this._colorPicker = document.createElement('div');
        this._colorPicker.classList.add('dropdown');
        this._colorPicker.id = this.element.id + '_colorPicker';
        this._colorPicker.setAttribute('wn-dropdown', this._colorPicker.id);
        let _colorPicker = document.createElement('div');
        _colorPicker.classList.add('colorPicker');
        let colorPickerbody = document.createElement('div');
        colorPickerbody.className = 'colorPicker-body';
        let btnErase = document.createElement('button');
        btnErase.classList.add('editor-eraseformat');
        btnErase.addEventListener('click', () => {
            this.setSelectionStyle(this._colorPickerStyle, '', false, this._colorPickerselectTag);
            this._colorPickerDropDown.hide();
        });
        this._colorPickerInput = document.createElement('input');
        this._colorPickerInput.type = 'color';
        this._colorPickerInput.setAttribute('rgba', '');
        this._colorPickerInput.addEventListener('input', () => {
            this.setSelectionStyle(this._colorPickerStyle, this._colorPickerInput.value, false, this._colorPickerselectTag);
            this._colorPickerDropDown.hide();
        });
        for (var i = 0; i < this.dfaultcolorPicker.length; i++) {
            let btn = document.createElement('button');
            btn.style.backgroundColor = this.dfaultcolorPicker[i];
            btn.addEventListener('click', (e) => {
                let btn = e.target;
                this._colorPickerInput.value = WNRGB2HEX(btn.style.backgroundColor);
                this.setSelectionStyle(this._colorPickerStyle, this._colorPickerInput.value, false, this._colorPickerselectTag);
            });
            colorPickerbody.appendChild(btn);
        }
        _colorPicker.appendChild(colorPickerbody);
        let colorPickerbody1 = document.createElement('div');
        colorPickerbody1.className = 'colorPicker-body';
        colorPickerbody1.appendChild(btnErase);
        colorPickerbody1.appendChild(this._colorPickerInput);
        _colorPicker.appendChild(colorPickerbody1);
        this._colorPicker.appendChild(_colorPicker);
        this._toolbar.append(this._colorPicker);
        this._colorPickerDropDown = new WNDropdown(this._colorPicker);
    }
    _insertLinkDropDown;
    insertLink() {
        if (this._insertLink == undefined)
            this.createLinkObject();
        let elem = this.getParentTagSelection();
        this._insertLinkUrl.value = '';
        this._insertLinkTitle.value = '';
        this._insertLinkTarget.value = '';
        if (elem.tagName.toLowerCase() == 'a') {
            this._insertLinkUrl.value = elem.href;
            this._insertLinkTitle.value = elem.title;
            this._insertLinkTarget.value = '';
        }
        this._insertLinkDropDown.element = this._editor_link;
        this._insertLinkDropDown.setPosition();
        this._oldSelection = this.saveSelection();
        this._insertLinkDropDown.show();
    }
    createLinkObject() {
        this._insertLink = document.createElement('div');
        this._insertLink.classList.add('dropdown');
        this._insertLink.id = this.element.id + '_insertLink';
        this._insertLink.setAttribute('wn-dropdown', this._insertLink.id);
        let _insertLink = document.createElement('div');
        _insertLink.classList.add('linkpicker');
        let field1 = document.createElement('div');
        let urlLabel = document.createElement('label');
        urlLabel.innerText = this._lang["url"];
        field1.appendChild(urlLabel);
        this._insertLinkUrl = document.createElement('input');
        this._insertLinkUrl.type = "url";
        this._insertLinkUrl.style.direction = 'ltr';
        field1.appendChild(this._insertLinkUrl);
        _insertLink.appendChild(field1);
        let field2 = document.createElement('div');
        let targetLabel = document.createElement('label');
        targetLabel.innerText = this._lang["target"];
        field2.appendChild(targetLabel);
        this._insertLinkTarget = document.createElement('select');
        this._insertLinkTarget.style.direction = 'ltr';
        this._insertLinkTarget.innerHTML = "<option></option><option>_blank</option><option>_parent</option><option>_self</option><option>_top</option>";
        field2.appendChild(this._insertLinkTarget);
        _insertLink.appendChild(field2);
        let field3 = document.createElement('div');
        let titleLabel = document.createElement('label');
        titleLabel.innerText = this._lang["title"];
        field3.appendChild(titleLabel);
        this._insertLinkTitle = document.createElement('input');
        this._insertLinkTitle.type = "text";
        field3.appendChild(this._insertLinkTitle);
        _insertLink.appendChild(field3);
        let field4 = document.createElement('div');
        let insert = document.createElement('button');
        insert.innerText = this._lang["insert"];
        insert.addEventListener("click", () => {
            this.restoreSelection(this._oldSelection);
            if (this._insertLinkUrl.value != '') {
                this.execCommand("unlink", '');
                let link = this.setSelectionTag("a");
                link.href = this._insertLinkUrl.value;
                link.title = this._insertLinkTitle.value;
                link.setAttribute('target', this._insertLinkTarget.value);
                this._insertLinkDropDown.hide();
            }
        });
        field4.appendChild(insert);
        _insertLink.appendChild(field4);
        this._insertLink.appendChild(_insertLink);
        this._toolbar.append(this._insertLink);
        this._insertLinkDropDown = new WNDropdown(this._insertLink);
        this._insertLinkDropDown.checkOnlyDropDown = true;
    }
    _insertImageDropDown;
    _insertImageSelected;
    insertImage() {
        if (this._insertImage == undefined)
            this.createImageObject();
        let elem = this.getParentTagSelection();
        if (elem.tagName.toLowerCase() != 'img') {
            elem = elem.querySelector('img');
        }
        this._insertImageUrl.value = '';
        this._insertImageAlt.value = '';
        this._insertImageWidth.value = '';
        this._insertImageHeight.value = '';
        this._insertImageBorderWidth.value = '';
        this._insertImageBorderStyle.value = 'none';
        this._insertImageClass.value = '';
        if (elem?.tagName.toLowerCase() == 'img') {
            this._insertImageSelected = elem;
            this._insertImageUrl.value = this._insertImageSelected.src;
            this._insertImageAlt.value = this._insertImageSelected.alt;
            this._insertImageWidth.value = this._insertImageSelected.style.width;
            this._insertImageHeight.value = this._insertImageSelected.style.height;
            this._insertImageBorderWidth.value = this._insertImageSelected.style.borderWidth;
            this._insertImageBorderStyle.value = this._insertImageSelected.style.borderStyle;
            this._insertImageClass.value = this._insertImageSelected.className;
        }
        else
            this._insertImageSelected = null;
        this._insertImageDropDown.element = this._editor_image;
        this._insertImageDropDown.setPosition();
        this._oldSelection = this.saveSelection();
        this._insertImageDropDown.show();
    }
    createImageObject() {
        this._insertImage = document.createElement('div');
        this._insertImage.classList.add('dropdown');
        this._insertImage.id = this.element.id + '_insertImage';
        this._insertImage.setAttribute('wn-dropdown', this._insertImage.id);
        let _insertImage = document.createElement('div');
        _insertImage.classList.add('imagepicker');
        let field1 = document.createElement('div');
        let urlLabel = document.createElement('label');
        urlLabel.innerText = this._lang["url"];
        field1.appendChild(urlLabel);
        this._insertImageUrl = document.createElement('input');
        this._insertImageUrl.type = "url";
        this._insertImageUrl.style.direction = 'ltr';
        field1.appendChild(this._insertImageUrl);
        _insertImage.appendChild(field1);
        let field2 = document.createElement('div');
        let altLabel = document.createElement('label');
        altLabel.innerText = this._lang["alt"];
        field2.appendChild(altLabel);
        this._insertImageAlt = document.createElement('input');
        this._insertImageAlt.type = "text";
        field2.appendChild(this._insertImageAlt);
        _insertImage.appendChild(field2);
        let field3 = document.createElement('div');
        field3.className = "row";
        let field3ig1 = document.createElement('ig');
        field3ig1.className = "col-6";
        let widthLabel = document.createElement('label');
        widthLabel.innerText = this._lang["width"];
        field3ig1.appendChild(widthLabel);
        this._insertImageWidth = document.createElement('input');
        this._insertImageWidth.style.direction = 'ltr';
        field3ig1.appendChild(this._insertImageWidth);
        field3.appendChild(field3ig1);
        let field3ig2 = document.createElement('ig');
        field3ig2.className = "col-6";
        let heightLabel = document.createElement('label');
        heightLabel.innerText = this._lang["height"];
        field3ig2.appendChild(heightLabel);
        this._insertImageHeight = document.createElement('input');
        this._insertImageHeight.style.direction = 'ltr';
        field3ig2.appendChild(this._insertImageHeight);
        field3.appendChild(field3ig2);
        _insertImage.appendChild(field3);
        let field4 = document.createElement('div');
        field4.className = "row";
        let field4ig1 = document.createElement('ig');
        field4ig1.className = "col-6";
        let borderwidthLabel = document.createElement('label');
        borderwidthLabel.innerText = this._lang["borderwidth"];
        field4ig1.appendChild(borderwidthLabel);
        this._insertImageBorderWidth = document.createElement('input');
        this._insertImageBorderWidth.style.direction = 'ltr';
        field4ig1.appendChild(this._insertImageBorderWidth);
        field4.appendChild(field4ig1);
        let field4ig2 = document.createElement('ig');
        field4ig2.className = "col-6";
        let borderstyleLabel = document.createElement('label');
        borderstyleLabel.innerText = this._lang["borderstyle"];
        field4ig2.appendChild(borderstyleLabel);
        this._insertImageBorderStyle = document.createElement('select');
        this._insertImageBorderStyle.innerHTML = "<option>none</option><option>solid</option><option>dashed</option>";
        field4ig2.appendChild(this._insertImageBorderStyle);
        field4.appendChild(field4ig2);
        _insertImage.appendChild(field4);
        let field5 = document.createElement('div');
        let ClassLabel = document.createElement('label');
        ClassLabel.innerText = this._lang["class"];
        field5.appendChild(ClassLabel);
        this._insertImageClass = document.createElement('input');
        this._insertImageClass.style.direction = 'ltr';
        field5.appendChild(this._insertImageClass);
        _insertImage.appendChild(field5);
        let field6 = document.createElement('div');
        let insert = document.createElement('button');
        insert.innerText = this._lang["insert"];
        insert.addEventListener("click", () => {
            this.restoreSelection(this._oldSelection);
            if (this._insertImageUrl.value != '') {
                if (this._insertImageSelected == null) {
                    this._insertImageSelected = document.createElement('img');
                    window.getSelection().getRangeAt(0).insertNode(this._insertImageSelected);
                }
                this._insertImageSelected.src = this._insertImageUrl.value;
                this._insertImageSelected.alt = this._insertImageAlt.value;
                if (this._insertImageWidth.value != '') {
                    if (!(this._insertImageWidth.value.includes('px') ||
                        this._insertImageWidth.value.includes('%') ||
                        this._insertImageWidth.value.includes('em') ||
                        this._insertImageWidth.value.includes('rem')))
                        this._insertImageWidth.value += 'px';
                    this._insertImageSelected.style.width = this._insertImageWidth.value;
                }
                if (this._insertImageHeight.value != '') {
                    if (!(this._insertImageHeight.value.includes('px') ||
                        this._insertImageHeight.value.includes('%') ||
                        this._insertImageHeight.value.includes('em') ||
                        this._insertImageHeight.value.includes('rem')))
                        this._insertImageHeight.value += 'px';
                    this._insertImageSelected.style.height = this._insertImageHeight.value;
                }
                if (this._insertImageBorderWidth.value != '') {
                    if (!(this._insertImageBorderWidth.value.includes('px') ||
                        this._insertImageBorderWidth.value.includes('%') ||
                        this._insertImageBorderWidth.value.includes('em') ||
                        this._insertImageBorderWidth.value.includes('rem')))
                        this._insertImageBorderWidth.value += 'px';
                    this._insertImageSelected.style.borderWidth = this._insertImageBorderWidth.value;
                }
                if (this._insertImageBorderStyle.value != '')
                    this._insertImageSelected.style.borderStyle = this._insertImageBorderStyle.value;
                this._insertImageSelected.className = this._insertImageClass.value;
                this._insertImageDropDown.hide();
            }
        });
        field6.appendChild(insert);
        _insertImage.appendChild(field6);
        this._insertImage.appendChild(_insertImage);
        this._toolbar.append(this._insertImage);
        this._insertImageDropDown = new WNDropdown(this._insertImage);
        this._insertImageDropDown.checkOnlyDropDown = true;
    }
    _insertMediaDropDown;
    _insertMediaSelected;
    insertMedia() {
        if (this._insertMedia == undefined)
            this.createMediaObject();
        let elem = this.getParentTagSelection();
        if (elem.tagName.toLowerCase() != 'video' && elem.tagName.toLowerCase() != 'audio') {
            let elemVideo = elem.querySelector('video');
            if (elemVideo == null)
                elem = elem.querySelector('audio');
            else
                elem = elemVideo;
        }
        this._insertMediaType.value = 'video';
        this._insertMediaUrl.value = '';
        this._insertMediaWidth.value = '';
        this._insertMediaHeight.value = '';
        this._insertMediaControls.checked = true;
        this._insertMediaMute.checked = false;
        this._insertMediaautoPlay.checked = false;
        this._insertMediaBorderWidth.value = '';
        this._insertMediaBorderStyle.value = 'none';
        this._insertMediaClass.value = '';
        if (elem != null) {
            this._insertMediaSelected = elem;
            this._insertMediaType.value = this._insertMediaSelected.tagName.toLowerCase();
            this._insertMediaUrl.value = this._insertMediaSelected.src;
            this._insertMediaWidth.value = this._insertMediaSelected.style.width;
            this._insertMediaHeight.value = this._insertMediaSelected.style.height;
            this._insertMediaControls.checked = this._insertMediaSelected.hasAttribute('controls');
            this._insertMediaMute.checked = this._insertMediaSelected.hasAttribute('muted');
            this._insertMediaautoPlay.checked = this._insertMediaSelected.hasAttribute('autoPlay');
            this._insertMediaBorderWidth.value = this._insertMediaSelected.style.borderWidth;
            this._insertMediaBorderStyle.value = this._insertMediaSelected.style.borderStyle;
            this._insertMediaClass.value = this._insertMediaSelected.className;
        }
        else
            this._insertMediaSelected = null;
        this._insertMediaDropDown.element = this._editor_media;
        this._insertMediaDropDown.setPosition();
        this._oldSelection = this.saveSelection();
        this._insertMediaDropDown.show();
    }
    createMediaObject() {
        this._insertMedia = document.createElement('div');
        this._insertMedia.classList.add('dropdown');
        this._insertMedia.id = this.element.id + '_insertMedia';
        this._insertMedia.setAttribute('wn-dropdown', this._insertMedia.id);
        let _insertMedia = document.createElement('div');
        _insertMedia.classList.add('imagepicker');
        let field0 = document.createElement('div');
        let mediaLabel = document.createElement('label');
        mediaLabel.innerText = this._lang["type"];
        field0.appendChild(mediaLabel);
        this._insertMediaType = document.createElement('select');
        this._insertMediaType.innerHTML = "<option>video</option><option>audio</option>";
        field0.appendChild(this._insertMediaType);
        _insertMedia.appendChild(field0);
        let field1 = document.createElement('div');
        let urlLabel = document.createElement('label');
        urlLabel.innerText = this._lang["url"];
        field1.appendChild(urlLabel);
        this._insertMediaUrl = document.createElement('input');
        this._insertMediaUrl.type = "url";
        this._insertMediaUrl.style.direction = 'ltr';
        field1.appendChild(this._insertMediaUrl);
        _insertMedia.appendChild(field1);
        let field3 = document.createElement('div');
        field3.className = "row";
        let field3ig1 = document.createElement('ig');
        field3ig1.className = "col-6";
        let widthLabel = document.createElement('label');
        widthLabel.innerText = this._lang["width"];
        field3ig1.appendChild(widthLabel);
        this._insertMediaWidth = document.createElement('input');
        this._insertMediaWidth.style.direction = 'ltr';
        field3ig1.appendChild(this._insertMediaWidth);
        field3.appendChild(field3ig1);
        let field3ig2 = document.createElement('ig');
        field3ig2.className = "col-6";
        let heightLabel = document.createElement('label');
        heightLabel.innerText = this._lang["height"];
        field3ig2.appendChild(heightLabel);
        this._insertMediaHeight = document.createElement('input');
        this._insertMediaHeight.style.direction = 'ltr';
        field3ig2.appendChild(this._insertMediaHeight);
        field3.appendChild(field3ig2);
        _insertMedia.appendChild(field3);
        let field2 = document.createElement('div');
        let controlsLabel = document.createElement('label');
        controlsLabel.innerText = this._lang["controls"];
        this._insertMediaControls = document.createElement('input');
        this._insertMediaControls.type = "checkbox";
        controlsLabel.appendChild(this._insertMediaControls);
        field2.appendChild(controlsLabel);
        _insertMedia.appendChild(field2);
        let field7 = document.createElement('div');
        let MuteLabel = document.createElement('label');
        MuteLabel.innerText = this._lang["mute"];
        this._insertMediaMute = document.createElement('input');
        this._insertMediaMute.type = "checkbox";
        MuteLabel.appendChild(this._insertMediaMute);
        field7.appendChild(MuteLabel);
        _insertMedia.appendChild(field7);
        let field8 = document.createElement('div');
        let autoPlayLabel = document.createElement('label');
        autoPlayLabel.innerText = this._lang["autoPlay"];
        this._insertMediaautoPlay = document.createElement('input');
        this._insertMediaautoPlay.type = "checkbox";
        autoPlayLabel.appendChild(this._insertMediaautoPlay);
        field8.appendChild(autoPlayLabel);
        _insertMedia.appendChild(field8);
        let field4 = document.createElement('div');
        field4.className = "row";
        let field4ig1 = document.createElement('ig');
        field4ig1.className = "col-6";
        let borderwidthLabel = document.createElement('label');
        borderwidthLabel.innerText = this._lang["borderwidth"];
        field4ig1.appendChild(borderwidthLabel);
        this._insertMediaBorderWidth = document.createElement('input');
        this._insertMediaBorderWidth.style.direction = 'ltr';
        field4ig1.appendChild(this._insertMediaBorderWidth);
        field4.appendChild(field4ig1);
        let field4ig2 = document.createElement('ig');
        field4ig2.className = "col-6";
        let borderstyleLabel = document.createElement('label');
        borderstyleLabel.innerText = this._lang["borderstyle"];
        field4ig2.appendChild(borderstyleLabel);
        this._insertMediaBorderStyle = document.createElement('select');
        this._insertMediaBorderStyle.innerHTML = "<option>none</option><option>solid</option><option>dashed</option>";
        field4ig2.appendChild(this._insertMediaBorderStyle);
        field4.appendChild(field4ig2);
        _insertMedia.appendChild(field4);
        let field5 = document.createElement('div');
        let ClassLabel = document.createElement('label');
        ClassLabel.innerText = this._lang["class"];
        field5.appendChild(ClassLabel);
        this._insertMediaClass = document.createElement('input');
        this._insertMediaClass.style.direction = 'ltr';
        field5.appendChild(this._insertMediaClass);
        _insertMedia.appendChild(field5);
        let field6 = document.createElement('div');
        let insert = document.createElement('button');
        insert.innerText = this._lang["insert"];
        insert.addEventListener("click", () => {
            this.restoreSelection(this._oldSelection);
            if (this._insertMediaUrl.value != '') {
                if (this._insertMediaSelected == null) {
                    this._insertMediaSelected = document.createElement(this._insertMediaType.value);
                    window.getSelection().getRangeAt(0).insertNode(this._insertMediaSelected);
                }
                if (this._insertMediaControls.checked)
                    this._insertMediaSelected.setAttribute('controls', '');
                else
                    this._insertMediaSelected.removeAttribute('controls');
                if (this._insertMediaMute.checked)
                    this._insertMediaSelected.setAttribute('muted', '');
                else
                    this._insertMediaSelected.removeAttribute('muted');
                if (this._insertMediaautoPlay.checked)
                    this._insertMediaSelected.setAttribute('autoPlay', '');
                else
                    this._insertMediaSelected.removeAttribute('autoPlay');
                if (this._insertMediaWidth.value != '') {
                    if (!(this._insertMediaWidth.value.includes('px') ||
                        this._insertMediaWidth.value.includes('%') ||
                        this._insertMediaWidth.value.includes('em') ||
                        this._insertMediaWidth.value.includes('rem')))
                        this._insertMediaWidth.value += 'px';
                    this._insertMediaSelected.setAttribute('width', this._insertMediaWidth.value);
                }
                if (this._insertMediaHeight.value != '') {
                    if (!(this._insertMediaHeight.value.includes('px') ||
                        this._insertMediaHeight.value.includes('%') ||
                        this._insertMediaHeight.value.includes('em') ||
                        this._insertMediaHeight.value.includes('rem')))
                        this._insertMediaHeight.value += 'px';
                    this._insertMediaSelected.setAttribute('height', this._insertMediaHeight.value);
                }
                if (this._insertMediaBorderWidth.value != '') {
                    if (!(this._insertMediaBorderWidth.value.includes('px') ||
                        this._insertMediaBorderWidth.value.includes('%') ||
                        this._insertMediaBorderWidth.value.includes('em') ||
                        this._insertMediaBorderWidth.value.includes('rem')))
                        this._insertMediaBorderWidth.value += 'px';
                    this._insertMediaSelected.style.borderWidth = this._insertMediaBorderWidth.value;
                }
                if (this._insertMediaBorderStyle.value != '')
                    this._insertMediaSelected.style.borderStyle = this._insertMediaBorderStyle.value;
                if (this._insertMediaClass.value != '')
                    this._insertMediaSelected.className = this._insertMediaClass.value;
                this._insertMediaUrl.value = this._insertMediaUrl.value.toLowerCase().trim();
                let MediaType = this._insertMediaSelected.tagName.toLocaleLowerCase() + '/';
                let ext = this._insertMediaUrl.value.substring(this._insertMediaUrl.value.lastIndexOf('.') + 1).toLocaleLowerCase();
                if (ext == 'mp3')
                    MediaType += 'mpeg';
                else
                    MediaType += ext;
                this._insertMediaSelected.innerHTML = "<source src='" + this._insertMediaUrl.value + "' type='" + MediaType + "'>" + this._lang["medianotsupport"];
                this._insertMediaDropDown.hide();
            }
        });
        field6.appendChild(insert);
        _insertMedia.appendChild(field6);
        this._insertMedia.appendChild(_insertMedia);
        this._toolbar.append(this._insertMedia);
        this._insertMediaDropDown = new WNDropdown(this._insertMedia);
        this._insertMediaDropDown.checkOnlyDropDown = true;
    }
    _insertIFrameDropDown;
    _insertIFrameSelected;
    insertIFrame() {
        if (this._insertIFrame == undefined)
            this.createIFrameObject();
        let elem = this.getParentTagSelection();
        if (elem.tagName.toLowerCase() != 'iframe') {
            elem = elem.querySelector('iframe');
        }
        this._insertIFrameUrl.value = '';
        this._insertIFrameTitle.value = '';
        this._insertIFrameWidth.value = '';
        this._insertIFrameHeight.value = '';
        this._insertIFrameBorderWidth.value = '';
        this._insertIFrameBorderStyle.value = 'none';
        this._insertIFrameClass.value = '';
        if (elem != null) {
            this._insertIFrameSelected = elem;
            this._insertIFrameUrl.value = this._insertIFrameSelected.src;
            this._insertIFrameTitle.value = this._insertIFrameSelected.title;
            this._insertIFrameWidth.value = this._insertIFrameSelected.style.width;
            this._insertIFrameHeight.value = this._insertIFrameSelected.style.height;
            this._insertIFrameBorderWidth.value = this._insertIFrameSelected.style.borderWidth;
            this._insertIFrameBorderStyle.value = this._insertIFrameSelected.style.borderStyle;
            this._insertIFrameClass.value = this._insertIFrameSelected.className;
        }
        else
            this._insertIFrameSelected = null;
        this._insertIFrameDropDown.element = this._editor_iframe;
        this._insertIFrameDropDown.setPosition();
        this._oldSelection = this.saveSelection();
        this._insertIFrameDropDown.show();
    }
    createIFrameObject() {
        this._insertIFrame = document.createElement('div');
        this._insertIFrame.classList.add('dropdown');
        this._insertIFrame.id = this.element.id + '_insertIFrame';
        this._insertIFrame.setAttribute('wn-dropdown', this._insertIFrame.id);
        let _insertIFrame = document.createElement('div');
        _insertIFrame.classList.add('imagepicker');
        let field1 = document.createElement('div');
        let urlLabel = document.createElement('label');
        urlLabel.innerText = this._lang["url"];
        field1.appendChild(urlLabel);
        this._insertIFrameUrl = document.createElement('input');
        this._insertIFrameUrl.type = "url";
        this._insertIFrameUrl.style.direction = 'ltr';
        field1.appendChild(this._insertIFrameUrl);
        _insertIFrame.appendChild(field1);
        let field2 = document.createElement('div');
        let titleLabel = document.createElement('label');
        titleLabel.innerText = this._lang["title"];
        field2.appendChild(titleLabel);
        this._insertIFrameTitle = document.createElement('input');
        field2.appendChild(this._insertIFrameUrl);
        _insertIFrame.appendChild(field2);
        let field3 = document.createElement('div');
        field3.className = "row";
        let field3ig1 = document.createElement('ig');
        field3ig1.className = "col-6";
        let widthLabel = document.createElement('label');
        widthLabel.innerText = this._lang["width"];
        field3ig1.appendChild(widthLabel);
        this._insertIFrameWidth = document.createElement('input');
        this._insertIFrameWidth.style.direction = 'ltr';
        field3ig1.appendChild(this._insertIFrameWidth);
        field3.appendChild(field3ig1);
        let field3ig2 = document.createElement('ig');
        field3ig2.className = "col-6";
        let heightLabel = document.createElement('label');
        heightLabel.innerText = this._lang["height"];
        field3ig2.appendChild(heightLabel);
        this._insertIFrameHeight = document.createElement('input');
        this._insertIFrameHeight.style.direction = 'ltr';
        field3ig2.appendChild(this._insertIFrameHeight);
        field3.appendChild(field3ig2);
        _insertIFrame.appendChild(field3);
        let field4 = document.createElement('div');
        field4.className = "row";
        let field4ig1 = document.createElement('ig');
        field4ig1.className = "col-6";
        let borderwidthLabel = document.createElement('label');
        borderwidthLabel.innerText = this._lang["borderwidth"];
        field4ig1.appendChild(borderwidthLabel);
        this._insertIFrameBorderWidth = document.createElement('input');
        this._insertIFrameBorderWidth.style.direction = 'ltr';
        field4ig1.appendChild(this._insertIFrameBorderWidth);
        field4.appendChild(field4ig1);
        let field4ig2 = document.createElement('ig');
        field4ig2.className = "col-6";
        let borderstyleLabel = document.createElement('label');
        borderstyleLabel.innerText = this._lang["borderstyle"];
        field4ig2.appendChild(borderstyleLabel);
        this._insertIFrameBorderStyle = document.createElement('select');
        this._insertIFrameBorderStyle.innerHTML = "<option>none</option><option>solid</option><option>dashed</option>";
        field4ig2.appendChild(this._insertIFrameBorderStyle);
        field4.appendChild(field4ig2);
        _insertIFrame.appendChild(field4);
        let field5 = document.createElement('div');
        let ClassLabel = document.createElement('label');
        ClassLabel.innerText = this._lang["class"];
        field5.appendChild(ClassLabel);
        this._insertIFrameClass = document.createElement('input');
        this._insertIFrameClass.style.direction = 'ltr';
        field5.appendChild(this._insertIFrameClass);
        _insertIFrame.appendChild(field5);
        let field6 = document.createElement('div');
        let insert = document.createElement('button');
        insert.innerText = this._lang["insert"];
        insert.addEventListener("click", () => {
            this.restoreSelection(this._oldSelection);
            if (this._insertIFrameUrl.value != '') {
                if (this._insertIFrameSelected == null) {
                    this._insertIFrameSelected = document.createElement('iframe');
                    window.getSelection().getRangeAt(0).insertNode(this._insertIFrameSelected);
                }
                this._insertIFrameSelected.src = this._insertIFrameUrl.value;
                this._insertIFrameSelected.title = this._insertIFrameTitle.value;
                if (this._insertIFrameWidth.value != '') {
                    if (!(this._insertIFrameWidth.value.includes('px') ||
                        this._insertIFrameWidth.value.includes('%') ||
                        this._insertIFrameWidth.value.includes('em') ||
                        this._insertIFrameWidth.value.includes('rem')))
                        this._insertIFrameWidth.value += 'px';
                    this._insertIFrameSelected.setAttribute('width', this._insertIFrameWidth.value);
                }
                if (this._insertIFrameHeight.value != '') {
                    if (!(this._insertIFrameHeight.value.includes('px') ||
                        this._insertIFrameHeight.value.includes('%') ||
                        this._insertIFrameHeight.value.includes('em') ||
                        this._insertIFrameHeight.value.includes('rem')))
                        this._insertIFrameHeight.value += 'px';
                    this._insertIFrameSelected.setAttribute('height', this._insertIFrameHeight.value);
                }
                if (this._insertIFrameBorderWidth.value != '') {
                    if (!(this._insertIFrameBorderWidth.value.includes('px') ||
                        this._insertIFrameBorderWidth.value.includes('%') ||
                        this._insertIFrameBorderWidth.value.includes('em') ||
                        this._insertIFrameBorderWidth.value.includes('rem')))
                        this._insertIFrameBorderWidth.value += 'px';
                    this._insertIFrameSelected.style.borderWidth = this._insertIFrameBorderWidth.value;
                }
                if (this._insertIFrameBorderStyle.value != '')
                    this._insertIFrameSelected.style.borderStyle = this._insertIFrameBorderStyle.value;
                if (this._insertIFrameClass.value != '')
                    this._insertIFrameSelected.className = this._insertIFrameClass.value;
                this._insertIFrameDropDown.hide();
            }
        });
        field6.appendChild(insert);
        _insertIFrame.appendChild(field6);
        this._insertIFrame.appendChild(_insertIFrame);
        this._toolbar.append(this._insertIFrame);
        this._insertIFrameDropDown = new WNDropdown(this._insertIFrame);
        this._insertIFrameDropDown.checkOnlyDropDown = true;
    }
    get html() {
        return this._content.innerHTML;
    }
    set html(value) {
        this._content.innerHTML = value;
        if (value == '') {
            this._content.innerHTML = `<${this.paragraphSeparator}>&nbsp;</${this.paragraphSeparator}>`;
            this._editor_source_textarea.value = this._content.innerHTML;
        }
    }
    get text() {
        return this._content.innerText;
    }
    showSource() {
        if (this._editor_source_mode == 'html') {
            this._editor_source_textarea.value = this._content.innerHTML;
            this._editor_source_textarea.classList.add('show');
            this._content.classList.add('hide');
            this._editor_source_mode = 'source';
        }
        else {
            const parser = new DOMParser();
            const doc3 = parser.parseFromString(this._editor_source_textarea.value, "text/html");
            this._content.innerHTML = doc3.body.innerHTML;
            this._editor_source_textarea.classList.remove('show');
            this._content.classList.remove('hide');
            this._editor_source_mode = 'html';
        }
        if (this.change != null && this.OldHtml != this.html) {
            this.change(this);
            this.OldHtml = this.html;
        }
    }
    switchDarkMode() {
        this._dark_mode.checked = !this._dark_mode.checked;
        if (this._dark_mode.checked)
            this._content.parentElement.classList.add('dark');
        else
            this._content.parentElement.classList.remove('dark');
    }
    switchFullScreen() {
        let body = this.element.querySelector('.editor-body');
        if ((window.innerWidth == screen.width && window.innerHeight == screen.height)) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                body.classList.remove('fullscreen');
            }
        }
        else {
            this.element.requestFullscreen();
            body.classList.add('fullscreen');
        }
    }
}
class WNFileList {
    nameType = 'WNFileList';
    element;
    mode = "select";
    url = "";
    multiSelect = false;
    selectionChanged;
    dblClick;
    basepath = '/';
    _head;
    _foldersAddress;
    _body;
    _divfolders;
    _divfiles;
    _folders;
    _files;
    _dragdrop;
    _preLoader;
    _toastdiv;
    _toastbody;
    _foldertree;
    _toast;
    _lang;
    _date = new WNDate();
    static _clipboard = [];
    static _classExt = [
        {
            className: 'compress',
            ext: [
                '.7z',
                '.7z.001',
                '.7z.002',
                '.a00',
                '.a01',
                '.a02',
                '.ace',
                '.agg',
                '.ain',
                '.alz',
                '.apex',
                '.apz',
                '.ar',
                '.arc',
                '.arc',
                '.archiver',
                '.arduboy',
                '.arh',
                '.ari',
                '.arj',
                '.arj',
                '.ark',
                '.as',
                '.ayt',
                '.b1',
                '.b64',
                '.b64',
                '.b6z',
                '.ba',
                '.bdoc',
                '.bh',
                '.bndl',
                '.boo',
                '.btoa',
                '.bundle',
                '.bz',
                '.bz',
                '.bz2',
                '.bza',
                '.bzip',
                '.bzip2',
                '.c00',
                '.c01',
                '.c02',
                '.c10',
                '.cab',
                '.car',
                '.cb7',
                '.cba',
                '.cbr',
                '.cbt',
                '.cbz',
                '.cdz',
                '.comppkg.hauptwerk.rar',
                '.comppkg_hauptwerk_rar',
                '.cp9',
                '.cpgz',
                '.cpt',
                '.cpt',
                '.ctx',
                '.ctz',
                '.cxarchive',
                '.czip',
                '.daf',
                '.dar',
                '.dd',
                '.deb',
                '.dgc',
                '.dist',
                '.dl_',
                '.dz',
                '.ecar',
                '.ecs',
                '.ecsbx',
                '.edz',
                '.efw',
                '.egg',
                '.epi',
                '.f',
                '.f3z',
                '.fcx',
                '.fdp',
                '.fp8',
                '.fzpz',
                '.gar',
                '.gca',
                '.gmz',
                '.gz',
                '.gz',
                '.gz2',
                '.gza',
                '.gzi',
                '.gzip',
                '.ha',
                '.hbc',
                '.hbc2',
                '.hbe',
                '.hki',
                '.hki1',
                '.hki2',
                '.hki3',
                '.hpk',
                '.hpkg',
                '.hqx',
                '.htmi',
                '.hyp',
                '.iadproj',
                '.ice',
                '.ipg',
                '.ipk',
                '.ish',
                '.iso',
                '.isx',
                '.ita',
                '.ize',
                '.j',
                '.jar.pack',
                '.jex',
                '.jgz',
                '.jhh',
                '.jic',
                '.jsonlz4',
                '.kextraction',
                '.kgb',
                '.kz',
                '.layout',
                '.lbr',
                '.lemon',
                '.lha',
                '.lha',
                '.lhzd',
                '.libzip',
                '.lnx',
                '.lpkg',
                '.lqr',
                '.lz',
                '.lz4',
                '.lzh',
                '.lzh',
                '.lzm',
                '.lzma',
                '.lzo',
                '.lzx',
                '.mbz',
                '.md',
                '.memo',
                '.mim',
                '.mint',
                '.mlproj',
                '.mme',
                '.mou',
                '.movpkg',
                '.mozlz4',
                '.mpkg',
                '.mzp',
                '.mzp',
                '.nar',
                '.nex',
                '.npk',
                '.nz',
                '.oar',
                '.opk',
                '.oz',
                '.p01',
                '.p19',
                '.p7z',
                '.pa',
                '.pack.gz',
                '.package',
                '.pae',
                '.pak',
                '.pak',
                '.paq6',
                '.paq7',
                '.paq8',
                '.paq8f',
                '.paq8l',
                '.paq8p',
                '.par',
                '.par2',
                '.pax',
                '.pbi',
                '.pcv',
                '.pea',
                '.pet',
                '.pf',
                '.pf',
                '.pim',
                '.pima',
                '.pit',
                '.piz',
                '.pkg',
                '.pkg.tar.xz',
                '.pkpass',
                '.prs',
                '.psz',
                '.pup',
                '.pup',
                '.puz',
                '.pvmz',
                '.pwa',
                '.q',
                '.qda',
                '.r0',
                '.r00',
                '.r01',
                '.r02',
                '.r03',
                '.r04',
                '.r1',
                '.r2',
                '.r21',
                '.r30',
                '.rar',
                '.rar',
                '.rev',
                '.rk',
                '.rnc',
                '.rp9',
                '.rpm',
                '.rpm',
                '.rss',
                '.rte',
                '.rz',
                '.s00',
                '.s01',
                '.s02',
                '.s09',
                '.s7z',
                '.sar',
                '.sbx',
                '.sbx',
                '.sdc',
                '.sdn',
                '.sdoc',
                '.sdocx',
                '.sea',
                '.sea',
                '.sen',
                '.sfg',
                '.sfm',
                '.sfs',
                '.sfx',
                '.sh',
                '.shar',
                '.shk',
                '.shr',
                '.si',
                '.sifz',
                '.sit',
                '.sit',
                '.sitx',
                '.sitx',
                '.smpf',
                '.snappy',
                '.snb',
                '.snz',
                '.spa',
                '.spd',
                '.spl',
                '.spm',
                '.spt',
                '.sqf',
                '.sqx',
                '.sqz',
                '.srep',
                '.stproj',
                '.sy_',
                '.tar.bz2',
                '.tar.gz',
                '.tar.gz',
                '.tar.gz2',
                '.tar.lz',
                '.tar.lzma',
                '.tar.xz',
                '.tar.z',
                '.taz',
                '.tbz',
                '.tbz',
                '.tbz2',
                '.tbz2',
                '.tcx',
                '.tg',
                '.tgs',
                '.tgz',
                '.tgz',
                '.tlz',
                '.tlzma',
                '.tpsr',
                '.trs',
                '.tx_',
                '.txz',
                '.tz',
                '.tzst',
                '.ubz',
                '.uc2',
                '.ufdr',
                '.ufs.uzip',
                '.uha',
                '.uu',
                '.uue',
                '.uzed',
                '.uzip',
                '.vem',
                '.vfs',
                '.vip',
                '.vmcz',
                '.vms',
                '.voca',
                '.vpk',
                '.vrpackage',
                '.vsi',
                '.vwi',
                '.wa',
                '.waff',
                '.war',
                '.warc',
                '.wastickers',
                '.wdz',
                '.whl',
                '.wick',
                '.wlb',
                '.wot',
                '.wux',
                '.xapk',
                '.xar',
                '.xef',
                '.xez',
                '.xip',
                '.xmcdz',
                '.xoj',
                '.xopp',
                '.xx',
                '.xz',
                '.xzm',
                '.y',
                '.yz',
                '.yz1',
                '.z',
                '.z',
                '.z00',
                '.z01',
                '.z02',
                '.z03',
                '.z04',
                '.zap',
                '.zed',
                '.zfsendtotarget',
                '.zi',
                '.zi_',
                '.zim',
                '.zip',
                '.zip',
                '.zipx',
                '.zipx',
                '.zix',
                '.zl',
                '.zoo',
                '.zoo',
                '.zpi',
                '.zsplit',
                '.zst',
                '.zw',
                '.zz',
                '.zz',
            ]
        },
        {
            className: 'audio',
            ext: ['.3gp',
                '.8svx',
                '.aa',
                '.aac',
                '.aax',
                '.act',
                '.aiff',
                '.alac',
                '.amr',
                '.ape',
                '.au',
                '.awb',
                '.cda',
                '.dss',
                '.dvf',
                '.flac',
                '.gsm',
                '.iklax',
                '.ivs',
                '.m4a',
                '.m4b',
                '.m4p',
                '.mmf',
                '.mogg',
                '.mp3',
                '.mpc',
                '.msv',
                '.nmf',
                '.oga',
                '.ogg',
                '.opus',
                '.ra, .rm',
                '.raw',
                '.rf64',
                '.sln',
                '.tta',
                '.voc',
                '.vox',
                '.wav',
                '.webm',
                '.wma',
                '.wv',
            ]
        },
        {
            className: 'excel',
            ext: [
                '.csv',
                '.dbf',
                '.dif',
                '.ods',
                '.slk',
                '.xla',
                '.xlam',
                '.xls',
                '.xlsb',
                '.xlsm',
                '.xlsx',
                '.xlt',
                '.xltm',
                '.xltx',
                '.xlw',
                '.xml',
            ]
        },
        {
            className: 'word',
            ext: ['.doc',
                '.docm',
                '.docx',
                '.dot',
                '.dotm',
                '.dotx',
                '.rtf',
                '.txt',
                '.wps',
            ]
        },
        {
            className: 'powerpoint',
            ext: ['.pot',
                '.potm',
                '.potx',
                '.ppa',
                '.ppam',
                '.pps',
                '.ppsm',
                '.ppsx',
                '.ppt',
                '.pptm',
                '.pptx',
                '.pptx',
                '.pptx',
                '.thmx',
            ]
        },
        {
            className: 'image',
            ext: [
                '.bmp',
                '.dds',
                '.dib',
                '.fw.png',
                '.gif',
                '.itc2',
                '.jpg',
                '.png',
                '.psd',
                '.ai',
                '.arw',
                '.cdr',
                '.cdt',
                '.cpl',
                '.cpt',
                '.drw',
                '.dxb',
                '.eps',
                '.exr',
                '.fbx',
                '.flm',
                '.fpf',
                '.fxg',
                '.ithmb',
                '.jxr',
                '.mdi',
                '.mpf',
                '.pcd',
                '.pct',
                '.pdn',
                '.ppsx',
                '.ps',
                '.ps',
                '.pspimage',
                '.psq',
                '.qxd',
                '.rw2',
                '.sdk',
                '.svg',
                '.svgz',
                '.targa',
                '.tga',
                '.tif',
                '.tiff',
                '.006',
                '.007',
                '.abm',
                '.abr',
                '.bil',
                '.blend',
                '.bmc',
                '.ccx',
                '.cdx',
                '.cgm',
                '.comicdoc',
                '.cps',
                '.cr2',
                '.dae',
                '.design',
                '.drg',
                '.drwdot',
                '.dt2',
                '.dwf',
                '.ec3',
                '.edp',
                '.emf',
                '.epsf',
                '.epsi',
                '.fh11',
                '.fit',
                '.flic',
                '.gtx',
                '.iges',
                '.igr',
                '.indd',
                '.jpeg',
                '.jpg2',
                '.jps',
                '.lda',
                '.ldm',
                '.let',
                '.lva',
                '.lvf',
                '.mgx',
                '.mpo',
                '.neu',
                '.opd',
                '.p21',
                '.pcx',
                '.pef',
                '.pic',
                '.pic',
                '.pictclipping',
                '.pl0',
                '.pl2',
                '.psf',
                '.pwd',
                '.px',
                '.qtif',
                '.rlc',
                '.rle',
                '.sdr',
                '.sec',
                '.sig',
                '.skp',
                '.sldasm',
                '.slddrw',
                '.sldprt',
                '.snx',
                '.tcw',
                '.upx',
                '.utx',
                '.vfs',
                '.vga',
                '.webp',
                '.wmf',
                '.x_b',
                '.x_t',
                '.zdl',
                '.zif',
                '.zprf',
                '.aex',
                '.bob',
                '.cmx',
                '.easm',
                '.icl',
                '.ilm',
                '.ima',
                '.ime',
                '.imi',
                '.ims',
                '.ncr',
                '.nth',
                '.ora',
                '.pi2',
                '.pmb',
                '.pxr',
                '.ric',
                '.sst',
                '.tn',
                '.tpf',
                '.tpx',
                '.wi',
                '.xip',
                '.albm',
                '.dwb',
                '.trif',
                '.trx',
                '.3dmf',
                '.3dx',
                '.8pbs',
                '.adi',
                '.ais',
                '.amu',
                '.ard',
                '.art',
                '.asat',
                '.b16',
                '.blkrt',
                '.blz',
                '.bmc',
                '.br4',
                '.br5',
                '.c4',
                '.cadrg',
                '.catpart',
                '.cht',
                '.cm2',
                '.cmz',
                '.csf',
                '.cv5',
                '.cvg',
                '.cvi',
                '.cvi',
                '.cvx',
                '.dcim',
                '.dcm',
                '.dcr',
                '.dcs',
                '.djv',
                '.djvu',
                '.dng',
                '.dvl',
                '.edrw',
                '.edw',
                '.eprt',
                '.fac',
                '.face',
                '.fbm',
                '.fc2',
                '.fcz',
                '.fd2',
                '.fhd',
                '.fm',
                '.fs',
                '.graffle',
                '.hd2',
                '.hdz',
                '.hpd',
                '.hpi',
                '.hr2',
                '.htz4',
                '.ics',
                '.idw',
                '.ief',
                '.ilbm',
                '.indt',
                '.ipj',
                '.irf',
                '.j2k',
                '.jiff',
                '.jng',
                '.jpf',
                '.jpw',
                '.jt',
                '.jwl',
                '.kdc',
                '.kodak',
                '.kpg',
                '.lt2',
                '.ltz',
                '.lxf',
                '.mac',
                '.macp',
                '.mcs',
                '.mcz',
                '.mgs',
                '.mic',
                '.mip',
                '.mng',
                '.mtz',
                '.mur',
                '.mur',
                '.nav',
                '.nff',
                '.njb',
                '.ntc',
                '.odi',
                '.odif',
                '.ola',
                '.ota',
                '.otb',
                '.otc',
                '.otg',
                '.oti',
                '.ovw',
                '.p2z',
                '.pat',
                '.pc6',
                '.pc7',
                '.picnc',
                '.pln',
                '.pol',
                '.pp2',
                '.prw',
                '.psb',
                '.psg',
                '.psp',
                '.pvl',
                '.pws',
                '.pz2',
                '.pz3',
                '.qtz',
                '.sfw',
                '.srf',
                '.sun',
                '.tcx',
                '.tex',
                '.tjp',
                '.u3d',
                '.urt',
                '.v00',
                '.v3d',
                '.vhd',
                '.vis',
                '.vrl',
                '.vtx',
                '.wb1',
                '.wbc',
                '.wbd',
                '.wbz',
                '.wgs',
                '.wnk',
                '.xdw',
                '.xsi',
                '.zno',
                '.zt',
            ]
        },
        {
            className: 'pdf',
            ext: ['.pdf']
        },
        {
            className: 'video',
            ext: ['.webm',
                '.mkv',
                '.flv',
                '.vob',
                '.ogv',
                '.ogg',
                '.rrc',
                '.gifv',
                '.mng',
                '.mov',
                '.avi',
                '.qt',
                '.wmv',
                '.yuv',
                '.rm',
                '.asf',
                '.amv',
                '.mp4',
                '.m4p',
                '.m4v',
                '.mpg',
                '.mp2',
                '.mpeg',
                '.mpe',
                '.mpv',
                '.m4v',
                '.svi',
                '.3gp',
                '.3g2',
                '.mxf',
                '.roq',
                '.nsv',
                '.flv',
                '.f4v',
                '.f4p',
                '.f4a',
                '.f4b',
            ]
        },
    ];
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.init();
        }
    }
    async init() {
        if (this.element.hasAttribute('calendar'))
            this._date.calendar = WNCalendarFunction(this.element.getAttribute('calendar'));
        if (this.element.hasAttribute('cultureinfo'))
            this._date.cultureInfo = WNCultureInfoFunction(this.element.getAttribute('cultureinfo'));
        if (this.element.hasAttribute('onselectionchanged'))
            this.selectionChanged = WNGenerateFunction(this.element.getAttribute('onselectionchanged'), 't');
        if (this.element.hasAttribute('ondblclick')) {
            this.dblClick = WNGenerateFunction(this.element.getAttribute('ondblclick'), 't');
            this.element.ondblclick = null;
        }
        this._lang = WNLanguage[this._date.cultureInfo.twoLetterISOLanguageName];
        if (!this.element.classList.contains('filelist'))
            this.element.classList.add('filelist');
        this.mode = this.element.getAttribute('mode').toLowerCase() ?? 'select';
        this.multiSelect = WNparseBoolean(this.element.getAttribute('multi-select'), false);
        this.basepath = this.element.getAttribute('basepath') ?? '/';
        if (this.basepath != '' && !this.basepath.endsWith('/'))
            this.basepath = this.basepath + '/';
        this._head = this.element.querySelector('.head');
        if (this._head == null)
            this.addHead();
        this._body = this.element.querySelector('.body');
        if (this._body == null)
            this.addBody();
        this._divfolders = this.element.querySelector('.folders');
        this._divfiles = this.element.querySelector('.files');
        this.url = WNparseString(this.element.getAttribute('url'), this.url);
        await this.getFolders("");
        this._foldertree.collapsedAll();
        this._foldertree.expandToParent(this._foldertree.findByValue('/'));
    }
    addHead() {
        this._head = document.createElement('div');
        this._head.className = 'head';
        let toolbar = document.createElement('div');
        toolbar.className = "toolbar";
        let refresh = document.createElement('button');
        refresh.title = this._lang["filelist"]["refresh"];
        refresh.className = "refresh";
        refresh.addEventListener("click", async () => {
            let s = WNTrimStart(this.selectedFolder, '/');
            await this.getFolders("");
            this._foldertree.collapsedAll();
            this._foldertree.expandToParent(this._foldertree.findByValue(s));
        });
        toolbar.appendChild(refresh);
        if (this.mode == 'full') {
            let g1 = document.createElement('div');
            g1.className = "button-group";
            let newFolder = document.createElement('button');
            newFolder.title = this._lang["filelist"]["newfolder"];
            newFolder.className = "newfolder";
            newFolder.addEventListener("click", () => {
                let d = new WNConfirm();
                d.parentElement = this.element;
                d.title = this._lang["filelist"]["newfolder"];
                d.body = `<ig class='floating'><input placeholder='.' class='ltr'/><label>${this._lang["filelist"]["name"]}</label></ig>`;
                d.buttons = [
                    {
                        caption: this._lang["filelist"]["newfolder"], class: 'success',
                        click: async (t) => {
                            return await this.newFolder(t.element);
                        }
                    },
                    { caption: this._lang["common"]["cancel"] },
                ];
                d.show();
            });
            g1.appendChild(newFolder);
            let _rename = document.createElement('button');
            _rename.title = this._lang["filelist"]["rename"];
            _rename.className = "rename";
            _rename.addEventListener("click", () => {
                let value = '';
                let files = this.selectedItems;
                if (files.files.length > 0)
                    value = files.files[0];
                else {
                    value = files.path ?? '';
                    let f = value.split('/');
                    value = f[f.length - 1];
                }
                if (value == '' || value == '/')
                    return;
                let d = new WNConfirm();
                d.parentElement = this.element;
                d.title = this._lang["filelist"]["rename"];
                d.body = `<ig class='floating'><input placeholder='.' class='ltr' value='${value}'/><label>${this._lang["filelist"]["name"]}</label></ig>`;
                d.buttons = [
                    {
                        caption: this._lang["filelist"]["rename"], class: 'success',
                        click: async (t) => {
                            return await this.rename(t.element);
                        }
                    },
                    { caption: this._lang["common"]["cancel"] },
                ];
                d.show();
            });
            g1.appendChild(_rename);
            let _delete = document.createElement('button');
            _delete.title = this._lang["filelist"]["delete"];
            _delete.className = "delete";
            _delete.addEventListener("click", () => {
                let f = this.selectedItems;
                if (f.files.length == 0 && f.path == '/')
                    return;
                let d = new WNConfirm();
                d.parentElement = this.element;
                d.headClass = "danger";
                d.title = this._lang["filelist"]["delete"];
                if (f.files.length > 0)
                    d.body = this._lang["filelist"]["deletefiles"] + '<br/>' + f.files.length.toString() + ' ' + this._lang["filelist"]["files"];
                else
                    d.body = this._lang["filelist"]["deletefolder"] + '<br/><span class="ltr">' + f.path + "</span>";
                d.buttons = [
                    {
                        caption: this._lang["common"]["ok"], class: 'error',
                        click: async () => {
                            return await this.delete();
                        }
                    },
                    { caption: this._lang["common"]["cancel"] },
                ];
                d.show();
            });
            g1.appendChild(_delete);
            toolbar.appendChild(g1);
            let g2 = document.createElement('div');
            g2.className = "button-group";
            let _Copy = document.createElement('button');
            _Copy.title = this._lang["filelist"]["copy"];
            _Copy.className = "copy";
            _Copy.addEventListener("click", () => {
                WNFileList._clipboard = ['copy'];
                let f = this.selectedItems;
                if (f.files.length > 0)
                    f.files.forEach((x) => WNFileList._clipboard.push(WNTrim(f.path + '/' + x, '/')));
                else
                    WNFileList._clipboard.push(f.path);
                this.showMessage("clipboarded", "success");
            });
            g2.appendChild(_Copy);
            let _Cut = document.createElement('button');
            _Cut.title = this._lang["filelist"]["cut"];
            _Cut.className = "cut";
            _Cut.addEventListener("click", () => {
                WNFileList._clipboard = ['cut'];
                let f = this.selectedItems;
                if (f.files.length > 0)
                    f.files.forEach((x) => WNFileList._clipboard.push(WNTrim(f.path + '/' + x, '/')));
                else
                    WNFileList._clipboard.push(f.path);
                this.showMessage("clipboarded", "success");
            });
            g2.appendChild(_Cut);
            let _paste = document.createElement('button');
            _paste.title = this._lang["filelist"]["paste"];
            _paste.className = "paste";
            _paste.addEventListener("click", () => {
                return this.paste();
            });
            g2.appendChild(_paste);
            toolbar.appendChild(g2);
            let g3 = document.createElement('div');
            g3.className = "button-group";
            let _Upload = document.createElement('button');
            _Upload.title = this._lang["filelist"]["upload"];
            _Upload.className = "upload";
            _Upload.addEventListener("click", () => {
                if (this._foldertree.selectedItem == null)
                    return;
                this._dragdrop.classList.add('show');
            });
            g3.appendChild(_Upload);
            let _download = document.createElement('button');
            _download.title = this._lang["filelist"]["download"];
            _download.className = "download";
            _download.addEventListener("click", () => {
                this.download();
            });
            g3.appendChild(_download);
            let _compress = document.createElement('button');
            _compress.title = this._lang["filelist"]["compress"];
            _compress.className = "compress";
            _compress.addEventListener("click", () => {
                if (this.selectedItems.files.length == 0)
                    return;
                let d = new WNConfirm();
                d.parentElement = this.element;
                d.title = this._lang["filelist"]["compress"];
                d.body = `<ig class='floating'><input placeholder='.' class='ltr'/><label>${this._lang["filelist"]["name"]}</label></ig>`;
                d.buttons = [
                    {
                        caption: this._lang["filelist"]["compress"], class: 'success',
                        click: async (t) => {
                            return await this.compress(t.element);
                        }
                    },
                    { caption: this._lang["common"]["cancel"] },
                ];
                d.show();
            });
            g3.appendChild(_compress);
            let _decompress = document.createElement('button');
            _decompress.title = this._lang["filelist"]["decompress"];
            _decompress.className = "decompress";
            _decompress.addEventListener("click", () => {
                let f = this.selectedItems;
                if (f.files.length == 0 && f.path == '/')
                    return;
                let d = new WNConfirm();
                d.parentElement = this.element;
                d.headClass = "danger";
                d.title = this._lang["filelist"]["decompress"];
                d.body = this._lang["filelist"]["decompressmessage"];
                d.buttons = [
                    {
                        caption: this._lang["common"]["ok"], class: 'error',
                        click: async () => {
                            return await this.decompress();
                        }
                    },
                    { caption: this._lang["common"]["cancel"] },
                ];
                d.show();
            });
            g3.appendChild(_decompress);
            toolbar.appendChild(g3);
        }
        this._head.appendChild(toolbar);
        this._foldersAddress = document.createElement('ol');
        this._foldersAddress.className = "breadcrumb address ltr";
        this._head.appendChild(this._foldersAddress);
        this.element.appendChild(this._head);
        this.element.addEventListener("dragover", (e) => {
            this._dragdrop.classList.add('show');
        });
    }
    addBody() {
        this._body = document.createElement('div');
        this._body.className = 'body';
        this._divfolders = document.createElement('div');
        this._divfolders.className = "folders";
        this._folders = document.createElement('ul');
        this._folders.className = "tree";
        this._folders.id = this.element.id + "_folders";
        this._divfolders.appendChild(this._folders);
        this._body.appendChild(this._divfolders);
        this._divfiles = document.createElement('div');
        this._divfiles.className = "files";
        this._files = document.createElement('table');
        this._files.className = "striped hover";
        this._files.createTHead();
        this._files.tHead.innerHTML = `<tr><td><input type="checkbox"/></td><td>${this._lang["filelist"]["filename"]}</td><td>${this._lang["filelist"]["ext"]}</td><td>${this._lang["filelist"]["size"]}</td><td>${this._lang["filelist"]["date"]}</td></tr>`;
        this._files.createTBody();
        this._files.tHead.querySelector("input[type=checkbox]").addEventListener("click", (t) => {
            if (!this.multiSelect)
                return;
            let th = t.target;
            this._files.tBodies[0].querySelectorAll("input[type=checkbox]").forEach((x) => x.checked = th.checked);
            this.selectionChanged?.(this);
        });
        this._divfiles.appendChild(this._files);
        this._body.appendChild(this._divfiles);
        this._dragdrop = document.createElement('div');
        this._dragdrop.className = "dropfile";
        this._dragdrop.innerHTML = `</button><div class='filearea'><label for='${this.element.id}_UploadInput'>${this._lang['filelist']['upload']}</lable><input id='${this.element.id}_UploadInput' class='d-none' type='file' multiple='true' class='s-m opacity-100'/><hr/><div>${this._lang['filelist']['drophere']}</div></div>`;
        let close = document.createElement('button');
        close.className = "close";
        close.addEventListener("click", () => { this._dragdrop.classList.remove('show'); });
        this._dragdrop.appendChild(close);
        this.element.appendChild(this._dragdrop);
        this._dragdrop.addEventListener("dragover", (ev) => { ev.preventDefault(); });
        this._dragdrop.addEventListener("drop", async (ev) => {
            this._dragdrop.classList.remove('show');
            ev.preventDefault();
            if (ev.dataTransfer.items) {
                let files = [];
                for (var i = 0; i < ev.dataTransfer.items.length; i++)
                    if (ev.dataTransfer.items[i].kind === 'file')
                        files.push(ev.dataTransfer.items[i].getAsFile());
                await this.uploadFile(files);
            }
            else {
                await this.uploadFile(ev.dataTransfer.files[i]);
            }
        });
        this.element.appendChild(this._body);
        WN(this.element.id + '_UploadInput').change(async (ev) => {
            this._dragdrop.classList.remove('show');
            await this.uploadFile(ev.target.files);
        });
        this._foldertree = new WNTree(this._folders);
        this._foldertree.selectionChanged = async (t, n) => {
            await this.getFiles(n.value);
            this.selectionChanged?.(this);
        };
        let tc = document.createElement('div');
        tc.className = "toast-container toast-inline-end toast-block-end";
        this._toastdiv = document.createElement('div');
        this._toastdiv.className = "toast w-1500r";
        this._toastdiv.setAttribute("timeout", "3000");
        this._toastdiv.innerHTML = `<div class="toast-body"></div>`;
        tc.appendChild(this._toastdiv);
        this.element.appendChild(tc);
        this._toastbody = this._toastdiv.querySelector(".toast-body");
        this._toast = new WNToast(this._toastdiv);
        this._preLoader = document.createElement("div");
        this._preLoader.className = 'preloader hide';
        this._preLoader.innerHTML = `<div class="loader">
    <div class="spinner">
        <div class="p-be-50r">
            <div class="indicator indicator-effect-grow red-800-cb-i s-xs"></div>
            <div class="indicator indicator-effect-grow animate-delay-start-10 red-500-cb-i s-s"></div>
            <div class="indicator indicator-effect-grow animate-delay-start-20 red-100-cb-i s-m"></div>
            <div class="indicator indicator-effect-grow animate-delay-start-30 red-500-cb-i s-s"></div>
            <div class="indicator indicator-effect-grow animate-delay-start-40 red-800-cb-i s-xs"></div>
        </div>
    </div>
</div>
`;
        this.element.appendChild(this._preLoader);
    }
    async getFolders(path) {
        this.preLoad(true);
        let o = { command: "getFolders", path: path };
        await Post(JSON.stringify(o), this.url).then((r) => {
            let root;
            if (path == '') {
                this._foldertree.element.innerHTML = '';
                root = this._foldertree.dataSource = [];
                root = this._foldertree.addToDataSource(null, this._lang["filelist"]["root"], '', '', '');
            }
            for (var i = 0; i < r.length; i++) {
                let it = r[i].split('/');
                if (it.length == 1) {
                    this._foldertree.addToDataSource(root, r[i], '', r[i], '');
                }
                else {
                    let v = it.pop();
                    let n = this._foldertree.findByValue(it.join('/'));
                    this._foldertree.addToDataSource(n, v, '', r[i], '');
                }
            }
        }).catch((e) => {
            this.showMessage("errorcommand", "error");
            console.log(e);
        });
        this.preLoad(false);
    }
    async getFiles(path) {
        if (this._foldersAddress != null) {
            let addr = '';
            path.split('/').forEach((x) => addr += `<li>${x}</li>`);
            this._foldersAddress.innerHTML = addr;
        }
        this.preLoad(true);
        let o = { command: "getFiles", path: path };
        await Post(JSON.stringify(o), this.url).then((r) => {
            this._files.tBodies[0].innerHTML = '';
            for (var i = 0; i < r.length; i++) {
                let className = '';
                let tr = document.createElement('tr');
                let ext = r[i].ext.toString() ?? '';
                className = WNFileList._classExt.find((x) => x.ext.includes(ext)).className;
                tr.innerHTML = `<td><input type="checkbox" value='${r[i].fileName}'/></td><td class='${className}'>${r[i].fileName}</td><td>${r[i].ext}</td><td>${r[i].size}</td><td>${this._date.convert(new Date(r[i].date), 'shortdatetime')}</td>`;
                let checkbox = tr.querySelector('input[type=checkbox]');
                checkbox.addEventListener("change", () => {
                    this.selectionChanged?.(this);
                });
                tr.addEventListener('click', (t) => {
                    let tr = t.target;
                    while (tr.nodeName != 'TR')
                        tr = tr.parentElement;
                    let checkbox = tr.querySelector('input[type=checkbox]');
                    let checked = checkbox?.checked;
                    if (!this.multiSelect) {
                        let tbody = tr.parentElement;
                        while (tbody.nodeName != 'TBODY')
                            tbody = tbody.parentElement;
                        tbody.querySelectorAll('input[type=checkbox]').forEach((x) => x.checked = false);
                    }
                    checkbox.checked = !checked;
                    this.selectionChanged?.(this);
                });
                tr.addEventListener('dblclick', (t) => {
                    this._files.tBodies[0].querySelectorAll("input[type=checkbox]").forEach((x) => x.checked = false);
                    let el = t.target;
                    if (el.nodeName == 'INPUT')
                        return;
                    while (el.nodeName != 'TR')
                        el = el.parentElement;
                    let checkbox = el.querySelector('input[type=checkbox]');
                    if (checkbox != null)
                        checkbox.checked = true;
                    this.selectionChanged?.(this);
                    this.dblClick?.(this);
                });
                this._files.tBodies[0].appendChild(tr);
            }
        }).catch((e) => {
            this.showMessage("errorcommand", "error");
            console.log(e);
        });
        this.preLoad(false);
    }
    async newFolder(t) {
        let value = t.querySelector('input').value;
        if (value == '')
            return false;
        this.preLoad(true);
        let path = this._foldertree.selectedItem?.value ?? '';
        let o = { command: "createfolder", path: path + '/' + value };
        let ret = false;
        await Post(JSON.stringify(o), this.url).then(async (r) => {
            if (r = true) {
                await this.getFolders("");
                this._foldertree.collapsedAll();
                path = path + '/' + value;
                path = WNTrim(path, '/');
                this._foldertree.expandToParent(this._foldertree.findByValue(path, true));
                this.showMessage("foldercreated", "success");
                ret = true;
            }
            else {
                this.showMessage("errorcommand", "error");
            }
        });
        this.preLoad(false);
        return ret;
    }
    async rename(t) {
        let value = t.querySelector('input').value;
        if (value == '')
            return false;
        this.preLoad(true);
        let files = this.selectedItems;
        let oldName = (files.path + '/' + (files.files[0] ?? ''));
        if (oldName.endsWith('/'))
            oldName = oldName.substring(0, oldName.length - 1);
        let newfileName = oldName;
        if (newfileName.lastIndexOf('/') == -1)
            newfileName = value;
        else
            newfileName = newfileName.substring(0, newfileName.lastIndexOf('/') + 1) + value;
        let o = { command: "rename", source: oldName, destination: newfileName };
        let ret = false;
        await Post(JSON.stringify(o), this.url).then(async (r) => {
            if (r = true) {
                if (files.path == oldName) {
                    await this.getFolders('');
                    this._foldertree.collapsedAll();
                    newfileName = WNTrimStart(newfileName, '/');
                    this._foldertree.expandToParent(this._foldertree.findByValue(newfileName, true));
                }
                else {
                    this.getFiles(files.path);
                }
                this.showMessage("renamed", "success");
                ret = true;
            }
            else {
                this.showMessage("errorcommand", "error");
            }
        }).catch(() => this.showMessage("errorcommand", "error"));
        this.preLoad(false);
        return ret;
    }
    async delete() {
        let files = this.selectedItems;
        this.preLoad(true);
        let items = files.files;
        if (items.length == 0)
            items.push(files.path);
        else
            for (var i = 0; i < items.length; i++)
                items[i] = files.path + '/' + items[i];
        let o = { command: "delete", source: items.join('\n') };
        let ret = false;
        await Post(JSON.stringify(o), this.url).then(async (r) => {
            if (r = true) {
                if (files.path == items[0]) {
                    let s = this.selectedFolder;
                    await this.getFolders('');
                    this._foldertree.collapsedAll();
                    let o = this._foldertree.findByValue(s, true);
                    while (o == null) {
                        let t = s.split('/');
                        t.pop();
                        s = t.join('/');
                        o = this._foldertree.findByValue(s, true);
                    }
                    if (o != null)
                        this._foldertree.expandToParent(o);
                }
                else {
                    this.getFiles(files.path);
                }
                this.showMessage("deleted", "success");
                ret = true;
            }
            else {
                this.showMessage("errorcommand", "error");
            }
        });
        this.preLoad(false);
        return ret;
    }
    async paste() {
        if (WNFileList._clipboard.length < 2)
            return false;
        this.preLoad(true);
        let cmd = 'copy';
        if (WNFileList._clipboard[0] == 'cut')
            cmd = 'move';
        let src = [];
        let dst = this._foldertree.selectedItem.value;
        for (var i = 1; i < WNFileList._clipboard.length; i++)
            src.push(WNFileList._clipboard[i]);
        let o = { command: cmd, source: src.join('\n'), destination: dst };
        let ret = false;
        await Post(JSON.stringify(o), this.url).then(async (r) => {
            if (r == true) {
                await this.getFolders('');
                this._foldertree.collapsedAll();
                this._foldertree.expandToParent(this._foldertree.findByValue(dst, true));
                this.showMessage("pasted", "success");
                ret = true;
            }
            else {
                this.showMessage("errorcommand", "error");
            }
        });
        this.preLoad(false);
        return ret;
    }
    async uploadFile(files) {
        this.preLoad(true);
        await upload(files, this._foldertree.selectedItem?.value ?? '', this.url).then(async (r) => {
            if (r == true) {
                await this.getFiles(this._foldertree.selectedItem?.value ?? '');
                this.showMessage("uploaded", "success");
            }
            else {
                this.showMessage("errorcommand", "error");
            }
        });
        this.preLoad(false);
    }
    async download() {
        let files = this.selectedFiles;
        let filesName = this.selectedItems;
        if (files.length == 0)
            return;
        this.preLoad(true);
        for (var i = 0; i < files.length; i++) {
            await getFile(files[i], this.url).then(async (r) => {
                if (r) {
                    var a = document.createElement("a");
                    a.href = r;
                    a.download = filesName.files[i];
                    a.click();
                    window.URL.revokeObjectURL(r);
                }
            });
        }
        this.preLoad(false);
        return;
    }
    async compress(t) {
        let value = t.querySelector('input').value;
        if (value == '')
            return false;
        let files = this.selectedItems;
        this.preLoad(true);
        let items = files.files;
        if (items.length == 0)
            return false;
        let o = { command: "compress", sourcePath: files.path, source: items.join('\n'), destination: value };
        let ret = false;
        await Post(JSON.stringify(o), this.url).then(async (r) => {
            if (r == true) {
                this.getFiles(files.path);
                this.showMessage("compressed", "success");
                ret = true;
            }
            else {
                this.showMessage("errorcommand", "error");
            }
        });
        this.preLoad(false);
        return ret;
    }
    async decompress() {
        let files = this.selectedItems;
        let items = files.files;
        if (items.length == 0)
            return false;
        this.preLoad(true);
        for (var i = 0; i < files.files.length; i++)
            files.files[i] = WNTrim(files.path + '/' + files.files[i], '/');
        let o = { command: "decompress", source: items.join('\n') };
        await Post(JSON.stringify(o), this.url).then(async (r) => {
            if (r == true) {
                await this.getFolders('');
                this._foldertree.collapsedAll();
                files.path = WNTrimStart(files.path, '/');
                this._foldertree.expandToParent(this._foldertree.findByValue(files.path, true));
                this.showMessage("decompressed", "success");
            }
            else {
                this.showMessage("errorcommand", "error");
            }
        });
        this.preLoad(false);
        return true;
    }
    showMessage(MessageId, className) {
        this.preLoad(false);
        this._toastbody.className = "toast-body " + className;
        this._toastbody.innerHTML = this._lang["filelist"][MessageId];
        this._toast.show();
    }
    WaitpreLoad = false;
    preLoad(show) {
        if (show) {
            this.WaitpreLoad = true;
            setTimeout(() => {
                if (this.WaitpreLoad)
                    this._preLoader.classList.remove('hide');
            }, 500);
        }
        else {
            this._preLoader.classList.add('hide');
            this.WaitpreLoad = false;
        }
    }
    get selectedItems() {
        let path = this.basepath + this._foldertree.selectedItem.value;
        let files = [];
        this._files.tBodies[0].querySelectorAll(':checked').forEach((x) => {
            files.push(x.value);
        });
        return { path: path, files: files };
    }
    get selectedFiles() {
        let ret = [];
        let files = this.selectedItems;
        files.files.forEach((x) => ret.push(WNTrim(files.path + '/' + x, '/')));
        return ret;
    }
    set selectedFiles(value) {
        if (value.length < 1 || value[0] == '')
            return;
        let steps = value[0].split('/');
        steps.pop();
        let path = WNTrimStart(steps.join('/'), '/');
        this._foldertree.expandToParent(this._foldertree.findByValue(path, true));
        this.getFiles(path).finally(() => {
            for (var i = 0; i < value.length; i++) {
                steps = value[i].split('/');
                let file = steps.pop();
                let elem = this._files.tBodies[0].querySelector(`input[value='${file}']`);
                if (elem != null)
                    elem.checked = true;
            }
        });
    }
    set selectedFolder(value) {
        this._foldertree.findByValue(value, true);
    }
    get selectedFolder() {
        return this.basepath + this._foldertree.selectedItem.value;
    }
}
class WNFilter {
    nameType = 'WNFilter';
    element;
    buttons;
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.init();
        }
    }
    init() {
        this.buttons = this.element.querySelectorAll('[filter-value]');
        this.buttons.forEach((t) => {
            if (t.nodeName == 'INPUT' && t.type == "text") {
                t.addEventListener("input", () => {
                    WNFilter.filter(this.element.querySelectorAll("[filter-category]"), 'contains(' + t.value + ')');
                });
            }
            if (t.nodeName == 'INPUT' && t.type == "checkbox") {
                t.addEventListener("click", () => {
                    this.CheckBoxFilter();
                });
                this.CheckBoxFilter();
            }
            else {
                t.addEventListener("click", (e) => {
                    WNFilter.filter(this.element.querySelectorAll("[filter-category]"), '[filter-category*=' + e.target.getAttribute('filter-value') + ']');
                });
            }
        });
    }
    CheckBoxFilter() {
        let condition = '';
        this.buttons.forEach((x) => {
            if (x.nodeName == 'INPUT' && x.type == "checkbox" && x.checked)
                condition += '[filter-category*="' + x.getAttribute('filter-value') + '"], ';
        });
        condition = condition.trim();
        if (condition.length > 0)
            condition = condition.substring(0, condition.length - 1);
        WNFilter.filter(this.element.querySelectorAll("[filter-category]"), condition);
    }
    static filter(selectors, filterby) {
        let list;
        if (typeof (selectors) == "string")
            list = document.querySelectorAll(selectors);
        else
            list = selectors;
        if (filterby.toLowerCase().startsWith('contains')) {
            filterby = filterby.substring(filterby.indexOf('('));
            filterby = filterby.substring(1, filterby.lastIndexOf(')')).toLowerCase();
            list.forEach((e) => {
                if (e.innerText.toLowerCase().indexOf(filterby) > -1)
                    e.style.display = '';
                else
                    e.style.display = 'none';
            });
        }
        else
            list.forEach((e) => {
                if (filterby == '' || filterby == "[filter-category*=]" || e.matches(filterby))
                    e.style.display = '';
                else
                    e.style.display = 'none';
                e.getAnimations().forEach(x => x.play());
            });
    }
}
class WNLightbox {
    nameType = 'WNLightbox';
    element;
    loop = true;
    close = true;
    modalClose = true;
    autoPlay = true;
    buttons;
    lightbox;
    media;
    mediain;
    content;
    buttonprevious;
    buttonnext;
    closeButton;
    SlideList = [];
    SlideListElem = [];
    TouchStart = -99999999;
    timeout;
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.init();
        }
    }
    init() {
        this.loop = WNparseBoolean(this.element.getAttribute('loop'), true);
        this.close = WNparseBoolean(this.element.getAttribute('close'), true);
        this.modalClose = WNparseBoolean(this.element.getAttribute('modal-close'), true);
        this.autoPlay = WNparseBoolean(this.element.getAttribute('auto-play'), true);
        this.lightbox = this.element.querySelector(".lightbox");
        if (this.lightbox == null) {
            this.element.innerHTML += `
            <div class="lightbox">
                <div class="lightbox-slides">
                    <div class="media animate fadeIn">
                    </div>
                    <div class="content animate slideInUp">
                    </div>
                </div>
                <button class="close light"></button>
                <button class="button-previous"></button>
                <button class="button-next"></button>
            </div>
            `;
            this.lightbox = this.element.querySelector(".lightbox");
        }
        this.media = this.lightbox.querySelector(".media");
        this.content = this.lightbox.querySelector(".content");
        this.buttonprevious = this.lightbox.querySelector(".button-previous");
        this.buttonnext = this.lightbox.querySelector(".button-next");
        this.closeButton = this.lightbox.querySelector(".close");
        this.lightbox.addEventListener("touchstart", (e) => { this.TouchStart = e.changedTouches[0].screenX; });
        this.lightbox.addEventListener("touchend", (e) => {
            let diff = this.TouchStart - e.changedTouches[0].screenX;
            this.checkTouch(diff);
            e.stopPropagation();
        });
        if (this.closeButton != null) {
            if (!this.close)
                this.closeButton.style.display = 'none';
            else
                this.closeButton.addEventListener("click", () => { this.closeModal(); });
        }
        if (this.buttonprevious != null) {
            this.buttonprevious.addEventListener("click", (e) => {
                this.showLightBox(e.target.getAttribute('url-value'));
                e.preventDefault();
                e.stopPropagation();
            });
        }
        if (this.buttonnext != null) {
            this.buttonnext.addEventListener("click", (e) => {
                this.showLightBox(e.target.getAttribute('url-value'));
                e.preventDefault();
                e.stopPropagation();
            });
        }
        if (this.modalClose)
            this.lightbox.addEventListener("click", () => {
                if (this.TouchStart == -99999999)
                    this.closeModal();
            }, true);
        this.buttons = this.element.querySelectorAll('[lightbox]');
        this.buttons.forEach((t) => {
            if (t.className == '' && (t.getAttribute('style') ?? '') == '') {
                t.className = 'lightboxbutton';
            }
            t.addEventListener("click", (e) => {
                if (e.target.tagName == "A")
                    return;
                this.showLightBox(e.target);
                e.preventDefault();
                e.stopPropagation();
            }, false);
        });
    }
    showLightBox(e) {
        if (e == null)
            return;
        let url = '';
        if (typeof (e) == "string") {
            url = e;
        }
        if (!this.lightbox.classList.contains('show')) {
            let buttons = this.element.querySelectorAll('[lightbox]');
            if (typeof (e) != "string") {
                if (e.hasAttribute('lightbox') && e.getAttribute('lightbox') != '')
                    url = e.getAttribute('lightbox');
                else if (e.nodeName == "A") {
                    url = e.href;
                }
            }
            this.SlideList = [];
            this.SlideListElem = [];
            buttons.forEach((x) => {
                let url = '';
                let show = true;
                let tx = x;
                while (tx != this.element) {
                    if (tx.style.display == 'none') {
                        show = false;
                        break;
                    }
                    tx = tx.parentElement;
                }
                if (show) {
                    if (x.hasAttribute('lightbox') && x.getAttribute('lightbox') != '')
                        url = x.getAttribute('lightbox');
                    else if (x.nodeName == "A")
                        url = x.href;
                    this.SlideList.push(url);
                    this.SlideListElem.push(x);
                }
            });
            this.lightbox.classList.add('show');
        }
        if (this.SlideList.length == 0)
            return;
        let idx = this.SlideList.indexOf(url);
        let pre = '';
        let next = '';
        if (idx < 1)
            pre = this.loop ? this.SlideList[this.SlideList.length - 1] : '';
        else
            pre = this.SlideList[idx - 1];
        if (idx == this.SlideList.length - 1)
            next = this.loop ? this.SlideList[0] : '';
        else
            next = this.SlideList[idx + 1];
        this.buttonprevious.setAttribute('url-value', pre);
        this.buttonnext.setAttribute('url-value', next);
        this.buttonprevious.style.display = pre == '' ? 'none' : '';
        this.buttonnext.style.display = next == '' ? 'none' : '';
        if (url.toLocaleLowerCase().endsWith('.mp4') || url.toLocaleLowerCase().endsWith('.avi')) {
            this.media.innerHTML = `<video controls><source src="` + url + `" type="video/` + url.toLocaleLowerCase().substring(url.length - 3) + `"></video>`;
            if (this.autoPlay)
                this.play();
        }
        else if (url.toLocaleLowerCase().endsWith('.mp3') || url.toLocaleLowerCase().endsWith('.wav')) {
            let filetype = 'mpeg';
            if (url.toLocaleLowerCase().endsWith('.wav'))
                filetype = 'wav';
            this.media.innerHTML = `<audio controls><source src="` + url + `" type="audio/` + filetype + `"></audio>`;
            if (this.autoPlay)
                this.play();
        }
        else
            this.media.innerHTML = `<img src="` + url + `" alt='' />`;
        this.mediain = this.media.firstChild;
        this.mediain.addEventListener("mousedown", (e) => {
            this.TouchStart = e.clientX;
            clearInterval(this.timeout);
            this.timeout = setInterval(() => { this.TouchStart = -99999999; }, 2000);
        });
        this.mediain.addEventListener("mouseup", (e) => {
            this.checkTouch(this.TouchStart - e.clientX);
            e.preventDefault();
            e.stopPropagation();
        });
        this.content.innerHTML = this.SlideListElem[idx].innerHTML;
        this.media.getAnimations().forEach((x) => x.play());
        this.content.getAnimations().forEach((x) => x.play());
    }
    play() {
        this.media.querySelector('video')?.play();
        this.media.querySelector('audio')?.play();
    }
    closeModal() {
        this.media.innerHTML = '';
        this.lightbox.classList.remove('show');
    }
    checkTouch(diff) {
        if (diff > 0) {
            if (this.buttonprevious != null)
                this.showLightBox(this.buttonprevious.getAttribute('url-value'));
        }
        else if (diff < 0) {
            if (this.buttonnext != null)
                this.showLightBox(this.buttonnext.getAttribute('url-value'));
        }
        this.TouchStart = -99999999;
    }
}
class WNList {
    nameType = 'WNList';
    element;
    dataSource;
    checkbox = false;
    beforeClick;
    afterClick;
    dblClick;
    selectionChanged;
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.init();
        }
    }
    init() {
        if (this.element.hasAttribute('checkbox'))
            this.checkbox = WNparseBoolean(this.element.getAttribute('checkbox'), false);
        this.element.classList.add('list');
        this.element.classList.add('list-hover');
        if (this.element.hasAttribute('onbeforeclick'))
            this.beforeClick = WNGenerateFunction(this.element.getAttribute('onbeforeclick'), 't,n,e');
        if (this.element.hasAttribute('onafterclick'))
            this.afterClick = WNGenerateFunction(this.element.getAttribute('onafterclick'), 't,n,e');
        if (this.element.hasAttribute('onselectionchanged'))
            this.selectionChanged = WNGenerateFunction(this.element.getAttribute('onselectionchanged'), 't,n');
        if (this.element.hasAttribute('ondblclick')) {
            this.dblClick = WNGenerateFunction(this.element.getAttribute('ondblclick'), 't,n,e');
            this.element.ondblclick = null;
        }
        this.selectedItem = null;
        this.initDataSource();
        this.initItems();
    }
    initDataSource() {
        this.dataSource = [];
        let items;
        if (this.element.tagName == 'UL')
            items = this.element.querySelectorAll('li');
        else if (this.element.tagName == 'TABLE') {
            let tbody = this.element.querySelector('tbody');
            if (!tbody)
                tbody = this.element;
            items = tbody.querySelectorAll('tr');
        }
        else if (this.element.tagName == 'DIV')
            items = this.element.querySelectorAll('div');
        else
            return;
        for (var i = 0; i < items.length; i++) {
            let itemelement = items[i];
            let image = itemelement.querySelector('img')?.getAttribute('src') ?? itemelement.querySelector('i')?.outerHTML ?? '';
            let link = itemelement.querySelector('a')?.getAttribute('href') ?? '';
            let item = {
                id: i + 1,
                index: i + 1,
                text: itemelement.textContent,
                html: itemelement.innerHTML,
                value: itemelement.getAttribute('value') ?? itemelement.textContent,
                link: link,
                image: image,
                element: itemelement
            };
            this.dataSource.push(item);
            itemelement.setAttribute('item-id', item.id.toString());
        }
    }
    initItem(node) {
        node.element.removeEventListener("click", (e) => { this.click(node, e); });
        node.element.removeEventListener("dblclick", (e) => { this.dblclick(node, e); });
        node.element.addEventListener("click", (e) => { this.click(node, e); }, false);
        node.element.addEventListener("dblclick", (e) => { this.dblclick(node, e); }, false);
        if (node.element.classList.contains('active'))
            this.selectedItem = node;
    }
    initItems() {
        for (var i = 0; i < this.dataSource.length; i++) {
            let node = this.dataSource[i];
            this.initItem(node);
        }
    }
    lastNodeClick;
    lastNodeTime = 0;
    click(node, e) {
        e.stopPropagation();
        if (navigator.maxTouchPoints > 0) {
            if (this.lastNodeClick == node && (Date.now() - this.lastNodeTime) < 400) {
                this.dblclick(node, e);
                return;
            }
            this.lastNodeTime = Date.now();
            this.lastNodeClick = node;
        }
        if (this.beforeClick && !this.beforeClick(this, node, e))
            return;
        this.select(node);
        this.afterClick?.(this, node, e);
    }
    dblclick(node, e) {
        e.stopPropagation();
        this.select(node);
        this.dblClick?.(this, node, e);
    }
    _selectedItem = null;
    get selectedItem() { return this._selectedItem; }
    ;
    set selectedItem(value) { this.select(value); }
    ;
    get selectedValue() { return this._selectedItem?.value; }
    ;
    set selectedValue(value) {
        this.findByValue(value, true);
    }
    ;
    get selectedIndex() { return this.selectedItem?.index ?? -1; }
    ;
    set selectedIndex(value) {
        let f = this.dataSource.find(x => x.index == value);
        if (f)
            this.select(f);
    }
    ;
    get checkedItems() {
        let ret = [];
        for (var i = 0; i < this.dataSource.length; i++) {
            let inp = this.dataSource[i].element.querySelector('input[type=checkbox]');
            if (inp.checked)
                ret.push(this.dataSource[i]);
        }
        return ret;
    }
    ;
    set checkedItems(value) {
        this.checkedClear();
        for (var i = 0; i < value.length; i++) {
            let inp = value[i].element.querySelector('input[type=checkbox]');
            if (inp)
                inp.checked = true;
        }
    }
    ;
    get checkedValues() {
        let ret = [];
        let checked = this.checkedItems;
        for (var i = 0; i < checked.length; i++)
            ret.push(checked[i].value);
        return ret;
    }
    ;
    set checkedValues(value) {
        let checked = [];
        for (var i = 0; i < value.length; i++) {
            let f = this.dataSource.find(x => x.value == value[i]);
            if (f)
                checked.push(f);
        }
        this.checkedItems = checked;
    }
    ;
    select(node) {
        if (node == this.selectedItem)
            return;
        if (node == null) {
            this.element.querySelectorAll('.active').forEach(x => x.classList.remove('active'));
            this._selectedItem = null;
            return;
        }
        if (node.element.hasAttribute('disabled') || node.element.classList.contains('disabled'))
            return;
        this.element.querySelectorAll('.active').forEach(x => x.classList.remove('active'));
        node.element.classList.add('active');
        this._selectedItem = node;
        this.selectionChanged?.(this, node);
    }
    findByText(text, contains, select) {
        if (contains)
            text = text.toLowerCase();
        let find = this.dataSource.filter(x => contains ? x.text.toLowerCase().includes(text.toLowerCase()) : x.text == text);
        if (select && find.length > 0)
            this.select(find[0]);
        return find;
    }
    findByValue(value, select) {
        let find = this.dataSource.find(x => x.value == value);
        if (select && find)
            this.select(find);
        return find;
    }
    findByTextOrValue(text, contains, select) {
        let find = this.dataSource.filter(x => (contains ? x.text.includes(text) : x.text == text) || x.value == text);
        if (select && find.length > 0)
            this.select(find[0]);
        return find;
    }
    filterByText(text, contains) {
        if (text == '') {
            this.element.querySelectorAll('li,tr,.list-item').forEach(x => x.classList.remove('hide', 'first-child', 'last-child'));
            return;
        }
        let find = this.findByText(text, contains, false);
        this.element.querySelectorAll('li,tr,.list-item').forEach(x => x.classList.add('hide'));
        if (find.length > 0) {
            for (var i = 0; i < find.length; i++) {
                let tnode = find[i];
                tnode.element.classList.remove('hide');
            }
            find[0].element.classList.add('first-child');
            find[find.length - 1].element.classList.add('last-child');
        }
    }
    addToDataSource(text, link, value, image) {
        try {
            let item = {
                id: 0,
                index: 0,
                html: text,
                link: link,
                value: value ?? text,
                image: image,
                element: null,
                text: ''
            };
            this.dataSource.forEach((x) => { item.id = x.id > item.id ? x.id : item.id; });
            item.id++;
            item.index = item.id;
            let elem = this.nodeToHtmlElement(item);
            item.text = elem.textContent;
            item.element = elem;
            this.initItem(item);
            this.element.appendChild(item.element);
            this.dataSource.push(item);
            return item;
        }
        catch (e) {
            console.error(e);
        }
        return null;
    }
    nodeToHtmlElement(node) {
        let item;
        if (this.element.tagName == 'UL')
            item = document.createElement('li');
        else if (this.element.tagName == 'TABLE')
            item = document.createElement('TR');
        else if (this.element.tagName == 'DIV')
            item = document.createElement('div');
        let tItem = item;
        if (this.checkbox) {
            let ttItem = tItem;
            if (this.element.tagName == 'TABLE') {
                let td = document.createElement('td');
                tItem.appendChild(td);
                ttItem = td;
            }
            let inp = document.createElement('input');
            inp.type = 'checkbox';
            inp.className = 'item-check';
            inp.id = this.element.id + '_' + node.id;
            ttItem.appendChild(inp);
        }
        if (this.element.tagName == 'TABLE') {
            let td = document.createElement('td');
            item.appendChild(td);
            tItem = td;
        }
        if (this.checkbox) {
            let label = document.createElement('label');
            label.setAttribute('for', this.element.id + '_' + node.id);
            tItem.appendChild(label);
            tItem = label;
        }
        if (node.link && node.link != '') {
            let link = document.createElement('a');
            link.href = node.link;
            tItem.appendChild(link);
            tItem = link;
        }
        if (node.image && node.image != '') {
            if (node.image.trim().startsWith('<'))
                tItem.innerHTML += node.image;
            else
                tItem.innerHTML += `<img src="${node.image}"/>`;
        }
        tItem.innerHTML += node.html == '' ? node.text : node.html;
        tItem.setAttribute('item-id', item.id.toString());
        node.text = tItem.textContent;
        node.element = item;
        return item;
    }
    removeFromDataSource(node) {
        try {
            node.element.removeEventListener("click", (e) => { this.click(node, e); });
            node.element.removeEventListener("dblclick", (e) => { this.dblclick(node, e); });
            node.element.remove();
            let list = this.dataSource;
            for (var i = 0; i < list.length; i++) {
                if (list[i].id == node.id) {
                    list.splice(i, 1);
                    break;
                }
            }
        }
        catch (e) {
            console.error(e);
            return false;
        }
        return true;
    }
    updateNodeElement(node) {
        node.element.innerHTML = this.nodeToHtmlElement(node).innerHTML;
    }
    setDataSourceByItem(dataSource, displayFieldName, valueFieldName, linkFieldName, imageFieldName, append) {
        if (!append)
            this.clearDataSource();
        for (var i = 0; i < dataSource.length; i++) {
            let item = dataSource[i];
            this.addToDataSource(item[displayFieldName] ?? null, item[linkFieldName] ?? null, item[valueFieldName] ?? null, item[imageFieldName] ?? null);
        }
    }
    setDataSource(dataSource, append) {
        if (!append)
            this.clearDataSource();
        for (var i = 0; i < dataSource.length; i++) {
            let item = dataSource[i];
            this.addToDataSource(item['html'] ?? null, item['link'] ?? null, item['value'] ?? null, item['image'] ?? null);
        }
    }
    clearDataSource() {
        while (this.dataSource.length > 0)
            this.removeFromDataSource(this.dataSource[0]);
    }
    orderDataSourceByText(desc = false) {
        this.dataSource.sort((x, y) => {
            if (x.text > y.text)
                return desc ? -1 : 1;
            else if (x.text < y.text)
                return desc ? 1 : -1;
            return 0;
        });
        this.reindex();
        this.redraw();
    }
    orderDataSourceByValue(desc = false) {
        this.dataSource.sort((x, y) => {
            if (x.value > y.value)
                return desc ? -1 : 1;
            else if (x.value < y.value)
                return desc ? 1 : -1;
            return 0;
        });
        this.reindex();
        this.redraw();
    }
    redraw() {
        this.element.innerHTML = '';
        this.dataSource.forEach((item) => {
            let elem = this.nodeToHtmlElement(item);
            item.element = elem;
            this.element.appendChild(elem);
            this.initItem(item);
        });
    }
    reindex() {
        for (var i = 0; i < this.dataSource.length; i++)
            this.dataSource[i].index = i + 1;
    }
    checkedClear() {
        this.element.querySelectorAll('input.item-check').forEach((x) => x.checked = false);
    }
    checkedAll() {
        this.element.querySelectorAll('input.item-check').forEach((x) => x.checked = true);
    }
    checkedInvert() {
        this.element.querySelectorAll('input.item-check').forEach((x) => x.checked = !x.checked);
    }
}
class WNModal {
    nameType = 'WNModal';
    element;
    backClose = true;
    showClass = "";
    hideClass = "";
    beforeShow;
    afterShow;
    beforeHide;
    afterHide;
    values;
    modalDialog;
    _fadeIn = "animate fadeIn animation-duration-10";
    _fadeOut = "animate fadeOut animation-duration-10";
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.init();
        }
    }
    init() {
        let elem = this.element.querySelectorAll('[close-parent]');
        for (var i = 0; i < elem.length; i++)
            elem[i].addEventListener('click', () => { this.hide(); });
        if (this.element.hasAttribute('back-close'))
            this.backClose = WNparseBoolean(this.element.getAttribute('back-close'), this.backClose);
        if (this.element.hasAttribute('show-class'))
            this.showClass = WNparseString(this.element.getAttribute('show-class'), this.showClass);
        if (this.element.hasAttribute('hide-class'))
            this.hideClass = WNparseString(this.element.getAttribute('hide-class'), this.hideClass);
        this.element.addEventListener('click', (e) => {
            if (e.target != this.element)
                return;
            if (this.backClose)
                this.hide();
            e.stopPropagation();
        }, { passive: false });
        this.modalDialog = this.element.querySelector('.modal-dialog');
        if (this.element.hasAttribute('onaftershow'))
            this.afterShow = WNGenerateFunction(this.element.getAttribute('onaftershow'), 't');
        if (this.element.hasAttribute('onbeforeshow'))
            this.beforeShow = WNGenerateFunction(this.element.getAttribute('onbeforeshow'), 't');
        if (this.element.hasAttribute('onafterhide'))
            this.afterHide = WNGenerateFunction(this.element.getAttribute('onafterhide'), 't');
        if (this.element.hasAttribute('onbeforehide'))
            this.beforeHide = WNGenerateFunction(this.element.getAttribute('onbeforehide'), 't');
    }
    async show() {
        if (this.beforeShow && !this.beforeShow?.(this))
            return;
        WNRemoveClassList(this.element, this._fadeOut);
        WNRemoveClassList(this.modalDialog, this.hideClass);
        WNRemoveClassList(this.element, "show");
        await new Promise(() => {
            WNAddClassList(this.modalDialog, this.showClass);
            WNAddClassList(this.element, this._fadeIn + " show");
            let ani = this.modalDialog.getAnimations();
            if (ani.length > 0) {
                ani[ani.length - 1].finished.finally(() => {
                    WNRemoveClassList(this.modalDialog, this.showClass);
                });
            }
        });
        this.afterShow?.(this);
    }
    toggle() {
        if (this.element.classList.contains('show'))
            this.hide();
        else
            this.show();
    }
    async hide() {
        if (this.beforeHide && !this.beforeHide?.(this))
            return;
        await new Promise(() => {
            WNRemoveClassList(this.element, this._fadeIn);
            WNRemoveClassList(this.modalDialog, this.showClass);
            WNAddClassList(this.modalDialog, this.hideClass);
            let ani = this.modalDialog.getAnimations();
            if (ani.length > 0) {
                ani[ani.length - 1].finished.finally(() => {
                    WNAddClassList(this.element, this._fadeOut);
                    if (this.element.getAnimations().length > 0)
                        this.element.getAnimations()[0].finished.finally(() => {
                            WNRemoveClassList(this.element, "show");
                        });
                    else
                        WNRemoveClassList(this.element, "show");
                });
            }
            else
                WNRemoveClassList(this.element, "show");
        });
        this.afterHide?.(this);
    }
}
class WNMonthCalendar {
    nameType = 'WNMonthCalendar';
    element;
    nativeDigit = wnConfig.nativeDigit || false;
    date = new WNDate();
    secondDate = new WNDate();
    dateRange = false;
    onlyMonthYear = false;
    allowComment = false;
    allowDateHoliday = false;
    autoClosePopup = true;
    comment = [];
    noCommonComment = false;
    displayFormat;
    selectionChanged;
    displayElement;
    secondDisplayElement;
    valueElement;
    secondValueElement;
    dropdownElement;
    _ToDayDate;
    _CurrentDate;
    _SecondDate;
    _ThirdDate;
    _calendarname = '';
    _monthyearcaption;
    _selectmonthyear;
    _selectyear;
    _body;
    _lang;
    _rangestate = 0;
    _onTextInput = false;
    _viewCount = 1;
    get viewCount() { return this._viewCount; }
    set viewCount(value) {
        value = value < 1 ? 1 : value > 12 ? 12 : value;
        this._viewCount = value;
        this.refresh();
    }
    get value() { return this.date.toDateTime(); }
    set value(value) {
        this.date.setDate(value);
        this._CurrentDate.set(this.date);
        this.refresh();
        this.renderDisplay();
    }
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    Init() {
        if (!this.element.classList.contains('calendar'))
            this.element.classList.add('calendar');
        if (this.element.hasAttribute('calendar'))
            this.date.calendar = WNCalendarFunction(this.element.getAttribute('calendar'));
        if (this.element.hasAttribute('cultureinfo'))
            this.date.cultureInfo = WNCultureInfoFunction(this.element.getAttribute('cultureinfo'));
        if (this.element.hasAttribute('native-digit'))
            this.nativeDigit = WNparseBoolean(this.element.getAttribute('native-digit'), wnConfig.nativeDigit);
        if (this.element.hasAttribute('view-count'))
            this.viewCount = WNparseNumber(this.element.getAttribute('view-count'), 1);
        if (this.element.hasAttribute('date-range'))
            this.dateRange = WNparseBoolean(this.element.getAttribute('date-range'), false);
        if (this.element.hasAttribute('auto-close-popup'))
            this.autoClosePopup = WNparseBoolean(this.element.getAttribute('auto-close-popup'), false);
        if (this.element.hasAttribute('only-monthyear'))
            this.onlyMonthYear = WNparseBoolean(this.element.getAttribute('only-monthyear'), false);
        if (this.element.hasAttribute('display-id'))
            this.displayElement = document.getElementById(this.element.getAttribute('display-id'));
        if (this.element.hasAttribute('second-display-id'))
            this.secondDisplayElement = document.getElementById(this.element.getAttribute('second-display-id'));
        if (this.displayElement != undefined) {
            this.displayElement.addEventListener('input', () => { this.setValueFromDisplay(); });
            this.displayElement.addEventListener('change', () => { this.renderDisplay(); });
        }
        if (this.secondDisplayElement != undefined) {
            this.secondDisplayElement.addEventListener('input', () => { this.setValueFromDisplay(); });
            this.secondDisplayElement.addEventListener('change', () => { this.renderDisplay(); });
        }
        if (this.onlyMonthYear)
            this.displayFormat = this.date.cultureInfo.DateTimeFormat.yearMonthPattern;
        else
            this.displayFormat = this.date.cultureInfo.DateTimeFormat.shortDatePattern;
        if (this.element.hasAttribute('display-format'))
            this.displayFormat = WNparseString(this.element.getAttribute('display-format'), this.date.cultureInfo.DateTimeFormat.shortDatePattern);
        if (this.element.hasAttribute('value-id'))
            this.valueElement = document.getElementById(this.element.getAttribute('value-id'));
        if (this.element.hasAttribute('second-value-id'))
            this.secondValueElement = document.getElementById(this.element.getAttribute('second-value-id'));
        if (this.element.hasAttribute('onselectionchanged'))
            this.selectionChanged = WNGenerateFunction(this.element.getAttribute('onselectionchanged'), "t");
        this._calendarname = this.date.calendar.localeName;
        this._lang = wnConfig.language;
        this.date.setDate(new Date(this.getElementValue(this.valueElement)));
        this.date.dateChanged = () => {
            this.setElementValue(this.valueElement, this.setDateValue(this.date, this.valueElement));
            this.renderDisplay();
        };
        this.secondDate = new WNDate(this.date);
        this.secondDate.setDate(new Date(this.getElementValue(this.secondValueElement)));
        this.secondDate.dateChanged = () => {
            if (this.date.greaterThan(this.secondDate)) {
                let l = this.date.toNumber();
                this.date.set(this.secondDate);
                this.secondDate.setDateNumber(l);
                this.setElementValue(this.valueElement, this.setDateValue(this.date, this.valueElement));
            }
            if (this.secondValueElement)
                this.setElementValue(this.secondValueElement, this.setDateValue(this.secondDate, this.secondValueElement));
            this.renderDisplay();
        };
        this._CurrentDate = new WNDate(this.date);
        if (this.date.year == 0)
            this._CurrentDate.setDate(new Date());
        this._ToDayDate = new WNDate(this.date);
        this._ToDayDate.setDate(new Date());
        this._SecondDate = new WNDate(this.date);
        this._ThirdDate = new WNDate(this.date);
        if (this.element.hasAttribute('second-calendar'))
            this._SecondDate.calendar = WNCalendarFunction(this.element.getAttribute('second-calendar'));
        if (this.element.hasAttribute('second-cultureinfo'))
            this._SecondDate.cultureInfo = WNCultureInfoFunction(this.element.getAttribute('second-cultureinfo'));
        if (this.element.hasAttribute('third-calendar'))
            this._ThirdDate.calendar = WNCalendarFunction(this.element.getAttribute('third-calendar'));
        if (this.element.hasAttribute('third-cultureinfo'))
            this._ThirdDate.cultureInfo = WNCultureInfoFunction(this.element.getAttribute('third-cultureinfo'));
        if (this.element.hasAttribute('allow-comment'))
            this.allowComment = WNparseBoolean(this.element.getAttribute('allow-comment'), false);
        this.allowDateHoliday = this.allowComment;
        if (this.element.hasAttribute('allow-date-holiday'))
            this.allowDateHoliday = WNparseBoolean(this.element.getAttribute('allow-date-holiday'), false);
        if (this.element.hasAttribute('no-common-comment'))
            this.noCommonComment = WNparseBoolean(this.element.getAttribute('no-common-comment'), false);
        this.comment = [];
        let tmp = this.element.querySelectorAll('comment');
        for (var i = 0; i < tmp.length; i++) {
            let year = WNparseNumber(tmp[i].getAttribute('year'), 0);
            let month = WNparseNumber(tmp[i].getAttribute('month'), 0);
            let day = WNparseNumber(tmp[i].getAttribute('day'), 0);
            let holiday = WNparseBoolean(tmp[i].getAttribute('holiday'), false);
            let text = WNparseString(tmp[i].getAttribute('text'), '');
            this.comment.push({ 'year': year, 'month': month, 'day': day, 'holiday': holiday, 'text': text });
        }
        if (this.autoClosePopup) {
            this.findPopup();
        }
        this.addHead();
        this.addSelectMonthYear();
        this._body = document.createElement('div');
        this._body.className = 'calendar-body';
        this._body.dir = this.element.dir;
        this.element.appendChild(this._body);
        if (this.onlyMonthYear) {
            this._selectmonthyear.classList.remove('hide');
            this._body.classList.add('hide');
        }
        this.refresh();
    }
    findPopup() {
        let elem = this.element.parentElement;
        while (elem) {
            if (elem.classList.contains('dropdown')) {
                {
                    this.dropdownElement = elem;
                    break;
                }
            }
            elem = elem.parentElement;
        }
    }
    previousMonths() {
        this._CurrentDate.addMonths(-this._viewCount);
        this.refresh();
    }
    nextMonths() {
        this._CurrentDate.addMonths(this._viewCount);
        this.refresh();
    }
    now() {
        this._CurrentDate.set(this._ToDayDate);
        this.refresh();
    }
    selectDate(date) {
        if (this._rangestate < 12) {
            this.date.setDateNumber(date);
            this.secondDate.setDateNumber(date);
        }
        else {
            this.secondDate.setDateNumber(date);
        }
        this._CurrentDate.setDateNumber(date);
        this.refresh();
        let rangestatecheck = this.dateRange ? 21 : 10;
        if (this._rangestate > rangestatecheck) {
            this._rangestate = 0;
            this.selectionChanged?.(this);
            if (this.autoClosePopup && this.dropdownElement) {
                if (this.onlyMonthYear || (!this.onlyMonthYear && this._selectmonthyear.classList.contains('hide')))
                    this.dropdownElement.classList.remove("show");
            }
            if (!this.onlyMonthYear) {
                this._selectmonthyear.classList.add('hide');
                this._body.classList.remove('hide');
            }
        }
    }
    setMonth(Month) {
        if (this._rangestate < 11)
            this._rangestate = Math.floor(this._rangestate / 10) * 10 + 1;
        else
            this._rangestate = Math.floor(this._rangestate / 10) * 10 + 2;
        this._CurrentDate.month = Month;
        this.refresh();
    }
    setYear(Year) {
        if (this._rangestate < 11)
            this._rangestate = 10 + WNmod(this._rangestate, 10);
        else
            this._rangestate = 20 + WNmod(this._rangestate, 10);
        this._CurrentDate.year = Year;
        this.refresh();
    }
    showMonthYear() {
        let months = WNGetNodesList(".calendar-select-month>button", this._selectmonthyear);
        for (var i = 0; i < months.length; i++) {
            months[i].classList.remove('button-active');
            if (i == this._CurrentDate.month - 1)
                months[i].classList.add('button-active');
        }
        this._selectyear.innerHTML = '';
        let tStartYear = Math.round(this._CurrentDate.year / 50) * 50 - 50;
        for (var i = tStartYear; i < tStartYear + 100; i++) {
            let button = document.createElement('button');
            button.textContent = WNnativeDigit(i, this.date.cultureInfo, this.nativeDigit);
            const t = i;
            button.addEventListener('click', (e) => {
                this.setYear(t);
                if (this.onlyMonthYear) {
                    this._CurrentDate.day = Math.floor(this._CurrentDate.daysInMonth / 2);
                }
                this.selectDate(this._CurrentDate.toNumber());
                e.stopPropagation();
            });
            if (t == this._CurrentDate.year) {
                button.classList.add('button-active');
            }
            this._selectyear.appendChild(button);
        }
        let selectedIndexYear = this._CurrentDate.year - tStartYear;
        let ac = this._selectyear.querySelector('.button-active');
        let r = selectedIndexYear / Math.floor(this._selectyear.clientWidth / ac.clientWidth);
        r = r * ac.clientHeight;
        let sb = this._selectyear.scrollTop + this._selectyear.clientHeight / 2;
        if (r > sb)
            this._selectyear.scrollTop = r - this._selectyear.scrollTop;
        else
            this._selectyear.scrollTop = r;
    }
    addHead() {
        let calendarhead = document.createElement('div');
        calendarhead.className = 'calendar-head';
        calendarhead.dir = this.element.dir;
        let prev = document.createElement('button');
        prev.className = 'primary previous-button';
        prev.addEventListener('click', (e) => {
            this.previousMonths();
            e.stopPropagation();
        });
        calendarhead.appendChild(prev);
        let now = document.createElement('button');
        now.className = 'secondary now-button';
        now.addEventListener('click', (e) => {
            this.now();
            e.stopPropagation();
        });
        calendarhead.appendChild(now);
        this._monthyearcaption = document.createElement('label');
        calendarhead.appendChild(this._monthyearcaption);
        if (!this.onlyMonthYear) {
            let showMonthYear = document.createElement('button');
            showMonthYear.className = 'dropdown-toggle secondary month-button';
            showMonthYear.addEventListener('click', (e) => {
                this._rangestate = 0;
                this._selectmonthyear.classList.toggle('hide');
                this._body.classList.toggle('hide');
                this.showMonthYear();
                e.stopPropagation();
            });
            calendarhead.appendChild(showMonthYear);
        }
        let next = document.createElement('button');
        next.className = 'primary next-button';
        next.addEventListener('click', (e) => {
            this.nextMonths();
            e.stopPropagation();
        });
        calendarhead.appendChild(next);
        this.element.appendChild(calendarhead);
    }
    addSelectMonthYear() {
        this._selectmonthyear = document.createElement('div');
        this._selectmonthyear.className = 'calendar-select-monthyear hide';
        this._selectmonthyear.dir = this.element.dir;
        let selectmonth = document.createElement('div');
        selectmonth.dir = this.element.dir;
        selectmonth.className = 'calendar-select-month';
        for (var i = 0; i <= this.date.cultureInfo.DateTimeFormat.monthNames[this._calendarname].length; i++) {
            let button = document.createElement('button');
            let s = this.date.cultureInfo.DateTimeFormat.monthNames[this._calendarname][i];
            if (s != '') {
                button.textContent = s;
                const t = i + 1;
                button.addEventListener('click', (e) => {
                    this.setMonth(t);
                    e.target.classList.add('button-active');
                    e.stopPropagation();
                    this.selectDate(this._CurrentDate.toNumber());
                });
                selectmonth.appendChild(button);
            }
        }
        this._selectmonthyear.appendChild(selectmonth);
        this._selectyear = document.createElement('div');
        this._selectyear.className = 'calendar-select-year';
        this._selectyear.dir = this.element.dir;
        this._selectmonthyear.appendChild(this._selectyear);
        this.element.appendChild(this._selectmonthyear);
    }
    addMonthView(showDate, addWeekName) {
        let monthbody = document.createElement('div');
        monthbody.className = 'calendar-month';
        monthbody.dir = this.element.dir;
        let _holidayIndex = 0;
        for (var i = this.date.cultureInfo.DateTimeFormat.firstDayOfWeek; i < this.date.cultureInfo.DateTimeFormat.firstDayOfWeek + 7; i++) {
            let wdidx = i < 7 ? i : i - 7;
            if (wdidx == this.date.cultureInfo.DateTimeFormat.holiday) {
                _holidayIndex = i - this.date.cultureInfo.DateTimeFormat.firstDayOfWeek;
                break;
            }
        }
        if (addWeekName) {
            let weekname = document.createElement('div');
            weekname.dir = this.element.dir;
            weekname.className = 'calendar-weekname';
            for (var i = this.date.cultureInfo.DateTimeFormat.firstDayOfWeek; i < this.date.cultureInfo.DateTimeFormat.firstDayOfWeek + 7; i++) {
                let wdidx = i < 7 ? i : i - 7;
                let name = document.createElement('span');
                name.textContent = this.date.cultureInfo.DateTimeFormat.shortestDayNames[wdidx];
                if (wdidx == this.date.cultureInfo.DateTimeFormat.holiday) {
                    name.className = 'holiday';
                    _holidayIndex = i - this.date.cultureInfo.DateTimeFormat.firstDayOfWeek;
                }
                weekname.appendChild(name);
            }
            monthbody.appendChild(weekname);
        }
        let dayview = document.createElement('div');
        dayview.dir = this.element.dir;
        dayview.className = 'calendar-dayview';
        let monthname = document.createElement('div');
        monthname.className = 'calendar-month-name';
        monthname.dir = this.element.dir;
        monthname.textContent = this.date.cultureInfo.DateTimeFormat.monthNames[this._calendarname][showDate.month - 1];
        dayview.appendChild(monthname);
        let weeknumber = document.createElement('div');
        weeknumber.className = 'calendar-week-number';
        weeknumber.dir = this.element.dir;
        showDate.day = 1;
        let startweeknumber = showDate.weekOfYear;
        showDate.day = showDate.daysInMonth;
        let endweeknumber = showDate.weekOfYear;
        for (var i = startweeknumber; i <= endweeknumber; i++) {
            let name = document.createElement('span');
            name.textContent = WNnativeDigit(i, this.date.cultureInfo, this.nativeDigit);
            weeknumber.appendChild(name);
        }
        dayview.appendChild(weeknumber);
        let days = document.createElement('div');
        days.dir = this.element.dir;
        days.className = 'calendar-days';
        showDate.day = 1;
        let skip = (7 - this.date.cultureInfo.DateTimeFormat.firstDayOfWeek + showDate.dayOfWeek) % 7;
        for (var i = 0; i < skip; i++) {
            let button = document.createElement('button');
            button.className = 'readonly';
            days.appendChild(button);
        }
        let n1 = this.date.toNumberDate();
        let n2 = this.secondDate.toNumberDate();
        for (var i = 1; i <= showDate.daysInMonth; i++) {
            showDate.day = i;
            let button = document.createElement('button');
            if (((i + skip - 1) % 7) == _holidayIndex)
                button.classList.add('holiday');
            let s = WNnativeDigit(i, this.date.cultureInfo, this.nativeDigit);
            if (this._SecondDate.calendar != this.date.calendar) {
                this._SecondDate.setDateNumber(showDate.toNumberDate());
                s += '<span>' + WNnativeDigit(this._SecondDate.day, this._SecondDate.cultureInfo, this.nativeDigit) + '</span>';
            }
            if (this._ThirdDate.calendar != this.date.calendar) {
                this._ThirdDate.setDateNumber(showDate.toNumberDate());
                s += '<span>' + WNnativeDigit(this._ThirdDate.day, this._ThirdDate.cultureInfo, this.nativeDigit) + '</span>';
            }
            button.innerHTML = s;
            if (showDate.year == this._ToDayDate.year && showDate.month == this._ToDayDate.month && showDate.day == this._ToDayDate.day)
                button.classList.add('today');
            const t = showDate.toNumberDate();
            button.addEventListener('click', (e) => {
                if (!this.dateRange)
                    this._rangestate = 11;
                else
                    this._rangestate = (this._rangestate >= 11) ? 22 : 11;
                this.selectDate(t);
                e.stopPropagation();
            });
            if (this.dateRange) {
                if (t == n1 && n1 == n2)
                    button.classList.add('active');
                else if (t == n1 && n1 != n2) {
                    button.classList.add('sel-start');
                }
                else if (t > n1 && t < n2)
                    button.classList.add('sel');
                else if (t == n2)
                    button.classList.add('sel-end');
                if (button.className.includes('sel'))
                    button.classList.remove('today');
            }
            else {
                if (t == n1)
                    button.classList.add('active');
            }
            days.appendChild(button);
            if (this.allowDateHoliday || this.allowComment) {
                let comment = this.getAllowComment(showDate.toNumber());
                if (comment[1])
                    button.classList.add('holiday');
                if (comment[0] && this.allowComment) {
                    button.setAttribute('wn-tooltip', comment[0]);
                    button.setAttribute('wn-tooltip-class', 'tooltip-arrow w-max-1500r');
                    new WNTooltip(button);
                }
            }
        }
        dayview.appendChild(days);
        monthbody.appendChild(dayview);
        this._body.appendChild(monthbody);
    }
    refresh() {
        if (!this._body)
            return;
        this._monthyearcaption.textContent = this._CurrentDate.toString('MMMM yyyy');
        this._body.innerHTML = '';
        let tDate = new WNDate(this._CurrentDate);
        if (this._CurrentDate.toNumber() == null)
            tDate.setDate(new Date());
        tDate.day = 1;
        if (this.onlyMonthYear) {
            tDate.day = Math.floor(tDate.daysInMonth / 2);
        }
        else {
            if (WNmod(this._viewCount, 2) == 1)
                tDate.addMonths(Math.trunc(this._viewCount / -2));
            else {
                if (tDate.greaterThanEqual(this.secondDate))
                    tDate.addMonths(-this._viewCount);
                else if (this.date.year > 0 && this.secondDate.year > 0) {
                    if (tDate.greaterThanEqual(this.date) && tDate.lessThanEqual(this.secondDate)) {
                        if ((this.secondDate.toNumber() - this.date.toNumber()) / 30 < this._viewCount)
                            tDate.set(this.date);
                        else
                            tDate.set(this.secondDate);
                    }
                }
            }
            for (var i = 0; i < this._viewCount; i++) {
                this.addMonthView(tDate, i == 0 || this.element.classList.contains('calendar-horizontal'));
                tDate.day = 1;
                tDate.addMonths(1);
            }
        }
        this.showMonthYear();
    }
    getAllowComment(date) {
        if (this._lang == null || this._lang == undefined)
            return ['', false];
        let ln = this._lang["cdd"];
        let holiday = false;
        let tooltip = '';
        if (ln != null && !this.noCommonComment) {
            for (let ci in ln) {
                let m = new WNDate();
                m.calendar = WNCalendarFunction(ci);
                m.setDateNumber(date);
                if (ln[ci] != undefined) {
                    let f = ln[ci].filter(e => e.month == m.month && e.day == m.day);
                    for (var i = 0; i < f.length; i++) {
                        if (f[i]['holiday'] == true) {
                            holiday = true;
                            tooltip += '<b class="error-text">' + f[i]['text'] + '</b><br/>';
                        }
                        else
                            tooltip += f[i]['text'] + '<br/>';
                    }
                }
                tooltip = tooltip.trim() + '<hr/>';
            }
        }
        let m = new WNDate(this.date);
        m.setDateNumber(date);
        let f = this.comment.filter(e => e.month == m.month && e.day == m.day);
        for (var i = 0; i < f.length; i++) {
            let add = true;
            if (f[i].year != undefined && f[i].year > 0 && f[i].year != m.year)
                add = false;
            if (add) {
                if (f[i]['holiday'] == true) {
                    holiday = true;
                    tooltip += '<b class="error-text">' + f[i]['text'] + '</b><br/>';
                }
                else
                    tooltip += f[i]['text'] + '<br/>';
            }
        }
        tooltip = tooltip.replace(' - ', '<br/>');
        while (tooltip.includes('<hr/><hr/>'))
            tooltip = tooltip.replace('<hr/><hr/>', '<hr/>');
        while (tooltip.endsWith('<hr/>'))
            tooltip = tooltip.substring(0, tooltip.length - 5);
        while (tooltip.startsWith('<hr/>'))
            tooltip = tooltip.substring(5);
        return [tooltip, holiday];
    }
    renderDisplay() {
        if (this._onTextInput)
            return;
        let ret1 = this.date.toString(this.displayFormat, false);
        let ret2 = this.secondDate.toString(this.displayFormat, false);
        if (this.displayElement != undefined) {
            if (this.dateRange) {
                if (this.secondDisplayElement == undefined) {
                    this.setElementValue(this.displayElement, ret1 + ' ~ ' + ret2);
                }
                else {
                    this.setElementValue(this.displayElement, ret1);
                    this.setElementValue(this.secondDisplayElement, ret2);
                }
            }
            else
                this.setElementValue(this.displayElement, ret1);
        }
    }
    setValueFromDisplay() {
        this._onTextInput = true;
        let ret = ['', ''];
        ret[0] = this.getElementValue(this.displayElement);
        if (this.dateRange) {
            ret[1] = this.getElementValue(this.secondDisplayElement);
        }
        if (ret[0].includes('~'))
            ret = ret[0].split('~');
        this.date.setDateString(WNDenativeDigit(ret[0], this.date.cultureInfo));
        this.secondDate.setDateString(WNDenativeDigit(ret[1], this.date.cultureInfo));
        this._CurrentDate.set(this.date);
        this.refresh();
        this._onTextInput = false;
    }
    setElementValue(elem, value) {
        if (elem != undefined)
            if (elem.localName == 'input')
                elem.value = value;
            else
                elem.textContent = value;
    }
    getElementValue(elem) {
        if (!elem)
            return '';
        let ret = '';
        if (elem.localName == 'input')
            ret = elem.value;
        else
            ret = elem.textContent;
        return ret;
    }
    setDateValue(date, ValueElement) {
        if (!ValueElement)
            return '';
        let tDate = new WNDate(date);
        tDate.setDate(new Date(this.getElementValue(ValueElement)));
        tDate.setYMD(date.year, date.month, date.day);
        date.setYMD(tDate.year, tDate.month, tDate.day, tDate.hour, tDate.minute, tDate.second, tDate.milliseconds);
        return tDate.toDateTime().toISOString();
    }
}
class WNMultiInput {
    nameType = 'WNMultiInput';
    element;
    inputs;
    detail;
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.init();
        }
    }
    init() {
        this.inputs = [];
        let lables = [];
        let values = [];
        let classes = [];
        if (this.element.hasAttribute('lables'))
            lables = WNparseString(this.element.getAttribute('lables')).replace(/[\[\]']/g, '').split(/\s*,\s*/);
        if (this.element.hasAttribute('values'))
            values = WNparseString(this.element.getAttribute('values')).replace(/[\[\]']/g, '').split(/\s*,\s*/);
        if (this.element.hasAttribute('classes'))
            classes = WNparseString(this.element.getAttribute('classes')).replace(/[\[\]']/g, '').split(/\s*,\s*/);
        let inputIG = this.element.querySelector("ig,.ig");
        if (!inputIG) {
            inputIG = document.createElement("ig");
            this.element.appendChild(inputIG);
        }
        let inputclass = '';
        if (this.element.classList.contains('floating'))
            inputclass = 'floating';
        else if (this.element.classList.contains('floatingline'))
            inputclass = 'floatingline';
        else if (this.element.classList.contains('group'))
            inputclass = 'group';
        if (inputclass != '') {
            inputIG.classList.add(inputclass);
            this.element.classList.remove(inputclass);
        }
        let mainInput;
        inputIG.querySelectorAll('*').forEach(x => {
            if (x.tagName != 'LABEL' && x.tagName != 'BUTTON') {
                mainInput = x;
                return;
            }
        });
        let mainLabel = inputIG.querySelector('label');
        if (!mainInput) {
            mainInput = document.createElement('input');
            if (inputclass == 'floating' || inputclass == 'floatingline')
                mainInput.placeholder = '.';
            inputIG.appendChild(mainInput);
        }
        this.inputs.push(mainInput);
        if (!mainLabel) {
            mainLabel = document.createElement('label');
            mainLabel.innerHTML = lables[0];
            inputIG.appendChild(mainLabel);
        }
        let expandButton = inputIG.querySelector('button');
        if (!expandButton) {
            expandButton = document.createElement('button');
            inputIG.appendChild(expandButton);
        }
        expandButton.addEventListener("click", () => { this.toggle(); });
        this.detail = this.element.querySelector('detail,.detail');
        if (!this.detail) {
            this.detail = document.createElement('div');
            this.detail.className = 'detail';
            this.element.appendChild(this.detail);
        }
        if (this.detail.innerHTML == '') {
            for (var i = 1; i < lables.length; i++) {
                let ig = document.createElement('ig');
                let label = document.createElement('label');
                let input = document.createElement('input');
                label.innerHTML = lables[i];
                if (classes[i] != '')
                    input.classList.add(classes[i]);
                ig.appendChild(label);
                ig.appendChild(input);
                this.detail.appendChild(ig);
                this.inputs.push(input);
            }
        }
        this.values = values;
        if (this.element.hasAttribute('required')) {
            if (this.inputs.length > 0) {
                this.inputs[0].setAttribute('required', this.element.getAttribute('required'));
            }
            this.element.removeAttribute('required');
        }
        if (this.element.hasAttribute('onvalidation')) {
            if (this.inputs.length > 0) {
                this.inputs[0].setAttribute('onvalidation', this.element.getAttribute('onvalidation'));
            }
            this.element.removeAttribute('onvalidation');
        }
        if (inputclass == 'group') {
            inputIG.innerHTML = '';
            inputIG.appendChild(mainLabel);
            inputIG.appendChild(mainInput);
            inputIG.appendChild(expandButton);
        }
    }
    toggle() {
        this.element.classList.toggle('expand');
    }
    get values() {
        let value = [];
        this.inputs.forEach(x => {
            if (x.tagName == 'INPUT')
                value.push(x.value);
            else if (x.tagName == 'OPTION')
                value.push(x.value);
            else
                value.push(x);
        });
        return value;
    }
    set values(value) {
        if (!value)
            value = [];
        for (var i = 0; i < this.inputs.length - value.length; i++)
            value.push('');
        for (var i = 0; i < this.inputs.length; i++) {
            let x = this.inputs[i];
            if (x.tagName == 'INPUT')
                x.value = value[i];
            else if (x.tagName == 'OPTION')
                x.value = value[i];
        }
    }
}
class WNMultiSelect {
    nameType = 'WNMultiSelect';
    element;
    selectionChanged;
    beforeDeselect;
    afterDeselect;
    beforeFilterChanged;
    max = 0;
    search;
    searchbox;
    selectedarea;
    dropdownlist;
    dropdown;
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.init();
        }
    }
    init() {
        this.selectedItems = [];
        this.max = WNparseNumber(this.element.getAttribute('max'), 0);
        if (this.element.hasAttribute('onselectionchanged'))
            this.selectionChanged = WNGenerateFunction(this.element.getAttribute('onselectionchanged'), 't,n');
        if (this.element.hasAttribute('onbeforedeselect'))
            this.beforeDeselect = WNGenerateFunction(this.element.getAttribute('onbeforedeselect'), 't,n');
        if (this.element.hasAttribute('onafterdeselect'))
            this.afterDeselect = WNGenerateFunction(this.element.getAttribute('onafterdeselect'), 't,n');
        this.searchbox = this.element.querySelector('[type=search]');
        if (this.element.hasAttribute('search-id'))
            this.searchbox = document.getElementById(this.element.getAttribute('search-id'));
        this.selectedarea = this.element.querySelector('.selecteditem');
        this.dropdownlist = this.element.querySelector('.dropdown');
        if (this.searchbox == null) {
            this.searchbox = document.createElement("input");
            this.searchbox.type = "search";
            this.element.appendChild(this.searchbox);
        }
        this.searchbox.autocomplete = 'off';
        if (this.selectedarea == null) {
            this.selectedarea = document.createElement("div");
            this.selectedarea.className = "selecteditem";
            this.element.appendChild(this.selectedarea);
        }
        if (this.dropdownlist == null) {
            this.dropdownlist = document.createElement("div");
            this.dropdownlist.className = "dropdown";
            this.element.appendChild(this.dropdownlist);
        }
        this.element.setAttribute('wn-dropdown-event', '');
        this.dropdown = new WNDropdown(this.element);
        this.search = new WNSearchList(this.element);
        this.search.minLength = WNparseNumber(this.element.getAttribute('min-length'), 1);
        if (this.element.hasAttribute('onbeforefilterchanged'))
            this.beforeFilterChanged = WNGenerateFunction(this.element.getAttribute('onbeforefilterchanged'), 't,text');
        if (this.dropdownlist.hasChildNodes())
            this.search.listElement = this.dropdownlist.firstElementChild;
        this.search.element.addEventListener("click", (e) => e.stopPropagation());
        this.search.beforeFilterChanged = async (t, text) => {
            if (this.beforeFilterChanged && !this.beforeFilterChanged?.(t, text))
                return false;
            return true;
        };
        this.search.afterFilterChanged = async () => {
            this.dropdown.show();
            return true;
        };
        this.searchbox.addEventListener('focus', async (e) => {
            e.stopPropagation();
            e.preventDefault();
            if (!this.dropdown.element.classList.contains('show')) {
                this.dropdown.hideAllDropDowns();
                this.dropdown.show();
            }
            this.dropdown.setPosition();
        });
        this.WaitToInitList();
    }
    WaitToInitList() {
        let tim = setInterval(() => {
            if (this.search.list != null) {
                this.search.list.selectionChanged = (t, n) => this.selectionchange(t, n);
                clearInterval(tim);
            }
        }, 100);
    }
    selectionchange(t, n) {
        let item = {
            id: n.id,
            text: n.text,
            value: n.value
        };
        if (this.add(item) != null) {
            if (t.nameType != 'WNTree')
                n.element.classList.add('d-none');
            this.selectionChanged?.(this, n);
        }
        t.selectedItem = null;
    }
    add(node) {
        if (this.max != 0 && this.selectedItems.length >= this.max)
            return null;
        if (this.selectedItems.find(x => x.id == node.id && x.value == node.value && x.text == node.text))
            return null;
        this._selectedItems.push(node);
        let sp = document.createElement('span');
        sp.innerHTML = node.text;
        sp.setAttribute('value', node.value);
        sp.dir = this.element.dir;
        sp.addEventListener('click', (t) => {
            if (this.remove(node)) {
                this.search.list.findByValue(node.value, false)?.element.classList.remove('d-none');
                this.afterDeselect?.(this, node);
            }
        });
        this.selectedarea.appendChild(sp);
        node.element = sp;
        return node;
    }
    remove(node) {
        if (this.beforeDeselect && !this.beforeDeselect?.(this, node))
            return null;
        for (var i = 0; i < this.selectedItems.length; i++) {
            if (this.selectedItems[i].id == node.id &&
                this.selectedItems[i].value == node.value &&
                this.selectedItems[i].text == node.text) {
                node.element.remove();
                this.selectedItems.splice(i, 1);
                return true;
            }
        }
        return false;
    }
    _selectedItems;
    get selectedItems() {
        return this._selectedItems;
    }
    set selectedItems(value) {
        this.clearAll();
        for (var i = 0; i < value.length; i++) {
            if (this.add(value[i]) != null) {
                let node = this.search.list.findByValue(value[i].value);
                if (this.add(node) != null)
                    node.element.classList.add('d-none');
            }
        }
    }
    get selectedValue() {
        let ret = [];
        this.selectedItems.forEach(x => ret.push(x.value));
        return ret;
    }
    set selectedValue(value) {
        this.clearAll();
        for (var i = 0; i < value.length; i++) {
            let node = this.search.list.findByValue(value[i]);
            if (node) {
                let item = {
                    id: node.id,
                    text: node.text,
                    value: node.value
                };
                if (this.add(item) != null)
                    node.element.classList.add('d-none');
            }
        }
    }
    clearAll() {
        this._selectedItems = [];
        if (this.selectedarea)
            this.selectedarea.innerHTML = '';
        this.search?.list?.element.querySelectorAll('.d-none').forEach(x => x.classList.remove('d-none'));
    }
}
class WNProgress {
    nameType = 'WNProgress';
    element;
    _bar;
    _caption;
    _min = 0;
    _max = 100;
    _value;
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.render();
        }
    }
    render() {
        if (!this.element.classList.contains('progress'))
            this.element.classList.add('progress');
        if (this.element.children.length == 0)
            this.element.innerHTML = '<div class="progress-bar" max="100" ></div>';
        if (this.element.hasAttribute('min'))
            this._min = parseInt(this.element.getAttribute('min'));
        if (this.element.hasAttribute('max'))
            this._max = parseInt(this.element.getAttribute('max'));
        this._bar = this.element.querySelectorAll('div.progress-bar');
        this._caption = this.element.querySelector('div.progress-caption');
        let max = 0;
        for (var i = 0; i < this._bar.length; i++) {
            if (this._bar[i].hasAttribute('max'))
                max = parseInt(this._bar[i].getAttribute('max'));
            else {
                let step = (100 - max) / (this._bar.length - i);
                max += step;
                this._bar[i].setAttribute('max', max.toString());
            }
        }
    }
    showProgress() {
        let percent = (this._value - this._min) / (this._max - this._min) * 100;
        if (percent > 100)
            percent = 100;
        if (this._caption != null) {
            this._caption.innerHTML = Math.floor(percent) + "%";
        }
        let min = 0;
        for (var i = 0; i < this._bar.length; i++) {
            let max = parseInt(this._bar[i].getAttribute('max')) - min;
            if (percent >= max)
                this._bar[i].style.width = max + '%';
            else if (percent > 0)
                this._bar[i].style.width = percent + '%';
            else
                this._bar[i].style.width = '0%';
            min = max;
            percent -= max;
        }
    }
    set value(value) { this._value = value; this.showProgress(); }
    get value() { return this._value; }
    set min(value) { this._min = value; this.showProgress(); }
    get min() { return this._min; }
    set max(value) { this._max = value; this.showProgress(); }
    get max() { return this._max; }
}
class WNScroll {
    nameType = 'WNScroll';
    element;
    value = 0;
    addClass = '';
    removeClass = '';
    toggleClass = '';
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.render();
        }
    }
    render() {
        if (this.element.hasAttribute('scroll-value'))
            this.value = WNparseNumber(this.element.getAttribute('scroll-value'), 50);
        if (this.element.hasAttribute('add-class'))
            this.addClass = WNparseString(this.element.getAttribute('add-class'), '');
        if (this.element.hasAttribute('remove-class'))
            this.removeClass = WNparseString(this.element.getAttribute('remove-class'), '');
        if (this.element.hasAttribute('toggle-class'))
            this.toggleClass = WNparseString(this.element.getAttribute('toggle-class'), '');
        this.start();
        window.addEventListener("scroll", () => this.start());
    }
    start() {
        if (window.scrollY >= this.value) {
            if (this.toggleClass != '') {
                if (!this.element.classList.contains(this.toggleClass))
                    this.element.classList.add(this.toggleClass);
            }
            if (this.addClass != '')
                this.element.classList.add(this.addClass);
            if (this.removeClass != '')
                this.element.classList.remove(this.removeClass);
        }
        else {
            if (this.toggleClass != '') {
                if (this.element.classList.contains(this.toggleClass))
                    this.element.classList.remove(this.toggleClass);
            }
        }
    }
}
class WNSearchList {
    nameType = 'WNSearchList';
    element;
    listElement;
    list;
    beforeFilterChanged;
    afterFilterChanged;
    selectionChanged;
    minLength = 1;
    displayElement;
    valueElement;
    searchbox;
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.init();
        }
    }
    init() {
        this.searchbox = this.element.querySelector('[type=search]');
        if (this.element.hasAttribute('search-id'))
            this.searchbox = document.getElementById(this.element.getAttribute('search-id'));
        this.searchbox.autocomplete = 'off';
        if (this.element.hasAttribute('list-id'))
            this.listElement = document.getElementById(this.element.getAttribute('list-id'));
        else if (this.searchbox.nextElementSibling != null)
            this.listElement = this.searchbox.nextElementSibling;
        else if (this.searchbox.previousElementSibling != null)
            this.listElement = this.searchbox.previousElementSibling;
        else {
            this.listElement = this.element.querySelector('ul,.list,.tree');
            if (this.listElement == null)
                return;
        }
        if (this.element.hasAttribute('display-id'))
            this.displayElement = document.getElementById(this.element.getAttribute('display-id'));
        if (this.element.hasAttribute('value-id'))
            this.valueElement = document.getElementById(this.element.getAttribute('value-id'));
        if (this.element.hasAttribute('min-length'))
            this.minLength = WNparseNumber(this.element.getAttribute('min-length'), this.minLength);
        if (this.element.hasAttribute('onbeforefilterchanged'))
            this.beforeFilterChanged = WNGenerateFunction(this.element.getAttribute('onbeforefilterchanged'), 't,text');
        if (this.element.hasAttribute('onafterfilterchanged'))
            this.afterFilterChanged = WNGenerateFunction(this.element.getAttribute('onafterfilterchanged'), 't,text');
        if (this.element.hasAttribute('onselectionchanged'))
            this.selectionChanged = WNGenerateFunction(this.element.getAttribute('onselectionchanged'), 't,n');
        this.searchbox.addEventListener('input', async (e) => {
            if (this.list == null)
                return;
            let v = e.target.value;
            if (v.length != 0 && v.length < this.minLength)
                return;
            if (this.beforeFilterChanged && !this.beforeFilterChanged?.(this, v))
                return;
            this.list.filterByText(v, true);
            this.afterFilterChanged?.(this, v);
        });
        this.waitToInitList();
    }
    waitToInitList() {
        let tim = setInterval(() => {
            if (WN(this.listElement.id).wn != null) {
                this.list = WN(this.listElement.id).wn;
                this.list.selectionChanged = (t, n) => this.selectionchanged(t, n);
                clearInterval(tim);
            }
        }, 100);
    }
    selectionchanged(t, n) {
        if (this.displayElement) {
            if (this.displayElement.tagName == 'INPUT')
                this.displayElement.value = n.text;
            else
                this.displayElement.innerHTML = n.text;
        }
        if (this.valueElement) {
            if (this.valueElement.tagName == 'INPUT')
                this.valueElement.value = n.value;
            else
                this.valueElement.innerHTML = n.value;
        }
        this.selectionChanged?.(t, n);
    }
}
class WNSlicker {
    nameType = 'WNSlicker';
    element;
    interval = 20000;
    autoPlay = false;
    _playState = 'ready';
    _hoverPause = true;
    get hoverPause() { return this._hoverPause; }
    set hoverPause(value) {
        this._hoverPause = value;
        if (this._hoverPause) {
            this.element.addEventListener("mouseenter", () => { if (this._playState == 'play')
                this._playState = 'pause'; });
            this.element.addEventListener("mouseleave", () => { if (this.autoPlay)
                this._playState = 'play'; });
        }
    }
    ;
    _slidewidth;
    get slidewidth() { return this._slidewidth; }
    set slidewidth(value) { this._slidewidth = value.toLowerCase(); }
    itemshow;
    _itemalign = 'center';
    get itemalign() { return this._itemalign; }
    set itemalign(value) { this._itemalign = value.toLowerCase(); }
    loop = true;
    _slidesHolder;
    _slides = [];
    _slidesWidth = [];
    _indicators;
    _itemsCount = 0;
    _totalWidth;
    _index = 0;
    _touch_pos = -1;
    _width = 0;
    _position = 0;
    _oldposition = 0;
    nextButton;
    previousButton;
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.init();
        }
        if (this.autoPlay) {
            this._playState = 'play';
            setInterval(() => {
                if (this._playState == 'play')
                    this.next();
            }, this.interval);
        }
    }
    init() {
        this.interval = WNparseNumber(this.element.getAttribute("interval"), 20000);
        this.autoPlay = WNparseBoolean(this.element.getAttribute("autoplay"), false);
        this.hoverPause = WNparseBoolean(this.element.getAttribute("hoverpause"), true);
        this.slidewidth = WNparseString(this.element.getAttribute("slidewidth"), '');
        this.itemshow = WNparseNumber(this.element.getAttribute("itemshow"), 0);
        this.itemalign = WNparseString(this.element.getAttribute("align"), 'center');
        this._slidesHolder = this.element.querySelector('.slicker-slides');
        this._slides = [];
        WNGetNodesList(".slicker-item", this.element).forEach((x, i) => {
            if (x.classList.contains('active')) {
                this._index = i;
                x.classList.remove('active');
            }
            this._slides.push(x);
        });
        this._itemsCount = this._slides.length;
        this._slidesHolder.innerHTML = '';
        this._index = 0;
        if (this.loop) {
            for (var i = 0; i < this._itemsCount; i++)
                this._slides.push(this._slides[i].cloneNode(true));
            for (var i = 0; i < this._itemsCount; i++)
                this._slides.push(this._slides[i].cloneNode(true));
            this._index = this._itemsCount;
        }
        this._slidesWidth = new Array(this._slides.length);
        this._slides.forEach((e) => this._slidesHolder.appendChild(e));
        window.addEventListener("resize", () => this.resize());
        this.nextButton = this.element.querySelector('.slicker-next');
        this.nextButton?.addEventListener('click', () => { this.next(); });
        this.previousButton = this.element.querySelector('.slicker-previous');
        this.previousButton?.addEventListener('click', () => { this.previous(); });
        this.element.addEventListener("touchstart", e => { this.PanStart(e.touches[0].clientX - this.element.offsetLeft); }, true);
        this.element.addEventListener("touchmove", e => { this.PanMove(e.touches[0].clientX - this.element.offsetLeft); }, true);
        this.element.addEventListener("touchend", e => { this.PanEnd(); }, true);
        this.element.addEventListener("touchcancel", e => { this.PanEnd(); }, true);
        this.element.addEventListener("mousedown", e => (e.which == 1) ? this.PanStart(e.clientX - this.element.offsetLeft) : null);
        this.element.addEventListener("mousemove", e => (e.which == 1) ? this.PanMove(e.clientX - this.element.offsetLeft) : null);
        this.element.addEventListener("mouseup", e => this.PanEnd());
        let indicators = this.element.querySelector('.slicker-indicators');
        if (indicators != null) {
            if (indicators.children.length == 0) {
                for (var i = 0; i < this._itemsCount; i++) {
                    let indicator = document.createElement('div');
                    indicator.className = 'indicator-item';
                    indicator.setAttribute('indicator-index', i.toString());
                    indicators.appendChild(indicator);
                }
            }
            this._indicators = WNGetNodesList(".indicator-item", indicators);
            this._indicators.forEach((e) => {
                e.addEventListener('click', (e) => {
                    this.goto(WNparseNumber(e.target.getAttribute('indicator-index'), 0));
                });
            });
        }
        this.resize();
        this.ShowActiveIndicator();
    }
    resize() {
        this._width = this.element.parentElement.clientWidth;
        if (this.itemshow > 0) {
            this.calcSlidesWidth();
            this._width = WNparseNumber(this._slides[0].style.width) * this.itemshow;
        }
        this.element.style.width = this._width + 'px';
        this.calcSlidesWidth();
        this._slidesHolder.style.width = this._totalWidth + 'px';
        this._position = this.getPosition(this._index);
        this._oldposition = this._position;
        this._slidesHolder.style.transform = "translate3d(" + this._position + "px,0px, 0px)";
    }
    calcSlidesWidth() {
        this._totalWidth = 0;
        this._slides.forEach((e, i) => {
            let el = e;
            if (this._slidewidth == 'auto') {
                let img = e.querySelector('img');
                if (img != null) {
                    this._slidesWidth[i] = el.clientWidth;
                    el.style.width = this._slidesWidth[i] + 'px';
                    this._totalWidth += this._slidesWidth[i];
                    if (!img.complete) {
                        img.onload = () => {
                            this.resize();
                        };
                        return;
                    }
                }
            }
            else {
                if (this._slidewidth != '')
                    this._slidesWidth[i] = WNValueUnit(WNCalcValue(this._slidewidth, "1px", "*", this.element)).value;
                else
                    this._slidesWidth[i] = this._width;
                el.style.width = this._slidesWidth[i] + 'px';
                this._totalWidth += this._slidesWidth[i];
            }
        });
    }
    getPosition(index) {
        let t = 0;
        for (var i = 0; i < index; i++)
            t += this._slidesWidth[i];
        if (this._itemalign == 'center')
            t -= (this._width - this._slidesWidth[index]) / 2;
        else if (this._itemalign == 'right')
            t = t - this._width + this._slidesWidth[index];
        if (getComputedStyle(this.element).direction == 'ltr')
            t = t * -1;
        return t;
    }
    async PanStart(x) {
        this._touch_pos = x;
    }
    async PanMove(x) {
        if (this._touch_pos == -1)
            return;
        let third = this._width / 5;
        let diff = this._position - this._oldposition;
        console.log(diff);
        if (Math.abs(diff) > 10 && ((x < third && diff > 0) ||
            (x > (this._width - third) && diff < 0)))
            this.PanEnd();
        else {
            this._oldposition = this._position + x - this._touch_pos;
            this._slidesHolder.style.transform = "translate3d(" + this._oldposition + "px,0px, 0px)";
        }
    }
    async PanEnd() {
        let diff = Math.abs(this._position - this._oldposition);
        if (diff < 10)
            this._touch_pos = -1;
        if (this._touch_pos == -1)
            return;
        let direction = (this._position > this._oldposition) ? 1 : -1;
        if (getComputedStyle(this.element).direction == 'rtl')
            direction *= -1;
        let t = 0;
        for (var i = 1; i < 1000; i++) {
            t += this._slidesWidth[this._index];
            if (t > diff) {
                this._index += i * direction;
                break;
            }
        }
        this._touch_pos = -1;
        await this.AnimateSlide();
    }
    async AnimateSlide() {
        let newposition = this.getPosition(this._index);
        let i = this._oldposition;
        while (true) {
            if ((newposition < this._oldposition)) {
                i--;
                if (i < newposition)
                    break;
            }
            else {
                i++;
                if (i > newposition)
                    break;
            }
            this._slidesHolder.style.transform = "translate3d(" + i + "px,0px, 0px)";
            if (WNmod(i, 10) == 0)
                await WNSleep(0);
        }
        this._index = this._itemsCount + WNmod(this._index, this._itemsCount);
        this._oldposition = this._position = this.getPosition(this._index);
        this._slidesHolder.style.transform = "translate3d(" + this._position + "px,0px, 0px)";
        this.ShowActiveIndicator();
    }
    ShowActiveIndicator() {
        if (!this._indicators)
            return;
        this._indicators.forEach((x) => x.classList.remove('active'));
        let idx = WNmod(this._index, this._itemsCount);
        this.element.querySelector("div[indicator-index='" + idx + "']").classList.add('active');
    }
    async next() {
        this._touch_pos = -1;
        this._index++;
        await this.AnimateSlide();
    }
    async previous() {
        this._touch_pos = -1;
        this._index--;
        await this.AnimateSlide();
    }
    async goto(index) {
        if (index == this._index)
            return;
        this._index = index;
        await this.AnimateSlide();
    }
}
class WNSticky {
    nameType = 'WNSticky';
    element;
    position = 'top';
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
            this.CheckSticky();
        }
    }
    Init() {
        if (this.element.classList.contains('sticky-top'))
            this.position = 'top';
        else if (this.element.classList.contains('sticky-bottom'))
            this.position = 'bottom';
        window.addEventListener('scroll', () => { this.CheckSticky(); });
    }
    CheckSticky() {
        let addstickyOnfly = false;
        if (this.position == 'top' && this.element.offsetTop > this.element.clientHeight)
            addstickyOnfly = true;
        if (this.position == 'bottom' && (document.body.clientHeight - this.element.offsetTop) > this.element.clientHeight)
            addstickyOnfly = true;
        if (addstickyOnfly)
            this.element.classList.add("sticky-onfly");
        else
            this.element.classList.remove("sticky-onfly");
    }
}
class WNTab {
    nameType = 'WNTab';
    element;
    items;
    beforeSelected;
    selectionChanged;
    _selectedIndex = -1;
    get selectedIndex() { return this._selectedIndex; }
    ;
    set selectedIndex(value) {
        if (value < 0 && this.items.length > 0)
            value = 0;
        if (value < 0)
            value = -1;
        if (value >= this.items.length)
            value = this.items.length - 1;
        if (this.items[value].head.hasAttribute('disabled') || this.items[value].head.classList.contains('disabled'))
            return;
        if (this.beforeSelected && this.beforeSelected(this, value) != false)
            return;
        this._selectedIndex = value;
        this.setCollapse();
        this.selectionChanged?.(this);
    }
    ;
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.init();
        }
    }
    init() {
        this.items = [];
        let index = 0;
        let heads = this.element.querySelectorAll('.nav-item');
        let bodies = this.element.querySelectorAll('.tab-pan');
        heads.forEach((x) => {
            if (!x.hasAttribute('wn-type')) {
                if (index < bodies.length) {
                    x.setAttribute('index', index.toString());
                    x.addEventListener("click", (e) => {
                        this.selectedIndex = WNparseNumber(e.target.getAttribute('index'), -1);
                    });
                    this.items.push({ head: x, body: bodies[index] });
                    index++;
                }
            }
        });
        if (this.element.hasAttribute('selected-index'))
            this.selectedIndex = WNparseNumber(this.element.getAttribute('selected-index'));
        else if (this.items.length > 0)
            this.selectedIndex = 0;
    }
    setCollapse() {
        this.items.forEach((x) => {
            x.head.classList.remove('show');
            x.body.classList.remove('show');
        });
        if (this.selectedIndex > -1) {
            this.items[this.selectedIndex].head.classList.add('show');
            this.items[this.selectedIndex].body.classList.add('show');
        }
    }
}
class WNTable {
    nameType = 'WNTable';
    element;
    cols;
    _dataSource;
    _renderData;
    get dataSource() {
        return this._dataSource;
    }
    set dataSource(value) {
        this._dataSource = value;
        if (this._sortby.length > 0)
            this.resort();
        else
            this.sort(-1);
        this.setFilter();
    }
    _currentPage = 1;
    get currentPage() { return this._currentPage; }
    ;
    set currentPage(value) {
        if (this.beforePageChange && !this.beforePageChange(this, this.currentPage, value))
            return;
        let old = this._currentPage;
        this._currentPage = value;
        this.element.querySelectorAll('[page-index]').forEach((x) => x.style.display = 'none');
        let t = this.element.querySelector(`[page-index='${this._currentPage}']`);
        if (t)
            t.style.display = '';
        this.setPaginationElements();
        this.afterPageChange?.(this, old, this.currentPage);
    }
    ;
    date = new WNDate();
    pageSize = 0;
    beforeFilter;
    afterFilter;
    beforeSort;
    afterSort;
    beforeSelected;
    selectionChanged;
    beforePageChange;
    afterPageChange;
    command;
    _selectedItem;
    get selectedItem() {
        return this._selectedItem;
    }
    set selectedItem(value) {
        if (this._selectedItem == value)
            return;
        if (this.beforeSelected && !this.beforeSelected?.(this, this._selectedItem, value))
            return;
        this.bodyTable.querySelectorAll('tr.active').forEach((x) => x.classList.remove('active'));
        value.rowElement?.classList.add('active');
        this.selectionChanged(this, this._selectedItem, value);
        this._selectedItem = value;
    }
    _groups = [];
    get groups() { return this._groups; }
    set groups(value) {
        this._groups = value;
        this.setFilter();
    }
    _totalPages = 1;
    _paginationElement;
    _paginationButtons;
    headTable;
    bodyTable;
    _pageAddedd = 0;
    _rowAddedd = 0;
    _lastBodyTable;
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.init();
        }
    }
    init() {
        if (this.element.hasAttribute("cultureinfo"))
            this.date.cultureInfo = WNCultureInfoFunction(this.element.getAttribute('cultureinfo'));
        if (this.element.hasAttribute("calendar"))
            this.date.calendar = WNCalendarFunction(this.element.getAttribute('calendar'));
        if (!this.element.classList.contains('pointer'))
            this.element.classList.add('pointer');
        if (this.element.hasAttribute('onbeforefilter'))
            this.beforeFilter = WNGenerateFunction(this.element.getAttribute('onbeforefilter'), 't');
        if (this.element.hasAttribute('onafterfilter'))
            this.afterFilter = WNGenerateFunction(this.element.getAttribute('onafterfilter'), 't');
        if (this.element.hasAttribute('onbeforesort'))
            this.beforeSort = WNGenerateFunction(this.element.getAttribute('onbeforesort'), 't');
        if (this.element.hasAttribute('onaftersort'))
            this.afterSort = WNGenerateFunction(this.element.getAttribute('onaftersort'), 't');
        if (this.element.hasAttribute('onbeforeselected'))
            this.beforeSelected = WNGenerateFunction(this.element.getAttribute('onbeforeselected'), 't,oldNode,newNode');
        if (this.element.hasAttribute('onselectionchanged'))
            this.selectionChanged = WNGenerateFunction(this.element.getAttribute('onselectionchanged'), 't,oldNode,newNode');
        if (this.element.hasAttribute('onbeforepagechange'))
            this.beforePageChange = WNGenerateFunction(this.element.getAttribute('onbeforepagechange'), 't,oldPage,newPage');
        if (this.element.hasAttribute('onafterpagechange'))
            this.afterPageChange = WNGenerateFunction(this.element.getAttribute('onafterpagechange'), 't,oldPage,newPage');
        if (this.element.hasAttribute('oncommand'))
            this.command = WNGenerateFunction(this.element.getAttribute('oncommand'), 't,command,node');
        if (this.element.hasAttribute('groups'))
            this._groups = this.element.getAttribute('groups').split(',');
        this.FindHeader();
        this.FilterHeaderRow();
        this.initDataSource();
        this.pagination();
        this.setFilter();
    }
    FindHeader() {
        this.cols = [];
        let colindex = 0;
        let fieldcount = 1;
        this.headTable = this.element.querySelector('thead');
        this.headTable?.querySelectorAll('tr:first-child td,th').forEach((x) => {
            let tcol = {
                index: colindex,
                caption: x.textContent,
                class: x.className,
                datatype: WNparseString(x.getAttribute('data-type'), 'string'),
                field: WNparseString(x.getAttribute('data-field'), ''),
                filterable: x.hasAttribute('filterable') ?
                    (WNparseString(x.getAttribute('filterable'), WNTableTextValue.value) == WNTableTextValue.value ? WNTableTextValue.value : WNTableTextValue.text)
                    : WNTableTextValue.none,
                sortable: x.hasAttribute('sortable') ?
                    (WNparseString(x.getAttribute('sortable'), WNTableTextValue.value) == WNTableTextValue.value ? WNTableTextValue.value : WNTableTextValue.text)
                    : WNTableTextValue.none,
                format: WNparseString(x.getAttribute('data-format'), ''),
                elementInHeader: x,
                elementFilter: null,
                commandElement: [],
                condition: x.hasAttribute('condition') ? WNGenerateFunction(x.getAttribute('condition'), 't,node,value,text') : null,
                aggregate: WNparseString(x.getAttribute('aggregate'), '').toLowerCase()
            };
            tcol.elementInHeader.setAttribute('index', colindex.toString());
            if (tcol.sortable != WNTableTextValue.none)
                tcol.elementInHeader.classList.add('sort');
            tcol.elementInHeader.addEventListener('click', (t) => {
                if (this.beforeSort != null && !this.beforeSort(this))
                    return;
                this.sort(WNparseNumber(t.target.getAttribute('index')));
                this.afterSort?.(this);
                this.refresh();
            });
            if (tcol.field == '') {
                tcol.field = 'f' + fieldcount;
                fieldcount++;
            }
            if (tcol.elementInHeader.hasAttribute('command')) {
                tcol.elementInHeader.querySelectorAll('button').forEach((x) => {
                    tcol.commandElement.push(x.cloneNode(true));
                    x.remove();
                });
                tcol.elementInHeader.innerHTML = tcol.elementInHeader.textContent.trim();
            }
            this.cols.push(tcol);
            colindex++;
        });
    }
    FilterHeaderRow() {
        let addfilter = false;
        let tr = document.createElement('tr');
        this.cols.forEach((x) => {
            let td = document.createElement('td');
            if (x.filterable != WNTableTextValue.none) {
                let inp = document.createElement('input');
                inp.type = 'search';
                inp.setAttribute('index', x.index.toString());
                inp.addEventListener('input', () => { this.setFilter(); });
                td.appendChild(inp);
                addfilter = true;
                x.elementFilter = inp;
            }
            tr.appendChild(td);
        });
        if (addfilter) {
            this.headTable?.appendChild(tr);
        }
    }
    initDataSource() {
        this.bodyTable = this.element.querySelector('tbody');
        if (!this.bodyTable) {
            this.bodyTable = document.createElement('tbody');
            this.element.appendChild(this.bodyTable);
        }
        let tr = this.bodyTable.querySelectorAll('tr');
        this._dataSource = [];
        tr.forEach((x) => {
            let cols = x.querySelectorAll('td,th');
            let r = {};
            for (var i = 0; i < cols.length; i++) {
                r[this.cols[i].field] = this.fixedData(cols[i].innerHTML, this.cols[i]);
            }
            this.addToDataSource(r);
        });
    }
    addToDataSource(r) {
        let pId = 0;
        if (!this._dataSource)
            this._dataSource = [];
        this._dataSource.forEach((x) => { pId = x.privateId > pId ? x.privateId : pId; });
        pId++;
        let ret = {
            privateId: pId,
            rowElement: null,
            fields: r
        };
        this._dataSource.push(ret);
        return ret;
    }
    removeFromDataSource(r) {
        try {
            let forceRefresh = r.rowElement != null;
            r.rowElement?.remove();
            let list = this.dataSource;
            for (var i = 0; i < list.length; i++) {
                if (list[i].privateId == r.privateId) {
                    list.splice(i, 1);
                    break;
                }
            }
            if (forceRefresh)
                this.refresh();
        }
        catch (e) {
            console.error(e);
            return false;
        }
        return true;
    }
    updateNodeElement(r) {
        if (r.rowElement) {
            this.resort();
            this.refresh();
        }
    }
    setDataSource(dataSource, append) {
        if (append == null || !append)
            this._dataSource = [];
        dataSource.forEach((x) => {
            let keys = Object.keys(x);
            let r = {};
            keys.forEach((y) => {
                let col = this.cols.find(z => z.field == y);
                if (col)
                    r[y] = this.fixedData(x[y], col);
                else
                    r[y] = { text: x[y], value: x[y] };
            });
            this.addToDataSource(r);
        });
        this.setFilter();
    }
    _sortby = [];
    resort() {
        if (this._sortby.length == 0)
            return;
        this._renderData?.sort((x, y) => {
            for (var i = 0; i < this._sortby.length; i++) {
                let s = this._sortby[i];
                let v1;
                let v2;
                if (x.fields[s.field])
                    v1 = x.fields[s.field][s.field2];
                else if (x[s.field])
                    v1 = x[s.field];
                else
                    v1 = '';
                if (y.fields[s.field])
                    v2 = y.fields[s.field][s.field2];
                else if (y[s.field])
                    v2 = y[s.field];
                else
                    v2 = '';
                let cmp = v1 == v2;
                if (!cmp) {
                    cmp = v1 > v2;
                    return (cmp ? -1 : 1) * (s.desc ? 1 : -1);
                }
            }
            return 0;
        });
    }
    sort(colIndex) {
        if (colIndex > -1 && this.cols[colIndex].sortable != WNTableTextValue.none)
            this._sortby = [];
        else if (colIndex == -1)
            this._sortby = [];
        else
            return;
        if (this.groups.length > 0) {
            this.groups.forEach(x => {
                let c = x.split(':');
                this._sortby.push({ field: c[0].trim(), field2: c[1]?.trim() ?? 'value', desc: false });
            });
        }
        let desc = false;
        if (colIndex > -1 && this.cols[colIndex].sortable != WNTableTextValue.none) {
            if (this.cols[colIndex].elementInHeader.classList.contains('asc'))
                desc = true;
            this._sortby.push({ field: this.cols[colIndex].field, field2: this.cols[colIndex].sortable, desc: desc });
        }
        this.resort();
        this.cols.forEach((x) => x.elementInHeader.classList.remove('desc', 'asc'));
        if (colIndex > -1)
            this.cols[colIndex].elementInHeader.classList.add(desc ? 'desc' : 'asc');
    }
    pagination() {
        this._paginationElement = this.element.querySelector('.pagination');
        if (this._paginationElement == null)
            return;
        let btn = this._paginationElement.querySelectorAll('button');
        if (!btn)
            return;
        if (this._paginationElement.hasAttribute('page-size'))
            this.pageSize = WNparseNumber(this._paginationElement.getAttribute('page-size'), this.pageSize);
        this._paginationButtons = [];
        for (var i = 0; i < btn.length; i++) {
            if (btn[i].classList.contains('first'))
                btn[i].addEventListener('click', () => {
                    if (this.currentPage != 1) {
                        this.currentPage = 1;
                        this.refresh();
                    }
                });
            else if (btn[i].classList.contains('previous'))
                btn[i].addEventListener('click', () => {
                    let cur = this.currentPage;
                    cur--;
                    if (cur <= 1)
                        cur = 1;
                    if (cur == this.currentPage)
                        return;
                    this.currentPage = cur;
                });
            else if (btn[i].classList.contains('next'))
                btn[i].addEventListener('click', () => {
                    let cur = this.currentPage;
                    cur++;
                    if (cur >= this._totalPages)
                        cur = this._totalPages;
                    if (cur == this.currentPage)
                        return;
                    this.currentPage = cur;
                });
            else if (btn[i].classList.contains('last'))
                btn[i].addEventListener('click', () => {
                    if (this.currentPage != this._totalPages) {
                        this.currentPage = this._totalPages;
                    }
                });
            else {
                btn[i].style.display = 'none';
                btn[i].addEventListener('click', (t) => {
                    let cur = WNparseNumber(t.target.innerText);
                    if (cur != this.currentPage) {
                        this.currentPage = cur;
                    }
                });
                this._paginationButtons.push(btn[i]);
            }
        }
    }
    setPaginationElements() {
        if (this.pageSize > 0) {
            if (this._paginationElement)
                this._paginationElement.style.display = '';
            this._paginationButtons.forEach((x) => x.style.display = 'none');
            let maxPages = this._paginationButtons.length;
            this._totalPages = Math.ceil(this._renderData.length / this.pageSize);
            if (this._totalPages < 1)
                this._totalPages = 1;
            if (this.currentPage < 1)
                this.currentPage = 1;
            else if (this.currentPage > this._totalPages)
                this.currentPage = this._totalPages;
            let startPage, endPage;
            if (this._totalPages <= maxPages) {
                startPage = 1;
                endPage = this._totalPages;
            }
            else {
                let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
                let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
                if (this.currentPage <= maxPagesBeforeCurrentPage) {
                    startPage = 1;
                    endPage = maxPages;
                }
                else if (this.currentPage + maxPagesAfterCurrentPage >= this._totalPages) {
                    startPage = this._totalPages - maxPages + 1;
                    endPage = this._totalPages;
                }
                else {
                    startPage = this.currentPage - maxPagesBeforeCurrentPage;
                    endPage = this.currentPage + maxPagesAfterCurrentPage;
                }
            }
            for (var i = startPage; i <= endPage; i++) {
                this._paginationButtons[i - startPage].innerText = (i).toString();
                this._paginationButtons[i - startPage].style.display = '';
                if (i == this.currentPage)
                    this._paginationButtons[i - startPage].classList.add('pagination-active');
                else
                    this._paginationButtons[i - startPage].classList.remove('pagination-active');
            }
        }
        else if (this._paginationElement)
            this._paginationElement.style.display = 'none';
    }
    fixedData(value, col) {
        let r = {
            text: value,
            value: value
        };
        try {
            if (col.datatype == 'number') {
                r.value = WNparseNumber(r.value, 0);
                r.text = r.value.toString();
            }
            if (col.datatype == 'date') {
                r.value = new Date(r.value);
                this.date.setDate(r.value);
                r.text = this.date.toString(col.format);
            }
            else if (col.format != '')
                r.text = WNStringFormat(r.value, col.format, this.date.cultureInfo);
        }
        catch (e) {
            console.error(e);
        }
        return r;
    }
    _fieldGroup = [];
    refresh() {
        if (!this.bodyTable)
            return;
        this.bodyTable.innerHTML = '';
        this.element.querySelectorAll('tbody').forEach(x => {
            if (x != this.bodyTable)
                x.remove();
        });
        this.bodyTable.setAttribute('page-index', '1');
        this._renderData.forEach(x => x.rowElement = null);
        let haveAggregate = this.cols.find(x => x.aggregate != '') != null;
        this._pageAddedd = 1;
        this._rowAddedd = 0;
        this._lastBodyTable = this.bodyTable;
        if (this.groups.length > 0) {
            this._fieldGroup = [];
            this.pageSize = 0;
            for (var i = 0; i < this.groups.length; i++) {
                this._fieldGroup.push({ f1: this.groups[i].split(':')[0].trim(), f2: this.groups[i].split(':')[1]?.trim() ?? 'value' });
            }
            this.addTableRows(this._renderData, '', 0, haveAggregate);
        }
        else {
            this.addTableRows(this._renderData, '', 0, haveAggregate);
        }
        this.setPaginationElements();
        if (this.bodyTable.querySelector('tr.active') == null) {
            this.selectedItem = null;
        }
        this.currentPage = 1;
    }
    addTableRows(ds, parentId, indent, haveAggregate) {
        let aggregate = new Array(this.cols.length);
        for (var i = 0; i < this.cols.length; i++)
            aggregate[i] = [];
        for (var row = 0; row < ds.length; row++) {
            let x = ds[row];
            if (this.groups.length > indent) {
                let lastGroup = x.fields[this._fieldGroup[indent].f1][this._fieldGroup[indent].f2];
                let filtervalue = [{ field: this._fieldGroup[indent].f1, filterable: this._fieldGroup[indent].f2, value: lastGroup }];
                let tr = document.createElement('tr');
                tr.className = 'grouprow';
                let td = document.createElement('td');
                td.colSpan = this.cols.length;
                td.className = 'groupcol group-' + indent.toString();
                td.innerHTML = lastGroup;
                tr.setAttribute('private-id', indent + '_' + x.privateId);
                tr.setAttribute('parent-id', parentId);
                tr.addEventListener('click', (e) => {
                    let tr = e.target;
                    while (tr.tagName != 'TR')
                        tr = tr.parentElement;
                    tr.classList.toggle('collapsed');
                    this.hideByParent(tr.classList.contains('collapsed'), tr.getAttribute('private-id'));
                });
                tr.appendChild(td);
                this._lastBodyTable.appendChild(tr);
                let ds1 = this.filter(ds, filtervalue);
                let ag1 = this.addTableRows(ds1, indent + '_' + x.privateId, indent + 1, haveAggregate);
                row += ds1.length - 1;
                for (var i = 0; i < aggregate.length; i++) {
                    ag1[i].forEach(x => aggregate[i].push(x));
                }
            }
            else {
                let tr = document.createElement('tr');
                tr.setAttribute('private-id', x.privateId.toString());
                tr.setAttribute('parent-id', parentId);
                if (x.privateId == this.selectedItem?.privateId) {
                    tr.classList.add('active');
                }
                if (this.groups.length > 0)
                    tr.className = 'group-' + indent.toString();
                tr.addEventListener('click', (t) => {
                    let tr = t.target;
                    while (tr.tagName == 'TD')
                        tr = tr.parentElement;
                    let rowidx = WNparseNumber(tr.getAttribute('private-id'), -1);
                    let newselected = this._renderData.filter(x => x.privateId == rowidx)[0] ?? null;
                    this.selectedItem = newselected;
                }, false);
                for (var i = 0; i < this.cols.length; i++) {
                    let td = document.createElement('td');
                    if (x.fields[this.cols[i].field] != null)
                        td.innerHTML = x.fields[this.cols[i].field].text;
                    else if (x[this.cols[i].field] != null)
                        td.innerHTML = x[this.cols[i].field];
                    else
                        td.innerHTML = '';
                    if (this.cols[i].aggregate != '') {
                        aggregate[i].push(x.fields[this.cols[i].field].value);
                    }
                    if (this.cols[i].commandElement.length > 0) {
                        this.cols[i].commandElement.forEach(xx => {
                            let cmd = xx.cloneNode(true);
                            let command = xx.getAttribute('command');
                            if (command && command != '') {
                                cmd.addEventListener('click', (e) => {
                                    this.command?.(this, command, x);
                                    e.stopPropagation();
                                });
                                td.appendChild(cmd);
                            }
                        });
                    }
                    try {
                        this.cols[i].condition?.(td, x, x.fields[this.cols[i].field].value, x.fields[this.cols[i].field].text);
                    }
                    catch (e) {
                        console.error(e);
                    }
                    tr.appendChild(td);
                }
                x.rowElement = tr;
                if (this.pageSize > 0 && this._rowAddedd >= this.pageSize) {
                    this._pageAddedd++;
                    this._rowAddedd = 0;
                    let tb = document.createElement('tbody');
                    this._lastBodyTable.after(tb);
                    this._lastBodyTable = tb;
                    this._lastBodyTable.setAttribute('page-index', this._pageAddedd.toString());
                }
                this._lastBodyTable.appendChild(tr);
                this._rowAddedd++;
            }
        }
        ;
        if (haveAggregate) {
            this.addAggregateRow(aggregate, parentId, indent);
            this._rowAddedd++;
        }
        return aggregate;
    }
    hideByParent(hide, privateId) {
        let elems = this.element.querySelectorAll('tr[parent-id="' + privateId + '"]');
        elems.forEach((x) => {
            if (hide) {
                if (x.style.display != 'none') {
                    x.style.display = 'none';
                    if (x.hasAttribute('private-id'))
                        this.hideByParent(hide, x.getAttribute('private-id'));
                }
            }
            else {
                x.style.display = '';
                if (x.hasAttribute('private-id') && !x.classList.contains('collapsed'))
                    this.hideByParent(hide, x.getAttribute('private-id'));
            }
        });
    }
    addAggregateRow(aggregate, parentId, indent) {
        let tr = document.createElement('tr');
        tr.className = 'aggregate';
        tr.setAttribute('parent-id', parentId);
        if (this.groups.length > 0)
            tr.className += ' group-' + indent.toString();
        for (var i = 0; i < this.cols.length; i++) {
            let td = document.createElement('td');
            if (this.cols[i].aggregate != '' && aggregate[i] && aggregate[i].length > 0) {
                let value = 0;
                if (this.cols[i].aggregate == 'sum')
                    aggregate[i]?.forEach(x => value += x);
                else if (this.cols[i].aggregate == 'avg') {
                    aggregate[i]?.forEach(x => value += x);
                    value = value / aggregate[i].length;
                }
                else if (this.cols[i].aggregate == 'count')
                    value = aggregate[i].length;
                else if (this.cols[i].aggregate == 'max')
                    value = Math.max(aggregate[i]);
                else if (this.cols[i].aggregate == 'min')
                    value = Math.min(aggregate[i]);
                td.innerHTML = this.fixedData(value, this.cols[i]).text;
            }
            tr.appendChild(td);
        }
        this._lastBodyTable.appendChild(tr);
    }
    setFilter() {
        let filtervalue = [];
        for (var i = 0; i < this.cols.length; i++) {
            let x = this.cols[i];
            if (x.filterable != WNTableTextValue.none && x.elementFilter != null && x.elementFilter?.value != '') {
                filtervalue.push({ field: x.field, filterable: x.filterable, value: x.elementFilter.value.toLowerCase() });
            }
        }
        if (filtervalue.length == 0) {
            this._renderData = this.dataSource.map(x => x);
            if (this._sortby.length > 0)
                this.resort();
            else
                this.sort(-1);
            this.refresh();
            return;
        }
        if (this.beforeFilter && !!this.beforeFilter?.(this))
            return;
        this._renderData = this.filter(this.dataSource, filtervalue);
        if (this._sortby.length > 0)
            this.resort();
        else
            this.sort(-1);
        this.afterFilter?.(this);
        this.refresh();
    }
    filter(ds, filtervalue) {
        let retArray = [];
        for (var row = 0; row < ds.length; row++) {
            let x = ds[row];
            let ret = true;
            for (var i = 0; i < filtervalue.length; i++) {
                ret = ret && WNDenativeDigit(x.fields[filtervalue[i].field][filtervalue[i].filterable].toString().toLowerCase()).includes(filtervalue[i].value);
                if (!ret)
                    break;
            }
            if (ret)
                retArray.push(x);
        }
        return retArray;
    }
}
class WNTime {
    nameType = 'WNTime';
    element;
    date = new WNDate();
    nativeDigit = wnConfig.nativeDigit || false;
    displayFormat = 'HH:mm';
    valueElement;
    inputFormat = 'hm';
    hourLongStep = 5;
    minuteLongStep = 15;
    displayElement;
    ontextinput = false;
    _selectlabel;
    _inputhour;
    _inputminute;
    _inputsecond;
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.init();
        }
    }
    init() {
        if (this.element.hasAttribute('calendar'))
            this.date.calendar = WNCalendarFunction(this.element.getAttribute('calendar'));
        if (this.element.hasAttribute('cultureinfo'))
            this.date.cultureInfo = WNCultureInfoFunction(this.element.getAttribute('cultureinfo'));
        if (this.element.hasAttribute('native-digit'))
            this.nativeDigit = WNparseBoolean(this.element.getAttribute('nativeDigit'), false);
        if (this.element.hasAttribute('input-format'))
            this.inputFormat = WNparseString(this.element.getAttribute('input-format'), 'hm');
        if (this.element.hasAttribute('display-id'))
            this.displayElement = document.getElementById(this.element.getAttribute('display-id'));
        if (this.displayElement != undefined) {
            this.displayElement.addEventListener('input', () => { this.setValueFromDisplay(); });
            this.displayElement.addEventListener('change', () => { this.renderDisplay(); });
        }
        this.displayFormat = this.date.cultureInfo.DateTimeFormat.shortTimePattern;
        if (this.element.hasAttribute('display-format'))
            this.displayFormat = WNparseString(this.element.getAttribute('display-format'), this.date.cultureInfo.DateTimeFormat.shortTimePattern);
        if (this.element.hasAttribute('value-id'))
            this.valueElement = document.getElementById(this.element.getAttribute('value-id'));
        this.date.setDate(new Date(this.getElementValue(this.valueElement)));
        this.date.dateChanged = () => {
            let tDate = new WNDate(this.date);
            tDate.setDate(new Date(this.getElementValue(this.valueElement)));
            tDate.hour = this.date.hour;
            tDate.minute = this.date.minute;
            tDate.second = this.date.second;
            this.setElementValue(this.valueElement, this.setDateValue(this.date, this.valueElement));
            this.renderDisplay();
        };
        this.addObjects();
        this.refresh();
    }
    get value() { return this.date.toDateTime(); }
    set value(value) { this.date.setDate(value); this.refresh(); }
    setHour(value) {
        if (value > 24)
            value -= 24;
        if (value < 0)
            value += 24;
        this.date.hour = value;
        this.refresh();
    }
    setMinute(value) {
        if (value > 59)
            value -= 60;
        if (value < 0)
            value += 60;
        this.date.minute = value;
        this.refresh();
    }
    setSecond(value) {
        if (value > 59)
            value -= 60;
        if (value < 0)
            value += 60;
        this.date.second = value;
        this.refresh();
    }
    addObjects() {
        if (!this.element.classList.contains('time'))
            this.element.classList.add('time');
        this._selectlabel = document.createElement('label');
        this._selectlabel.className = 'time-result';
        this.element.appendChild(this._selectlabel);
        let timeinput = document.createElement('div');
        timeinput.className = 'time-input';
        if (this.inputFormat.toLocaleLowerCase().includes('h')) {
            let a = this.addSection();
            a[1].addEventListener('click', (e) => {
                this.setHour(this.date.hour + this.hourLongStep);
                e.stopPropagation();
            });
            a[2].addEventListener('click', (e) => {
                this.setHour(this.date.hour + 1);
                e.stopPropagation();
            });
            a[3].addEventListener('input', (e) => {
                this.setHour(parseInt(e.target.value));
            });
            a[4].addEventListener('click', (e) => {
                this.setHour(this.date.hour - 1);
                e.stopPropagation();
            });
            a[5].addEventListener('click', (e) => {
                this.setHour(this.date.hour - this.hourLongStep);
                e.stopPropagation();
            });
            this._inputhour = a[3];
            timeinput.appendChild(a[0]);
        }
        if (this.inputFormat.toLocaleLowerCase().includes('m')) {
            let a = this.addSection();
            a[1].addEventListener('click', (e) => {
                this.setMinute(this.date.minute + this.minuteLongStep);
                e.stopPropagation();
            });
            a[2].addEventListener('click', (e) => {
                this.setMinute(this.date.minute + 1);
                e.stopPropagation();
            });
            a[3].addEventListener('input', (e) => {
                this.setMinute(parseInt(e.target.value));
            });
            a[4].addEventListener('click', (e) => {
                this.setMinute(this.date.minute - 1);
                e.stopPropagation();
            });
            a[5].addEventListener('click', (e) => {
                this.setMinute(this.date.minute - this.minuteLongStep);
                e.stopPropagation();
            });
            this._inputminute = a[3];
            timeinput.appendChild(a[0]);
        }
        if (this.inputFormat.toLocaleLowerCase().includes('s')) {
            let a = this.addSection();
            a[1].addEventListener('click', (e) => {
                this.setSecond(this.date.second + this.minuteLongStep);
                e.stopPropagation();
            });
            a[2].addEventListener('click', (e) => {
                this.setSecond(this.date.second + 1);
                e.stopPropagation();
            });
            a[3].addEventListener('input', (e) => {
                this.setSecond(parseInt(e.target.value));
            });
            a[4].addEventListener('click', (e) => {
                this.setSecond(this.date.second - 1);
                e.stopPropagation();
            });
            a[5].addEventListener('click', (e) => {
                this.setSecond(this.date.second - this.minuteLongStep);
                e.stopPropagation();
            });
            this._inputsecond = a[3];
            timeinput.appendChild(a[0]);
        }
        this.element.appendChild(timeinput);
    }
    addSection() {
        let div = document.createElement('div');
        let doubleup = document.createElement('button');
        div.appendChild(doubleup);
        let up = document.createElement('button');
        div.appendChild(up);
        let input = document.createElement('input');
        input.type = 'number';
        div.appendChild(input);
        let down = document.createElement('button');
        div.appendChild(down);
        let doubledown = document.createElement('button');
        div.appendChild(doubledown);
        return [div, doubleup, up, input, down, doubledown];
    }
    refresh() {
        this._selectlabel.textContent = this.date.toString(this.date.cultureInfo.DateTimeFormat.longTimePattern, this.nativeDigit);
        if (this._inputhour != null)
            this._inputhour.value = this.date.hour.toString();
        if (this._inputminute != null)
            this._inputminute.value = this.date.minute.toString();
        if (this._inputsecond != null)
            this._inputsecond.value = this.date.second.toString();
    }
    renderDisplay() {
        if (this.ontextinput)
            return;
        let ret1 = this.date.toString(this.displayFormat, false);
        if (this.displayElement != undefined) {
            this.setElementValue(this.displayElement, ret1);
        }
    }
    setValueFromDisplay() {
        this.ontextinput = true;
        let ret = this.getElementValue(this.displayElement);
        this.date.setDateString(WNDenativeDigit(ret, this.date.cultureInfo));
        this.refresh();
        this.ontextinput = false;
    }
    setElementValue(elem, value) {
        if (elem != undefined)
            if (elem.localName == 'input')
                elem.value = value;
            else
                elem.textContent = value;
    }
    getElementValue(elem) {
        let ret = '';
        if (elem != undefined)
            if (elem.localName == 'input')
                ret = elem.value;
            else
                ret = elem.textContent;
        return ret;
    }
    setDateValue(date, valueElement) {
        let tDate = new WNDate(date);
        tDate.setDate(new Date(this.getElementValue(valueElement)));
        tDate.hour = date.hour;
        tDate.minute = date.minute;
        tDate.second = date.second;
        tDate.milliseconds = date.milliseconds;
        date.setYMD(tDate.year, tDate.month, tDate.day, tDate.hour, tDate.minute, tDate.second, tDate.milliseconds);
        return tDate.toDateTime().toISOString();
    }
}
class WNToast {
    nameType = 'WNToast';
    element;
    timeout = 0;
    _timeouthandle;
    beforeHide;
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    Init() {
        let elem = this.element.querySelectorAll('[close-parent]');
        for (var i = 0; i < elem.length; i++)
            elem[i].addEventListener('click', () => { this.hide(); });
        if (this.element.hasAttribute('timeout'))
            this.timeout = WNparseNumber(this.element.getAttribute('timeout'), 0);
        if (this.element.hasAttribute('onbeforehide'))
            this.beforeHide = WNGenerateFunction(this.element.getAttribute('onbeforehide'), 't');
    }
    show() {
        clearTimeout(this._timeouthandle);
        this.element.classList.add('show');
        if (this.timeout > 0) {
            this._timeouthandle = setTimeout(() => { this.hide(); }, this.timeout);
        }
    }
    toggle() {
        if (this.element.classList.contains('show'))
            this.hide();
        else
            this.show();
    }
    hide() {
        clearTimeout(this._timeouthandle);
        if (this.beforeHide && !this.beforeHide(this))
            return;
        this.element.classList.remove('show');
    }
}
class WNTooltip {
    nameType = 'WNTooltip';
    element;
    delay = 500;
    hideAfter = 3000;
    tooltipClass = '';
    _events;
    get events() { return this._events; }
    set events(value) { this._events = value; this.setEvents(); }
    _lostEvents;
    get lostEvents() { return this._lostEvents; }
    set lostEvents(value) { this._lostEvents = value; this.setEvents(); }
    _target;
    _delayHandle;
    _hideAfterhandle;
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.init();
        }
    }
    init() {
        let text = this.element.getAttribute('wn-tooltip');
        this._target = document.getElementById(text);
        if (this._target != null && !this._target.classList.contains('tooltip'))
            this._target = null;
        if (this._target == null)
            this.create_target(text);
        if (this.element.hasAttribute('wn-tooltip-delay'))
            this.delay = WNparseNumber(this.element.getAttribute('wn-tooltip-delay'), 500);
        if (this.element.hasAttribute('wn-tooltip-hideAfter'))
            this.hideAfter = WNparseNumber(this.element.getAttribute('wn-tooltip-hideAfter'), 3000);
        if (this.element.hasAttribute('wn-tooltip-class'))
            this.tooltipClass = this.element.getAttribute('wn-tooltip-class');
        if (this.element.hasAttribute('wn-tooltip-events')) {
            this._events = this.element.getAttribute('wn-tooltip-events');
            if (this.element.hasAttribute('wn-tooltip-events-lost'))
                this.lostEvents = this.element.getAttribute('wn-tooltip-events-lost');
        }
        else {
            this._events = 'mouseenter';
            if (!this.element.hasAttribute('wn-tooltip-nolost'))
                this._lostEvents = 'mouseleave';
        }
        this.setEvents();
    }
    create_target(content) {
        this._target = document.createElement('div');
        this._target.className = 'tooltip tooltip-arrow-bottom';
        this._target.innerHTML = content;
        if (this.element.hasAttribute('wn-tooltip-class')) {
            let t = this.element.getAttribute('wn-tooltip-class');
            if (t.includes('tooltip-arrow'))
                this._target.className = 'tooltip';
            this._target.className += ' ' + t;
        }
        this._target.setAttribute('dir', this.element.dir);
        this.element.after(this._target);
    }
    setEvents() {
        if (this.events != null) {
            let eventlist = this.events.split(',');
            eventlist.forEach((e) => {
                this.element.removeEventListener(e.trim(), () => { this.autoShow(); });
                this.element.addEventListener(e.trim(), () => { this.autoShow(); });
            });
        }
        if (this._lostEvents != null) {
            let eventlist = this._lostEvents.split(',');
            eventlist.forEach((e) => {
                this.element.removeEventListener(e.trim(), () => { this.hide(); });
                this.element.addEventListener(e.trim(), () => { this.hide(); });
            });
        }
        window.addEventListener("scroll", () => { this._target.classList.remove('show'); });
        window.addEventListener("resize", () => { this._target.classList.remove('show'); });
    }
    autoShow() {
        this._delayHandle = setTimeout(() => {
            this.show();
            if (this.hideAfter != 0)
                this._hideAfterhandle = setTimeout(() => {
                    this.hide();
                }, this.hideAfter);
        }, this.delay);
    }
    show() {
        if (this._target.classList.contains('show'))
            return;
        this._target.className = 'tooltip ' + this.tooltipClass;
        let param = { fit: false, direction: '' };
        param.direction = 'top';
        if (this._target.classList.contains('tooltip-arrow-bottom'))
            param.direction = 'top';
        else if (this._target.classList.contains('tooltip-arrow-top'))
            param.direction = 'bottom';
        else if (this._target.classList.contains('tooltip-arrow-start'))
            param.direction = 'start';
        else if (this._target.classList.contains('tooltip-arrow-end'))
            param.direction = 'end';
        WNSetElementPosition(this._target, this.element, param);
        this._target.classList.add('show');
    }
    hide() {
        clearTimeout(this._hideAfterhandle);
        clearTimeout(this._delayHandle);
        this._target.classList.remove('show');
    }
}
function WNTooltipAssign(elem) {
    let selectors = elem.querySelectorAll("[wn-tooltip]");
    for (var i = 0; i < selectors.length; i++) {
        let elem = selectors[i];
        let id = elem.id;
        if (id == '')
            id = ('wn-' + elem.tagName + (Object.keys(WNElements).length + 1).toString()).toLowerCase();
        let wn = WN(elem);
        if (wn)
            wn.wn = new WNTooltip(elem);
    }
}
class WNTree {
    nameType = 'WNTree';
    element;
    dataSource;
    selectedItem;
    beforeClick;
    afterClick;
    selectionChanged;
    beforeCollapsed;
    afterCollapsed;
    beforeExpand;
    afterExpand;
    beforeToggle;
    afterToggle;
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    Init() {
        this.selectedItem = null;
        this.initDataSource();
        this.initItems();
        if (this.element.classList.contains('collapsed-all'))
            this.collapsedAll();
        if (this.element.hasAttribute('onbeforeclick'))
            this.beforeClick = WNGenerateFunction(this.element.getAttribute('onbeforeclick'), 't,n,e');
        if (this.element.hasAttribute('onafterclick'))
            this.afterClick = WNGenerateFunction(this.element.getAttribute('onafterclick'), 't,n,e');
        if (this.element.hasAttribute('onselectionchanged'))
            this.selectionChanged = WNGenerateFunction(this.element.getAttribute('onselectionchanged'), 't,n');
        if (this.element.hasAttribute('onbeforecollapsed'))
            this.beforeCollapsed = WNGenerateFunction(this.element.getAttribute('onbeforecollapsed'), 't,n');
        if (this.element.hasAttribute('onaftercollapsed'))
            this.afterCollapsed = WNGenerateFunction(this.element.getAttribute('onaftercollapsed'), 't,n');
        if (this.element.hasAttribute('onbeforeexpand'))
            this.beforeExpand = WNGenerateFunction(this.element.getAttribute('onbeforeexpand'), 't,n');
        if (this.element.hasAttribute('onafterexpand'))
            this.afterExpand = WNGenerateFunction(this.element.getAttribute('onafterexpand'), 't,n');
        if (this.element.hasAttribute('onbeforetoggle'))
            this.beforeToggle = WNGenerateFunction(this.element.getAttribute('onbeforetoggle'), 't,n');
        if (this.element.hasAttribute('onaftertoggle'))
            this.afterToggle = WNGenerateFunction(this.element.getAttribute('onaftertoggle'), 't,n');
    }
    initDataSource(parentNode, parent = undefined) {
        if (parent == undefined) {
            parent = this.element;
            this.dataSource = [];
        }
        for (var i = 0; i < parent.children.length; i++) {
            let itemelement = parent.children[i].querySelector('item');
            let image = itemelement.querySelector('img')?.getAttribute('src') ?? itemelement.querySelector('i')?.outerHTML ?? '';
            let link = itemelement.querySelector('a')?.getAttribute('href') ?? '';
            let item = {
                id: (parentNode?.id ?? 0) * 10000 + i + 1,
                text: itemelement.textContent,
                html: itemelement.innerHTML,
                value: itemelement.getAttribute('value'),
                link: link,
                image: image,
                liElement: itemelement.parentElement,
                element: itemelement,
                parentNode: parentNode,
                children: []
            };
            itemelement.setAttribute('item-id', item.id.toString());
            if (parentNode == null)
                this.dataSource.push(item);
            else
                parentNode.children.push(item);
            let ul = itemelement.parentElement.querySelector('ul') ?? parent.children[i].querySelector('ol');
            if (ul != null) {
                this.initDataSource(item, ul);
            }
        }
    }
    initItem(node) {
        node.liElement.removeEventListener("click", (e) => { this.click(node, e); });
        node.liElement.removeEventListener("dblclick", (e) => { this.dblclick(node, e); });
        node.liElement.addEventListener("click", (e) => { this.click(node, e); }, false);
        node.liElement.addEventListener("dblclick", (e) => { this.dblclick(node, e); }, false);
        if (this.element.classList.contains('tree-expand-item'))
            node.liElement.classList.remove('expandable');
        else {
            if (node.children.length > 0)
                node.liElement.classList.add('expandable');
            else
                node.liElement.classList.remove('expandable');
            node.parentNode?.liElement.classList.add('expandable');
        }
        if (node.element.classList.contains('active'))
            this.selectedItem = node;
    }
    initItems(parentNode) {
        if (parentNode == undefined) {
            parentNode = this.dataSource;
        }
        for (var i = 0; i < parentNode.length; i++) {
            let node = parentNode[i];
            this.initItem(node);
            if (node.children.length > 0)
                this.initItems(node.children);
        }
    }
    lastNodeClick;
    lastNodeTime = 0;
    click(node, e) {
        e.stopPropagation();
        if (navigator.maxTouchPoints > 0) {
            if (this.lastNodeClick == node && (Date.now() - this.lastNodeTime) < 400) {
                this.dblclick(node, e);
                return;
            }
            this.lastNodeTime = Date.now();
            this.lastNodeClick = node;
        }
        this.beforeClick?.(this, node, e);
        if (node.children.length > 0) {
            if (this.selectedItem != node)
                this.select(node);
            else if ((node.liElement.dir == 'ltr' && e.offsetX < parseInt(getComputedStyle(node.liElement).paddingInlineStart) * 1.1) ||
                ((node.liElement.clientWidth - e.offsetX) < parseInt(getComputedStyle(node.liElement).paddingInlineStart) * 1.1))
                this.toggle(node);
        }
        else
            this.select(node);
        this.afterClick?.(this, node, e);
    }
    dblclick(node, e) {
        e.stopPropagation();
        if (node.children.length == 0)
            return;
        this.toggle(node);
    }
    select(node) {
        if (node.element.hasAttribute('disabled') || node.element.classList.contains('disabled'))
            return;
        if (node == this.selectedItem)
            return;
        this.element.querySelectorAll('.active').forEach(x => x.classList.remove('active'));
        node.element.classList.add('active');
        this.selectedItem = node;
        this.expandToParent(node);
        this.selectionChanged?.(this, node);
    }
    toggle(node) {
        if (this.element.classList.contains('tree-expand-item'))
            return;
        this.beforeToggle?.(this, node);
        if (node.liElement.classList.contains('collapsed'))
            this.expand(node);
        else
            this.collapse(node);
        this.afterToggle?.(this, node);
    }
    collapse(node) {
        if (this.element.classList.contains('tree-expand-item'))
            return;
        this.beforeCollapsed?.(this, node);
        node.liElement.classList.add('collapsed');
        this.afterCollapsed?.(this, node);
    }
    collapseWithChild(node) {
        this.collapse(node);
        for (var i = 0; i < node.children.length; i++) {
            this.collapseWithChild(node.children[i]);
        }
    }
    collapsedAll() {
        for (var i = 0; i < this.dataSource.length; i++) {
            this.collapseWithChild(this.dataSource[i]);
        }
    }
    expand(node) {
        if (this.element.classList.contains('tree-expand-item'))
            return;
        this.beforeExpand?.(this, node);
        node.liElement.classList.remove('collapsed');
        this.afterExpand?.(this, node);
    }
    expandToParent(node) {
        let tNode = node;
        while (tNode != null) {
            this.expand(tNode);
            tNode = tNode.parentNode;
        }
    }
    expandChilds(node) {
        this.expand(node);
        for (var i = 0; i < node.children.length; i++) {
            this.expandChilds(node.children[i]);
        }
    }
    expandAll() {
        for (var i = 0; i < this.dataSource.length; i++) {
            this.expandChilds(this.dataSource[i]);
        }
    }
    findByText(text, contains = false, select = false) {
        let find = WNFindTreeArray(this.dataSource, "text", '', text, contains, true, "children");
        if (select && find.length > 0)
            this.select(find[0]);
        return find;
    }
    findByValue(value, select) {
        let find = WNFindTreeArray(this.dataSource, "value", '', value, false, false, "children");
        if (find.length > 0) {
            if (select)
                this.select(find[0]);
            return find[0];
        }
        return null;
    }
    findByTextOrValue(text, contains = false, select = false) {
        let find = WNFindTreeArray(this.dataSource, "text", "value", text, contains, true, "children");
        if (select && find.length > 0)
            this.select(find[0]);
        return find;
    }
    filterByText(text, contains) {
        if (text == '') {
            this.element.querySelectorAll('li').forEach(x => x.classList.remove('hide'));
            return;
        }
        let find = this.findByText(text, contains, false);
        this.element.querySelectorAll('li').forEach(x => x.classList.add('hide'));
        if (find.length > 0) {
            for (var i = 0; i < find.length; i++) {
                let tnode = find[i];
                while (tnode != null) {
                    tnode.liElement.classList.remove('hide');
                    tnode = tnode.parentNode;
                }
            }
        }
        this.expandAll();
    }
    addToDataSource(parent, text, link, value, image) {
        try {
            let item = {
                id: 0,
                html: text,
                link: link,
                value: value,
                image: image,
                children: [],
                element: null,
                liElement: null,
                parentNode: parent,
                text: WNHtmlToText(text)
            };
            let elem = this.treeNodeToHtmlElement(item);
            item.element = elem;
            let ul = this.element;
            let samePlace;
            if (parent) {
                if (parent.children.length == 0) {
                    ul = document.createElement('ul');
                    parent.liElement.appendChild(ul);
                }
                else {
                    ul = parent.children[0].liElement.parentElement;
                    while (ul.tagName != 'UL')
                        ul = ul.parentElement;
                }
                parent.children.push(item);
                samePlace = parent.children;
            }
            else {
                this.dataSource.push(item);
                samePlace = this.dataSource;
            }
            item.id = (item.parentNode?.id ?? 0) * 10000;
            for (var i = 0; i < samePlace.length; i++) {
                if (item.id < samePlace[i].id)
                    item.id = samePlace[i].id;
            }
            item.id++;
            item.element.setAttribute('item-id', item.id.toString());
            item.liElement = document.createElement('li');
            item.liElement.dir = this.element.dir;
            item.liElement.appendChild(item.element);
            ul.appendChild(item.liElement);
            this.initItem(item);
            return item;
        }
        catch (e) {
            console.error(e);
        }
        return null;
    }
    treeNodeToHtmlElement(node) {
        let item = document.createElement('item');
        let tItem = item;
        if (node.link && node.link != '') {
            let link = document.createElement('a');
            link.href = node.link;
            item.appendChild(link);
            tItem = link;
        }
        if (node.image && node.image != '') {
            if (node.image.trim().startsWith('<'))
                tItem.innerHTML += node.image;
            else
                tItem.innerHTML += `<img src="${node.image}"/>`;
        }
        tItem.innerHTML += node.html == '' ? node.text : node.html;
        node.text = WNHtmlToText(item.innerHTML);
        return item;
    }
    removeFromDataSource(node) {
        try {
            node.liElement.remove();
            let list = this.dataSource;
            if (node.parentNode.children.length > 0)
                list = node.parentNode.children;
            for (var i = 0; i < list.length; i++) {
                if (list[i].id == node.id) {
                    list.splice(i, 1);
                    break;
                }
            }
            if (node.parentNode)
                this.initItem(node.parentNode);
        }
        catch (e) {
            console.error(e);
            return false;
        }
        return true;
    }
    updateNodeElement(node) {
        node.element.innerHTML = this.treeNodeToHtmlElement(node).innerHTML;
    }
    setDataSourceByParentId(parentNode, dataSource, idFieldName, parentFieldName, parentRootValue = null, displayFieldName, valueFieldName, linkFieldName, imageFieldName, append) {
        if (!append)
            this.clearChilds(parentNode);
        this.convertParentId(parentNode, parentRootValue, dataSource, idFieldName, parentFieldName, displayFieldName, valueFieldName, linkFieldName, imageFieldName);
    }
    convertParentId(parentNode, parentValue, dataSource, idFieldName, parentFieldName, displayFieldName, valueFieldName, linkFieldName, imageFieldName) {
        let subItem = dataSource.filter(x => x[parentFieldName] == parentValue);
        for (var i = 0; i < subItem.length; i++) {
            let item = subItem[i];
            let node = this.addToDataSource(parentNode, item[displayFieldName] ?? null, item[linkFieldName] ?? null, item[valueFieldName] ?? null, item[imageFieldName] ?? null);
            this.convertParentId(node, node.value, dataSource, idFieldName, parentFieldName, displayFieldName, valueFieldName, linkFieldName, imageFieldName);
        }
    }
    setDataSourceByItem(parentNode, dataSource, itemFieldName, displayFieldName, valueFieldName, linkFieldName, imageFieldName, append) {
        if (!append)
            this.clearChilds(parentNode);
        this.convertByItem(parentNode, dataSource, itemFieldName, displayFieldName, valueFieldName, linkFieldName, imageFieldName);
    }
    convertByItem(parentNode, dataSource, itemFieldName, displayFieldName, valueFieldName, linkFieldName, imageFieldName) {
        for (var i = 0; i < dataSource.length; i++) {
            let item = dataSource[i];
            let node = this.addToDataSource(parentNode, item[displayFieldName] ?? null, item[linkFieldName] ?? null, item[valueFieldName] ?? null, item[imageFieldName] ?? null);
            if (item[itemFieldName] && item[itemFieldName].length > 0)
                this.convertByItem(node, item[itemFieldName], itemFieldName, displayFieldName, valueFieldName, linkFieldName, imageFieldName);
        }
    }
    setDataSource(parentNode = null, dataSource, append) {
        if (!append)
            this.clearChilds(parentNode);
        this.convertDataSource(parentNode, dataSource);
    }
    clearChilds(parentNode) {
        if (parentNode == null) {
            this.dataSource = [];
            this.element.innerHTML = '';
        }
        else
            while (parentNode.children.length > 0)
                this.removeFromDataSource(parentNode.children[0]);
    }
    convertDataSource(parentNode, dataSource) {
        for (var i = 0; i < dataSource.length; i++) {
            let item = dataSource[i];
            let node = this.addToDataSource(parentNode, item['html'] ?? null, item['link'] ?? null, item['value'] ?? null, item['image'] ?? null);
            if (item['children'] && item['children'].length > 0)
                this.convertDataSource(node, item['children']);
        }
    }
}
class WNTreeTable {
    nameType = 'WNTreeTable';
    element;
    tree;
    table;
    selectionChanged;
    tableSelectionChanged;
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    Init() {
        let tree = this.element.querySelector('.tree');
        if (tree) {
            this.tree = new WNTree(tree);
            this.tree.selectionChanged = (t, n) => this.selectionChanged?.(t, n);
        }
        let table = this.element.querySelector('table');
        if (table) {
            this.table = new WNTable(table);
            this.table.selectionChanged = (t, oldNode, newNode) => this.tableSelectionChanged?.(t, oldNode, newNode);
        }
        if (this.element.hasAttribute('onselectionchanged')) {
            this.selectionChanged = WNGenerateFunction(this.element.getAttribute('onselectionchanged'), 't,n');
        }
        if (this.element.hasAttribute('ontableselectionchanged')) {
            this.tableSelectionChanged = WNGenerateFunction(this.element.getAttribute('ontableselectionchanged'), 't,oldNode,newNode');
        }
    }
}
class WNValidator {
    nameType = 'WNValidator';
    element;
    constructor(element) {
        if (element !== undefined && element !== null) {
            this.element = element;
            this.init();
        }
    }
    init() {
        this.element.addEventListener('submit', (event) => {
            this.validate(event.target, event);
        });
        this.element.addEventListener('reset', (event) => {
            this.reset();
        });
    }
    validate(form, event) {
        if (form == undefined || form == null)
            form = this.element;
        wnValidator_onvalidationcheck(form.children, event);
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('validated');
        return form.checkValidity();
    }
    isValid() {
        wnValidator_onvalidationcheck(this.element.children, null);
        this.element.classList.add('validated');
        return this.element.checkValidity();
    }
    reset() {
        this.element.classList.remove('validated');
        this.element.noValidate = true;
    }
}
async function wnValidator_onvalidationcheck(children, event) {
    for (var i = 0; i < children.length; i++) {
        let x = children.item(i);
        let elems = x.querySelectorAll('[norequired]');
        elems.forEach((x) => {
            x.setAttribute('required', '');
            x.removeAttribute('norequired');
        });
        if (!(getComputedStyle(x).display == 'none' || getComputedStyle(x).visibility == 'hidden')) {
            if (x.hasAttribute('onvalidation')) {
                let func = x.getAttribute('onvalidation');
                let ret = false;
                if (func.includes('=>'))
                    ret = new Function('t', 'e', 'return ' + func)()(x, event);
                else
                    ret = new Function(func)();
                if (!ret)
                    x.setCustomValidity('Error');
                else
                    x.setCustomValidity('');
            }
            if (x.childElementCount > 0)
                wnValidator_onvalidationcheck(x.children, event);
        }
        else {
            if (x.hasAttribute('required'))
                x.setCustomValidity('');
            let elems = x.querySelectorAll('[required]');
            elems.forEach((x) => {
                x.setAttribute('norequired', '');
                x.removeAttribute('required');
            });
        }
    }
    ;
}
var _AnimationOnScroll;
function WNAnimationSetup() {
    _AnimationOnScroll = document.querySelectorAll(".animateonscroll,.animateonscrollloop");
    if (_AnimationOnScroll.length > 0) {
        window.addEventListener("scroll", () => WNAnimationStart());
        window.addEventListener("resize", () => WNAnimationStart());
        window.addEventListener("orientationchange", () => WNAnimationStart());
        WNAnimationStart();
    }
}
function WNGetOffset(el) {
    let _x = 0;
    let _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - (el.tagName != 'BODY' ? el.scrollLeft : 0);
        _y += el.offsetTop - (el.tagName != 'BODY' ? el.scrollTop : 0);
        el = el.offsetParent;
    }
    return {
        top: _y,
        left: _x
    };
}
;
function WNAnimationStart() {
    _AnimationOnScroll.forEach((el) => {
        let pos = WNGetOffset(el);
        let top = pos.top;
        let bottom = top + el.offsetHeight;
        let wtop = window.scrollY;
        let wbottom = window.scrollY + window.innerHeight;
        if (top < wbottom && bottom > wtop) {
            if (el.getAttribute('animateplaystate') == null || el.getAttribute('animateplaystate') == '') {
                let c = el.className;
                el.className = '';
                void el.offsetWidth;
                el.className = c;
                el.setAttribute('animateplaystate', 'play');
            }
        }
        else if ((bottom < wtop || top > wbottom)
            && el.classList.contains('animateonscrollloop')) {
            el.setAttribute('animateplaystate', '');
        }
    });
}
var WNPreLoaderDelayStart = 500;
var WNPreLoaderTimeout = 30000;
var WNPreLoderId = 'preloader';
var _PreLoaderWaitCount = 0;
var _WNPreLoaderTimeoutTimer;
function wnStopPreLoaderTimeout() {
    if (_WNPreLoaderTimeoutTimer != 0) {
        clearTimeout(_WNPreLoaderTimeoutTimer);
        _WNPreLoaderTimeoutTimer = 0;
    }
}
function wnShowPreLoaderTimeout(show, _WNPreLoaderTimeout = WNPreLoaderTimeout, _WNPreLoaderDelayStart = 0, _WNPreLoderId = WNPreLoderId) {
    wnShowPreLoader(show, _WNPreLoderId, _WNPreLoaderDelayStart, _WNPreLoaderTimeout);
}
function showPreLoaderDelay(show, _WNPreLoaderDelayStart = 0, _WNPreLoaderTimeout = WNPreLoaderTimeout, _WNPreLoderId = WNPreLoderId) {
    wnShowPreLoader(show, _WNPreLoderId, _WNPreLoaderDelayStart, _WNPreLoaderTimeout);
}
function wnShowPreLoader(show, _WNPreLoderId = WNPreLoderId, _WNPreLoaderDelayStart = WNPreLoaderDelayStart, _WNPreLoaderTimeout = WNPreLoaderTimeout) {
    if (show) {
        _PreLoaderWaitCount++;
        setTimeout(() => {
            if (_PreLoaderWaitCount > 0) {
                document.getElementById(_WNPreLoderId)?.classList.remove('hide');
            }
        }, _WNPreLoaderDelayStart);
        wnStopPreLoaderTimeout();
        if (_WNPreLoaderTimeout != 0) {
            _WNPreLoaderTimeoutTimer = setTimeout(() => {
                _PreLoaderWaitCount = 0;
                wnShowPreLoader(false, _WNPreLoderId, _WNPreLoaderDelayStart = WNPreLoaderDelayStart);
            }, _WNPreLoaderTimeout);
        }
    }
    else {
        _PreLoaderWaitCount--;
        if (_PreLoaderWaitCount <= 0) {
            document.getElementById(_WNPreLoderId)?.classList.add('hide');
            _PreLoaderWaitCount = 0;
            wnStopPreLoaderTimeout();
        }
    }
}
class WNDateShow {
    nameType = 'WNDateShow';
    element;
    format = '';
    today = false;
    date = new WNDate();
    _value;
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.init();
        }
    }
    init() {
        if (this.element.hasAttribute('calendar'))
            this.date.calendar = WNCalendarFunction(this.element.getAttribute('calendar'));
        if (this.element.hasAttribute('cultureinfo'))
            this.date.cultureInfo = WNCultureInfoFunction(this.element.getAttribute('cultureinfo'));
        this.format = this.date.cultureInfo.DateTimeFormat.fullDateTimePattern;
        if (this.element.hasAttribute('format'))
            this.format = this.element.getAttribute('format');
        if (this.element.hasAttribute('today'))
            this.today = WNparseBoolean(this.element.getAttribute('today'), false);
        if (this.today && this.format == this.date.cultureInfo.DateTimeFormat.fullDateTimePattern) {
            this.format = this.date.cultureInfo.DateTimeFormat.longDatePattern;
        }
        if (this.element.hasAttribute('interval')) {
            setInterval(() => {
                this.date.setDate(new Date());
            }, WNparseNumber(this.element.getAttribute('interval')));
        }
        if (this.element.localName == 'input')
            this.value = new Date(this.element.value);
        else
            this.value = new Date(this.element.innerText);
        this.date.dateChanged = () => { this.refresh(); };
    }
    get value() { return this._value; }
    set value(value) { this._value = value; this.date.setDate(this._value); this.refresh(); }
    refresh() {
        if (this.today)
            this.date.setDate(new Date());
        let disp = this.date.toString(this.format);
        if (this.element.localName == 'input') {
            this.element.value = disp;
        }
        else
            this.element.innerHTML = disp;
    }
}
var AccordionMode;
(function (AccordionMode) {
    AccordionMode["single"] = "single";
    AccordionMode["multiple"] = "multiple";
})(AccordionMode || (AccordionMode = {}));
var WNTableTextValue;
(function (WNTableTextValue) {
    WNTableTextValue["none"] = "";
    WNTableTextValue["text"] = "text";
    WNTableTextValue["value"] = "value";
})(WNTableTextValue || (WNTableTextValue = {}));
//# sourceMappingURL=WidgetNas.js.map